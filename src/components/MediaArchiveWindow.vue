<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { MediaArchiveEntry, MediaItem } from '../data/mediaArchiveData'

const props = defineProps<{
  archive: MediaArchiveEntry | null
  fallbackTitle?: string
  fallbackSection?: string
  fallbackOrganization?: string
  fallbackPeriod?: string
  fallbackSubtitle?: string
  fallbackBadge?: string
  isProject?: boolean
}>()

const currentIndex = ref(0)
const isModalOpen = ref(false)
const tabsContainerRef = ref<HTMLElement | null>(null)

const items = computed<MediaItem[]>(() => {
  if (props.archive && props.archive.items && props.archive.items.length > 0) {
    return props.archive.items
  }
  return [
    {
      title: 'Verified Record',
      kind: 'card',
      caption: 'Official engineering record verified in Kashan Shafiq academic portfolio.',
    },
  ]
})

const currentItem = computed<MediaItem>(() => {
  return items.value[currentIndex.value] || items.value[0]
})

const canEnlarge = computed(() => {
  // All media windows throughout the website can be enlarged
  return true
})

function getYoutubeId(url?: string): string {
  if (!url) return ''
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)
  return m ? m[1] : ''
}

// Reset index when archive changes
watch(
  () => props.archive,
  () => {
    currentIndex.value = 0
  }
)

function scrollTabIntoView(idx: number) {
  nextTick(() => {
    if (!tabsContainerRef.value) return
    const buttons = tabsContainerRef.value.querySelectorAll('button')
    const btn = buttons[idx]
    if (btn && typeof btn.scrollIntoView === 'function') {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    }
  })
}

function nextItem() {
  if (currentIndex.value < items.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
  scrollTabIntoView(currentIndex.value)
}

function prevItem() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = items.value.length - 1
  }
  scrollTabIntoView(currentIndex.value)
}

function selectItem(idx: number) {
  currentIndex.value = idx
  scrollTabIntoView(idx)
}

function openModal() {
  if (canEnlarge.value) {
    isModalOpen.value = true
  }
}

function closeModal() {
  isModalOpen.value = false
}

// Keyboard shortcuts for modal and pager
function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
    return
  }
  if (items.value.length > 1) {
    if (e.key === 'ArrowRight') nextItem()
    if (e.key === 'ArrowLeft') prevItem()
  }
}

watch(isModalOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

// Expanded state for folder tree nodes
const expandedFolders = ref<Record<string, boolean>>({
  '01 - Foundation Semesters (Semesters 1 & 2)': true,
  '02 - Intermediate Semesters (Semesters 3 & 4)': true,
  '03 - Advanced Design Semesters (Semesters 5 & 6)': true,
  '04 - Capstone Semesters (Semesters 7 & 8)': true,
  '05 - Software & Computational Repositories': true,
})

function toggleFolder(name: string) {
  expandedFolders.value[name] = !expandedFolders.value[name]
}
</script>

<template>
  <div class="media-archive-card" :class="{ 'project-media-window': isProject }">
    <!-- Top Header Bar -->
    <div class="media-card-header">
      <div class="header-tag-group">
        <span class="doc-archive-tag">
          {{ currentItem.tag || (items.length > 1 ? 'MEDIA ARCHIVE' : 'DOCUMENT ARCHIVE') }}
        </span>
      </div>

      <div class="header-right-group">
        <!-- Multiple Media Counter & Navigation Arrows -->
        <div v-if="items.length > 1" class="media-pager">
          <span class="pager-counter">
            {{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(items.length).padStart(2, '0') }}
          </span>
          <button
            type="button"
            class="pager-btn"
            aria-label="Previous media"
            @click="prevItem"
          >
            ‹
          </button>
          <button
            type="button"
            class="pager-btn"
            aria-label="Next media"
            @click="nextItem"
          >
            ›
          </button>
        </div>

        <!-- Enlarge Action Button with Cross Feature for ALL media windows throughout website -->
        <button
          v-if="canEnlarge"
          type="button"
          class="doc-enlarge-btn"
          aria-label="Enlarge media preview"
          @click="openModal"
        >
          Click to enlarge <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>

    <!-- Media Tab Selector (when multiple items exist) -->
    <div
      v-if="items.length > 1"
      ref="tabsContainerRef"
      class="media-tabs-bar"
      role="tablist"
      aria-label="Media items list"
    >
      <button
        v-for="(it, idx) in items"
        :key="idx"
        type="button"
        role="tab"
        :aria-selected="idx === currentIndex"
        class="media-tab-pill"
        :class="{ active: idx === currentIndex }"
        @click="selectItem(idx)"
      >
        {{ it.title }}
      </button>
    </div>

    <!-- Main Media Display Stage (Upper Window) -->
    <div class="media-display-stage">
      <!-- 1. Real Image -->
      <div
        v-if="currentItem.kind === 'image'"
        class="image-frame"
        tabindex="0"
        role="button"
        :aria-label="`Enlarge ${currentItem.title}`"
        @click="openModal"
        @keydown.enter="openModal"
        @keydown.space.prevent="openModal"
      >
        <img
          :src="currentItem.src"
          :alt="currentItem.alt || currentItem.title"
          class="real-media-img"
          loading="lazy"
        />
        <div class="image-hover-overlay">
          <span class="hover-icon">⤢</span>
          <span class="hover-label">Click to enlarge</span>
        </div>
      </div>

      <!-- 2. PDF Document Preview in Upper Window -->
      <div v-else-if="currentItem.kind === 'pdf'" class="pdf-container">
        <div
          class="pdf-viewport"
          tabindex="0"
          role="button"
          :aria-label="`Enlarge ${currentItem.title}`"
          @click="openModal"
          @keydown.enter="openModal"
          @keydown.space.prevent="openModal"
        >
          <iframe
            :src="`${currentItem.src}#toolbar=0&navpanes=0&scrollbar=0`"
            class="embedded-pdf-frame"
            title="PDF Document Preview"
          ></iframe>
          <div class="pdf-hover-overlay">
            <span class="hover-icon">⤢</span>
            <span class="hover-label">Click to enlarge &amp; read document</span>
          </div>
        </div>

        <div class="pdf-action-bar">
          <div class="pdf-info">
            <span class="pdf-icon">📄</span>
            <span class="pdf-name">{{ currentItem.title }}</span>
          </div>
          <div class="pdf-actions-group">
            <button type="button" class="pdf-enlarge-btn" @click="openModal">
              Enlarge ⤢
            </button>
            <a
              v-if="currentItem.downloadUrl || currentItem.src"
              :href="currentItem.downloadUrl || currentItem.src"
              target="_blank"
              rel="noopener noreferrer"
              class="pdf-download-btn"
              download
            >
              {{ currentItem.downloadLabel || 'Download PDF ↗' }}
            </a>
          </div>
        </div>
      </div>

      <!-- 3. Direct MP4 Video Player -->
      <div v-else-if="currentItem.kind === 'video'" class="video-container">
        <div class="video-preview-wrapper">
          <video
            controls
            playsinline
            preload="metadata"
            class="html5-video-player"
            :src="currentItem.src"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="video-action-bar">
          <button type="button" class="video-enlarge-btn" @click="openModal">
            Enlarge video ⤢
          </button>
        </div>
      </div>

      <!-- 4. Video Link / YouTube / Facebook Video / External Video Player Card -->
      <div v-else-if="currentItem.kind === 'embed-video'" class="external-video-card">
        <div
          class="video-poster-frame"
          tabindex="0"
          role="button"
          :aria-label="`Enlarge ${currentItem.title}`"
          @click="openModal"
          @keydown.enter="openModal"
          @keydown.space.prevent="openModal"
        >
          <!-- Front of the video (poster image) -->
          <img
            v-if="currentItem.poster"
            :src="currentItem.poster"
            :alt="currentItem.alt || currentItem.title"
            class="video-poster-img"
          />
          <div v-else class="video-poster-fallback">
            <span class="video-fallback-icon">🎬</span>
            <span class="video-fallback-title">{{ currentItem.title }}</span>
          </div>

          <!-- Stylized Circular Play Button Overlay matching reference screenshot -->
          <div class="video-play-btn-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="play-svg" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <!-- Top Tag & Prompt on Video Front -->
          <div class="video-front-badges">
            <span class="video-front-tag">
              {{ currentItem.previewUrl?.includes('facebook') ? 'Facebook Video' : currentItem.previewUrl?.includes('youtube') || currentItem.previewUrl?.includes('youtu.be') ? 'YouTube Video' : currentItem.previewUrl?.includes('drive.google') ? 'Google Drive Video' : 'Video' }}
            </span>
            <span class="video-click-prompt">Click to enlarge ↗</span>
          </div>
        </div>

        <!-- Bottom action bar -->
        <div class="video-meta-action-bar">
          <a
            :href="currentItem.externalUrl || currentItem.previewUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="video-external-cta-btn"
          >
            <span class="cta-play-icon">▶</span>
            {{ currentItem.previewUrl?.includes('facebook') ? 'Watch on Facebook ↗' : currentItem.previewUrl?.includes('youtube') || currentItem.previewUrl?.includes('youtu.be') ? 'Watch on YouTube ↗' : currentItem.previewUrl?.includes('drive.google') ? 'Watch on Google Drive ↗' : 'Watch Video ↗' }}
          </a>
        </div>
      </div>

      <!-- 5. Excel Spreadsheets Suite in Upper Window -->
      <div v-else-if="currentItem.kind === 'excel'" class="excel-container">
        <div class="excel-header-banner">
          <div class="excel-banner-icon">📊</div>
          <div>
            <h4 class="excel-banner-title">{{ currentItem.title }}</h4>
            <p class="excel-banner-subtitle">
              Interactive calculation spreadsheets created in Microsoft Excel
            </p>
          </div>
        </div>

        <p v-if="currentItem.caption" class="excel-caption">
          {{ currentItem.caption }}
        </p>

        <!-- List of Workbooks with Download Links -->
        <div v-if="currentItem.excelFiles && currentItem.excelFiles.length" class="excel-files-grid">
          <div
            v-for="(f, i) in currentItem.excelFiles"
            :key="i"
            class="excel-file-card"
          >
            <div class="excel-file-icon">📈</div>
            <div class="excel-file-body">
              <span class="excel-file-name">{{ f.filename }}</span>
              <p class="excel-file-desc">{{ f.description }}</p>
            </div>
            <a
              :href="f.fileUrl"
              class="excel-download-btn"
              download
              :title="`Download ${f.filename}`"
            >
              Download .xlsx ↓
            </a>
          </div>
        </div>

        <div v-else-if="currentItem.downloadUrl" class="excel-single-action">
          <a
            :href="currentItem.downloadUrl"
            class="excel-download-btn-primary"
            download
          >
            {{ currentItem.downloadLabel || 'Download Excel Spreadsheet (.xlsx) ↓' }}
          </a>
        </div>
      </div>

      <!-- 6. Academic Resource Database (Interactive Folder Tree) -->
      <div v-else-if="currentItem.kind === 'folder-tree'" class="folder-tree-container">
        <div class="tree-header">
          <div class="tree-header-icon">📂</div>
          <div>
            <h4 class="tree-header-title">{{ currentItem.title }}</h4>
            <p class="tree-header-subtitle">Curated 4-Year Civil Engineering Curriculum Repository</p>
          </div>
        </div>

        <div class="tree-view-wrapper">
          <div
            v-for="folder in currentItem.tree"
            :key="folder.name"
            class="tree-folder-block"
          >
            <div
              class="tree-folder-row"
              @click="toggleFolder(folder.name)"
              tabindex="0"
              role="button"
            >
              <span class="tree-chevron">{{ expandedFolders[folder.name] ? '▼' : '▶' }}</span>
              <span class="tree-folder-icon">📁</span>
              <span class="tree-folder-name">{{ folder.name }}</span>
            </div>

            <div v-if="expandedFolders[folder.name]" class="tree-children-list">
              <div
                v-for="child in folder.children"
                :key="child.name"
                class="tree-file-row"
              >
                <span class="tree-file-icon">📄</span>
                <span class="tree-file-name">{{ child.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="tree-footer-action">
          <a
            v-if="currentItem.externalUrl"
            :href="currentItem.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="primary-drive-link-btn"
          >
            Open Master Google Drive Folder ↗
          </a>
        </div>
      </div>

      <!-- 7. External Link (e.g. LinkedIn Post) -->
      <div
        v-else-if="currentItem.kind === 'external-link'"
        class="external-link-card"
        tabindex="0"
        role="button"
        :aria-label="`Enlarge ${currentItem.title}`"
        @click="openModal"
        @keydown.enter="openModal"
        @keydown.space.prevent="openModal"
      >
        <div class="ext-card-icon">🔗</div>
        <h4 class="ext-card-title">{{ currentItem.title }}</h4>
        <p class="ext-card-desc">{{ currentItem.caption }}</p>
        <div class="ext-card-actions">
          <a
            :href="currentItem.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="ext-card-btn"
            @click.stop
          >
            View Public Post on LinkedIn ↗
          </a>
        </div>
      </div>

      <!-- 8. Fallback Credential Card -->
      <div v-else class="doc-sheet-container" @click="openModal">
        <div class="doc-sheet">
          <div class="doc-sheet-seal">
            <span class="seal-icon">✦</span>
          </div>
          <p class="doc-sheet-authority">{{ fallbackOrganization || 'COMSATS University Islamabad' }}</p>
          <h4 class="doc-sheet-title">{{ fallbackTitle || 'Verified Engineering Record' }}</h4>
          <p class="doc-sheet-type">{{ fallbackSubtitle || fallbackSection || 'Academic Archive' }}</p>
          <div class="doc-sheet-meta-box">
            <p><strong>Candidate:</strong> Kashan Shafiq</p>
            <p><strong>Section:</strong> {{ fallbackSection || 'Portfolio Archive' }}</p>
            <p><strong>Standing / Metric:</strong> {{ fallbackBadge || fallbackSubtitle || 'Verified Record' }}</p>
            <p><strong>Period / Date:</strong> {{ fallbackPeriod || '2022 – 2026' }}</p>
          </div>
          <div class="doc-sheet-signatures">
            <span>Verified Seal</span>
            <span>Academic Archive <span class="doc-expand-corner" aria-hidden="true">⤢</span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Media Footer Caption -->
    <div
      v-if="currentItem.caption && (currentItem.kind === 'image' || currentItem.kind === 'video')"
      class="media-card-footer"
    >
      <p class="media-caption-text">{{ currentItem.caption }}</p>
    </div>

    <!-- Fullscreen Enlarge Lightbox Modal Teleported to Body to Prevent Overlay Collisions -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="media-modal-overlay"
        role="dialog"
        aria-modal="true"
        @click.self="closeModal"
      >
        <div class="media-modal-box">
          <!-- Top bar -->
          <div class="media-modal-topbar">
            <div class="modal-title-group">
              <div v-if="items.length > 1" class="modal-topbar-nav">
                <button
                  type="button"
                  class="modal-nav-arrow-btn"
                  aria-label="Previous item"
                  title="Previous (‹)"
                  @click="prevItem"
                >
                  ‹
                </button>
                <span class="modal-counter">
                  {{ currentIndex + 1 }} / {{ items.length }}
                </span>
                <button
                  type="button"
                  class="modal-nav-arrow-btn"
                  aria-label="Next item"
                  title="Next (›)"
                  @click="nextItem"
                >
                  ›
                </button>
              </div>
              <span class="modal-tag-badge">
                {{ currentItem.tag || 'ARCHIVE RECORD' }}
              </span>
              <h3 class="modal-heading">{{ currentItem.title }}</h3>
            </div>
            <div class="modal-actions">
              <a
                v-if="currentItem.src || currentItem.previewUrl || currentItem.downloadUrl || currentItem.externalUrl"
                :href="currentItem.src || currentItem.previewUrl || currentItem.downloadUrl || currentItem.externalUrl"
                target="_blank"
                class="modal-raw-btn"
                title="Open full resolution in new tab"
              >
                Open original ↗
              </a>
              <button
                type="button"
                class="modal-close-icon"
                aria-label="Close fullscreen view"
                title="Close (Esc)"
                @click="closeModal"
              >
                ✕
              </button>
            </div>
          </div>

          <!-- Modal Body (Renders full image, video, scrollable PDF, or Excel suite) -->
          <div class="media-modal-body">
            <!-- 1. Full resolution image -->
            <img
              v-if="currentItem.kind === 'image'"
              :src="currentItem.src"
              :alt="currentItem.alt || currentItem.title"
              class="modal-full-img"
            />

            <!-- 2. Full size native HTML5 video -->
            <video
              v-else-if="currentItem.kind === 'video'"
              controls
              autoplay
              playsinline
              class="modal-full-video"
              :src="currentItem.src"
            >
              Your browser does not support the video tag.
            </video>

            <!-- 3. Large interactive scrollable PDF (with full zoom & scrolling) -->
            <div v-else-if="currentItem.kind === 'pdf'" class="modal-full-pdf-wrap">
              <iframe
                :src="`${currentItem.src}#toolbar=1&navpanes=1&scrollbar=0`"
                class="modal-full-pdf"
                title="Enlarged PDF View"
              ></iframe>
            </div>

            <!-- 4. Enlarged Excel Workbooks Suite with Direct Download Links -->
            <div v-else-if="currentItem.kind === 'excel'" class="modal-excel-suite-wrap">
              <div class="modal-excel-banner">
                <div class="modal-excel-banner-icon">📊</div>
                <div class="modal-excel-banner-text">
                  <span class="modal-excel-tag">SPREADSHEET CALCULATION SUITE</span>
                  <h3 class="modal-excel-heading">{{ currentItem.title }}</h3>
                  <p class="modal-excel-sub">
                    {{ currentItem.caption || 'Interactive calculation workbooks created in Microsoft Excel (.xlsx)' }}
                  </p>
                </div>
              </div>

              <!-- List of workbooks with download buttons -->
              <div v-if="currentItem.excelFiles && currentItem.excelFiles.length" class="modal-excel-grid">
                <div
                  v-for="(f, i) in currentItem.excelFiles"
                  :key="i"
                  class="modal-excel-file-card"
                >
                  <div class="modal-excel-file-badge">📈</div>
                  <div class="modal-excel-file-info">
                    <span class="modal-excel-filename">{{ f.filename }}</span>
                    <p class="modal-excel-filedesc">{{ f.description }}</p>
                  </div>
                  <a
                    :href="f.fileUrl"
                    class="modal-excel-download-btn"
                    download
                    :title="`Download ${f.filename}`"
                  >
                    <span class="btn-icon">↓</span> Download .xlsx
                  </a>
                </div>
              </div>

              <div v-else-if="currentItem.downloadUrl" class="modal-excel-single-action">
                <a
                  :href="currentItem.downloadUrl"
                  class="modal-excel-download-btn-primary"
                  download
                >
                  <span class="btn-icon">↓</span> {{ currentItem.downloadLabel || 'Download Excel Spreadsheet (.xlsx)' }}
                </a>
              </div>
            </div>

            <!-- 5. Enlarged External Video / YouTube Player / Direct Platform Watcher -->
            <div v-else-if="currentItem.kind === 'embed-video'" class="modal-embed-video-wrap">
              <div
                v-if="currentItem.previewUrl?.includes('youtube') || currentItem.previewUrl?.includes('youtu.be')"
                class="modal-youtube-container"
              >
                <iframe
                  :src="`https://www.youtube-nocookie.com/embed/${getYoutubeId(currentItem.previewUrl)}?autoplay=1`"
                  class="modal-full-youtube"
                  title="YouTube Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div v-else class="modal-video-poster-box">
                <img
                  v-if="currentItem.poster"
                  :src="currentItem.poster"
                  :alt="currentItem.alt || currentItem.title"
                  class="modal-full-img"
                />
                <div class="modal-video-overlay-cta">
                  <a
                    :href="currentItem.externalUrl || currentItem.previewUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="modal-video-direct-btn"
                  >
                    <span class="btn-play-triangle">▶</span>
                    <span>{{ currentItem.previewUrl?.includes('facebook') ? 'Watch Video on Facebook ↗' : currentItem.previewUrl?.includes('drive.google') ? 'Watch Video on Google Drive ↗' : 'Watch Video ↗' }}</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- 6. Enlarged Academic Folder Tree (Curriculum Archive) -->
            <div v-else-if="currentItem.kind === 'folder-tree'" class="modal-folder-tree-wrap">
              <div class="modal-tree-banner">
                <div class="modal-tree-banner-icon">📂</div>
                <div>
                  <span class="modal-tree-tag">CURATED ACADEMIC DATABASE</span>
                  <h3 class="modal-tree-title">{{ currentItem.title }}</h3>
                  <p class="modal-tree-desc">{{ currentItem.caption }}</p>
                </div>
              </div>
              <div class="modal-tree-scroll-area">
                <div
                  v-for="folder in currentItem.tree"
                  :key="folder.name"
                  class="modal-tree-folder"
                >
                  <div class="modal-tree-folder-head" @click="toggleFolder(folder.name)">
                    <span class="tree-chevron">{{ expandedFolders[folder.name] ? '▼' : '▶' }}</span>
                    <span>📁</span>
                    <strong>{{ folder.name }}</strong>
                  </div>
                  <div v-if="expandedFolders[folder.name]" class="modal-tree-children">
                    <div
                      v-for="ch in folder.children"
                      :key="ch.name"
                      class="modal-tree-file-row"
                    >
                      <span>📄</span>
                      <span>{{ ch.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="currentItem.externalUrl" class="modal-tree-footer-bar">
                <a
                  :href="currentItem.externalUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-tree-primary-btn"
                >
                  Open Master Google Drive Archive ↗
                </a>
              </div>
            </div>

            <!-- 7. Enlarged External Announcement Link -->
            <div v-else-if="currentItem.kind === 'external-link'" class="modal-ext-wrap">
              <div class="modal-ext-card">
                <div class="modal-ext-icon">🔗</div>
                <span class="modal-ext-badge">{{ currentItem.tag || 'EXTERNAL ARCHIVE LINK' }}</span>
                <h3 class="modal-ext-title">{{ currentItem.title }}</h3>
                <p class="modal-ext-desc">{{ currentItem.caption }}</p>
                <a
                  v-if="currentItem.externalUrl"
                  :href="currentItem.externalUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-ext-btn"
                >
                  <span>View Public Post on LinkedIn</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <!-- 8. Enlarged Fallback Document Card -->
            <div v-else class="modal-doc-fallback">
              <div class="modal-doc-sheet">
                <div class="modal-sheet-seal">✦</div>
                <p class="modal-sheet-authority">{{ fallbackOrganization || 'COMSATS University Islamabad' }}</p>
                <h2 class="modal-sheet-title">{{ fallbackTitle || 'Verified Engineering Record' }}</h2>
                <p class="modal-sheet-type">{{ fallbackSubtitle || fallbackSection || 'Academic Archive' }}</p>
                <div class="modal-sheet-meta-box">
                  <p><strong>Candidate:</strong> Kashan Shafiq</p>
                  <p><strong>Section:</strong> {{ fallbackSection || 'Portfolio Archive' }}</p>
                  <p><strong>Standing / Metric:</strong> {{ fallbackBadge || fallbackSubtitle || 'Verified Record' }}</p>
                  <p><strong>Period / Date:</strong> {{ fallbackPeriod || '2022 – 2026' }}</p>
                </div>
                <div class="modal-sheet-signatures">
                  <span>Verified Seal</span>
                  <span>Academic Archive</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Bottom Navigation & Caption Bar -->
          <div class="modal-footer-bar">
            <div v-if="items.length > 1" class="modal-nav-row">
              <button type="button" class="modal-arrow-btn" @click="prevItem">
                ‹ Previous
              </button>
              <span class="modal-item-title">{{ currentItem.title }}</span>
              <button type="button" class="modal-arrow-btn" @click="nextItem">
                Next ›
              </button>
            </div>
            <p v-if="currentItem.caption" class="modal-caption-text">
              {{ currentItem.caption }}
            </p>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* Card Container: Preserves 50/50 two-column layout & signature red top border matching added screenshot */
.media-archive-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-top: 2px solid var(--accent);
  border-radius: var(--radius-card, 6px);
  padding: 22px;
  box-shadow: var(--shadow-card-dark, 0 12px 32px rgba(0, 0, 0, 0.08));
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Header bar: Clean unboxed row matching the screenshot */
.media-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  background: transparent;
  border: none;
  padding: 0;
  gap: 8px;
}

.header-tag-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.doc-archive-tag {
  font-family: var(--font-label);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--accent);
  text-transform: uppercase;
  white-space: nowrap;
}

.header-right-group {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.media-pager {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 2px 6px;
}

.pager-counter {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--muted);
  margin-right: 2px;
}

.pager-btn {
  background: transparent;
  border: none;
  font-size: 1.05rem;
  line-height: 1;
  color: var(--text);
  cursor: pointer;
  padding: 1px 4px;
  border-radius: 2px;
  transition: background 0.15s, color 0.15s;
}

.pager-btn:hover {
  background: var(--surface-hover);
  color: var(--accent);
}

.doc-enlarge-btn {
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--muted);
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  transition: color 0.16s ease;
  white-space: nowrap;
  text-decoration: none;
}

.doc-enlarge-btn:hover {
  color: var(--accent);
}

/* Horizontal Tabs Bar: clean below header */
.media-tabs-bar {
  display: flex;
  gap: 6px;
  padding: 0 0 12px 0;
  background: transparent;
  border-bottom: 1px solid var(--border);
  margin-bottom: 14px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
}

.media-tab-pill {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 3px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s ease;
}

.media-tab-pill:hover {
  color: var(--text);
  border-color: var(--accent);
}

.media-tab-pill.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  font-weight: 600;
}

/* Display Stage: spacious container filling the 1fr column */
.media-display-stage {
  padding: 0;
  background: transparent;
  width: 100%;
  height: 380px;
  min-height: 380px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* 1. Image Frame */
.image-frame {
  width: 100%;
  height: 380px;
  max-height: 380px;
  position: relative;
  cursor: zoom-in;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.real-media-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.image-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.image-frame:hover .image-hover-overlay,
.image-frame:focus-visible .image-hover-overlay {
  opacity: 1;
}

.hover-icon {
  font-size: 1.8rem;
}

.hover-label {
  font-family: var(--mono);
  font-size: 0.76rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* 2. PDF Container in Upper Window */
.pdf-container {
  width: 100%;
  height: 380px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  background: #ffffff;
}

.pdf-viewport {
  flex: 1;
  position: relative;
  background: #525659;
  cursor: zoom-in;
}

.embedded-pdf-frame {
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
}

.pdf-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.pdf-viewport:hover .pdf-hover-overlay,
.pdf-viewport:focus-visible .pdf-hover-overlay {
  opacity: 1;
}

.pdf-action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--surface-raised);
  border-top: 1px solid var(--border);
  gap: 8px;
}

.pdf-info {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.pdf-icon {
  font-size: 1.1rem;
}

.pdf-name {
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pdf-actions-group {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.pdf-enlarge-btn {
  font-family: var(--mono);
  font-size: 0.72rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.pdf-enlarge-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.pdf-download-btn {
  font-family: var(--mono);
  font-size: 0.74rem;
  font-weight: 600;
  background: var(--accent);
  color: #fff;
  padding: 4px 10px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.15s ease;
}

.pdf-download-btn:hover {
  background: var(--accent-hover);
}

/* 3. HTML5 Video Player */
.video-container {
  width: 100%;
  height: 380px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #000000;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.video-preview-wrapper {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-radius: 3px;
  overflow: hidden;
}

.html5-video-player {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
  outline: none;
}

.video-action-bar {
  display: flex;
  justify-content: flex-end;
  padding-top: 6px;
}

.video-enlarge-btn {
  font-family: var(--mono);
  font-size: 0.72rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--muted);
  padding: 3px 8px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.video-enlarge-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* 4. External Video Player Card (Facebook / YouTube / Google Drive) */
.external-video-card {
  width: 100%;
  height: 380px;
  min-height: 380px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  background: #000000;
}

.video-poster-anchor {
  flex: 1;
  display: block;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.video-poster-frame {
  width: 100%;
  flex: 1;
  min-height: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  overflow: hidden;
  cursor: zoom-in;
}

.video-poster-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  transition: transform 0.25s ease, filter 0.25s ease;
}

.video-poster-frame:hover .video-poster-img {
  transform: scale(1.02);
  filter: brightness(1.06);
}

.video-poster-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  text-align: center;
  color: #fff;
}

.video-fallback-icon {
  font-size: 2.2rem;
}

.video-fallback-title {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: #cbd5e1;
}

.video-play-btn-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(220, 38, 38, 0.55);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
  z-index: 2;
  cursor: pointer;
}

.video-poster-anchor:hover .video-play-btn-circle {
  transform: translate(-50%, -50%) scale(1.14);
  box-shadow: 0 8px 30px rgba(220, 38, 38, 0.75);
}

.play-svg {
  width: 24px;
  height: 24px;
  margin-left: 3px;
}

.video-front-badges {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  pointer-events: none;
}

.video-front-tag {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 700;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
}

.video-click-prompt {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(220, 38, 38, 0.85);
  padding: 3px 8px;
  border-radius: 3px;
}

.video-meta-action-bar {
  padding: 8px 12px;
  background: #0f172a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: center;
}

.video-external-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 0.76rem;
  font-weight: 600;
  color: #ffffff;
  background: #1877f2;
  padding: 6px 14px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.15s ease;
}

.video-external-cta-btn:hover {
  background: #166fe5;
}

.cta-play-icon {
  font-size: 0.7rem;
}

/* 5. Excel Workbooks in Upper Window */
.excel-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding-right: 4px;
}

.excel-header-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: #f0f7f3;
  border: 1px solid #c9e4d4;
  border-radius: 4px;
}

.excel-banner-icon {
  font-size: 1.5rem;
}

.excel-banner-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: #1a633a;
  margin: 0;
}

.excel-banner-subtitle {
  font-size: 0.74rem;
  color: #2b774c;
  margin: 2px 0 0 0;
}

.excel-caption {
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--muted);
  margin: 0;
}

.excel-files-grid {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.excel-file-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 3px;
  transition: border-color 0.15s ease;
}

.excel-file-card:hover {
  border-color: #2b774c;
}

.excel-file-icon {
  font-size: 1.1rem;
}

.excel-file-body {
  flex: 1;
  min-width: 0;
}

.excel-file-name {
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text);
  display: block;
}

.excel-file-desc {
  font-size: 0.74rem;
  color: var(--muted);
  margin: 1px 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.excel-download-btn {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 600;
  background: #1e7145;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease;
}

.excel-download-btn:hover {
  background: #145532;
}

.excel-single-action {
  text-align: center;
  margin-top: 6px;
}

.excel-download-btn-primary {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.8rem;
  font-weight: 600;
  background: #1e7145;
  color: #fff;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
}

/* 6. Folder Tree (Academic Resource Database) */
.folder-tree-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tree-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: #f4f6fa;
  border: 1px solid #d8e0f0;
  border-radius: 4px;
}

.tree-header-icon {
  font-size: 1.3rem;
}

.tree-header-title {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.tree-header-subtitle {
  font-size: 0.72rem;
  color: var(--muted);
  margin: 1px 0 0 0;
}

.tree-view-wrapper {
  border: 1px solid var(--border);
  border-radius: 4px;
  background: #fff;
  padding: 6px 10px;
  flex: 1;
  overflow-y: auto;
}

.tree-folder-block {
  margin-bottom: 4px;
}

.tree-folder-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 6px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  background: #fafafa;
  transition: background 0.12s;
}

.tree-folder-row:hover {
  background: #f0f0f0;
}

.tree-chevron {
  font-size: 0.6rem;
  color: var(--muted);
  width: 10px;
}

.tree-folder-name {
  font-family: var(--mono);
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--text);
}

.tree-children-list {
  padding-left: 20px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.tree-file-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 4px;
  font-size: 0.74rem;
  color: var(--muted);
}

.tree-file-name {
  font-family: var(--mono);
  font-size: 0.72rem;
}

.tree-footer-action {
  text-align: center;
}

.primary-drive-link-btn {
  display: block;
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  background: var(--accent);
  color: #fff;
  padding: 8px 14px;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
  transition: background 0.15s ease;
}

.primary-drive-link-btn:hover {
  background: var(--accent-hover);
}

/* 7. External Link Card */
.external-link-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 4px;
}

.ext-card-icon {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.ext-card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 6px 0;
}

.ext-card-desc {
  font-size: 0.8rem;
  color: var(--muted);
  margin: 0 auto 16px auto;
  line-height: 1.45;
}

.ext-card-btn {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  background: #0077b5;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.15s ease;
}

.ext-card-btn:hover {
  background: #005582;
}

/* 8. Fallback Document Sheet: Exact match to uploaded screenshot */
.doc-sheet-container {
  width: 100%;
  cursor: pointer;
  perspective: 800px;
}

.doc-sheet {
  background: #f8fafc;
  color: #0f172a;
  border-radius: 4px;
  padding: 32px 28px;
  min-height: 290px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 160ms ease, box-shadow 160ms ease;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.doc-sheet:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
}

.doc-sheet-seal {
  font-size: 1.6rem;
  color: #475569;
  text-align: center;
  margin-bottom: 8px;
}

.doc-sheet-authority {
  font-family: var(--mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  color: #475569;
  margin: 0 0 12px 0;
}

.doc-sheet-title {
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;
  color: #0f172a;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.doc-sheet-type {
  font-size: 0.8rem;
  text-align: center;
  color: #64748b;
  margin: 0 0 20px 0;
}

.doc-sheet-meta-box {
  background: #f1f5f9;
  border-left: 3px solid #0f172a;
  padding: 12px 14px;
  border-radius: 2px;
  font-size: 0.78rem;
  line-height: 1.5;
  color: #334155;
  margin-bottom: 16px;
  text-align: left;
}

.doc-sheet-meta-box p {
  margin: 2px 0;
  color: #334155;
}

.doc-sheet-signatures {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dashed #cbd5e1;
  padding-top: 10px;
  font-family: var(--mono);
  font-size: 0.68rem;
  color: #64748b;
}

.doc-expand-corner {
  font-size: 0.95rem;
  color: #94a3b8;
  margin-left: 4px;
}

/* Card footer caption */
.media-card-footer {
  padding: 9px 14px;
  background: var(--surface-raised);
  border-top: 1px solid var(--border);
  text-align: center;
}

.media-caption-text {
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.45;
  margin: 0;
}

/* ==========================================================================
   FULLSCREEN ENLARGE LIGHTBOX MODAL
   Enlarges images, videos, scrollable PDFs, and Excel suites
   ========================================================================== */
.media-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.94);
  backdrop-filter: blur(10px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  animation: modalFadeIn 0.18s ease-out;
}

@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.media-modal-box {
  background: #111215;
  border: 1px solid #292a30;
  border-radius: 6px;
  max-width: min(1200px, 94vw);
  width: min(1200px, 94vw);
  min-width: min(520px, 94vw);
  height: 92vh;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85);
  animation: modalScaleUp 0.18s ease-out;
  position: relative;
  z-index: 100001;
}

@keyframes modalScaleUp {
  from { transform: scale(0.96); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.media-modal-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
  min-height: 56px;
  background: #14161c;
  border-bottom: 1px solid #282c35;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
  gap: 14px;
  flex-shrink: 0;
  position: relative;
  z-index: 20;
}

.modal-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 1;
}

.modal-topbar-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.modal-nav-arrow-btn {
  background: #23252d;
  border: 1px solid #383a45;
  color: #ffffff;
  width: 26px;
  height: 26px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.15s ease;
}

.modal-nav-arrow-btn:hover {
  background: var(--accent, #d8151b);
  border-color: var(--accent, #d8151b);
}

.modal-counter {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: #ffffff;
  background: rgba(216, 21, 27, 0.28);
  border: 1px solid rgba(216, 21, 27, 0.5);
  padding: 3px 8px;
  border-radius: 3px;
  white-space: nowrap;
  font-weight: 600;
}

.modal-tag-badge {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: #f87171;
  background: rgba(220, 38, 38, 0.16);
  border: 1px solid rgba(220, 38, 38, 0.35);
  padding: 3px 8px;
  border-radius: 3px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
}

.modal-heading {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.modal-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.modal-raw-btn {
  font-family: var(--mono);
  font-size: 0.76rem;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.modal-raw-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.45);
  color: #ffffff;
}

.modal-close-icon {
  background: #dc2626;
  border: 1px solid #ef4444;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(220, 38, 38, 0.45);
  transition: background 0.16s ease, border-color 0.16s ease, transform 0.12s ease;
  flex-shrink: 0;
}

.modal-close-icon:hover {
  background: #b91c1c;
  border-color: #b91c1c;
  color: #ffffff;
  transform: scale(1.08);
}

/* Modal Body */
.media-modal-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  background: #08090b;
  position: relative;
}

/* Full resolution image */
.modal-full-img {
  max-width: 90vw;
  max-height: 76vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 3px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
  display: block;
  margin: 0 auto;
}

/* Full size video player */
.modal-full-video {
  max-width: 90vw;
  max-height: 76vh;
  width: min(960px, 90vw);
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
}

/* Enlarged External / YouTube Video */
.modal-embed-video-wrap {
  width: min(1040px, 92vw);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-youtube-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.8);
}

.modal-full-youtube {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.modal-video-poster-box {
  position: relative;
  display: inline-block;
  max-width: 90vw;
  max-height: 76vh;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.8);
}

.modal-video-overlay-cta {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(2px);
}

.modal-video-direct-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #ea580c;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 999px;
  font-family: var(--sans);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 6px 24px rgba(234, 88, 12, 0.65);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, background 0.2s ease;
}

.modal-video-direct-btn:hover {
  transform: scale(1.05);
  background: #f97316;
  box-shadow: 0 8px 32px rgba(234, 88, 12, 0.85);
  color: #ffffff;
}

.btn-play-triangle {
  font-size: 1.15rem;
  line-height: 1;
}

/* Large Interactive Scrollable PDF */
.modal-full-pdf-wrap {
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1;
  align-self: stretch;
  border-radius: 4px;
  overflow: hidden;
  background: #525659;
  border: 1px solid #2d3139;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.modal-full-pdf {
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1;
  border: none;
  display: block;
}

/* Enlarged Excel Calculation Suite with Direct Download Links */
.modal-excel-suite-wrap {
  width: min(920px, 90vw);
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding: 10px;
}

.modal-excel-banner {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: #0d2818;
  border: 1px solid #1e5a38;
  border-radius: 6px;
}

.modal-excel-banner-icon {
  font-size: 2.2rem;
}

.modal-excel-banner-text {
  min-width: 0;
}

.modal-excel-tag {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 700;
  color: #4ade80;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.modal-excel-heading {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin: 2px 0 4px 0;
}

.modal-excel-sub {
  font-size: 0.85rem;
  color: #a7f3d0;
  margin: 0;
}

.modal-excel-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-excel-file-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 18px;
  background: #181b22;
  border: 1px solid #282f3d;
  border-radius: 6px;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.modal-excel-file-card:hover {
  border-color: #22c55e;
  background: #1c222c;
}

.modal-excel-file-badge {
  font-size: 1.5rem;
}

.modal-excel-file-info {
  flex: 1;
  min-width: 0;
}

.modal-excel-filename {
  font-family: var(--mono);
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  display: block;
}

.modal-excel-filedesc {
  font-size: 0.8rem;
  color: #94a3b8;
  margin: 3px 0 0 0;
  line-height: 1.45;
}

.modal-excel-download-btn {
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  background: #16a34a;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: background 0.15s ease;
}

.modal-excel-download-btn:hover {
  background: #15803d;
}

.modal-excel-single-action {
  text-align: center;
  padding: 10px 0;
}

.modal-excel-download-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.88rem;
  font-weight: 600;
  background: #16a34a;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.15s ease;
}

/* Enlarged Fallback Sheet */
.modal-doc-fallback {
  padding: 20px;
}

.modal-doc-sheet {
  background: #ffffff;
  color: #0f172a;
  border-radius: 4px;
  padding: 36px 32px;
  max-width: 540px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.modal-sheet-seal {
  font-size: 1.8rem;
  color: var(--accent);
  margin-bottom: 8px;
}

.modal-sheet-authority {
  font-family: var(--mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #475569;
  margin: 0 0 10px 0;
}

.modal-sheet-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
}

.modal-sheet-type {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: #0284c7;
  font-weight: 600;
  margin: 0 0 20px 0;
}

.modal-sheet-meta-box {
  background: #f1f5f9;
  border-left: 3px solid var(--accent);
  padding: 14px 16px;
  border-radius: 3px;
  text-align: left;
  font-size: 0.82rem;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 20px;
}

.modal-sheet-signatures {
  display: flex;
  justify-content: space-between;
  border-top: 1px dashed #cbd5e1;
  padding-top: 12px;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: #64748b;
}

/* Modal Footer Bar */
.modal-footer-bar {
  padding: 12px 18px;
  background: #18191e;
  border-top: 1px solid #292a30;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal-nav-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.modal-arrow-btn {
  font-family: var(--mono);
  font-size: 0.78rem;
  background: #25262c;
  color: #fff;
  border: 1px solid #3d3e48;
  padding: 5px 14px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.modal-arrow-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
}

.modal-item-title {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: #cbd5e1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-caption-text {
  font-size: 0.78rem;
  color: #94a3b8;
  line-height: 1.45;
  margin: 0;
  text-align: center;
}

/* Modal Folder Tree & External Link Styles */
.modal-folder-tree-wrap {
  width: min(800px, 90vw);
  max-height: 76vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
}

.modal-tree-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
}

.modal-tree-banner-icon {
  font-size: 2rem;
}

.modal-tree-tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.modal-tree-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin: 2px 0 4px 0;
}

.modal-tree-desc {
  font-size: 0.82rem;
  color: #475569;
  margin: 0;
  line-height: 1.45;
}

.modal-tree-scroll-area {
  padding: 16px 20px;
  overflow-y: auto;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal-tree-folder {
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.modal-tree-folder-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f8fafc;
  cursor: pointer;
  user-select: none;
  font-size: 0.88rem;
  color: #1e293b;
}

.modal-tree-folder-head:hover {
  background: #e2e8f0;
}

.modal-tree-children {
  padding: 6px 14px 10px 32px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.modal-tree-file-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: #475569;
}

.modal-tree-footer-bar {
  padding: 12px 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: center;
}

.modal-tree-primary-btn {
  font-family: var(--mono);
  font-size: 0.82rem;
  font-weight: 600;
  background: var(--accent);
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.15s ease;
}

.modal-tree-primary-btn:hover {
  background: var(--accent-hover);
}

.modal-ext-wrap {
  width: min(600px, 90vw);
  display: flex;
  justify-content: center;
}

.modal-ext-card {
  width: 100%;
  padding: 32px 24px;
  background: #ffffff;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
}

.modal-ext-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.modal-ext-badge {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}

.modal-ext-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 10px 0;
}

.modal-ext-desc {
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.5;
  margin: 0 0 24px 0;
}

.modal-ext-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 600;
  background: #0077b5;
  color: #ffffff;
  padding: 10px 22px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.16s ease;
}

.modal-ext-btn:hover {
  background: #005582;
}

/* ==========================================================================
   SCROLLBAR REMOVAL: Remove sliding bar while preserving full scrolling
   ========================================================================== */
.media-archive-card,
.media-archive-card *,
.media-modal-box,
.media-modal-box *,
.media-modal-overlay {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

.media-archive-card::-webkit-scrollbar,
.media-archive-card *::-webkit-scrollbar,
.media-modal-box::-webkit-scrollbar,
.media-modal-box *::-webkit-scrollbar,
.media-modal-overlay::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/* ==========================================================================
   PROJECTS SECTION: Increased Depth for Project Subpages
   Exclusively deepens the media window on Projects subpages so technical
   PDF design reports, drawings, and estimates are clearly visible.
   ========================================================================== */
.project-media-window .media-display-stage,
.project-media-window .pdf-container,
.project-media-window .image-frame,
.project-media-window .video-container,
.project-media-window .external-video-card,
.project-media-window .excel-container {
  height: 580px;
  min-height: 580px;
  max-height: 580px;
}

.project-media-window .doc-sheet {
  min-height: 480px;
}

@media (max-width: 1200px) {
  .project-media-window .media-display-stage,
  .project-media-window .pdf-container,
  .project-media-window .image-frame,
  .project-media-window .video-container,
  .project-media-window .external-video-card,
  .project-media-window .excel-container {
    height: 520px;
    min-height: 520px;
    max-height: 520px;
  }
}

@media (max-width: 768px) {
  .media-display-stage {
    height: 270px;
    min-height: 270px;
    max-height: 270px;
  }
  .project-media-window .media-display-stage,
  .project-media-window .pdf-container,
  .project-media-window .image-frame,
  .project-media-window .video-container,
  .project-media-window .external-video-card,
  .project-media-window .excel-container {
    height: 420px;
    min-height: 420px;
    max-height: 420px;
  }
  .media-modal-box {
    min-width: 94vw;
  }
}
</style>
