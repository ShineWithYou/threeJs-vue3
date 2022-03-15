<template>
  <div>
    <div v-for="(item, index) in routes" :key="index">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
// 执行路由的跳转
const router = useRoute();
const { proxy } = getCurrentInstance()
console.log(proxy.$router)
const routes = proxy.$router.options.routes;
</script>

<style lang="less" scoped></style>
