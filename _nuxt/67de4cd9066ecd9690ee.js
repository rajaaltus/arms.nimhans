(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{491:function(t,e,r){var content=r(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("6ff43496",content,!0,{sourceMap:!1})},499:function(t,e,r){"use strict";var n=r(491);r.n(n).a},500:function(t,e,r){(e=r(14)(!1)).push([t.i,".disp[data-v-5d5b0249]{font-size:15px}.disp[data-v-5d5b0249],.disp-icon[data-v-5d5b0249]{color:#fff;font-weight:400}.disp-icon[data-v-5d5b0249]{font-size:24px}",""]),t.exports=e},503:function(t,e,r){"use strict";r(17),r(12),r(9),r(7),r(13),r(20);var n=r(0),o=r(4),c=r(66);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["activities"])),mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},d=(r(499),r(42)),v=r(47),m=r.n(v),O=r(98),y=r(200),h=r(120),j=r(36),w=r(204),x=r(108),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticStyle:{"border-radius":"0"},attrs:{flat:"",color:"#41704e"}},[r("v-list-item-group",{attrs:{color:"#ffde00"}},t._l(t.activities,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.path}},[r("v-list-item-icon",{staticClass:"pl-2 mr-3"},[r("v-icon",{staticClass:"disp-icon",domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"disp",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)}),[],!1,null,"5d5b0249",null);e.a=component.exports;m()(component,{VIcon:O.a,VList:y.a,VListItem:h.a,VListItemContent:j.a,VListItemGroup:w.a,VListItemIcon:x.a,VListItemTitle:j.c})},571:function(t,e,r){var content=r(719);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4a44daae",content,!0,{sourceMap:!1})},718:function(t,e,r){"use strict";var n=r(571);r.n(n).a},719:function(t,e,r){(e=r(14)(!1)).push([t.i,".cust-icon[data-v-50179d76]{font-size:20px;color:#ff7e00;padding-right:10px}.disp[data-v-50179d76]{font-size:15px}.disp[data-v-50179d76],.disp-icon[data-v-50179d76]{color:#fff;font-weight:400}.disp-icon[data-v-50179d76]{font-size:24px}",""]),t.exports=e},842:function(t,e,r){"use strict";r.r(e);r(17),r(12),r(9),r(7),r(13),r(20);var n=r(0),o=r(4),c=r(66),l=r(132),f=r(503),d=r(214),v=r(618),m=r(619);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={head:function(){return{title:"Publications"}},components:{PageHeader:l.a,FacultyActivities:f.a,YearDialog:d.a,PublicationForm:v.a,PublicationTable:m.a},data:function(){return{selectedYear:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({staffs:function(t){return t.staffs},publicationTypes:function(t){return t.publication.publicationTypes}}),{reportYears:function(){return this.$store.state.reportYears}}),fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("setActivities");case 3:return e.next=5,r.dispatch("publication/setPublicationTypes");case 5:return"",n="department.id=".concat(r.state.auth.user.department,"&userType=FACULTY&blocked_ne=true"),e.next=9,r.dispatch("setStaffs",{qs:n});case 9:case"end":return e.stop()}}),e)})))()},methods:{changeReportingYear:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("setReportingYear",t.selectedYear);case 2:case"end":return e.stop()}}),e)})))()},setReportingYear:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("setReportingYear",t.selectedYear);case 2:case"end":return e.stop()}}),e)})))()}}},h=(r(718),r(42)),j=r(47),w=r.n(j),x=r(97),P=r(26),Y=r(471),C=r(472),R=r(795),_=r(850),T=r(827),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-tabs",{attrs:{flat:"","background-color":"#323232",color:"#6ac447",dark:""}},[r("v-tab",[r("span",{staticClass:"mdi mdi-note-outline cust-icon"}),t._v("\n      Activities & Resources\n    ")]),t._v(" "),r("v-tab",[r("span",{staticClass:"mdi mdi-table cust-icon"}),t._v("\n      Records\n    ")]),t._v(" "),r("v-tab-item",[r("v-card",{attrs:{tile:""}},[r("v-card-text",[r("PageHeader",{staticClass:"ml-0 pb-0 pt-0",attrs:{title:t.$metaInfo.title,reportYears:t.reportYears},on:{"set-year":t.setReportingYear}}),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3",lg:"3"}},[r("v-card",{staticClass:"mx-auto"},[r("FacultyActivities")],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9",lg:"9"}},[r("PublicationForm",{attrs:{dataFrom:t.staffs,publicationTypes:t.publicationTypes,section:"Select Faculty / Staff from the list"}})],1)],1)],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticClass:"px-0 py-1"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("PublicationTable",{attrs:{reportYears:t.reportYears,dataFrom:"FACULTY"}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"50179d76",null);e.default=component.exports;w()(component,{VCard:x.a,VCardText:P.b,VCol:Y.a,VRow:C.a,VTab:R.a,VTabItem:_.a,VTabs:T.a})}}]);