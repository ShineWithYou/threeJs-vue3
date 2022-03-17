import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import HomePage from "../components/HomePage.vue";
import Demo01 from "../components/Demo01.vue"
import Demo02 from "../components/Demo02.vue"
import Demo03 from "../components/Demo03.vue"
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: "/", component: HomePage, name: "HomePage" },
  { path: "/Demo01", component: Demo01, name: "Demo01" },
  { path: "/Demo02", component: Demo02, name: "Demo02" },
  { path: "/Demo03", component: Demo03, name: "Demo03" },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

router.beforeEach((to, from, next) => {
  next()
})
export default router;
