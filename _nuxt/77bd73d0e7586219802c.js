(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{484:function(t,e,n){"use strict";n.r(e);n(36),n(23),n(11),n(14),n(4),n(24),n(37),n(7);var r=n(0),l=n(15),c=n(20),o=n(59),d=n.n(o);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var f,m,h,x,_,k={data:function(){return{valid:!0,loading:!1,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,pcActivities:[{id:1,title:"Clinical Servies",count:12,icon:"list",path:"/admin/departments/patient_care_activities"},{id:2,title:"Emergency Services",count:5,icon:"users",path:"/admin/departments/patient_care_activities/emergency"},{id:3,title:"Diagnostic Services",count:8,icon:"bolt",path:"/admin/departments/patient_care_activities/diagnostic"},{id:4,title:"Clinical Procedures",count:14,icon:"cog",path:"/admin/departments/patient_care_activities/special"},{id:5,title:"OT & Other Services",count:12,icon:"link",path:"/admin/departments/patient_care_activities/otservice"}],pcClinical:{annual_year:0,screenings:0,registrations:0,followups:0,admissions:0,discharges:0,deaths:0,emergencies:0,external_ref:0,internal_ref:0,deleted:!1,department:0},editedItem:{annual_year:0,screenings:0,registrations:0,followups:0,admissions:0,discharges:0,deaths:0,emergencies:0,external_ref:0,internal_ref:0,deleted:!1,department:0},deletedItem:{annual_year:0,screenings:0,registrations:0,followups:0,admissions:0,discharges:0,deaths:0,emergencies:0,external_ref:0,internal_ref:0,deleted:!1,department:0},headers:[{text:"Last Updated",align:"left",value:"updated_at"},{text:"Screenings",value:"screenings"},{text:"Registration",value:"registrations"},{text:"Follow-ups",value:"followups"},{text:"Admissions",value:"admissions"},{text:"Discharges",value:"discharges"},{text:"Deaths",value:"deaths"},{text:"Emergencies",value:"emergencies"},{text:"Internal Ref",value:"internal_ref"},{text:"External Ref",value:"external_ref"},{text:"Actions",value:"action",sortable:!1}],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!",dialog:!1,Ydialog:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(source,!0).forEach(function(e){Object(l.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({success:function(t){return t.clinical.clinicalData.success},clinicalData:function(t){return t.clinical.clinicalData.result},errorData:function(t){return t.clinical.clinicalData.error},clinicalDataTable:function(t){return t.clinical.clinicalDataTable.result},clinicalOutDataTable:function(t){return t.clinical.clinicalOutDataTable.result}}),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(_=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r="department.id=".concat(n.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(n.state.selectedYear),t.next=5,n.dispatch("clinical/setClinicalData",{qs:r});case 5:case"end":return t.stop()}},t)})),function(t){return _.apply(this,arguments)}),mounted:function(){this.reset(),this.pcClinical.annualYear=this.$store.state.selectedYear,this.selectedYear=this.$store.state.selectedYear,0===this.$store.state.selectedYear?this.Ydialog=!0:this.selectedYear=this.$store.state.selectedYear,this.reloadData()},methods:{changeReportingYear:(x=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:this.reloadData();case 3:case"end":return t.stop()}},t,this)})),function(){return x.apply(this,arguments)}),validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset()},addClinical:(h=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.pcClinical.annual_year=this.selectedYear,this.pcClinical.department=this.$store.state.auth.user.department,e=this.pcClinical,this.$store.dispatch("clinical/addClinical",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),n.reset(),n.reloadData()}).catch(function(t){n.snackbar=!0,n.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),reloadData:(m=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e="department.id=".concat(this.$store.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(this.selectedYear),t.next=5,this.$store.dispatch("clinical/setClinicalData",{qs:e});case 5:this.loading=!1;case 6:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)}),editItem:function(t){this.editedIndex=this.clinicalData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},setReportingYear:(f=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.Ydialog=!1,t.next=3,this.$store.dispatch("setReportingYear",this.selectedYear);case 3:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),deleteItem:function(t){var e=this;this.deletedItem=Object.assign({},t),this.deletedItem.deleted=!0;var n=this.deletedItem;confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("clinical/updateClinical",n).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.publicData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.$refs.editedForm.validate()){if(this.editedIndex>-1){var e=this.editedItem;console.log(e),this.$store.dispatch("clinical/updateClinical",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.clinicalData.push(this.editedItem));this.close()}}}},C=n(3),component=Object(C.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("v-dialog",{attrs:{persistent:"","max-width":"30%"},model:{value:t.Ydialog,callback:function(e){t.Ydialog=e},expression:"Ydialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"title"},[t._v("Select Reporting Year")])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{color:"blue",text:""},on:{click:t.setReportingYear}},[t._v("\n\t\t\t\t\t\t\tSet\n\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),n("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[n("div",{staticClass:"uk-width-auto"},[n("div",{staticClass:"page-title"},[n("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tPatient Care  Activities\n\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[n("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[n("v-select",{attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),n("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[n("div",{staticClass:"uk-card uk-card-primary"},[n("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.pcActivities,function(e,r){return n("li",{key:r,staticClass:"uk-padding-small-bottom"},[n("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[n("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),n("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[n("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[n("h3",[n("span",{staticClass:"frm-title"},[t._v("Clinical Services")])])])],1),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Screenings *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.screenings,callback:function(e){t.$set(t.pcClinical,"screenings",e)},expression:"pcClinical.screenings"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Registrations *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.registrations,callback:function(e){t.$set(t.pcClinical,"registrations",e)},expression:"pcClinical.registrations"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Follow-ups *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.followups,callback:function(e){t.$set(t.pcClinical,"followups",e)},expression:"pcClinical.followups"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Admissions *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.admissions,callback:function(e){t.$set(t.pcClinical,"admissions",e)},expression:"pcClinical.admissions"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Discharges *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.discharges,callback:function(e){t.$set(t.pcClinical,"discharges",e)},expression:"pcClinical.discharges"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Deaths *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.deaths,callback:function(e){t.$set(t.pcClinical,"deaths",e)},expression:"pcClinical.deaths"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Emergencies *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.emergencies,callback:function(e){t.$set(t.pcClinical,"emergencies",e)},expression:"pcClinical.emergencies"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Referrals - Internal *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.internal_ref,callback:function(e){t.$set(t.pcClinical,"internal_ref",e)},expression:"pcClinical.internal_ref"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Referrals - External *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.pcClinical.external_ref,callback:function(e){t.$set(t.pcClinical,"external_ref",e)},expression:"pcClinical.external_ref"}})],1)],1),t._v(" "),n("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1),t._v(" "),n("div",{staticClass:"uk-width-1-1"},[n("div",{staticClass:"uk-width-expand"}),t._v(" "),n("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[n("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.addClinical}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),n("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),n("hr"),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.clinicalData,"sort-by":"updated_at","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.updated_at",fn:function(e){var n=e.item;return[t._v("\n\t\t\t\t\t"+t._s(t.$moment(n.updated_at).fromNow())+"\n\t\t\t\t")]}},{key:"top",fn:function(){return[n("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[n("v-toolbar-title",[n("span",{staticClass:"frm-title"},[t._v("Clinical Services")])]),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Clinical Services | Update Details")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),n("v-card-text",[n("v-form",{ref:"editedForm",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Screenings *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.screenings,callback:function(e){t.$set(t.editedItem,"screenings",e)},expression:"editedItem.screenings"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Registrations *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.registrations,callback:function(e){t.$set(t.editedItem,"registrations",e)},expression:"editedItem.registrations"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Follow-ups *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.followups,callback:function(e){t.$set(t.editedItem,"followups",e)},expression:"editedItem.followups"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Admissions *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.admissions,callback:function(e){t.$set(t.editedItem,"admissions",e)},expression:"editedItem.admissions"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Discharges *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.discharges,callback:function(e){t.$set(t.editedItem,"discharges",e)},expression:"editedItem.discharges"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Deaths *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.deaths,callback:function(e){t.$set(t.editedItem,"deaths",e)},expression:"editedItem.deaths"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Emergencies *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.emergencies,callback:function(e){t.$set(t.editedItem,"emergencies",e)},expression:"editedItem.emergencies"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Referrals - Internal *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.internal_ref,callback:function(e){t.$set(t.editedItem,"internal_ref",e)},expression:"editedItem.internal_ref"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Referrals - External *",type:"number",rules:[function(t){return!!t||"Enter Total No. of Patients / Cases"}]},model:{value:t.editedItem.external_ref,callback:function(e){t.$set(t.editedItem,"external_ref",e)},expression:"editedItem.external_ref"}})],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var r=e.item;return[n("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(r)}}}),t._v(" "),n("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(r)}}})]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);