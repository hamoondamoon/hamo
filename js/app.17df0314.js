(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],s[r]&&d.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"27a1":function(t,e,n){},4949:function(t,e,n){"use strict";var a=n("27a1"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"app",attrs:{id:"app"}},[n("div",{staticClass:"header-toolbar"},[n("span",{staticClass:"hamo-ver"},[t._v("Ver:1.02 [Fix Guage Value to moment avarage.] - HAMO")]),n("span",{staticClass:"toggleBtn",on:{click:function(e){return t.bgToggle()}}},[t._v(t._s(t.btn))])]),n("Partylist",{model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}}),n("div",{staticClass:"handle",attrs:{id:"handle"}},[t._v("┛")])],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"partylist-container"},[n("Api",{model:{value:t.party,callback:function(e){t.party=e},expression:"party"}}),t.p1?n("Meter",{model:{value:t.p1,callback:function(e){t.p1=e},expression:"p1"}}):t._e(),t.p2?n("Meter",{staticClass:"no2",model:{value:t.p2,callback:function(e){t.p2=e},expression:"p2"}}):t._e(),t.p3?n("Meter",{staticClass:"no3",model:{value:t.p3,callback:function(e){t.p3=e},expression:"p3"}}):t._e(),t.p4?n("Meter",{staticClass:"no4",model:{value:t.p4,callback:function(e){t.p4=e},expression:"p4"}}):t._e(),t.p5?n("Meter",{staticClass:"no5",model:{value:t.p5,callback:function(e){t.p5=e},expression:"p5"}}):t._e(),t.p6?n("Meter",{staticClass:"no6",model:{value:t.p6,callback:function(e){t.p6=e},expression:"p6"}}):t._e(),t.p7?n("Meter",{staticClass:"no7",model:{value:t.p7,callback:function(e){t.p7=e},expression:"p7"}}):t._e(),t.p8?n("Meter",{staticClass:"no8",model:{value:t.p8,callback:function(e){t.p8=e},expression:"p8"}}):t._e()],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"none"}})},c=[],u=(n("7f7f"),n("456d"),n("ac6a"),{data:function(){return{conn:null,established:!1,_actdata:null,_timer:null}},props:["value"],computed:{val:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},status:{get:function(){return this.established?"ONLINE":"OFFLINE"}}},methods:{hasCombatant:function(t){return!(-1===Object.getOwnPropertyNames(t).indexOf("Combatant"))},getHighestDps:function(t){var e=0;return Object.keys(t).forEach(function(t,n){e<t.encdps&&(e=t.encdps)}),topPl.encdps},onData:function(t){if(t.detail&&t.detail.isActive&&this.hasCombatant(t.detail)){var e=t.detail.Combatant,n=[],a=0;_.each(e,function(t,s){var i=e[s];if("Limit Break"===i.name)return!0;parseInt(i.encdps)>a&&(a=parseInt(i.encdps)),n.push({name:i.name,dps:i.dps,dead:i.deaths,job:i.Job.toUpperCase(),ratio:parseInt(i.encdps/a*100)})});for(var s=n.length,i=[],r=0;r<8;r++)r<s?i.push(n[r]):i.push(null);this.val=i}},onStatus:function(t){console.log("onStatus")},onBroadcast:function(t){console.log("onBroardcast")},onMessage:function(t){console.log("onMessage")},onLog:function(t){console.log("onLog")},connect:function(){var t=document;t.addEventListener("onOverlayDataUpdate",this.onData),t.addEventListener("onOverlayStateUpdate",this.onStatus),t.addEventListener("onBroardcastMessageReceive",this.onBroadcast),t.addEventListener("onRecvMessage",this.onMessage),t.addEventListener("onLogLine",this.onLog)}},mounted:function(){this.connect()}}),p=u,d=n("2877"),f=Object(d["a"])(p,l,c,!1,null,null,null),h=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meter-container"},[n("div",{ref:"container",staticClass:"wrapper"}),n("div",{staticClass:"meter-dps text-border",domProps:{innerHTML:t._s(t.dpsDigit)}}),n("div",{staticClass:"meter-dps-label"},[t._v("DPS")]),n("div",{staticClass:"meter-text-info"},[n("p",{staticClass:"meter-job text-border"},[t._v(t._s(t.job))]),n("p",{ref:"charname",staticClass:"meter-name text-border",on:{click:t.toAnon}},[t._v(t._s(t.name))])])])},m=[],b=(n("28a5"),n("768b")),g=n("c155"),y=n.n(g),w={props:["value","label"],computed:{val:{get:function(){return this.value},set:function(t){t&&this.update(),this.$emit("input",t)}},dpsDigit:{get:function(){if(!this.value.dps)return 0;var t,e,n="",a=this.value.dps.split("."),s=Object(b["a"])(a,2);return t=s[0],e=s[1],n=t+".<span style='font-size: 0.6rem'>"+e+"</span>",n}},job:{get:function(){return this.value.job}},name:{get:function(){return this.value.name}}},watch:{val:function(){this.update()}},data:function(){return{uid:"",arc:null,pluginsAdded:!1,disalbe:!1}},methods:{init:function(){var t=this.$refs.container.clientWidth,e=this.$refs.container.clientHeight,n={w:t,h:e,start:270,end:270.01,sw:20},a=y()(t,e).remove();n.stroke="#8898aa",a.arc(n);var s=a.select("path");this.uid=s.id,s.attr("id",this.uid),a.prependTo(this.$refs.container)},toAnon:function(){var t=this.$refs.charname;t.classList.toggle("anon")},update:function(){if(this.val&&"Limit Break"!==this.val.name){var t=270-2.7*parseInt(this.val.ratio);t-!1&&(t+=.01);var e=y.a.select("#"+this.uid);e.stop().animate({start:t},300)}},addSnapPlugin:function(){y.a.plugin(function(t,e,n,a){n.prototype.arc=function(e){var n=this.path();n.attr("shapeType","arc");var a=this.filter(t.filter.shadow(1,1,.9,"#000000",1));return n.attr({filter:a}),e.w-=10,e.h-=10,e.sw=parseInt(e.w/100*e.sw),e.w=parseInt(e.w),e.h=parseInt(e.h),e.w/=2,e.h/=2,e.r=e.w-e.sw/2,e.w+=5,e.h+=5,n.attr(e),n};var s="M{w},{h}U{r},{start},{end}",i={w:0,h:0,r:0,start:0,end:0,sw:0};function r(){if("path"===this.type&&"arc"===this.attr("shapeType")){for(var e in i)i[e]=this.attr(e)||0;i.start-i.end%360===0&&(i.end-=.01),this.attr("path",t.format(s,i)),this.attr("strokeWidth",i.sw),this.attr("class","arc-container"),this.attr("fill","none")}}eve.on("snap.util.attr.x",r)(1),eve.on("snap.util.attr.y",r)(1),eve.on("snap.util.attr.r",r)(1),eve.on("snap.util.attr.start",r)(1),eve.on("snap.util.attr.end",r)(1),eve.on("snap.util.attr.sw",r)(1)})}},mounted:function(){this.value&&(this.pluginAdded||(this.addSnapPlugin(),this.pluginAdded=!0),this.init())}},x=w,C=(n("4949"),Object(d["a"])(x,v,m,!1,null,"0bf0f855",null)),O=C.exports,M={name:"Partylist",components:{Api:h,Meter:O},data:function(){return{party:[],p1:null,p2:null,p3:null,p4:null,p5:null,p6:null,p7:null,p8:null}},watch:{party:function(){this.p1=this.party[0],this.p2=this.party[1],this.p3=this.party[2],this.p4=this.party[3],this.p5=this.party[4],this.p6=this.party[5],this.p7=this.party[6],this.p8=this.party[7]}},props:["value"],computed:{mode:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},mounted:function(){}},j=M,k=(n("d0b5"),Object(d["a"])(j,r,o,!1,null,null,null)),L=k.exports,P={name:"app",components:{Partylist:L},data:function(){return{mode:"",btn:"□"}},methods:{bgToggle:function(){this.$refs.app.classList.contains("trans")?(this.$refs.app.classList.remove("trans"),this.btn="□"):(this.$refs.app.classList.add("trans"),this.btn="■")}}},$=P,S=(n("034f"),Object(d["a"])($,s,i,!1,null,null,null)),E=S.exports,A=n("2ef0"),I=n.n(A);window._=I.a,a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(E)}}).$mount("#app")},"64a9":function(t,e,n){},"9ad1":function(t,e,n){},d0b5:function(t,e,n){"use strict";var a=n("9ad1"),s=n.n(a);s.a}});
//# sourceMappingURL=app.17df0314.js.map