<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h3 class="text-xl">{{ msg }}</h3>
</template>
