"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3321],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19688:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Test Ordering",slug:"test-ordering.html"},c=void 0,d={unversionedId:"framework/test_ordering",id:"version-5.3/framework/test_ordering",title:"Test Ordering",description:"When running multiple tests from a Spec, there's a certain order on how to execute them.",source:"@site/versioned_docs/version-5.3/framework/test_ordering.md",sourceDirName:"framework",slug:"/framework/test-ordering.html",permalink:"/docs/framework/test-ordering.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/test_ordering.md",tags:[],version:"5.3",frontMatter:{title:"Test Ordering",slug:"test-ordering.html"},sidebar:"framework",previous:{title:"Spec Ordering",permalink:"/docs/framework/spec-ordering.html"},next:{title:"Grouping Tests",permalink:"/docs/framework/tags.html"}},l={},p=[{value:"Sequential Ordering",id:"sequential-ordering",level:3},{value:"Random Ordering",id:"random-ordering",level:3},{value:"Lexicographic Ordering",id:"lexicographic-ordering",level:3}],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When running multiple tests from a Spec, there's a certain order on how to execute them."),(0,i.kt)("p",null," By default, a ",(0,i.kt)("strong",{parentName:"p"},"sequential")," order is used (order that tests are defined in the spec), but it's also possible to configure them\nto be executed in a ",(0,i.kt)("strong",{parentName:"p"},"random")," order or ",(0,i.kt)("strong",{parentName:"p"},"lexicographic")," order."),(0,i.kt)("p",null,"This setting can be configured in either a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," or in ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"ProjectConfig")," by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"testCaseOrder")," function.\nIf both exist, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec"),"'s configuration will have priority."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nested tests will always run in discovery order (sequential) regardless of test ordering setting."))),(0,i.kt)("h3",{id:"sequential-ordering"},"Sequential Ordering"),(0,i.kt)("p",null,"Root tests are dispatched in the order they are defined in the spec file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SequentialSpec : StringSpec() {\n\n    override fun testCaseOrder(): TestCaseOrder? = TestCaseOrder.Sequential\n\n    init {\n      "foo" {\n        // I run first as I\'m defined first\n      }\n\n      "bar" {\n        // I run second as I\'m defined second\n      }\n    }\n}\n')),(0,i.kt)("h3",{id:"random-ordering"},"Random Ordering"),(0,i.kt)("p",null,"Root tests are dispatched in a random order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class RandomSpec : StringSpec() {\n\n    override fun testCaseOrder(): TestCaseOrder? = TestCaseOrder.Random\n\n    init {\n      "foo" {\n        // This test may run first or second\n      }\n\n      "bar" {\n        // This test may run first or second\n      }\n    }\n}\n')),(0,i.kt)("h3",{id:"lexicographic-ordering"},"Lexicographic Ordering"),(0,i.kt)("p",null,"Root tests are dispatched in a lexicographic order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class LexicographicSpec : StringSpec() {\n\n    override fun testCaseOrder(): TestCaseOrder? = TestCaseOrder.Lexicographic\n\n    init {\n      "foo" {\n        // I run second as bar < foo\n      }\n\n      "bar" {\n        // I run first as bar < foo\n      }\n    }\n}\n')))}m.isMDXComponent=!0}}]);