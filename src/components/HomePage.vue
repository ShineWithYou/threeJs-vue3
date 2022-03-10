<template>
  <div>
    ASJHASJKHDAJK
    <HomeAsync></HomeAsync>
  </div>
</template>
<script setup>
import { onMounted, defineAsyncComponent } from "vue";
const HomeAsync = defineAsyncComponent(() =>
  import("../components/HomeCom.vue")
);

onMounted(async () => {
  //   let result = await api.getHomepage();
  //   console.log(result);
});
</script>

<style lang="less" scoped></style>
