(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{493:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var o=r(0),n=r(15),l=r(20),c=r(43),d=r.n(c);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,f,h,I,k={data:function(){return{loading:!1,duration_from:!1,duration_to:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],dialog:!1,headers:[{text:"Id",align:"left",value:"id"},{text:"Program Type",value:"type"},{text:"Name",align:"left",sortable:!1,value:"name"},{text:"Location",value:"location"},{text:"Duration From - To",value:"durationFrom"},{text:"Duration To",value:"durationTo"},{text:"No of Participants",value:"participantsCount"},{text:"Approval Status",value:"approvalStatus"},{text:"Actions",value:"action",sortable:!1}],coordinators:[],program:{annualYear:0,type:"",name:"",location:"",level:"",colloboration:"",durationFrom:(new Date).toISOString().substr(0,10),durationTo:(new Date).toISOString().substr(0,10),coordinators:"",participantsCount:0,briefReport:"",status:"VALID",approvalStatus:"PENDING",approvedBy:"",approvedDate:"",rejectedReason:"",departmentId:0,userProfileId:0},editedIndex:-1,editedItem:{annualYear:0,type:"",name:"",location:"",level:"",colloboration:"",durationFrom:(new Date).toISOString().substr(0,10),durationTo:(new Date).toISOString().substr(0,10),coordinators:"",participantsCount:0,briefReport:"",status:"VALID",approvalStatus:"PENDING",approvedBy:"",approvedDate:"",rejectedReason:"",departmentId:0,userProfileId:0},deletedItem:{annualYear:0,type:"",name:"",location:"",level:"",colloboration:"",durationFrom:(new Date).toISOString().substr(0,10),durationTo:(new Date).toISOString().substr(0,10),coordinators:"",participantsCount:0,briefReport:"",status:"VALID",approvalStatus:"PENDING",approvedBy:"",approvedDate:"",rejectedReason:"",departmentId:0,userProfileId:0},programTypes:["CONFERENCE","WORKSHOP","SEMINAR","SYMPOSIUM","SCIENTIFIC"],programLevels:["INTERNATIONAL","NATIONAL","REGIONAL","STATE","LOCAL"],locations:["NIMHANS","OUTSIDE_NIMHANS"],colloborations:["DEPARTMENTAL","INTERDEPARTMENTAL"],approvals:["PENDING","REJECTED","APPROVED"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(l.c)({success:function(t){return t.program.programmesData.status},programmesData:function(t){return t.program.programmesData.result},errorData:function(t){return t.program.programmesData.error},selectedYear:function(t){return t.selectedYear},staffs:function(t){return t.staffs}}),{},Object(l.b)(["studentActivities"]),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(I=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,n,l,c,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,o=r.state.auth.user.id,t.next=4,r.dispatch("user/setUserProfile",{id:o}).catch(function(t){d.snackbar=!0,d.submitMessage=t});case 4:if(n=r.state.user.userProfile.result.departmentId,l=r.state.auth.user.id,c="","ROLE_FACULTY"!==r.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==r.state.auth.user.authorities[0]){t.next=13;break}return c="departmentId.equals=".concat(n,"&userProfileId.equals=").concat(l),t.next=11,r.dispatch("program/setProgrammesData",{qs:c});case 11:t.next=16;break;case 13:return c="departmentId.equals=".concat(n),t.next=16,r.dispatch("program/setProgrammesData",{qs:c});case 16:return t.next=18,r.dispatch("setStudentActivties");case 18:case"end":return t.stop()}},t)})),function(t){return I.apply(this,arguments)}),mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/faculties"),this.annualYear=this.selectedYear},methods:{changeReportingYear:(h=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),getColor:function(t){return"REJECTED"===t?"red":"PENDING"===t?"orange":"green"},programAdd:(f=Object(o.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.program.annualYear=this.selectedYear,this.program.departmentId=this.$store.state.user.userProfile.result.departmentId,0==this.program.userProfileId&&(this.program.userProfileId=this.$store.state.user.userProfile.result.userId),console.log(this.program.coordinators),e=this.program,console.log(e),this.$store.dispatch("program/addProgram",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),reloadData:(v=Object(o.a)(regeneratorRuntime.mark(function t(){var e,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,r=this.$store.state.user.userProfile.result.userId,o="","ROLE_FACULTY"!==this.$store.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==this.$store.state.auth.user.authorities[0]){t.next=10;break}return o="departmentId.equals=".concat(e,"&userProfileId.equals=").concat(r,"&annualYear.equals=").concat(this.annualYear),t.next=8,this.$store.dispatch("program/setProgrammesData",{qs:o});case 8:t.next=13;break;case 10:return o="departmentId.equals=".concat(e,"&annualYear.equals=").concat(this.annualYear),t.next=13,this.$store.dispatch("program/setProgrammesData",{qs:o});case 13:this.loading=!1;case 14:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.programmesData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.programmesData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("program/updateProgram",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.programmesData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){this.editedItem.annualYear=this.programmesData[this.editedIndex].annualYear,this.editedItem.id=this.programmesData[this.editedIndex].id,this.editedItem.approvalStatus="PENDING";var e=this.editedItem;console.log(e),this.$store.dispatch("program/updateProgram",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.programmesData.push(this.editedItem));this.close()}}},x=r(3),component=Object(x.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tProgrammes / Events\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",value:t.selectedYear,label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.studentActivities,function(e,o){return r("li",{key:o,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"12"}},["ROLE_DEPARTMENT"===t.$store.state.auth.user.authorities[0]?r("v-select",{attrs:{items:t.staffs,"item-value":"id","item-text":"firstname",filled:"",label:"Data from (Select Student)"},model:{value:t.program.userProfileId,callback:function(e){t.$set(t.program,"userProfileId",e)},expression:"program.userProfileId"}}):t._e()],1)],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.programTypes,label:"Program Type*"},model:{value:t.program.type,callback:function(e){t.$set(t.program,"type",e)},expression:"program.type"}})],1)],t._v(" "),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Program Name*",required:""},model:{value:t.program.name,callback:function(e){t.$set(t.program,"name",e)},expression:"program.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.locations,label:"Location*"},model:{value:t.program.location,callback:function(e){t.$set(t.program,"location",e)},expression:"program.location"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.programLevels,label:"Forum*"},model:{value:t.program.level,callback:function(e){t.$set(t.program,"level",e)},expression:"program.level"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{items:t.colloborations,label:"Colloborations"},model:{value:t.program.colloboration,callback:function(e){t.$set(t.program,"colloboration",e)},expression:"program.colloboration"}})],1)],2),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-menu",{attrs:{rules:[function(t){return!!t||"Item is required"}],"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-text-field",t._g({attrs:{label:"From Date"},model:{value:t.program.durationFrom,callback:function(e){t.$set(t.program,"durationFrom",e)},expression:"program.durationFrom"}},o))]}}]),model:{value:t.duration_from,callback:function(e){t.duration_from=e},expression:"duration_from"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1"},on:{input:function(e){t.menu1=!1}},model:{value:t.program.durationFrom,callback:function(e){t.$set(t.program,"durationFrom",e)},expression:"program.durationFrom"}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-menu",{attrs:{rules:[function(t){return!!t||"Item is required"}],"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-text-field",t._g({attrs:{label:"To Date"},model:{value:t.program.durationTo,callback:function(e){t.$set(t.program,"durationTo",e)},expression:"program.durationTo"}},o))]}}]),model:{value:t.duration_to,callback:function(e){t.duration_to=e},expression:"duration_to"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1"},on:{input:function(e){t.menu2=!1}},model:{value:t.program.durationTo,callback:function(e){t.$set(t.program,"durationTo",e)},expression:"program.durationTo"}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],type:"number",label:"Participants Count*",required:""},model:{value:t.program.participantsCount,callback:function(e){t.$set(t.program,"participantsCount",e)},expression:"program.participantsCount"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Co-ordinators",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.program.oordinators,callback:function(e){t.$set(t.program,"oordinators",e)},expression:"program.oordinators"}})],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{counter:"",label:"Brief Report",value:t.value},model:{value:t.program.briefReport,callback:function(e){t.$set(t.program,"briefReport",e)},expression:"program.briefReport"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.programAdd}},[t._v("\n\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.programmesData,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.approvalStatus",fn:function(e){var o=e.item;return[r("v-chip",{attrs:{color:t.getColor(o.approvalStatus),dark:""}},[t._v("\n\t\t\t\t\t\t"+t._s(o.approvalStatus)+"\n\t\t\t\t\t")])]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Programmes / Events")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Programmes / Events")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.programTypes,label:"Program Type*"},model:{value:t.editedItem.type,callback:function(e){t.$set(t.editedItem,"type",e)},expression:"editedItem.type"}})],1)],t._v(" "),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Program Name*",required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.locations,label:"Location*"},model:{value:t.editedItem.location,callback:function(e){t.$set(t.editedItem,"location",e)},expression:"editedItem.location"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.programLevels,label:"Forum*"},model:{value:t.editedItem.level,callback:function(e){t.$set(t.editedItem,"level",e)},expression:"editedItem.level"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{items:t.colloborations,label:"Colloborations"},model:{value:t.editedItem.colloboration,callback:function(e){t.$set(t.editedItem,"colloboration",e)},expression:"editedItem.colloboration"}})],1)],2),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Duration From",required:"",placeholder:"YYYY/MM/DD"},model:{value:t.editedItem.durationFrom,callback:function(e){t.$set(t.editedItem,"durationFrom",e)},expression:"editedItem.durationFrom"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Duration To",required:"",placeholder:"YYYY/MM/DD"},model:{value:t.editedItem.durationTo,callback:function(e){t.$set(t.editedItem,"durationTo",e)},expression:"editedItem.durationTo"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],type:"number",label:"Participants Count*",required:""},model:{value:t.editedItem.participantsCount,callback:function(e){t.$set(t.editedItem,"participantsCount",e)},expression:"editedItem.participantsCount"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Select Multiple Co-ordinators Press <TAB> key to end selection"},model:{value:t.editedItem.coordinators,callback:function(e){t.$set(t.editedItem,"coordinators",e)},expression:"editedItem.coordinators"}})],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{counter:"",label:"Brief Report",value:t.value},model:{value:t.editedItem.briefReport,callback:function(e){t.$set(t.editedItem,"briefReport",e)},expression:"editedItem.briefReport"}})],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var o=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(o)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(o)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);