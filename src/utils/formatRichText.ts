/**
 * Utility to format highlights, summaries, and descriptions with verified hyperlinks.
 *
 * Explicit Rule:
 * As commanded by user, COMSATS is NEVER auto-linked here.
 * The COMSATS University link (https://cuiwah.edu.pk/) is reserved exclusively
 * for the Education section.
 */

export function formatRichText(text: string): string {
  if (!text) return ''

  let result = text

  // 1. SSRN Preprint DOI Link
  result = result.replace(
    /\bSSRN \(DOI:\s*10\.2139\/ssrn\.6884926\)/g,
    '<a href="https://doi.org/10.2139/ssrn.6884926" target="_blank" rel="noopener noreferrer" class="rich-mention-link" title="Read Research Preprint on SSRN">SSRN (DOI: 10.2139/ssrn.6884926) <span class="mention-arrow" aria-hidden="true">↗</span></a>'
  )

  result = result.replace(
    /\(DOI:\s*10\.2139\/ssrn\.6884926\)/g,
    '(<a href="https://doi.org/10.2139/ssrn.6884926" target="_blank" rel="noopener noreferrer" class="rich-mention-link" title="Read Research Preprint on SSRN">DOI: 10.2139/ssrn.6884926 <span class="mention-arrow" aria-hidden="true">↗</span></a>)'
  )

  // 2. Collaborators: Faizan Manshad & Haider Ali
  result = result.replace(
    /\bFaizan Manshad\b(?![^<]*>)/g,
    '<a href="https://www.linkedin.com/in/faizanmanshad/" target="_blank" rel="noopener noreferrer" class="rich-mention-link" title="Faizan Manshad on LinkedIn">Faizan Manshad <span class="mention-arrow" aria-hidden="true">↗</span></a>'
  )

  result = result.replace(
    /\bHaider Ali\b(?![^<]*>)/g,
    '<a href="https://www.linkedin.com/in/haider-ali-001780275/" target="_blank" rel="noopener noreferrer" class="rich-mention-link" title="Haider Ali on LinkedIn">Haider Ali <span class="mention-arrow" aria-hidden="true">↗</span></a>'
  )

  // 3. Aspire Leaders Program & Aspire Institute
  result = result.replace(
    /\bAspire Leaders Program\b(?![^<]*>)/g,
    '<a href="https://www.aspireleaders.org/" target="_blank" rel="noopener noreferrer" class="rich-mention-link" title="Aspire Leaders Program Official Website">Aspire Leaders Program <span class="mention-arrow" aria-hidden="true">↗</span></a>'
  )

  result = result.replace(
    /\bAspire Institute\b(?![^<]*>)/g,
    '<a href="https://www.aspireleaders.org/" target="_blank" rel="noopener noreferrer" class="rich-mention-link" title="Aspire Institute Official Website">Aspire Institute <span class="mention-arrow" aria-hidden="true">↗</span></a>'
  )

  return result
}

