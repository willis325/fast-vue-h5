<script lang="ts" setup name="index">
const router = useRouter();
onMounted(() => console.log('onMounted'));
onActivated(() => console.log('onActivated'));
</script>

<template>
  <view class="flex-col-middle-center">
    <HelloWorld msg="hello vue3-vant-template ~" />

    <van-button type="primary" @click="router.push('/login')">Login</van-button>
  </view>
</template>
