<script setup lang="ts">
import Icon from './IconCommunity.vue'

const add = (a: number, b: number) => a + b
</script>

<template>
  <Icon
    a="b"
    @click="add"
  />
</template>
