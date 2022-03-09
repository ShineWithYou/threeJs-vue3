<template>
  <suspense>
    <template #fallback>
      <div class="loading">
        <h1>asdasewd</h1>
      </div>
    </template>

    <template #default>
      <div>
        <HomeAsync />
      </div>
    </template>
  </suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const HomeAsync = defineAsyncComponent(() => {
  import('./HomeCom.vue')
})
</script>

<style></style>
