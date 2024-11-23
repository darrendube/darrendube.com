"use strict";(self.webpackChunkDarren_Dube=self.webpackChunkDarren_Dube||[]).push([[366],{8556:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return x}});var a=n(7294),r=n(8733),i=n(1883),l=n(6920),o=n(5221),c=n(4372);var s=e=>{let{children:t}=e;return(0,r.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},m=n(3494),u=n(4232),p=n(9706),g=n(8170),d=n(8871),h=n(1151);function E(e){const t=Object.assign({p:"p",a:"a"},(0,h.ah)(),e.components),{Text:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Text",!0),a.createElement(a.Fragment,null,a.createElement(n,{children:"Hi, I'm Darren!",sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"Data Science student. Explore my code on ",a.createElement(t.a,{href:"https://github.com/darrendube/darrendube.github.io"},"GitHub"),"."))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,h.ah)(),e.components);return t?a.createElement(t,e,a.createElement(E,e)):E(e)};function b(e){const t=Object.assign({ul:"ul",li:"li",a:"a"},(0,h.ah)(),e.components),{Title:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),a.createElement(a.Fragment,null,a.createElement(n,{text:"Projects"}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/darrendube/2022-stock-market-analysis"},"2022 US Stock Market Analysis")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://github.com/darrendube/titanic-survival-prediction"},"Titanic Survival Prediction")),"\n"))}var Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,h.ah)(),e.components);return t?a.createElement(t,e,a.createElement(b,e)):b(e)};var v=e=>{let{posts:t}=e;const{basePath:n,blogPath:a}=(0,m.Z)(),{siteTitle:d}=(0,u.Z)();return(0,r.tZ)(l.Z,null,(0,r.tZ)("h1",{sx:g.j},d),(0,r.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,r.tZ)(f,null)),(0,r.tZ)(o.Z,{text:"Latest Posts"},(0,r.tZ)(i.Link,{to:(0,p.Z)("/"+n+"/"+a)},"Read all posts")),(0,r.tZ)(c.Z,{posts:t,showTags:!1}),(0,r.tZ)(s,null,(0,r.tZ)(Z,null)))};const y=()=>(0,r.tZ)(d.Z,null);var x=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(v,Object.assign({posts:n.nodes},t))}},6799:function(e,t,n){var a=n(8733),r=n(7294),i=n(1883),l=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,l.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},4372:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(8733),r=n(7294),i=n(795),l=n(1883),o=n(6799);var c=e=>{let{post:t,showTags:n=!0}=e;return(0,a.tZ)(i.xu,{mb:4},(0,a.tZ)(l.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&n&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags}))))};var s=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.tZ)(c,{key:e.slug,post:e,showTags:r}))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),i=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:l="",image:o="",children:c=null,canonicalUrl:s=""}=e;const m=(0,i.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:h,author:E,siteLanguage:f}=m,b={title:t?t+" | "+u:p,description:n||d,url:""+g+(l||""),image:""+g+(o||h)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),s?a.createElement("link",{rel:"canonical",href:s}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-62311132f6f36bd91501.js.map