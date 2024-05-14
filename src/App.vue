<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component, route }" class="router-view">
    <transition mode="default">
      <keep-alive :include="['index']">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>
