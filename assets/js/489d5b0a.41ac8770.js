(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(291)),i={title:"stripe",permalink:"wiki/stripe/",layout:"wiki",tags:["Functions","Randomness and chance","Time Functions"]},o={unversionedId:"reference/time-functions/stripe",id:"reference/time-functions/stripe",isDocsHomePage:!1,title:"stripe",description:"Type:",source:"@site/docs/reference/time-functions/stripe.md",slug:"/reference/time-functions/stripe",permalink:"/docs/reference/time-functions/stripe",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/time-functions/stripe.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},p=[],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"stripe :: Pattern Int -> Pattern a -> Pattern a\n")),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"stripe")," function repeats a pattern at random speeds. The first\nparameter gives the number of cycles to operate over, for example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"stripe 2\n")),Object(c.b)("p",null,"will repeat a pattern twice, over two cycles. Each cycle will be played\nat a random speed, but in such a way that the total duration will be the\nsame."),Object(c.b)("p",null,"For example in the following example, the start of every third\nrepetition of the"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"d1\n")),Object(c.b)("p",null,"pattern will match with the clap on the"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"d2\n")),Object(c.b)("p",null,"pattern."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'d1 $ stripe 3 $ sound "bd sd ~ [mt ht]"\n\nd2 $ sound "cp"\n')),Object(c.b)("h1",{id:"slowstripe"},"slowstripe"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"slowstripe :: Pattern Int -> Pattern a -> Pattern a\n")),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"slowstripe")," function is the same as ",Object(c.b)("strong",{parentName:"p"},"stripe")," but the result is\nalso slowed down by n time (where n is the first parameter of the\nfunction. This means that the mean average duration of the stripes is\nexactly one cycle, and every nth stripe starts on a cycle boundary (in\nindian classical terms, the ",Object(c.b)("em",{parentName:"p"},"sam"),")."),Object(c.b)("p",null,"usage:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'d1 $ slowstripe 3 $ sound "bd sd ~ [mt ht]"\n\nd2 $ sound "cp"\n')))}s.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);