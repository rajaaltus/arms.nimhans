(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{504:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),c=r(15),l=r(20),o=r(43),d=r.n(o);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var m,f,h,k,y={data:function(){return{loading:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,pcActivities:[{id:1,title:"Clinical Servies",count:12,icon:"list",path:"/admin/departments/patient_care_activities"},{id:2,title:"Emergency Services",count:5,icon:"users",path:"/admin/departments/patient_care_activities/emergency"},{id:3,title:"Diagnostic Services",count:8,icon:"bolt",path:"/admin/departments/patient_care_activities/diagnostic"},{id:4,title:"Clinical Procedures",count:14,icon:"cog",path:"/admin/departments/patient_care_activities/special"}],diagnostic:{annualYear:0,departmentId:0,labServiceType:"",name:"",samplesAnalyzed:0,pcDiagnosticServicesId:3,status:"VALID",type:"IN_PATIENT",userProfileId:0},serviceType:["ROUTINE_TEST","SPECIAL_TEST"],editedItem:{annualYear:0,departmentId:0,labServiceType:"",name:"",pcDiagnosticServicesId:3,samplesAnalyzed:0,status:"VALID",type:"IN_PATIENT",userProfileId:0},deletedItem:{annualYear:0,departmentId:0,labServiceType:"",name:"",pcDiagnosticServicesId:3,samplesAnalyzed:0,status:"VALID",type:"IN_PATIENT",userProfileId:0},patientType:["IN_PATIENT","OUT_PATIENT"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!",dialog:!1,headers:[{text:"Id",align:"left",value:"id"},{text:"Lab Service Type",value:"labServiceType"},{text:"Test Name",value:"name"},{text:"Samples Analyzed",value:"samplesAnalyzed"},{text:"Approval Status",value:"approvalStatus"},{text:"Actions",value:"action",sortable:!1}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(source,!0).forEach(function(e){Object(c.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(l.c)({success:function(t){return t.diagnostic.diagnosticData.status},diagnosticData:function(t){return t.diagnostic.diagnosticData.result},errorData:function(t){return t.diagnostic.diagnosticData.error},selectedYear:function(t){return t.selectedYear}}),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(k=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.user.userProfile.result.departmentId,c="departmentId.equals=".concat(n,"&status.notEquals=DELETED"),t.next=6,r.dispatch("diagnostic/setDiagnosticData",{qs:c});case 6:case"end":return t.stop()}},t)})),function(t){return k.apply(this,arguments)}),mounted:function(){this.reset(),this.diagnostic.annualYear=this.$store.state.selectedYear,this.selectedYear=this.$store.state.selectedYear,this.reloadData()},methods:{addDiagnostic:(h=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=8;break}return this.diagnostic.annualYear=this.selectedYear,this.diagnostic.userProfileId=this.$store.state.user.userProfile.result.userId,this.diagnostic.departmentId=this.$store.state.user.userProfile.result.departmentId,e=this.diagnostic,console.log(e),t.next=8,this.$store.dispatch("diagnostic/addDiagnostic",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadByYear()}).catch(function(t){r.snackbar=!0,r.submitMessage=t});case 8:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),reloadData:(f=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$store.state.user.userProfile.result.departmentId,r="departmentId.equals=".concat(e,"&status.notEquals=DELETED&annualYear.equals=").concat(this.selectedYear),t.next=5,store.dispatch("diagnostic/setDiagnosticData",{qs:r});case 5:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),reloadByYear:(m=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,r="departmentId.equals=".concat(e,"&status.notEquals=DELETED&annualYear.equals=").concat(this.selectedYear),t.next=6,this.$store.dispatch("diagnostic/setDiagnosticData",{qs:r});case 6:this.loading=!1;case 7:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.diagnosticData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.diagnosticData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("diagnostic/updateDiagnostic",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadByYear()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.diagnosticData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.$refs.editedForm.validate()){if(this.editedIndex>-1){var e=this.editedItem;console.log(e);this.$store.dispatch("diagnostic/updateDiagnostic",e).then(function(e){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.diagnosticData.push(this.editedItem));this.close()}}}},I=r(3),component=Object(I.a)(y,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tPatient Care  Activities\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.pcActivities,function(e,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[r("h3",[r("span",{staticClass:"frm-title"},[t._v("Diagnostic Services")])])])],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-select",{attrs:{label:"Lab Service Type*",rules:[function(t){return!!t||"Item is required"}],items:t.serviceType},model:{value:t.diagnostic.labServiceType,callback:function(e){t.$set(t.diagnostic,"labServiceType",e)},expression:"diagnostic.labServiceType"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Test Name*",required:""},model:{value:t.diagnostic.name,callback:function(e){t.$set(t.diagnostic,"name",e)},expression:"diagnostic.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{label:"Samples Analysed*",type:"number",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.diagnostic.samplesAnalyzed,callback:function(e){t.$set(t.diagnostic,"samplesAnalyzed",e)},expression:"diagnostic.samplesAnalyzed"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.addDiagnostic}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.diagnosticData,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Diagnostic Services")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadByYear()}},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Diagnostic Services | Update Details")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"editedForm",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{label:"Lab Service Type*",rules:[function(t){return!!t||"Item is required"}],items:t.serviceType},model:{value:t.editedItem.labServiceType,callback:function(e){t.$set(t.editedItem,"labServiceType",e)},expression:"editedItem.labServiceType"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Test Name*",required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{type:"number",rules:[function(t){return!!t||"Item is required"}],label:"Samples Analyzed*",required:""},model:{value:t.editedItem.samplesAnalyzed,callback:function(e){t.$set(t.editedItem,"samplesAnalyzed",e)},expression:"editedItem.samplesAnalyzed"}})],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);