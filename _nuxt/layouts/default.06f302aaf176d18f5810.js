webpackJsonp([1],{"/ruL":function(t,e,i){"use strict";var a=i("ef8S"),n=i("L12S");e.a={components:{TheHeader:a.a,TheSidenav:n.a},data:function(){return{displaySidenav:!1,windowWidth:0,windowHeight:0,limitPosition:500,scrolled:!1,lastPosition:0}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight),this.getWindowWidth(),this.getWindowHeight()})},methods:{sidenavToggle:function(t){this.displaySidenav="close"!==t&&!this.displaySidenav},getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight)}}}},"5TbD":function(t,e,i){"use strict";e.a={name:"TheSidenav",props:{show:{type:Boolean,default:!1}}}},"5bVr":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".drawer-toggle{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;height:50%;width:30px;height:30px;cursor:pointer}.drawer-toggle .bar{width:90%;border:1px solid #000;-webkit-transition-duration:.5s;transition-duration:.5s}.drawer-toggle .bar-top{border:1px solid #fff}",""])},"6dTj":function(t,e,i){var a=i("Ux/n");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("711473c8",a,!1,{sourceMap:!1})},"7a1P":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".header-container[data-v-2edfc344]{height:60px}.the-header[data-v-2edfc344]{width:100%;position:fixed;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 20px;opacity:1;-webkit-transition-duration:1s;transition-duration:1s}.iconTransition-enter-active[data-v-2edfc344],.iconTransition-leave-active[data-v-2edfc344]{-webkit-transition:opacity .5s;transition:opacity .5s}.iconTransition-enter[data-v-2edfc344],.iconTransition-leave-to[data-v-2edfc344]{opacity:0}.navTransition-enter-active[data-v-2edfc344],.navTransition-leave-active[data-v-2edfc344]{-webkit-transition:opacity 1s;transition:opacity 1s}.navTransition-enter[data-v-2edfc344],.navTransition-leave-to[data-v-2edfc344]{opacity:0}.logo[data-v-2edfc344]{position:absolute;left:65px;margin:0;letter-spacing:2px;font-size:20.8px;font-size:1.3rem;font-weight:300;-webkit-transition-duration:.5s;transition-duration:.5s}.logo a[data-v-2edfc344]{text-decoration:none;color:#000}.spacer[data-v-2edfc344]{-webkit-box-flex:1;-ms-flex:1;flex:1}@media (min-width:768px){.logo[data-v-2edfc344]{left:20px}}.nav-list[data-v-2edfc344]{list-style:none;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex}.nav-item[data-v-2edfc344]{margin:0 7.5px}.nav-item a[data-v-2edfc344]{text-decoration:none;color:#000;font-size:14px;font-weight:300;letter-spacing:1.75px}.the-header-top[data-v-2edfc344]{background-color:transparent}.the-header-top .logo a[data-v-2edfc344],.the-header-top .nav-item a[data-v-2edfc344]{color:#fff}.nav-item a.nuxt-link-active[data-v-2edfc344],.nav-item a[data-v-2edfc344]:active,.nav-item a[data-v-2edfc344]:hover{color:red}",""])},ANZv:function(t,e,i){var a=i("7a1P");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("6ee76d9a",a,!1,{sourceMap:!1})},Eleq:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("TheHeader",{attrs:{icon:t.windowWidth<768},on:{sidenavToggle:function(e){t.sidenavToggle()}}}),i("TheSidenav",{attrs:{show:t.displaySidenav},on:{close:function(e){t.sidenavToggle("close")}}}),i("nuxt")],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},ErMP:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidenav-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sidenav-backdrop",on:{click:function(e){t.$emit("close")}}}),i("transition",{attrs:{name:"slide-side"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sidenav"},[i("ul",{staticClass:"nav-list",on:{click:function(e){t.$emit("close")}}},[i("li",{staticClass:"nav-item"},[i("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),i("li",{staticClass:"nav-item"},[i("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),i("li",{staticClass:"nav-item"},[i("nuxt-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])])])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},L12S:function(t,e,i){"use strict";var a=i("5TbD"),n=i("ErMP"),o=!1;var s=function(t){o||i("6dTj")},r=i("VU/8")(a.a,n.a,!1,s,"data-v-4807346b",null);r.options.__file="components/Navigation/TheSidenav.vue",e.a=r.exports},MPus:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drawer-toggle",on:{click:function(e){t.$emit("toggle")}}},[i("div",{staticClass:"bar",class:{"bar-top":t.top}}),i("div",{staticClass:"bar",class:{"bar-top":t.top}}),i("div",{staticClass:"bar",class:{"bar-top":t.top}})])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},Ma2J:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("/ruL"),n=i("Eleq"),o=!1;var s=function(t){o||i("Sa+8")},r=i("VU/8")(a.a,n.a,!1,s,null,null);r.options.__file="layouts/default.vue",e.default=r.exports},"Qat/":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"html{font-family:Roboto,sans-serif}body{margin:0}",""])},"Sa+8":function(t,e,i){var a=i("Qat/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("82b9fbcc",a,!1,{sourceMap:!1})},"Ux/n":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".sidenav-container[data-v-4807346b]{height:100%;width:100%}.sidenav-backdrop[data-v-4807346b]{width:100%;height:100%;background-color:rgba(0,0,0,.7);z-index:1000;position:fixed;top:0;left:0}.sidenav[data-v-4807346b]{height:100%;width:300px;background-color:#fff;z-index:10000;position:fixed;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-4807346b],.slide-side-leave-active[data-v-4807346b]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.slide-side-enter[data-v-4807346b],.slide-side-leave-to[data-v-4807346b]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.nav-list[data-v-4807346b]{list-style:none;padding:0;margin:0}.nav-item[data-v-4807346b]{margin:20px 0}.nav-item a[data-v-4807346b]{text-decoration:none;color:#000;font-size:24px;font-size:1.5rem;font-weight:100}.nav-item a[data-v-4807346b]:active,.nav-item a[data-v-4807346b]:hover{color:red}",""])},ZeOx:function(t,e,i){"use strict";e.a={props:{top:{type:Boolean,default:!0}}}},cyyQ:function(t,e,i){var a=i("5bVr");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("9417e628",a,!1,{sourceMap:!1})},eGca:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-container"},[i("header",{staticClass:"the-header",class:{"the-header-top":t.isTop}},[i("transition",{attrs:{name:"iconTransition"}},[i("TheSideNavToggle",{directives:[{name:"show",rawName:"v-show",value:t.icon,expression:"icon"}],attrs:{top:t.isTop},on:{toggle:function(e){t.$emit("sidenavToggle")}}})],1),i("div",{staticClass:"logo"},[i("nuxt-link",{attrs:{to:"/"}},[t._v("GIADA BLOG LITE")])],1),i("div",{staticClass:"spacer"}),i("transition",{attrs:{name:"navTransition"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.icon,expression:"!icon"}],staticClass:"navigation-items"},[i("ul",{staticClass:"nav-list"},[i("li",{staticClass:"nav-item"},[i("nuxt-link",{attrs:{to:"/posts"}},[t._v("BLOG")])],1),i("li",{staticClass:"nav-item"},[i("nuxt-link",{attrs:{to:"/about"}},[t._v("ABOUT")])],1),i("li",{staticClass:"nav-item"},[i("nuxt-link",{attrs:{to:"/admin"}},[t._v("ADMIN")])],1)])])])],1)])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},ef8S:function(t,e,i){"use strict";var a=i("vomh"),n=i("eGca"),o=!1;var s=function(t){o||i("ANZv")},r=i("VU/8")(a.a,n.a,!1,s,"data-v-2edfc344",null);r.options.__file="components/Navigation/TheHeader.vue",e.a=r.exports},vEK1:function(t,e,i){"use strict";var a=i("ZeOx"),n=i("MPus"),o=!1;var s=function(t){o||i("cyyQ")},r=i("VU/8")(a.a,n.a,!1,s,null,null);r.options.__file="components/Navigation/TheSideNavToggle.vue",e.a=r.exports},vomh:function(t,e,i){"use strict";var a=i("vEK1");e.a={name:"TheHeader",components:{TheSideNavToggle:a.a},props:{icon:{type:Boolean,default:!1}},data:function(){return{toggle:!1,isTop:!0}},mounted:function(){this.$nextTick(function(){window.addEventListener("scroll",this.handleScroll)})},methods:{handleScroll:function(){this.isTop=0===window.scrollY,console.log("hi")}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}}}});