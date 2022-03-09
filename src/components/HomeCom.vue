<template>
  <ul>
    <li v-for="(item, i) in heroList || []" :key="i">
      {{ item.category }}
    </li>
  </ul>
</template>

<script setup>
import * as api from "../api/index";
import { reactive } from "vue";

const result = await api.getHomePage();
console.log(result.data.hero);
const heroList = reactive(result.data.hero);
</script>

<style></style>
