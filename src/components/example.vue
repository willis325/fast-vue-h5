<script lang="ts" setup>
const model = defineModel<boolean>({ required: true });
</script>

<template>
  <van-popup v-model:show="model" round position="bottom">
    <div class="px-20px flex-row-middle-center h-60px relative">
      <h4 class="text-18px c-#333 lh-24px font-500">上传营业执照示例</h4>
      <van-icon name="cross" class="absolute right-20px text-20px c-#999" @click="model = false" />
    </div>
    <div class="mt-12px px-30px">
      <h5 class="text-center lh-22px mb-4px">请拍摄证件正面照片</h5>
      <p class="text-12px lh-17px c-#999">1、营业资格证书：营业执照/营业许可证 或资质类证件均可</p>
      <p class="text-12px lh-17px c-#999">
        2、照片方向正确，
        <span>文字清晰、边框完整</span>
      </p>
      <p class="text-12px lh-17px c-#999">3、格式jpg、png、jpeg，小于10M</p>
    </div>
    <div class="mt-12px px-24px">
      <div class="h-164px bg-#f4f6f9 b-rd-4px of-hidden"></div>
      <div class="flex-row-between mt-12px">
        <div class="w-100px">
          <div class="h-70px bg-#f4f6f9 b-rd-4px of-hidden"></div>
          <p class="flex-row-middle-center mt-8px">
            <img src="@/assets/image/icon_error.png" alt="" class="h-12px" />
            <span class="text-12px c-#666 lh-17px ml-9px">缺边</span>
          </p>
        </div>
        <div class="w-100px">
          <div class="h-70px bg-#f4f6f9 b-rd-4px of-hidden"></div>
          <p class="flex-row-middle-center mt-8px">
            <img src="@/assets/image/icon_error.png" alt="" class="h-12px" />
            <span class="text-12px c-#666 lh-17px ml-9px">模糊</span>
          </p>
        </div>
        <div class="w-100px">
          <div class="h-70px bg-#f4f6f9 b-rd-4px of-hidden"></div>
          <p class="flex-row-middle-center mt-8px">
            <img src="@/assets/image/icon_error.png" alt="" class="h-12px" />
            <span class="text-12px c-#666 lh-17px ml-9px">闪光</span>
          </p>
        </div>
      </div>
    </div>
    <van-divider class="b-#E6EBF4! mt-40px! my-10px" />
    <div class="van-safe-area-bottom pb-12px px-24px">
      <van-button type="primary" block @click="model = false">我知道了</van-button>
    </div>
  </van-popup>
</template>
