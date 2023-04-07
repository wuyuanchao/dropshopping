// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","name":"home","parentId":"@@/global-layout","id":"1"},"2":{"path":"/docs","name":"docs","parentId":"@@/global-layout","id":"2"},"3":{"path":"/products","name":"products","parentId":"@@/global-layout","id":"3"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import(/* webpackChunkName: "p__index" */'@/pages/index.tsx')),
'2': React.lazy(() => import(/* webpackChunkName: "p__docs" */'@/pages/docs.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__products" */'@/pages/products.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/wuyuanchao/learnspace/dropshopping/src/layouts/index.tsx')),
},
  };
}
