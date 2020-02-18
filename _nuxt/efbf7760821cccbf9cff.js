(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{495:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),o=r(15),l=r(20),c=r(43),d=r.n(c);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,m,h,k,I={data:function(){return{loading:!1,duration_from:!1,duration_to:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,dialog:!1,headers:[{text:"Id",align:"left",value:"id"},{text:"Contribution Type",value:"contributionType"},{text:"Reference",value:"reference"},{text:"Approval Status",value:"approvalStatus"},{text:"Actions",value:"action",sortable:!1}],coAuthors:[],presentation:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",coAuthors:"",contributionType:"",departmentId:0,facultyName:"",forumType:"",presentationDate:"",reference:"",rejectedReason:"",status:"VALID",title:"",userProfileId:0},editedIndex:-1,editedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",coAuthors:"",contributionType:"",departmentId:0,facultyName:"",forumType:"",presentationDate:"",reference:"",rejectedReason:"",status:"VALID",title:"",userProfileId:0},deletedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",coAuthors:"",contributionType:"",departmentId:0,facultyName:"",forumType:"",presentationDate:"",reference:"",rejectedReason:"",status:"VALID",title:"",userProfileId:0},contributionType:["PRESENTATION","POSTER"],approvals:["PENDING","REJECTED","APPROVED"],forum:["NATIONAL","INTERNATIONAL"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(l.c)({success:function(t){return t.presentation.presentationsData.status},presentationsData:function(t){return t.presentation.presentationsData.result},errorData:function(t){return t.presentation.presentationsData.error},usersData:function(t){return t.user.userProfile.result},selectedYear:function(t){return t.selectedYear},staffs:function(t){return t.staffs}}),{},Object(l.b)(["studentActivities"]),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(k=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,l,c,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.auth.user.id,t.next=4,r.dispatch("user/setUserProfile",{id:n}).catch(function(t){d.snackbar=!0,d.submitMessage=t});case 4:if(o=r.state.user.userProfile.result.departmentId,l=r.state.user.userProfile.result.userId,c="","ROLE_FACULTY"!==r.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==r.state.auth.user.authorities[0]){t.next=13;break}return c="departmentId.equals=".concat(o,"&userProfileId.equals=").concat(l),t.next=11,r.dispatch("presentation/setPresentationsData",{qs:c});case 11:t.next=16;break;case 13:return c="departmentId.equals=".concat(o),t.next=16,r.dispatch("presentation/setPresentationsData",{qs:c});case 16:return t.next=18,r.dispatch("setStudentActivties");case 18:case"end":return t.stop()}},t)})),function(t){return k.apply(this,arguments)}),mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/faculties"),this.annualYear=this.selectedYear},methods:{changeReportingYear:(h=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),getColor:function(t){return"REJECTED"===t?"red":"PENDING"===t?"orange":"green"},presentationAdd:(m=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.presentation.annualYear=this.selectedYear,0==this.presentation.userProfileId&&(this.presentation.userProfileId=this.$store.state.user.userProfile.result.id),this.presentation.departmentId=this.$store.state.user.userProfile.result.departmentId,e=this.presentation,this.$store.dispatch("presentation/addPresentation",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)}),reloadData:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,r=this.$store.state.user.userProfile.result.userId,n="","ROLE_FACULTY"!==this.$store.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==this.$store.state.auth.user.authorities[0]){t.next=10;break}return n="departmentId.equals=".concat(e,"&userProfileId.equals=").concat(r,"&annualYear.equals=").concat(this.annualYear),t.next=8,this.$store.dispatch("presentation/setPresentationsData",{qs:n});case 8:t.next=13;break;case 10:return n="departmentId.equals=".concat(e,"&annualYear.equals=").concat(this.annualYear),t.next=13,this.$store.dispatch("presentation/setPresentationsData",{qs:n});case 13:this.loading=!1;case 14:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.presentationsData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.presentationsData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("presentation/updatePresentation",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.presentationsData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){this.editedItem.annualYear=this.selectedYear,this.editedItem.userProfileId=this.presentationsData[this.editedIndex].userProfileId,this.editedItem.departmentId=this.presentationsData[this.editedIndex].departmentId,this.editedItem.id=this.presentationsData[this.editedIndex].id,this.editedItem.approvalStatus="PENDING";var e=this.editedItem;console.log(e);this.$store.dispatch("presentation/updatePresentation",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.presentationsData.push(this.editedItem));this.close()}}},x=r(3),component=Object(x.a)(I,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tPresentations / Posters\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporing Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.studentActivities,function(e,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("h3",[r("span",{staticClass:"frm-title"},[t._v("Contribution to Scientific Deliberations - Presentations / Posters")])])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},["ROLE_DEPARTMENT"===t.$store.state.auth.user.authorities[0]?r("v-select",{attrs:{items:t.staffs,"item-value":"id","item-text":"firstname",filled:"",label:"Data from (Select Student)"},model:{value:t.presentation.userProfileId,callback:function(e){t.$set(t.presentation,"userProfileId",e)},expression:"presentation.userProfileId"}}):t._e()],1)],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.contributionType,label:"Type of Contribution*"},model:{value:t.presentation.contributionType,callback:function(e){t.$set(t.presentation,"contributionType",e)},expression:"presentation.contributionType"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.forum,label:"Forum*"},model:{value:t.presentation.forumType,callback:function(e){t.$set(t.presentation,"forumType",e)},expression:"presentation.forumType"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Faculty Name*",required:""},model:{value:t.presentation.facultyName,callback:function(e){t.$set(t.presentation,"facultyName",e)},expression:"presentation.facultyName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Co-authors",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.coAuthors,callback:function(e){t.coAuthors=e},expression:"coAuthors"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Title*",required:""},model:{value:t.presentation.title,callback:function(e){t.$set(t.presentation,"title",e)},expression:"presentation.title"}})],1)],1),t._v(" "),r("v-row",[r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{label:"Reference",value:t.value},model:{value:t.presentation.reference,callback:function(e){t.$set(t.presentation,"reference",e)},expression:"presentation.reference"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.presentationAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.presentationsData,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.approvalStatus",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.getColor(n.approvalStatus),dark:""}},[t._v("\n\t\t\t\t\t\t"+t._s(n.approvalStatus)+"\n\t\t\t\t\t")])]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Presentations / Posters")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporing Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Presentaions / Posters | Update Details")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.contributionType,label:"Type of Contribution*"},model:{value:t.editedItem.contributionType,callback:function(e){t.$set(t.editedItem,"contributionType",e)},expression:"editedItem.contributionType"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.forum,label:"Forum*"},model:{value:t.editedItem.forumType,callback:function(e){t.$set(t.editedItem,"forumType",e)},expression:"editedItem.forumType"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Faculty Name*",required:""},model:{value:t.editedItem.facultyName,callback:function(e){t.$set(t.editedItem,"facultyName",e)},expression:"editedItem.facultyName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Co-Author(s)"},model:{value:t.editedItem.coAuthors,callback:function(e){t.$set(t.editedItem,"coAuthors",e)},expression:"editedItem.coAuthors"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Title*",required:""},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1)],1),t._v(" "),r("v-row",[r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{label:"Reference",value:t.value},model:{value:t.editedItem.reference,callback:function(e){t.$set(t.editedItem,"reference",e)},expression:"editedItem.reference"}})],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);