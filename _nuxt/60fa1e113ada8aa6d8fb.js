(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{500:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),c=r(15),o=r(20),l=r(59),d=r.n(l);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,f,h,y,_,k={data:function(){return{valid:!0,loading:!1,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],pcActivities:[{id:1,title:"Clinical Servies",count:12,icon:"list",path:"/admin/departments/patient_care_activities"},{id:2,title:"Emergency Services",count:5,icon:"users",path:"/admin/departments/patient_care_activities/emergency"},{id:3,title:"Diagnostic Services",count:8,icon:"bolt",path:"/admin/departments/patient_care_activities/diagnostic"},{id:4,title:"Clinical Procedures",count:14,icon:"cog",path:"/admin/departments/patient_care_activities/special"},{id:5,title:"OT & Other Services",count:12,icon:"link",path:"/admin/departments/patient_care_activities/otservice"}],emergency:{annual_year:0,registrations:0,admissions:0,deaths:0,external_ref:0,internal_ref:0,deleted:!1,department:0},editedItem:{annual_year:0,registrations:0,admissions:0,deaths:0,external_ref:0,internal_ref:0,deleted:!1,department:0},deletedItem:{annual_year:0,registrations:0,admissions:0,deaths:0,external_ref:0,internal_ref:0,deleted:!1,department:0},headers:[{text:"Updated",align:"left",value:"updated_at"},{text:"Registration",value:"registrations"},{text:"Admissions",value:"admissions"},{text:"Deaths",value:"deaths"},{text:"Internal Ref",value:"internal_ref"},{text:"External Ref",value:"external_ref"},{text:"Actions",value:"action",sortable:!1}],selectedYear:0,snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!",dialog:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(c.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.c)({emergencyData:function(t){return t.emergency.emergencyData}}),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(_=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n="department.id=".concat(r.state.auth.user.department,"&deleted_ne=true"),t.next=5,r.dispatch("emergency/setEmergencyData",{qs:n});case 5:case"end":return t.stop()}},t)})),function(t){return _.apply(this,arguments)}),mounted:function(){this.reset(),0===this.$store.state.selectedYear?this.$router.push("/admin/departments/patient_care_activities"):this.selectedYear=this.$store.state.selectedYear,this.emergency.annual_year=this.$store.state.selectedYear,this.selectedYear=this.$store.state.selectedYear,this.reloadData()},methods:{changeReportingYear:(y=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:this.reloadData();case 3:case"end":return t.stop()}},t,this)})),function(){return y.apply(this,arguments)}),addEmergency:(h=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.emergency.annual_year=this.selectedYear,this.emergency.department=this.$store.state.auth.user.department,e=this.emergency,console.log(e),this.$store.dispatch("emergency/addEmergency",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),reloadData:(f=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e="department.id=".concat(this.$store.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(this.selectedYear),t.next=5,this.$store.dispatch("emergency/setEmergencyData",{qs:e});case 5:this.loading=!1;case 6:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),reloadByYear:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e="department.id=".concat(this.$store.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(this.selectedYear),t.next=5,this.$store.dispatch("emergency/setEmergencyData",{qs:e});case 5:this.loading=!1;case 6:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.emergencyData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.emergencyData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.deleted=!0;var r=this.deletedItem;console.log(r),confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("emergency/updateEmergency",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.emergencyData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.$refs.editedForm.validate()){if(this.editedIndex>-1){var e=this.editedItem;this.$store.dispatch("emergency/updateEmergency",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.emergencyData.push(this.editedItem));this.close()}}}},x=r(3),component=Object(x.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tPatient Care  Activities\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.pcActivities,function(e,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[r("h3",[r("span",{staticClass:"frm-title"},[t._v("Emergency Services")])])]),t._v(" "),r("v-col",{attrs:{cols:"6",md:"4"}})],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Registrations *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.emergency.registrations,callback:function(e){t.$set(t.emergency,"registrations",e)},expression:"emergency.registrations"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Admissions *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.emergency.admissions,callback:function(e){t.$set(t.emergency,"admissions",e)},expression:"emergency.admissions"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Deaths *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.emergency.deaths,callback:function(e){t.$set(t.emergency,"deaths",e)},expression:"emergency.deaths"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - Internal *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.emergency.internal_ref,callback:function(e){t.$set(t.emergency,"internal_ref",e)},expression:"emergency.internal_ref"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - External *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.emergency.external_ref,callback:function(e){t.$set(t.emergency,"external_ref",e)},expression:"emergency.external_ref"}})],1)],1),t._v(" "),r("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.addEmergency}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.emergencyData,"sort-by":"updated_at","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.updated_at",fn:function(e){var r=e.item;return[t._v("\n\t\t\t\t\t"+t._s(t.$moment(r.updated_at).fromNow())+"\n\t\t\t\t")]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Emergency Services")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadByYear()}},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Emergency Services | Edit Form")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"editedForm",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Registrations *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.editedItem.registrations,callback:function(e){t.$set(t.editedItem,"registrations",e)},expression:"editedItem.registrations"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Admissions *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.editedItem.admissions,callback:function(e){t.$set(t.editedItem,"admissions",e)},expression:"editedItem.admissions"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Deaths *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.editedItem.deaths,callback:function(e){t.$set(t.editedItem,"deaths",e)},expression:"editedItem.deaths"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - Internal *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.editedItem.internal_ref,callback:function(e){t.$set(t.editedItem,"internal_ref",e)},expression:"editedItem.internal_ref"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - External *",required:"",type:"number",rules:[function(t){return!!t||"Enter the Total No. of Patients / Cases"}]},model:{value:t.editedItem.external_ref,callback:function(e){t.$set(t.editedItem,"external_ref",e)},expression:"editedItem.external_ref"}})],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);