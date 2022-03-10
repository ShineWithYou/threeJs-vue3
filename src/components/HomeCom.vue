<template>
  <div>
    {{data}}
  </div>
</template>

<script setup>
import * as api from "../api/index";
import { reactive } from "vue";
let result = await api.getHomePage();

const data = reactive(result.hero);
console.log(data);
</script>

<style lang="less" scoped>
</style>
