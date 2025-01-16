<script lang="ts" setup>
const router = useRouter();
</script>

<template>
  <div class="flex-col-center h-100vh">
    <div class="text-xl">Login</div>
    <van-button type="primary" plain class="mt-8" @click="router.back()">Home</van-button>
  </div>
</template>
