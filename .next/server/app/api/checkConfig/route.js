"use strict";(()=>{var e={};e.id=634,e.ids=[634],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5315:e=>{e.exports=require("path")},3977:e=>{e.exports=require("node:fs/promises")},4764:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>k,requestAsyncStorage:()=>g,routeModule:()=>h,serverHooks:()=>f,staticGenerationAsyncStorage:()=>x});var o={};r.r(o),r.d(o,{GET:()=>l});var s=r(3278),n=r(5002),i=r(4877),a=r(1309),u=r(3977),p=r.n(u),c=r(5315),d=r.n(c);async function l(){let e=d().join("/etc/wireguard","wg0.conf");try{await p().access(e);let t=(await p().readFile(e,"utf-8")).match(/Address\s*=\s*([^\s]+)/),r=t?t[1]:null;return a.NextResponse.json({exists:!0,address:r})}catch(e){return a.NextResponse.json({exists:!1})}}let h=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/checkConfig/route",pathname:"/api/checkConfig",filename:"route",bundlePath:"app/api/checkConfig/route"},resolvedPagePath:"/Users/kirillinoz/Projects/InnoRoute/config-upload/src/app/api/checkConfig/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:g,staticGenerationAsyncStorage:x,serverHooks:f}=h,m="/api/checkConfig/route";function k(){return(0,i.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:x})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[379,833],()=>r(4764));module.exports=o})();