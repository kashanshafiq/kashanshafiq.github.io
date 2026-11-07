<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { feaPalette } from '../three/feaPalette'
import { createBridgeViewer, type BridgeViewer } from '../three/bridgeViewer'

const bridgeUrl = `${import.meta.env.BASE_URL}images/bridge-hero.png`
const stage = ref<HTMLDivElement>()
const ready = ref(false)
const failed = ref(false)
const mode = ref<'architectural' | 'fea'>('architectural')
const elevation = ref(false)
const legendCollapsed = ref(false)
const feaCollapsed = ref(false)
let viewer: BridgeViewer | undefined
let disposed = false

const archComponents = [
  { label: 'Structural Members', color: '#D8151B' },
  { label: 'Structural Connection', color: '#162d4a' },
  { label: 'Roadway Surface', color: '#0a0a0a' },
  { label: 'Abutment', color: '#f0f3f2' },
]

function setView(value: boolean) {
  elevation.value = value
  viewer?.elevation(value)
}

function setMode(newMode: 'architectural' | 'fea') {
  mode.value = newMode
  viewer?.fea(newMode === 'fea')
}

function reset() {
  elevation.value = false
  viewer?.reset()
}

onMounted(() => {
  try {
    if (disposed || !stage.value) return
    viewer = createBridgeViewer(
      stage.value,
      () => { elevation.value = false },
      () => { ready.value = false; failed.value = true },
      reset
    )
    ready.value = true
  } catch {
    failed.value = true
  }
})

onBeforeUnmount(() => {
  disposed = true
  viewer?.dispose()
})
</script>

<template>
  <figure class="bridge-hero" aria-label="Interactive bridge study">
    <div class="bridge-stage interactive-bridge">
      <div ref="stage" class="bridge-canvas" />
      <img
        v-if="failed"
        :src="bridgeUrl"
        alt="Arched steel through-truss bridge with overhead cross-bracing"
        width="1536"
        height="1024"
      />

      <!-- Architectural Model Legend (Top-Right) -->
      <div
        v-if="ready && mode === 'architectural'"
        class="arch-legend"
        :class="{ isCollapsed: legendCollapsed }"
        aria-label="Architectural structural components legend (click to toggle)"
        role="button"
        tabindex="0"
        @click="legendCollapsed = !legendCollapsed"
        @keydown.enter="legendCollapsed = !legendCollapsed"
      >
        <div class="legend-header">
          <span class="legend-title">COMPONENTS</span>
          <span class="legend-toggle-icon" aria-hidden="true">{{ legendCollapsed ? '+' : '−' }}</span>
        </div>
        <div v-show="!legendCollapsed" class="arch-legend-list">
          <div v-for="item in archComponents" :key="item.label" class="arch-legend-item">
            <span class="color-swatch" :style="{ backgroundColor: item.color }" />
            <span class="arch-legend-label">{{ item.label }}</span>
          </div>
        </div>
      </div>

      <!-- FEA Simulation Legend (Top-Right) -->
      <div
        v-if="ready && mode === 'fea'"
        class="fea-legend"
        :class="{ isCollapsed: feaCollapsed }"
        aria-label="Illustrative contour scale: high red to low blue (click to toggle)"
        role="button"
        tabindex="0"
        @click="feaCollapsed = !feaCollapsed"
        @keydown.enter="feaCollapsed = !feaCollapsed"
      >
        <div class="legend-header">
          <span class="fea-legend-title">RESPONSE</span>
          <span class="legend-toggle-icon" aria-hidden="true">{{ feaCollapsed ? '+' : '−' }}</span>
        </div>
        <div v-show="!feaCollapsed" class="fea-content">
          <div class="fea-scale">
            <div class="fea-swatches">
              <i
                v-for="color in [...feaPalette].reverse()"
                :key="color"
                :style="{ backgroundColor: color }"
              />
            </div>
            <div class="fea-labels">
              <span>High</span>
              <span>Low</span>
            </div>
          </div>
          <span class="fea-note">Illustrative contours</span>
        </div>
      </div>

      <button v-if="ready" class="reset-corner-btn" aria-label="Reset view" @click="reset">Reset view</button>
      <span class="bridge-hint">
        {{ failed ? 'Static view · 3D unavailable on this device' : 'Drag to orbit · Arrow keys to rotate' }}
      </span>
    </div>
    <div v-if="!failed" class="bridge-toolbar">
      <div role="group" aria-label="Bridge viewpoint" class="bridge-modes">
        <button :aria-pressed="!elevation" @click="setView(false)">3D</button>
        <button :aria-pressed="elevation" @click="setView(true)">Elevation</button>
      </div>
      <div class="bridge-modes">
        <button :aria-pressed="mode === 'architectural'" @click="setMode('architectural')">Architectural Model</button>
        <button :aria-pressed="mode === 'fea'" @click="setMode('fea')">FEA Simulation</button>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.interactive-bridge {
  aspect-ratio: 1.45;
  padding: 0;
  background: radial-gradient(ellipse at 50% 60%, rgba(32, 35, 39, 0.96), #0d0f12 75%);
  border: 1px solid var(--line);
  border-top: 2px solid var(--accent);
  border-radius: var(--radius-card);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  container-type: inline-size;
  container-name: bridgeStage;
}

.fea-legend,
.arch-legend {
  position: absolute;
  top: clamp(6px, 1.6cqi, 12px);
  right: clamp(6px, 1.6cqi, 12px);
  pointer-events: auto;
  cursor: pointer;
  user-select: none;
  color: #A8A8AE;
  font-family: var(--mono);
  background: rgba(14, 16, 19, 0.94);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: clamp(3px, 0.9cqi, 7px) clamp(5px, 1.4cqi, 10px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 4px;
  z-index: 10;
  max-width: clamp(100px, 34cqi, 180px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.fea-legend:hover,
.arch-legend:hover {
  border-color: rgba(216, 21, 27, 0.45);
}

.legend-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(4px, 1cqi, 8px);
}

.fea-legend-title,
.legend-title {
  display: block;
  letter-spacing: 0.08em;
  font-weight: 700;
  font-size: clamp(7px, 1.4cqi, 9.5px);
  font-family: var(--mono);
  color: var(--accent);
  margin: 0;
  line-height: 1;
}

.legend-toggle-icon {
  font-size: clamp(7.5px, 1.4cqi, 10px);
  font-family: var(--mono);
  color: #8E8E96;
  font-weight: 700;
  line-height: 1;
}

.arch-legend-list {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5px, 0.6cqi, 4px);
  margin-top: clamp(2.5px, 0.8cqi, 5px);
}

.arch-legend-item {
  display: flex;
  align-items: center;
  gap: clamp(3.5px, 1cqi, 6px);
}

.color-swatch {
  width: clamp(5.5px, 1.2cqi, 9px);
  height: clamp(5.5px, 1.2cqi, 9px);
  border-radius: 1.5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.arch-legend-label {
  font-family: var(--mono);
  font-size: clamp(7px, 1.4cqi, 9.5px);
  color: #FFFFFF !important;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.fea-content {
  margin-top: clamp(2.5px, 0.8cqi, 5px);
}

.fea-scale {
  display: flex;
  gap: clamp(4px, 1cqi, 7px);
}

.fea-swatches {
  display: flex;
  flex-direction: column;
  width: clamp(8px, 1.6cqi, 12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.fea-swatches i {
  height: clamp(5px, 1.1cqi, 8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.fea-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: clamp(7px, 1.4cqi, 9.5px);
  font-family: var(--mono);
  color: #FFFFFF !important;
  line-height: 1;
}

.fea-labels span {
  color: #FFFFFF !important;
  font-weight: 500;
}

.fea-note {
  display: block;
  margin-top: clamp(2px, 0.7cqi, 5px);
  font-size: clamp(6.5px, 1.3cqi, 8.5px);
  font-family: var(--mono);
  color: #D0D0D5 !important;
}

.bridge-canvas {
  position: absolute;
  inset: 0;
}

.bridge-canvas :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
  cursor: grab;
  touch-action: pan-y;
}

.bridge-canvas :deep(canvas:active) {
  cursor: grabbing;
}

.interactive-bridge img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.reset-corner-btn {
  position: absolute;
  right: 14px;
  bottom: 12px;
  font-family: var(--mono);
  font-size: var(--text-viewer, 0.8125rem);
  padding: 8px 14px;
  min-height: 44px;
  min-width: 44px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text);
  cursor: pointer;
  border-radius: 2px;
  z-index: 2;
  transition: color 160ms, border-color 160ms, background 160ms;
}

.reset-corner-btn:hover {
  color: var(--accent);
  background: var(--surface-raised);
  border-color: var(--accent);
}

.bridge-hint {
  position: absolute;
  left: 14px;
  bottom: 14px;
  color: #B0B0B8 !important;
  font-family: var(--mono);
  font-size: var(--text-viewer, 0.8125rem);
  letter-spacing: 0.02em;
  pointer-events: none;
  max-width: calc(100% - 130px);
  z-index: 2;
}

.bridge-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-block: 1px solid var(--line);
  margin-top: 14px;
  padding-block: 8px;
}

.bridge-modes {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

button {
  font-family: var(--mono);
  font-size: var(--text-viewer, 0.8125rem);
  padding: 10px 14px;
  min-height: 44px;
  min-width: 44px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--muted);
  cursor: pointer;
  border-radius: 2px;
  transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
}

button:hover {
  color: var(--text);
  border-color: var(--accent);
  background: var(--surface-raised);
}

button[aria-pressed="true"] {
  color: var(--text-on-primary);
  background: var(--accent-primary);
  border-color: var(--accent-primary-border);
  font-weight: 500;
}

@container bridgeStage (max-width: 560px) {
  .fea-legend,
  .arch-legend {
    top: 6px;
    right: 6px;
    padding: 3px 6px;
    border-radius: 3px;
    max-width: 38cqi;
  }

  .legend-title,
  .fea-legend-title {
    font-size: 7.5px;
  }

  .legend-toggle-icon {
    font-size: 8px;
  }

  .arch-legend-list {
    gap: 2px;
    margin-top: 2.5px;
  }

  .arch-legend-item {
    gap: 4px;
  }

  .color-swatch {
    width: 6px;
    height: 6px;
  }

  .arch-legend-label {
    font-size: 7.5px;
    letter-spacing: -0.015em;
  }

  .reset-corner-btn {
    right: 6px;
    bottom: 6px;
    padding: 3px 8px;
    min-height: 26px;
    min-width: 26px;
    font-size: 7.5px;
  }

  .bridge-hint {
    left: 6px;
    bottom: 6px;
    font-size: 7px;
    max-width: calc(100% - 80px);
  }
}

@container bridgeStage (max-width: 380px) {
  .fea-legend,
  .arch-legend {
    top: 5px;
    right: 5px;
    padding: 2.5px 5px;
    max-width: 42cqi;
  }

  .legend-title,
  .fea-legend-title {
    font-size: 6.8px;
  }

  .arch-legend-label {
    font-size: 6.8px;
    letter-spacing: -0.02em;
  }

  .color-swatch {
    width: 5px;
    height: 5px;
  }
}

@media (max-width: 760px) {
  .interactive-bridge {
    aspect-ratio: 1.25;
  }

  .bridge-toolbar {
    gap: 8px;
  }

  .bridge-modes {
    width: 100%;
    justify-content: stretch;
  }

  .bridge-modes button {
    flex: 1;
    min-width: 0;
    text-align: center;
    padding: 10px 8px;
    font-size: 0.8rem;
  }

  .fea-legend,
  .arch-legend {
    top: 6px;
    right: 6px;
    padding: 3px 6px;
    font-size: 7.5px;
    max-width: 38%;
  }

  .legend-title,
  .fea-legend-title {
    font-size: 7.5px;
  }

  .arch-legend-label {
    font-size: 7.5px;
    letter-spacing: -0.015em;
  }

  .color-swatch {
    width: 6px;
    height: 6px;
  }

  .reset-corner-btn {
    right: 6px;
    bottom: 6px;
    padding: 3px 8px;
    min-height: 26px;
    min-width: 26px;
    font-size: 7.5px;
  }

  .bridge-hint {
    left: 6px;
    bottom: 6px;
    font-size: 7px;
    max-width: calc(100% - 80px);
  }
}

@media (max-width: 480px) {
  .fea-legend,
  .arch-legend {
    top: 5px;
    right: 5px;
    padding: 2.5px 5px;
    font-size: 6.8px;
    max-width: 42%;
  }

  .legend-title,
  .fea-legend-title {
    font-size: 6.8px;
  }

  .arch-legend-list {
    gap: 2px;
    margin-top: 2px;
  }

  .arch-legend-item {
    gap: 3.5px;
  }

  .arch-legend-label {
    font-size: 6.8px;
  }

  .color-swatch {
    width: 5px;
    height: 5px;
  }

  .reset-corner-btn {
    right: 5px;
    bottom: 5px;
    padding: 3px 6px;
    min-height: 24px;
    min-width: 24px;
    font-size: 7px;
  }

  .bridge-hint {
    left: 5px;
    bottom: 5px;
    font-size: 6.5px;
    max-width: calc(100% - 70px);
  }
}
</style>
