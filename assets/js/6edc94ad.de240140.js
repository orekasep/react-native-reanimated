"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[2574],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={id:"value",title:"Value",sidebar_label:"Value"},o=void 0,l={unversionedId:"value",id:"version-1.x.x/value",title:"Value",description:"Animated.Value is a container for storing values. It's is initialized with new Value(0) constructor. For backward compatibility there are provided API for setting value after it has been initialized:",source:"@site/versioned_docs/version-1.x.x/value.md",sourceDirName:".",slug:"/value",permalink:"/react-native-reanimated/docs/1.x.x/value",draft:!1,tags:[],version:"1.x.x",frontMatter:{id:"value",title:"Value",sidebar_label:"Value"},sidebar:"version-1.x.x/docs",previous:{title:"Additional configuration",permalink:"/react-native-reanimated/docs/1.x.x/config"},next:{title:"Clock",permalink:"/react-native-reanimated/docs/1.x.x/clock"}},u={},c=[],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")," is a container for storing values. It's is initialized with ",(0,a.kt)("inlineCode",{parentName:"p"},"new Value(0)")," constructor. For backward compatibility there are provided API for setting value after it has been initialized:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const v = new Value(0);\n/// ...\nv.setValue(100);\n")),(0,a.kt)("p",null,"While using ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")," in functional components it's recommended that one should wrap instantiation with ",(0,a.kt)("inlineCode",{parentName:"p"},"useRef(...)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo(...)")," to use the same instance on re-render, or just simply use ",(0,a.kt)("inlineCode",{parentName:"p"},"useValue")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const v = useValue(0);\n/// ...\nv.setValue(100);\n")))}p.isMDXComponent=!0}}]);