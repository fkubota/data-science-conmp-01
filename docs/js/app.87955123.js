(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{staticClass:"title",attrs:{color:"primary",dark:"",app:""}},[n("v-toolbar-title",[e._v("Data Science Competition #1")]),n("v-spacer"),n("v-btn",{attrs:{"x-large":"",icon:"",dark:""},on:{click:e.getRankingTable}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-cached")])],1)],1),n("v-content",[n("v-container",[n("v-row",[n("v-col",[n("v-select",{attrs:{items:e.names,label:"select your name"},model:{value:e.selection_name,callback:function(t){e.selection_name=t},expression:"selection_name"}})],1),n("v-col",[n("v-file-input",{attrs:{"show-size":"",label:"selec your submission file",accept:".csv"},on:{change:e.fileSelect}})],1)],1),n("v-row",{attrs:{justify:"end"}},[n("v-btn",{attrs:{"x-large":"",color:"primary",outlined:"",target:"#de"},on:{click:e.getScore}},[e._v("submit")])],1),n("v-list-item-title",{staticClass:"title grey--text text--darken-2",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[e._v(" your submission score is "),n("h2",[n("font",{attrs:{color:"blue"}},[e._v(e._s(e.score))])],1)]),n("v-divider"),n("v-list-item-title",{staticClass:"title grey--text text--darken-2",staticStyle:{"margin-top":"30px"},attrs:{align:"center"}},[e._v(" Leaderboard ")]),n("v-data-table",{staticClass:"elevation-1 category-table",staticStyle:{"margin-left":"100px","margin-right":"100px"},attrs:{headers:e.headers,items:e.participants,"items-per-page":100},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.code))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.name))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.workerType))])]}}])})],1)],1)],1)},i=[],o=(n("4160"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1")),s=n("bc3a"),c=n.n(s),l={data:function(){return{heroku_addr:"https://data-science-comp-01.herokuapp.com/",test_api:"test_api",score:"...",hello:"",subData:"",rankingTable:"",sortBy:"rank",sortDesc:!1,selection_name:"",names:["A","B","C"],dropdown_font:["Arial","Calibri","Courier","Verdana"],headers:[{text:"#",align:"center",sortable:!1,value:"rank"},{text:"Name",value:"name"},{text:"Score",value:"score"},{text:"N_Submission",value:"n_submission"}],participants:[{rank:"...",name:"...",score:"...",n_submission:"..."}]}},methods:{testApi:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("func-↓testApi"),t.next=3,c.a.post(e.heroku_addr+"test_func",{test:"hello_api"}).then((function(t){e.test_api=t.data.test_return}));case 3:case"end":return t.stop()}}),t)})))()},readFileAsync:function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=n,a.readAsText(e)}))},fileSelect:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("func-↓fileSelect"),n.prev=1,n.next=4,t.readFileAsync(e);case 4:a=n.sent,t.subData=a,n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getScore:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("func-↓getScore"),t.next=3,c.a.post(e.heroku_addr+"get_score",{arg_subData:e.subData,arg_selection_name:e.selection_name}).then((function(t){var n=t.data.score;"bad_submission"==n?alert("invalid submission style"):""==e.selection_name?alert("select your name"):(e.score=n,e.getRankingTable())}));case 3:case"end":return t.stop()}}),t)})))()},getRankingTable:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("func-↓getRankingTable"),t.next=3,c.a.post(e.heroku_addr+"get_ranking_table",{}).then((function(t){e.rankingTable=t.data.ranking_table}));case 3:e.updateRankingTable();case 4:case"end":return t.stop()}}),t)})))()},getParticipants:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("func-↓getParticipants"),t.next=3,c.a.post(e.heroku_addr+"get_participants",{}).then((function(t){var n=t.data.participants,a=n.split(",");e.names=a}));case 3:case"end":return t.stop()}}),t)})))()},updateRankingTable:function(){var e=this;console.log("func-↓updateRankingTable");var t=[],n=this.rankingTable.split("\n");n.forEach((function(n){var a=n.split(","),r={rank:a[0],name:a[1],score:a[2],n_submission:a[3]};t.push(r),e.participants=t}))}},created:function(){console.log("func-↓mounted"),console.log(this.participants),this.getParticipants(),this.getRankingTable()}},u=l,p=n("2877"),f=n("6544"),d=n.n(f),g=n("7496"),v=n("40dc"),b=n("8336"),m=n("62ad"),h=n("a523"),_=n("a75b"),k=n("8fea"),x=n("ce7e"),y=n("23a7"),w=n("132d"),R=n("5d23"),S=n("0fd9"),T=n("b974"),O=n("2fa4"),j=n("2a7f"),V=Object(p["a"])(u,r,i,!1,null,null,null),C=V.exports;d()(V,{VApp:g["a"],VAppBar:v["a"],VBtn:b["a"],VCol:m["a"],VContainer:h["a"],VContent:_["a"],VDataTable:k["a"],VDivider:x["a"],VFileInput:y["a"],VIcon:w["a"],VListItemTitle:R["b"],VRow:S["a"],VSelect:T["a"],VSpacer:O["a"],VToolbarTitle:j["a"]});var P=n("f309");a["a"].use(P["a"]);var A=new P["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:A,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.87955123.js.map