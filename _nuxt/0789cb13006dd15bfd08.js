(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{501:function(e,t,r){"use strict";r.r(t);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),l=r(15),c=r(20),o=r(43),d=r.n(o);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}var v,f,h,y,k={data:function(){return{valid:!0,loading:!1,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],pcActivities:[{id:1,title:"Clinical Servies",count:12,icon:"list",path:"/admin/departments/patient_care_activities"},{id:2,title:"Emergency Services",count:5,icon:"users",path:"/admin/departments/patient_care_activities/emergency"},{id:3,title:"Diagnostic Services",count:8,icon:"bolt",path:"/admin/departments/patient_care_activities/diagnostic"},{id:4,title:"Clinical Procedures",count:14,icon:"cog",path:"/admin/departments/patient_care_activities/special"}],emergency:{admissions:0,annualYear:0,deaths:0,departmentId:0,externalRef:0,internalRef:0,registration:0,status:"VALID",userProfileId:0},editedItem:{admissions:0,annualYear:0,deaths:0,departmentId:0,externalRef:0,internalRef:0,registration:0,status:"VALID",userProfileId:0},deletedItem:{admissions:0,annualYear:0,deaths:0,departmentId:0,externalRef:0,internalRef:0,registration:0,status:"VALID",userProfileId:0},headers:[{text:"Id",align:"left",value:"id"},{text:"Admissions",value:"admissions"},{text:"Registration",value:"registration"},{text:"Deaths",value:"deaths"},{text:"Internal Ref",value:"internalRef"},{text:"External Ref",value:"externalRef"},{text:"Actions",value:"action",sortable:!1}],selectedYear:0,patientType:["IN_PATIENT","OUT_PATIENT"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!",dialog:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(t){Object(l.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(c.c)({success:function(e){return e.emergency.emergencyData.status},emergencyData:function(e){return e.emergency.emergencyData.result},errorData:function(e){return e.emergency.emergencyData.error},selectedYear:function(e){return e.selectedYear}}),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(e){e||this.close()}},fetch:(y=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=r.state.user.userProfile.result.departmentId,l="departmentId.equals=".concat(n,"&status.notEquals=DELETED"),e.next=6,r.dispatch("emergency/setEmergencyData",{qs:l});case 6:case"end":return e.stop()}},e)})),function(e){return y.apply(this,arguments)}),mounted:function(){this.reset(),this.emergency.annualYear=this.$store.state.selectedYear,this.selectedYear=this.$store.state.selectedYear,this.reloadData()},methods:{addEmergency:(h=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.form.validate()&&(this.emergency.annualYear=this.selectedYear,this.emergency.userProfileId=this.$store.state.user.userProfile.result.userId,this.emergency.departmentId=this.$store.state.user.userProfile.result.departmentId,t=this.emergency,this.$store.dispatch("emergency/addEmergency",t).then(function(e){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(e){r.snackbar=!0,r.submitMessage=e}));case 1:case"end":return e.stop()}},e,this)})),function(){return h.apply(this,arguments)}),reloadData:(f=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.$store.state.user.userProfile.result.departmentId,r="departmentId.equals=".concat(t,"&status.notEquals=DELETED&annualYear.equals=").concat(this.selectedYear),e.next=5,this.$store.dispatch("emergency/setEmergencyData",{qs:r});case 5:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)}),reloadByYear:(v=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,t=this.$store.state.user.userProfile.result.departmentId,r="departmentId.equals=".concat(t,"&status.notEquals=DELETED&annualYear.equals=").concat(this.selectedYear),e.next=6,this.$store.dispatch("emergency/setEmergencyData",{qs:r});case 6:this.loading=!1;case 7:case"end":return e.stop()}},e,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(e){this.editedIndex=this.emergencyData.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this;this.emergencyData.indexOf(e);this.deletedItem=Object.assign({},e),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("emergency/updateEmergency",r).then(function(e){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.emergencyData=Object.assign({},e.defaultItem),e.editedIndex=-1},300)},save:function(){var e=this;if(this.$refs.editedForm.validate()){if(this.editedIndex>-1){var t=this.editedItem;console.log(t);this.$store.dispatch("emergency/updateEmergency",t).then(function(t){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})}else console.log(this.emergencyData.push(this.editedItem));this.close()}}}},x=r(3),component=Object(x.a)(k,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[e._v("\n\t\t\t\t\t\t\tPatient Care  Activities\n\t\t\t\t\t\t")])])]),e._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{attrs:{items:e.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:e.changeReportingYear},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}})],1)])]),e._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},e._l(e.pcActivities,function(t,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:t.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":t.icon}}),e._v(" "+e._s(t.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),e._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[r("h3",[r("span",{staticClass:"frm-title"},[e._v("Emergency Services")])])]),e._v(" "),r("v-col",{attrs:{cols:"6",md:"4"}})],1),e._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Registrations",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.emergency.registration,callback:function(t){e.$set(e.emergency,"registration",t)},expression:"emergency.registration"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Admissions",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.emergency.admissions,callback:function(t){e.$set(e.emergency,"admissions",t)},expression:"emergency.admissions"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Deaths",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.emergency.deaths,callback:function(t){e.$set(e.emergency,"deaths",t)},expression:"emergency.deaths"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - Internal",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.emergency.internalRef,callback:function(t){e.$set(e.emergency,"internalRef",t)},expression:"emergency.internalRef"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - External",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.emergency.externalRef,callback:function(t){e.$set(e.emergency,"externalRef",t)},expression:"emergency.externalRef"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),e._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:e.reset}},[e._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),e._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:e.addEmergency}},[e._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),e._v(" "),r("v-snackbar",{attrs:{timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),e._v(" "),r("hr"),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.emergencyData,"sort-by":"id","sort-desc":"",loading:e.loading,"loading-text":"Loading... Please wait"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[e._v("Emergency Services")])]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:e.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(t){return e.reloadByYear()}},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-toolbar-title",[e._v("Emergency Services | Edit Form")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:e.close}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),e._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:e.save}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),e._v(" "),r("v-card-text",[r("v-form",{ref:"editedForm",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{staticClass:"justify-end mt-6",attrs:{items:e.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},model:{value:e.editedItem.annualYear,callback:function(t){e.$set(e.editedItem,"annualYear",t)},expression:"editedItem.annualYear"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Registrations",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.editedItem.registration,callback:function(t){e.$set(e.editedItem,"registration",t)},expression:"editedItem.registration"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Admissions",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.editedItem.admissions,callback:function(t){e.$set(e.editedItem,"admissions",t)},expression:"editedItem.admissions"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Deaths",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.editedItem.deaths,callback:function(t){e.$set(e.editedItem,"deaths",t)},expression:"editedItem.deaths"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - Internal",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.editedItem.internalRef,callback:function(t){e.$set(e.editedItem,"internalRef",t)},expression:"editedItem.internalRef"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Referrals - External",required:"",type:"number",rules:[function(e){return!!e||"Item is required"}]},model:{value:e.editedItem.externalRef,callback:function(t){e.$set(e.editedItem,"externalRef",t)},expression:"editedItem.externalRef"}})],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var n=t.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(t){return e.editItem(n)}}}),e._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(t){return e.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[e._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);t.default=component.exports}}]);