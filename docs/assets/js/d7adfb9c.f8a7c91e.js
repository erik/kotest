"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[8487],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30830:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"blocking_tests",title:"Blocking Tests",slug:"blocking-tests.html",sidebar_label:"Blocking Tests"},c=void 0,l={unversionedId:"framework/timeouts/blocking_tests",id:"version-5.3/framework/timeouts/blocking_tests",title:"Blocking Tests",description:"When specifying timeouts in tests, Kotest uses the withTimeout coroutine functions that the Kotlin coroutine",source:"@site/versioned_docs/version-5.3/framework/timeouts/blocking_tests.md",sourceDirName:"framework/timeouts",slug:"/framework/timeouts/blocking-tests.html",permalink:"/docs/framework/timeouts/blocking-tests.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/timeouts/blocking_tests.md",tags:[],version:"5.3",frontMatter:{id:"blocking_tests",title:"Blocking Tests",slug:"blocking-tests.html",sidebar_label:"Blocking Tests"},sidebar:"framework",previous:{title:"Project Timeout",permalink:"/docs/framework/timeouts/project-timeouts.html"},next:{title:"Fail Fast",permalink:"/docs/framework/fail-fast.html"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When specifying timeouts in tests, Kotest uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"withTimeout")," coroutine functions that the Kotlin coroutine\nlibrary provides. These timeouts are co-operative in nature, and a timeout is detected when a coroutine suspends, resumes, or calls ",(0,i.kt)("inlineCode",{parentName:"p"},"yield"),"."),(0,i.kt)("p",null,"However when executing blocking code, the thread will be blocked and so the coperative approach will not work.\nIn this scenario we must revert to interrupting the thread using ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread.interrupt")," or something similar. In order\nfor this interruption to work safely, we must execute the test on a dedicated thread."),(0,i.kt)("p",null,"Therefore, it is up to the user to signify to Kotest that they want a particular test to execute on a dedicated\nthread that can be safely used for interruption. We do this by enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockingTest")," flag in test config."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyBlockingTest : FunSpec() {\n  init {\n\n    test("interrupt me!").config(blockingTest = true, timeout = 10.seconds) {\n       Thread.sleep(100000000)\n    }\n\n    test("uses suspension").config(timeout = 10.seconds) {\n      delay(100000000)\n    }\n  }\n}\n')),(0,i.kt)("p",null,"In the above example, the first test requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockingTest")," flag because it uses a thread blocking operation.\nThe second test does not because it uses a suspendable operation."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is only available on the JVM."))))}d.isMDXComponent=!0}}]);