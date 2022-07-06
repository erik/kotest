"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[4351],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,y=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58025:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"retry",title:"Retry",slug:"retry.html"},l=void 0,c={unversionedId:"assertions/retry",id:"version-5.3/assertions/retry",title:"Retry",description:"Retry",source:"@site/versioned_docs/version-5.3/assertions/retry.md",sourceDirName:"assertions",slug:"/assertions/retry.html",permalink:"/docs/assertions/retry.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/assertions/retry.md",tags:[],version:"5.3",frontMatter:{id:"retry",title:"Retry",slug:"retry.html"},sidebar:"framework",previous:{title:"Until",permalink:"/docs/assertions/until.html"},next:{title:"Mocking",permalink:"/docs/framework/integrations/mocking.html"}},u={},p=[{value:'Retry <a name="retry"></a>',id:"retry-",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"retry-"},"Retry ",(0,i.kt)("a",{name:"retry"})),(0,i.kt)("p",null,"Retry is similar to eventually, but rather than attempt a block of code for a period of time, it attempts a block of code a maximum number of times.\nWe still provide a timeout period to avoid the loop running for ever."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests: ShouldSpec() {\n  init {\n    should("retry up to 4 times") {\n      retry(4, 10.minutes) {\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Additional options include the delay between runs, a multiplier to use exponential delays, and an exception class if we only want to\nrepeat for certain exceptions and fail for others."))}m.isMDXComponent=!0}}]);