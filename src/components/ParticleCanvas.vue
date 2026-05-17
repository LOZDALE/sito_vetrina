<template>
  <div id="tsparticles-container" class="particle-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { tsParticles } from "@tsparticles/engine"
import { loadMatrixPreset } from "@tsparticles/preset-matrix"
import { loadSeaAnemonePreset } from "@tsparticles/preset-sea-anemone"
import { loadSnowPreset } from "@tsparticles/preset-snow"
import { loadLinksPreset } from "@tsparticles/preset-links"
import { loadBubblesPreset } from "@tsparticles/preset-bubbles"
import { loadFirePreset } from "@tsparticles/preset-fire"

// --- CONFIGURAZIONE ---
// Cambia questo valore per provare diversi effetti:
// 'matrix', 'seaAnemone', 'snow', 'links', 'bubbles', 'fire'
const activePreset = ref('links') 
// ----------------------

let container = null

const loadEffect = async (preset) => {
  if (container) {
    await container.destroy()
  }

  // Carichiamo solo il preset necessario
  switch(preset) {
    case 'matrix': await loadMatrixPreset(tsParticles); break;
    case 'seaAnemone': await loadSeaAnemonePreset(tsParticles); break;
    case 'snow': await loadSnowPreset(tsParticles); break;
    case 'links': await loadLinksPreset(tsParticles); break;
    case 'bubbles': await loadBubblesPreset(tsParticles); break;
    case 'fire': await loadFirePreset(tsParticles); break;
  }

  container = await tsParticles.load({
    id: "tsparticles-container",
    options: {
      preset: preset,
      background: { color: "transparent" },
      particles: {
        color: { value: "#e8d5b0" } // Colore brand
      },
      fullScreen: { enable: true, zIndex: 0 }
    }
  })
}

onMounted(() => loadEffect(activePreset.value))

// Se il valore cambia (es. tramite hot reload), aggiorna l'effetto
watch(activePreset, (newVal) => loadEffect(newVal))

onUnmounted(() => {
  if (container) container.destroy()
})
</script>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}
</style>
