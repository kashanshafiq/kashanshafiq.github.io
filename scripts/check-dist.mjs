import { readdir, readFile, stat } from 'node:fs/promises'
import assert from 'node:assert/strict'
import path from 'node:path'

const root = path.resolve('dist')
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const lists = await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]))
  return lists.flat()
}
const files = await walk(root)
for (const name of ['index.html', 'favicon.svg', 'images/bridge-hero.png']) {
  assert.ok((await stat(path.join(root, name))).size > 0, `${name} must exist`)
}
const html = await readFile(path.join(root, 'index.html'), 'utf8')
const assetPaths = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]).filter(s => !/^(https?:|#|mailto:)/.test(s))
const configuredBase = process.env.VITE_BASE_PATH || '/'
for (const url of assetPaths) {
  assert.ok(url.startsWith(configuredBase), `Asset URL ${url} must respect ${configuredBase}`)
  const relative = decodeURIComponent(url.slice(configuredBase.length))
  assert.ok((await stat(path.join(root, relative))).size > 0, `Missing built asset ${url}`)
}
const unapprovedDocs = files.filter(f => {
  const rel = path.relative(root, f).replace(/\\/g, '/')
  // Allow approved project report PDFs and Excel workbooks in media/projects/
  if (rel.startsWith('media/projects/') && /\.(?:pdf|xlsx)$/i.test(f)) {
    return false
  }
  return /\.(?:pdf|xlsx|txt)$/i.test(f)
})
assert.ok(unapprovedDocs.length === 0, `Private source documents must not enter public build without approval: ${unapprovedDocs.join(', ')}`)
for (const f of files.filter(f => /\.(js|html|css)$/.test(f))) {
  const text = await readFile(f, 'utf8')
  assert.ok(!/37406-4150402-9|CIIT\/FA22-CVE-055|15 June 2004/.test(text), `Personal identifiers found in ${f}`)
}
console.log(`Checked ${files.length} built files: entry assets, base path and source-document exclusion passed.`)
