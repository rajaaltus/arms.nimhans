(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{505:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),l=r(15),c=r(20),o=r(43),d=r.n(o);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,f,h,k,y={data:function(){return{loading:!1,date:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,dialog:!1,headers:[{text:"Id",align:"left",value:"id",sortable:!0},{text:"Activity Type",value:"activityType"},{text:"Faculty / Author Name",value:"facultyName"},{text:"Title",value:"title"},{text:"Program Name",value:"programName"},{text:"Target Audience",value:"targetAudience"},{text:"Date",value:"date"},{text:"Place",value:"place"},{text:"Approval Status",value:"approvalStatus"},{text:"Actions",value:"action",sortable:!1}],publicEngagement:{activityName:"",activityType:"",annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",date:"",departmentId:0,facultyName:"",place:"",programName:"",rejectedReason:"",status:"VALID",targetAudience:"",title:"",userProfileId:0},editedIndex:-1,editedItem:{activityName:"",activityType:"",annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",date:"",departmentId:0,facultyName:"",place:"",programName:"",rejectedReason:"",status:"VALID",targetAudience:"",title:"",userProfileId:0},deletedItem:{activityName:"",activityType:"",annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",date:"",departmentId:0,facultyName:"",place:"",programName:"",rejectedReason:"",status:"VALID",targetAudience:"",title:"",userProfileId:0},activityTypes:["PUBLIC_LECTURE","MASS_MEDIA","OTHERS"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(l.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({success:function(t){return t.public.publicData.status},publicData:function(t){return t.public.publicData.result},errorData:function(t){return t.public.publicData.error},usersData:function(t){return t.user.userProfile.result},selectedYear:function(t){return t.selectedYear},staffs:function(t){return t.staffs}}),{},Object(c.b)(["activities"]),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(k=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,l,c,o,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.auth.user.id,t.next=4,r.dispatch("user/setUserProfile",{id:n}).catch(function(t){d.snackbar=!0,d.submitMessage=t});case 4:if(l=r.state.user.userProfile.result.departmentId,c=r.state.user.userProfile.result.userId,o="","ROLE_FACULTY"!==r.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==r.state.auth.user.authorities[0]){t.next=13;break}return o="departmentId.equals=".concat(l,"&userProfileId.equals=").concat(c),t.next=11,r.dispatch("public/setPublicData",{qs:o});case 11:t.next=16;break;case 13:return o="departmentId.equals=".concat(l),t.next=16,r.dispatch("public/setPublicData",{qs:o});case 16:return t.next=18,r.dispatch("setActivties");case 18:case"end":return t.stop()}},t)})),function(t){return k.apply(this,arguments)}),mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/faculties"),this.annualYear=this.selectedYear},methods:{changeReportingYear:(h=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),getColor:function(t){return"REJECTED"===t?"red":"PENDING"===t?"orange":"green"},publicAdd:(f=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.publicEngagement.annualYear=this.selectedYear,0==this.publicEngagement.userProfileId&&(this.publicEngagement.userProfileId=this.$store.state.user.userProfile.result.id),this.publicEngagement.departmentId=this.$store.state.user.userProfile.result.departmentId,e=this.publicEngagement,this.$store.dispatch("public/publicAdd",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),reloadData:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,r=this.$store.state.user.userProfile.result.userId,n="","ROLE_FACULTY"!==this.$store.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==this.$store.state.auth.user.authorities[0]){t.next=10;break}return n="departmentId.equals=".concat(e,"&userProfileId.equals=").concat(r,"&annualYear.equals=").concat(this.annualYear),t.next=8,this.$store.dispatch("public/setPublicData",{qs:n});case 8:t.next=13;break;case 10:return n="departmentId.equals=".concat(e,"&annualYear.equals=").concat(this.annualYear),t.next=13,this.$store.dispatch("public/setPublicData",{qs:n});case 13:this.loading=!1;case 14:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.publicData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.publicData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("public/updatePublic",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.publicData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){this.editedItem.userProfileId=this.publicData[this.editedIndex].userProfileId,this.editedItem.id=this.publicData[this.editedIndex].id,this.editedItem.status="INVALID";var e=this.editedItem;console.log(e);this.$store.dispatch("public/updatePublic",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.publicData.push(this.editedItem));this.close()}}},x=r(3),component=Object(x.a)(y,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tPublic Engagement & Outreach Activities\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporing Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.activities,function(e,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"12"}},["ROLE_DEPARTMENT"===t.$store.state.auth.user.authorities[0]?r("v-select",{attrs:{items:t.staffs,"item-value":"id","item-text":"firstname",filled:"",label:"Data from (Select Faculty)"},model:{value:t.publicEngagement.userProfileId,callback:function(e){t.$set(t.publicEngagement,"userProfileId",e)},expression:"publicEngagement.userProfileId"}}):t._e()],1)],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.activityTypes,label:"Type of Activity*"},model:{value:t.publicEngagement.activityType,callback:function(e){t.$set(t.publicEngagement,"activityType",e)},expression:"publicEngagement.activityType"}})],1),t._v(" "),"OTHERS"===t.publicEngagement.activityType?r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Activity Name",required:""},model:{value:t.publicEngagement.activityName,callback:function(e){t.$set(t.publicEngagement,"activityName",e)},expression:"publicEngagement.activityName"}})],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Faculty Name"},model:{value:t.publicEngagement.facultyName,callback:function(e){t.$set(t.publicEngagement,"facultyName",e)},expression:"publicEngagement.facultyName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Title",required:""},model:{value:t.publicEngagement.title,callback:function(e){t.$set(t.publicEngagement,"title",e)},expression:"publicEngagement.title"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Program Name",required:""},model:{value:t.publicEngagement.programName,callback:function(e){t.$set(t.publicEngagement,"programName",e)},expression:"publicEngagement.programName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Target Audience",required:""},model:{value:t.publicEngagement.targetAudience,callback:function(e){t.$set(t.publicEngagement,"targetAudience",e)},expression:"publicEngagement.targetAudience"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{label:"Date"},model:{value:t.publicEngagement.date,callback:function(e){t.$set(t.publicEngagement,"date",e)},expression:"publicEngagement.date"}},n))]}}]),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1"},on:{input:function(e){t.menu1=!1}},model:{value:t.publicEngagement.date,callback:function(e){t.$set(t.publicEngagement,"date",e)},expression:"publicEngagement.date"}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"place",required:""},model:{value:t.publicEngagement.place,callback:function(e){t.$set(t.publicEngagement,"place",e)},expression:"publicEngagement.place"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.publicAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-app",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.publicData,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.approvalStatus",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.getColor(n.approvalStatus),dark:""}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n.approvalStatus)+"\n\t\t\t\t\t\t")])]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Public Engagement")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporing Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Public Engagement & Outreach Activities | Update Details")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{items:t.activityTypes,label:"Activity Type"},model:{value:t.editedItem.activityType,callback:function(e){t.$set(t.editedItem,"activityType",e)},expression:"editedItem.activityType"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Faculty Name"},model:{value:t.editedItem.facultyName,callback:function(e){t.$set(t.editedItem,"facultyName",e)},expression:"editedItem.facultyName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Title"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Program Name"},model:{value:t.editedItem.programName,callback:function(e){t.$set(t.editedItem,"programName",e)},expression:"editedItem.programName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Target Audience"},model:{value:t.editedItem.targetAudience,callback:function(e){t.$set(t.editedItem,"targetAudience",e)},expression:"editedItem.targetAudience"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Date",required:"",placeholder:"YYYY/MM/DD"},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Place"},model:{value:t.editedItem.place,callback:function(e){t.$set(t.editedItem,"place",e)},expression:"editedItem.place"}})],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t")])]},proxy:!0}])})],1)],1)])])},[],!1,null,null,null);e.default=component.exports}}]);