(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{293:function(t,e,n){var content=n(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("264024ef",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";var c=n(293);n.n(c).a},305:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".download-icon{margin-top:105px!important}",""])},510:function(t,e,n){"use strict";n.r(e);n(36),n(23),n(11),n(14),n(4),n(24),n(7);var c=n(0),r=n(15),o=n(20);n(59);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var d,v={head:{title:"ARMS - Dashboard"},data:function(){return{underConstruction:!0,cardBFullScreen:!1,sentenceA:"Fugpon fuzne gipaj nutbof zozoona weg gunujfi zigut bew duwib fab naktof gov bovudof ipdufo hem buvagci ze ta lazse ujvuj eje ziz huma utfarid sil tewepgod cuiluwu zuzlup lol cohdihwa eha ko desil ekajaihi naczipo gof cavuv haheses nov jogra cimiguegu mo huw mas zemiruf elva ugaaf upeca ra zeha waf fifviwub lajve coge uc feug feslo sucijuf ewri.",sentenceB:"Uco enemih zu vad soulago se mup gorasaj macom was rukka vihud zaja keljev pepilag ilakislo sujfiguj rief nig zuzjec gu upvam hiebe zif miweb oja kuwletpo miv cu us womor taftumto overoke lup cekjud upito kabjevuk dufnilsi pummapter mofemalep bogugleb tu owe no diceciv rarihe he hulnuguje mufonu acu zogven vofeno ikli gurfap jijijga macnemlil no ra pu witop enomi sozigu kufur wekrodufu bidvi jojfof bozinwiz palujopu leso sege zasca hibol futam fiwaw miel behbor negihzek ciozme ut ji.",snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!",reportYears:["2017-2018","2018-2019","2019-2020"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.c)({fullUser:function(t){return t.user.fullUser}})),fetch:(d=Object(c.a)(regeneratorRuntime.mark(function t(e){var n,c,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,c=n.state.auth.user.id,t.next=4,n.dispatch("user/setFullUser",{id:c}).catch(function(t){r.snackbar=!0,r.submitMessage=t});case 4:case"end":return t.stop()}},t)})),function(t){return d.apply(this,arguments)}),mounted:function(){"DEPARTMENT"===this.$store.state.auth.user.userType?this.$router.push("/admin/departments/about"):"FACULTY"===this.$store.state.auth.user.userType?this.$router.push("/admin/activities/faculties/"):this.$router.push("/admin/activities/students/")}},f=(n(304),n(3)),component=Object(f.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("h1",{staticClass:"uk-text-center"},[t._v("\n\t\t\tConsolidated Annual Report\n\t\t")]),t._v(" "),n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"9"}},[n("v-select",{attrs:{items:t.reportYears,label:"Select Year"}})],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("a",{attrs:{href:"/dummy.pdf",alt:"dummy"}},[n("img",{staticClass:"uk-align-right@s",attrs:{src:"/download-icon.png",alt:"Download Report",width:"15%"}})])])],1),t._v(" "),n("div",{staticClass:"uk-child-width-1-1 uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("ScCard",{attrs:{"full-screen":t.cardBFullScreen}},[n("ScCardHeader",{attrs:{separator:""}},[n("div",{staticClass:"uk-flex uk-flex-middle"},[n("div",{staticClass:"uk-flex-1"},[n("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\t\tReporting Year\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("ScCardMeta",[n("time",{attrs:{datetime:"2019-01-01"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t2019-20\n\t\t\t\t\t\t\t\t\t")])])],1),t._v(" "),n("ScCardActions",[n("a",{staticClass:"sc-actions-icon mdi mdi-fullscreen",class:{"mdi-fullscreen":!t.cardBFullScreen,"mdi-fullscreen-exit":t.cardBFullScreen},attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardBFullScreen=!t.cardBFullScreen}}})])],1)]),t._v(" "),t.underConstruction?n("scCardBody",[n("h2",[t._v(" Please Wait... ")])]):n("ScCardBody",[n("ul",{staticClass:"uk-accordion-alt",attrs:{"data-uk-accordion":"multiple: true, collapsible: true"}},[n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tAbout the Department\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tPatient Care Activities\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tHRD\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tFaculty / Staff\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tProgrammes / Events\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tPresentations / Posters\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tPublic Engagement\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tResearch Activities\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tPublications\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tRecognitions\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("h3",{staticClass:"uk-accordion-title"},[t._v("\n\t\t\t\t\t\t\t\t\tTheses / Dissertions\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-accordion-content"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.sentenceB)+"\n\t\t\t\t\t\t\t\t")])])])])],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t"),n("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\tClose\n\t\t\t\t\t")])],1),t._v(" "),n("pre",[t._v(t._s(t.fullUser))])],1)])],1)])},[],!1,null,null,null);e.default=component.exports}}]);