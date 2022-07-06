"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1523],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89593:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"discovery_extension",title:"Discovery Extensions",slug:"discovery-extensions.html"},c=void 0,l={unversionedId:"framework/discovery_extension",id:"framework/discovery_extension",title:"Discovery Extensions",description:"Advanced Feature",source:"@site/docs/framework/discovery_extension.md",sourceDirName:"framework",slug:"/framework/discovery-extensions.html",permalink:"/docs/next/framework/discovery-extensions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/discovery_extension.md",tags:[],version:"current",frontMatter:{id:"discovery_extension",title:"Discovery Extensions",slug:"discovery-extensions.html"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Advanced Feature")),(0,i.kt)("p",null,"Another type of extension that can be used inside ",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectConfig")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"DiscoveryExtension"),". This extension is designed\nto allow customisation of the way spec classes are discovered and instantiated. There are two functions of interest that\ncan be overridden."),(0,i.kt)("p",null,"The first is ",(0,i.kt)("inlineCode",{parentName:"p"},"afterScan")," which accepts a list of Spec classes that were discovered by Kotest during the ",(0,i.kt)("em",{parentName:"p"},"discovery")," phase\nof the test engine. This function then returns a list of the classes that should actually be instantiated and executed. By\noverriding this function, you are able to filter which classes are used, or even add in extra classes not originally discovered."),(0,i.kt)("p",null,"The second function is ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate")," which accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"KClass<Spec>")," and then attempts to create an instance of this Spec class in order\nto then run the test cases defined in it. By default, Spec classes are assumed to have a zero-arg primary constructor.\nIf you wish to use non-zero arg primary constructors this function can be implemented with logic on how to instantiate a test class."),(0,i.kt)("p",null,"An implementation can choose to create a new instance, or it can choose to return null if it wishes to pass control to the next\nextension (or if no more extensions, then back to the Test Engine itself)."),(0,i.kt)("p",null,"By overriding this function, extensions are able to customize the way classes are created, to support things like constructors\nwith parameters, or classes that require special initialization logic. This type of extension is how the Spring Constructor Injection\nadd-on works for example."))}f.isMDXComponent=!0}}]);