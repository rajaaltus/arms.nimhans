(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{502:function(e,t,r){var content=r(520);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("4c2652aa",content,!0,{sourceMap:!1})},519:function(e,t,r){"use strict";var n=r(502);r.n(n).a},520:function(e,t,r){(t=r(14)(!1)).push([e.i,".disp[data-v-5d218030]{font-size:15px}.disp[data-v-5d218030],.disp-icon[data-v-5d218030]{color:#fff;font-weight:400}.disp-icon[data-v-5d218030]{font-size:24px}",""]),e.exports=t},521:function(e,t,r){"use strict";var n={data:function(){return{pcActivities:[{id:1,title:"Clinical Servies",count:12,icon:"mdi-hospital-box",path:"/admin/departments/pcActivities/clinical"},{id:2,title:"Emergency Services",count:5,icon:"mdi-bed",path:"/admin/departments/pcActivities/emergency"},{id:3,title:"Diagnostic Services",count:8,icon:"mdi-needle",path:"/admin/departments/pcActivities/diagnostic"},{id:4,title:"Special Clinics / Services / Procedures",count:14,icon:"mdi-loupe",path:"/admin/departments/pcActivities/special"},{id:5,title:"OT & Other Procedures",count:12,icon:"mdi-fan",path:"/admin/departments/pcActivities/otservice"}]}}},o=(r(519),r(42)),c=r(47),l=r.n(c),d=r(98),m=r(200),v=r(120),f=r(36),h=r(204),y=r(108),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",{staticStyle:{"border-radius":"0"},attrs:{flat:"",color:"#41704e"}},[r("v-list-item-group",{attrs:{color:"#ffde00"}},e._l(e.pcActivities,(function(t,i){return r("v-list-item",{key:i,attrs:{to:t.path}},[r("v-list-item-icon",{staticClass:"pl-2 mr-3"},[r("v-icon",{staticClass:"disp-icon",domProps:{textContent:e._s(t.icon)}})],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"disp",domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1)}),[],!1,null,"5d218030",null);t.a=component.exports;l()(component,{VIcon:d.a,VList:m.a,VListItem:v.a,VListItemContent:f.a,VListItemGroup:h.a,VListItemIcon:y.a,VListItemTitle:f.c})},598:function(e,t,r){var content=r(773);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("1f5906fb",content,!0,{sourceMap:!1})},599:function(e,t,r){var content=r(775);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("f3c7444c",content,!0,{sourceMap:!1})},772:function(e,t,r){"use strict";var n=r(598);r.n(n).a},773:function(e,t,r){(t=r(14)(!1)).push([e.i,".frm-title[data-v-5f930b6d]{border-left:5px solid #e16949;padding:3px 10px}",""]),e.exports=t},774:function(e,t,r){"use strict";var n=r(599);r.n(n).a},775:function(e,t,r){(t=r(14)(!1)).push([e.i,".cust-icon[data-v-22ae56d6]{font-size:24px;color:#ff7e00;padding-right:10px}",""]),e.exports=t},820:function(e,t,r){"use strict";r.r(t);r(20);var n=r(0),o=r(66),c=r(132),l=r(214),d=r(521),m=r(31),v=r.n(m),f={data:function(){return{emergency:{annual_year:0,registrations:null,admissions:null,deaths:null,external_ref:null,internal_ref:null,deleted:!1,department:null}}},methods:{addEmergency:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.form.validate()&&(e.emergency.annual_year=e.$store.state.selectedYear,e.emergency.department=e.$store.state.auth.user.department,r=e.emergency,console.log(r),e.$store.dispatch("emergency/addEmergency",r).then((function(t){v.a.fire({title:"Success",text:"Added Successfully!",icon:"success",showConfirmButton:!1,timer:1500}),e.reset(),e.reloadData()})).catch((function(t){e.snackbar=!0,e.submitMessage=t})));case 1:case"end":return t.stop()}}),t)})))()},reloadData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,"",r="department.id=".concat(e.$store.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(e.$store.state.selectedYear),t.next=5,e.$store.dispatch("emergency/setEmergencyData",{qs:r});case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},reset:function(){this.$refs.form.reset()}}},h=r(42),y=r(47),x=r.n(y),_=r(110),k=r(471),C=r(483),I=r(488),V=r(472),D=r(274),w=r(72),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Registrations",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.emergency.registrations,callback:function(t){e.$set(e.emergency,"registrations",t)},expression:"emergency.registrations"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Admissions",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.emergency.admissions,callback:function(t){e.$set(e.emergency,"admissions",t)},expression:"emergency.admissions"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Deaths",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.emergency.deaths,callback:function(t){e.$set(e.emergency,"deaths",t)},expression:"emergency.deaths"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Referrals - Internal",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.emergency.internal_ref,callback:function(t){e.$set(e.emergency,"internal_ref",t)},expression:"emergency.internal_ref"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Referrals - External",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.emergency.external_ref,callback:function(t){e.$set(e.emergency,"external_ref",t)},expression:"emergency.external_ref"}})],1)],1)],1),e._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"mr-2",attrs:{small:"",color:"#d74f4f",dark:""},on:{click:e.reset}},[e._v("\n        Reset\n      ")]),e._v(" "),r("v-btn",{attrs:{small:"",color:"#57a727",dark:""},on:{click:e.addEmergency}},[e._v("\n        Submit\n      ")])],1)],1)],1)}),[],!1,null,null,null),E=component.exports;x()(component,{VBtn:_.a,VCol:k.a,VContainer:C.a,VForm:I.a,VRow:V.a,VSpacer:D.a,VTextField:w.a});r(17),r(12),r(9),r(7),r(13);var O=r(4);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var P={props:["reportYears"],data:function(){return{valid:!0,loading:!1,annualYear:0,editedItem:{annual_year:0,registrations:0,admissions:0,deaths:0,external_ref:0,internal_ref:0,deleted:!1,department:0},deletedItem:{annual_year:0,registrations:0,admissions:0,deaths:0,external_ref:0,internal_ref:0,deleted:!1,department:0},headers:[{text:"Updated",align:"left",value:"updated_at"},{text:"Registration",value:"registrations"},{text:"Admissions",value:"admissions"},{text:"Deaths",value:"deaths"},{text:"Internal Ref",value:"internal_ref"},{text:"External Ref",value:"external_ref"},{text:"Actions",value:"action",sortable:!1}],dialog:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({emergencyData:function(e){return e.emergency.emergencyData}})),mounted:function(){this.annualYear=this.$store.state.selectedYear},watch:{dialog:function(e){e||this.close()}},methods:{reloadData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,"",r="department.id=".concat(e.$store.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(e.annualYear),t.next=5,e.$store.dispatch("emergency/setEmergencyData",{qs:r});case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.emergencyData.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this;this.emergencyData.indexOf(e);this.deletedItem=Object.assign({},e),this.deletedItem.deleted=!0;var r=this.deletedItem;console.log(r),confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("emergency/updateEmergency",r).then((function(e){v.a.fire({title:"Success",text:"Deleted Successfully!",icon:"success",showConfirmButton:!1,timer:1500}),t.reloadData()})).catch((function(e){t.snackbar=!0,t.submitMessage=e}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.emergencyData=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this;if(this.$refs.editedForm.validate()){if(this.editedIndex>-1){var t=this.editedItem;this.$store.dispatch("emergency/updateEmergency",t).then((function(t){v.a.fire({title:"Success",text:"Updated Successfully!",icon:"success",showConfirmButton:!1,timer:1500}),e.reloadData()})).catch((function(t){e.snackbar=!0,e.submitMessage=t}))}else console.log(this.emergencyData.push(this.editedItem));this.close()}}}},T=(r(772),r(97)),j=r(26),S=r(823),Y=r(266),R=r(198),A=r(98),N=r(475),F=r(60),L=r(99),M=r(473),z=Object(h.a)(P,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-data-table",{staticClass:"elevation-1",staticStyle:{"border-radius":"0"},attrs:{headers:e.headers,items:e.emergencyData,"sort-by":"updated_at","sort-desc":"",loading:e.loading,"loading-text":"Loading... Please wait"},scopedSlots:e._u([{key:"item.updated_at",fn:function(t){var r=t.item;return[e._v("\n      "+e._s(e.$moment(r.updated_at).fromNow())+"\n    ")]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",staticStyle:{"border-radius":"0"},attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[e._v("Emergency Services")])]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{color:"green",items:e.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(t){return e.reloadData()}},model:{value:e.annualYear,callback:function(t){e.annualYear=t},expression:"annualYear"}}),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-tooltip",{attrs:{right:"",color:"blue-grey darken-2"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{"x-small":"",fab:"",color:"green",dark:""},on:{click:e.reloadData}},n),[r("v-icon",[e._v("mdi-reload")])],1)]}}])},[e._v(" "),r("span",[e._v("Reload Data")])]),e._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",color:"#41704e"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-toolbar-title",[e._v("Emergency Services")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:e.close}},[e._v("\n                  Cancel\n                ")]),e._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:e.save}},[e._v("\n                  Save\n                ")])],1)],1),e._v(" "),r("v-card-text",[r("v-form",{ref:"editedForm",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Registrations",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.editedItem.registrations,callback:function(t){e.$set(e.editedItem,"registrations",t)},expression:"editedItem.registrations"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Admissions",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.editedItem.admissions,callback:function(t){e.$set(e.editedItem,"admissions",t)},expression:"editedItem.admissions"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Deaths",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.editedItem.deaths,callback:function(t){e.$set(e.editedItem,"deaths",t)},expression:"editedItem.deaths"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Referrals - Internal",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.editedItem.internal_ref,callback:function(t){e.$set(e.editedItem,"internal_ref",t)},expression:"editedItem.internal_ref"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{color:"green",label:"Referrals - External",required:"",type:"number",rules:[function(e){return!!e||"Enter the Total No. of Patients / Cases"}]},model:{value:e.editedItem.external_ref,callback:function(t){e.$set(e.editedItem,"external_ref",t)},expression:"editedItem.external_ref"}})],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var n=t.item;return[r("v-icon",{attrs:{centre:"",color:"green"},on:{click:function(t){return e.editItem(n)}}},[e._v("mdi-pencil-box")]),e._v(" "),r("v-icon",{attrs:{centre:"",color:"error"},on:{click:function(t){return e.deleteItem(n)}}},[e._v("mdi-delete-circle")])]}}])})],1)}),[],!1,null,"5f930b6d",null),B=z.exports;x()(z,{VBtn:_.a,VCard:T.a,VCardText:j.b,VCol:k.a,VContainer:C.a,VDataTable:S.a,VDialog:Y.a,VDivider:R.a,VForm:I.a,VIcon:A.a,VRow:V.a,VSelect:N.a,VSpacer:D.a,VTextField:w.a,VToolbar:F.a,VToolbarItems:L.a,VToolbarTitle:L.b,VTooltip:M.a});var H={head:function(){return{title:"Emergency Services"}},components:{PageHeader:c.a,YearDialog:l.a,PatientCare:d.a,EmergencyForm:E,EmergencyTable:B},data:function(){return{}},computed:{emergencyData:function(){return this.$store.state.emergency.emergencyData},reportYears:function(){return this.$store.state.reportYears}},fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,"",n="department.id=".concat(r.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(r.state.selectedYear),t.next=5,r.dispatch("emergency/setEmergencyData",{qs:n});case 5:case"end":return t.stop()}}),t)})))()}},J=(r(774),r(795)),U=r(849),G=r(827),K=Object(h.a)(H,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-tabs",{attrs:{flat:"","background-color":"#323232",color:"#6ac447",dark:""}},[r("v-tab",[r("span",{staticClass:"mdi mdi-note-outline cust-icon"}),e._v("\n      Patient Care Activities\n    ")]),e._v(" "),r("v-tab",[r("span",{staticClass:"mdi mdi-table cust-icon"}),e._v("\n      Records\n    ")]),e._v(" "),r("v-tab-item",[r("v-card",{attrs:{tile:""}},[r("v-card-text",[0==e.$store.state.selectedYear?r("YearDialog"):e._e(),e._v(" "),r("PageHeader",{staticClass:"ml-0 pb-0 pt-0",attrs:{title:e.$metaInfo.title,reportYears:e.reportYears,selectedYear:e.$store.state.selectedYear}}),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3",lg:"3"}},[r("v-card",{staticClass:"mx-auto"},[r("PatientCare")],1)],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"9",lg:"9"}},[r("EmergencyForm")],1)],1)],1)],1)],1),e._v(" "),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticClass:"px-0 py-1"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("EmergencyTable",{attrs:{reportYears:e.reportYears,annualYear:2020,emergencyData:e.emergencyData}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"22ae56d6",null);t.default=K.exports;x()(K,{VCard:T.a,VCardText:j.b,VCol:k.a,VRow:V.a,VTab:J.a,VTabItem:U.a,VTabs:G.a})}}]);