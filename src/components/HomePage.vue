<template>
  <div>
    <div>
    </div>
    {{routes}}
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const routes = router.options.routes
    const routesList = routes.splice()
    return {
      routesList
    }
  }
}
</script>

<style>

</style>