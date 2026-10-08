<script setup lang="ts">
import { motion } from 'motion-v'

withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })
</script>

<template>
  <motion.div
    class="reveal"
    :initial="{ opacity: 0, y: 28 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true, margin: '0px 0px -8% 0px' }"
    :transition="{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }"
  >
    <slot />
  </motion.div>
</template>
