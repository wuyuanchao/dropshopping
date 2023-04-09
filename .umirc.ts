import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    // { path: "/", component: "index", name: "home" },
    { path: "/inquiries", component: "inquiries/index",  name: "询价需求" },
    { path: "/inquiries/:id", component: "inquiries/[id]" },
    { path: "/products", component: "products",  name: "商品库" },
    // { path: "/docs", component: "docs", name: "docs" },
  ],
  npmClient: 'yarn',
});
