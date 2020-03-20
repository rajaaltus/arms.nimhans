(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{510:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),o=r(15),l=r(20),c=r(43),d=r.n(c);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,m,h,k,x={data:function(){return{loading:!1,date:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,dialog:!1,headers:[{text:"Id",align:"left",value:"id"},{text:"Patent Filed / Title",value:"patentName"},{text:"Patent Office",value:"patentOffice"},{text:"Patent Status",value:"patentStatus"},{text:"Brief Report",value:"briefReport"},{text:"Approval Status",value:"approvalStatus"},{text:"Actions",value:"action",sortable:!1}],patent:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",briefReport:"",departmentId:0,patentName:"",patentOffice:"",patentStatus:0,rejectedReason:"",status:"VALID",userProfileId:0},editedIndex:-1,editedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",briefReport:"",departmentId:0,patentName:"",patentOffice:"",patentStatus:0,rejectedReason:"",status:"VALID",userProfileId:0},deletedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",briefReport:"",departmentId:0,patentName:"",patentOffice:"",patentStatus:0,rejectedReason:"",status:"VALID",userProfileId:0},patentStatus:[{text:"Yes",value:1},{text:"No",value:0}],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(l.c)({success:function(t){return t.patent.patentsData.status},patentsData:function(t){return t.patent.patentsData.result},errorData:function(t){return t.patent.patentsData.error},usersData:function(t){return t.user.userProfile.result},selectedYear:function(t){return t.selectedYear},staffs:function(t){return t.staffs}}),{},Object(l.b)(["activities"]),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(k=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,l,c,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.auth.user.id,t.next=4,r.dispatch("user/setUserProfile",{id:n}).catch(function(t){d.snackbar=!0,d.submitMessage=t});case 4:if(o=r.state.user.userProfile.result.departmentId,l=r.state.user.userProfile.result.userId,c="","ROLE_FACULTY"!==r.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==r.state.auth.user.authorities[0]){t.next=13;break}return c="departmentId.equals=".concat(o,"&userProfileId.equals=").concat(l,"&annualYear.equals=").concat(r.state.selectedYear,"&status.notEquals=DELETED"),t.next=11,r.dispatch("patent/setPatentsData",{qs:c});case 11:t.next=16;break;case 13:return c="departmentId.equals=".concat(o,"&annualYear.equals=").concat(r.state.selectedYear,"&status.notEquals=DELETED"),t.next=16,r.dispatch("patent/setPatentsData",{qs:c});case 16:return t.next=18,r.dispatch("setActivties");case 18:case"end":return t.stop()}},t)})),function(t){return k.apply(this,arguments)}),mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/students"),this.annualYear=this.selectedYear,"ROLE_DEPARTMENT"===this.$store.state.auth.user.authorities[0]&&(this.patent.approvalStatus="APPROVED")},methods:{changeReportingYear:(h=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),getColor:function(t){return"REJECTED"===t?"red":"PENDING"===t?"orange":"green"},patentAdd:(m=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.patent.annualYear=this.selectedYear,this.patent.patentStatus=this.patentStatus.indexOf(this.patent.patentStatus),0==this.patent.userProfileId&&(this.patent.userProfileId=this.$store.state.user.userProfile.result.id),this.patent.departmentId=this.$store.state.user.userProfile.result.departmentId,e=this.patent,this.$store.dispatch("patent/patentAdd",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)}),reloadData:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,r=this.$store.state.user.userProfile.result.userId,n="","ROLE_FACULTY"!==this.$store.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==this.$store.state.auth.user.authorities[0]){t.next=10;break}return n="departmentId.equals=".concat(e,"&userProfileId.equals=").concat(r,"&annualYear.equals=").concat(this.annualYear,"&status.notEquals=DELETED"),t.next=8,this.$store.dispatch("patent/setPatentsData",{qs:n});case 8:t.next=13;break;case 10:return n="departmentId.equals=".concat(e,"&annualYear.equals=").concat(this.annualYear,"&status.notEquals=DELETED"),t.next=13,this.$store.dispatch("patent/setPatentsData",{qs:n});case 13:this.loading=!1;case 14:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.patentsData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.patentsData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("patent/updatePatent",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.publicData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){this.editedItem.id=this.patentsData[this.editedIndex].id,"ROLE_DEPARTMENT"!=this.$store.state.auth.user.authorities[0]&&(this.editedItem.approvalStatus="PENDING");var e=this.editedItem;console.log(e);this.$store.dispatch("patent/updatePatent",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.patentsData.push(this.editedItem));this.close()}}},I=r(3),component=Object(I.a)(x,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tPatents\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.activities,function(e,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"12"}},["ROLE_DEPARTMENT"===t.$store.state.auth.user.authorities[0]?r("v-select",{attrs:{items:t.staffs,"item-value":"id","item-text":"firstname",filled:"",label:"Data from (Select Faculty) *"},model:{value:t.patent.userProfileId,callback:function(e){t.$set(t.patent,"userProfileId",e)},expression:"patent.userProfileId"}}):t._e()],1)],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Patent Filed / Title *",required:""},model:{value:t.patent.patentName,callback:function(e){t.$set(t.patent,"patentName",e)},expression:"patent.patentName"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Registration / Application No *",required:""},model:{value:t.patent.patentOffice,callback:function(e){t.$set(t.patent,"patentOffice",e)},expression:"patent.patentOffice"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.patentStatus,rules:[function(t){return!!t||"Item is required"}],"item-text":"text","item-value":"value",label:"Patent Status *"},model:{value:t.patent.patentStatus,callback:function(e){t.$set(t.patent,"patentStatus",e)},expression:"patent.patentStatus"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"Brief Report *",rules:[function(t){return!!t||"Item is required"}],counter:"1000",maxlength:"1000",hint:"Only 1000 Characters are allowed."},model:{value:t.patent.briefReport,callback:function(e){t.$set(t.patent,"briefReport",e)},expression:"patent.briefReport"}})],1)],1),t._v(" "),r("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.patentAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.patentsData,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.approvalStatus",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.getColor(n.approvalStatus),dark:""}},[t._v("\n\t\t\t\t\t\t"+t._s(n.approvalStatus)+"\n\t\t\t\t\t")])]}},{key:"item.patentStatus",fn:function(){return[1==t.patentStatus?r("v-chip",{attrs:{dark:""}},[t._v("\n\t\t\t\t\t\tYes\n\t\t\t\t\t")]):r("v-chip",{attrs:{dark:""}},[t._v("\n\t\t\t\t\t\tNo\n\t\t\t\t\t")])]},proxy:!0},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Patents")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Patent - Edit Form")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Patent Filed / Title *",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.patentName,callback:function(e){t.$set(t.editedItem,"patentName",e)},expression:"editedItem.patentName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Patent Office *",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.patentOffice,callback:function(e){t.$set(t.editedItem,"patentOffice",e)},expression:"editedItem.patentOffice"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.patentStatus,"item-text":t.text,"item-value":t.value,label:"Patent Status *",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.patentStatus,callback:function(e){t.$set(t.editedItem,"patentStatus",e)},expression:"editedItem.patentStatus"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{counter:"1000",maxlength:"1000",hint:"Only 1000 Characters are allowed.",label:"Brief Report *",value:t.value,rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.briefReport,callback:function(e){t.$set(t.editedItem,"briefReport",e)},expression:"editedItem.briefReport"}})],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);