(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{523:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),l=r(15),c=r(20),o=r(43),d=r.n(o);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,m,h,y={data:function(){return{duration_from:!1,valid:!1,loading:!1,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],faculty:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"2020-01-25",departmentId:0,designation:"",facultyStatus:"",leavingDate:"2020-01-25",name:"",rejectedReason:"",status:"VALID",userProfileId:0},facultyStatus:["SUPERANNUATED","RETIRED","VRS"],editedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"2020-01-25",departmentId:0,designation:"",facultyStatus:"",leavingDate:"2020-01-25",name:"",rejectedReason:"",status:"VALID",userProfileId:0},deletedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"2020-01-25",departmentId:0,designation:"",facultyStatus:"",leavingDate:"2020-01-25",name:"",rejectedReason:"",status:"VALID",userProfileId:0},snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!",dialog:!1,headers:[{text:"Id",align:"left",value:"id"},{text:"Faculty Status",value:"facultyStatus"},{text:"Name",value:"name"},{text:"Designation",value:"designation"},{text:"Leaving date",value:"leavingDate"},{text:"Approvals Status",value:"approvalStatus"},{text:"Actions",value:"action",sortable:!1}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach(function(e){Object(l.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({success:function(t){return t.faculty.facultyData.status},facultyData:function(t){return t.faculty.facultyData.result},errorData:function(t){return t.faculty.facultyData.error},selectedYear:function(t){return t.selectedYear}}),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(h=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.user.userProfile.result.departmentId,l="departmentId.equals=".concat(n,"&status.notEquals=DELETED"),t.next=6,r.dispatch("faculty/setFacultyData",{qs:l});case 6:case"end":return t.stop()}},t)})),function(t){return h.apply(this,arguments)}),mounted:function(){this.reset(),this.annualYear=this.$store.state.selectedYear,this.selectedYear=this.$store.state.selectedYear,this.reloadByYear()},methods:{getColor:function(t){return"REJECTED"===t?"red":"PENDING"===t?"orange":"green"},addFaculty:(m=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.faculty.annualYear=this.selectedYear,this.faculty.departmentId=this.$store.state.user.userProfile.result.departmentId,this.faculty.userProfileId=this.$store.state.user.userProfile.result.userId,e=this.faculty,this.$store.dispatch("faculty/addFaculty",e).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)}),reloadData:function(){var t,e=this.$store.state.user.userProfile.result.departmentId;t="departmentId.equals=".concat(e,"&status.notEquals=DELETED&annualYear.equals=").concat(this.annualYear),this.$store.dispatch("faculty/setFacultyData",{qs:t})},reloadByYear:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,r="departmentId.equals=".concat(e,"&status.notEquals=DELETED&annualYear.equals=").concat(this.annualYear),t.next=6,this.$store.dispatch("faculty/setFacultyData",{qs:r});case 6:this.loading=!1;case 7:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.facultyData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.facultyData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("faculty/updateFaculty",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.facultyData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){var e=this.editedItem;console.log(e);this.$store.dispatch("faculty/updateFaculty",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.facultyData.push(this.editedItem));this.close()}}},k=r(3),component=Object(k.a)(y,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tFaculty / Staff\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporing Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-1@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[r("h2",[r("span",{staticClass:"frm-title"},[t._v("Former Employees")])])])],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Faculty Status*",items:t.facultyStatus},model:{value:t.faculty.facultyStatus,callback:function(e){t.$set(t.faculty,"facultyStatus",e)},expression:"faculty.facultyStatus"}})],1),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Name of the Official*",required:""},model:{value:t.faculty.name,callback:function(e){t.$set(t.faculty,"name",e)},expression:"faculty.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Designation*",required:""},model:{value:t.faculty.designation,callback:function(e){t.$set(t.faculty,"designation",e)},expression:"faculty.designation"}})],1),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Date of Leaving*"},model:{value:t.faculty.leavingDate,callback:function(e){t.$set(t.faculty,"leavingDate",e)},expression:"faculty.leavingDate"}},n))]}}]),model:{value:t.duration_from,callback:function(e){t.duration_from=e},expression:"duration_from"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1"},on:{input:function(e){t.menu2=!1}},model:{value:t.faculty.leavingDate,callback:function(e){t.$set(t.faculty,"leavingDate",e)},expression:"faculty.leavingDate"}})],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.addFaculty}},[t._v("\n\t\t\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.facultyData,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.approvalStatus",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.getColor(n.approvalStatus),dark:""}},[t._v("\n\t\t\t\t\t\t"+t._s(n.approvalStatus)+"\n\t\t\t\t\t")])]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Former Employees")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Select Year"},on:{change:function(e){return t.reloadByYear()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Faculty / Staff | Edit Form")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{label:"Name of the official"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",[r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Select Year"},model:{value:t.editedItem.annualYear,callback:function(e){t.$set(t.editedItem,"annualYear",e)},expression:"editedItem.annualYear"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.facultyStatus,label:"Faculty Status"},model:{value:t.editedItem.facultyStatus,callback:function(e){t.$set(t.editedItem,"facultyStatus",e)},expression:"editedItem.facultyStatus"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Designation"},model:{value:t.editedItem.designation,callback:function(e){t.$set(t.editedItem,"designation",e)},expression:"editedItem.designation"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Leaving Date",required:"",placeholder:"YYYY/MM/DD"},model:{value:t.editedItem.leavingDate,callback:function(e){t.$set(t.editedItem,"leavingDate",e)},expression:"editedItem.leavingDate"}})],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);