(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{509:function(t,e,r){"use strict";r.r(e);r(35),r(16),r(9),r(4),r(22),r(6);var n=r(0),o=r(12),l=r(17),d=r(60),c=r.n(d);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={data:function(){return{loading:!1,duration_from:!1,editFrom:!1,editTo:!1,duration_to:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,annualYear:0,dialog:!1,headers:[{text:"Last updated",align:"left",value:"updated_at"},{text:"Name",align:"left",value:"name"},{text:"Designation",value:"designation"},{text:"institutionAffiliation",value:"institutional_affiliation"},{text:"From",value:"from_date"},{text:"To",value:"to_date"},{text:"Title",value:"title"},{text:"Approval Status",value:"approval_status"},{text:"Actions",value:"action",sortable:!1}],visitor:{annual_year:0,name:"",designation:"",institutional_affiliation:"",title:"",from_date:"",to_date:"",brief_report:"",approval_status:"",approved_by:"",approved_date:null,deleted:!1,department:0,user:0,rejected_reason:null},editedIndex:-1,editedItem:{annual_year:0,name:"",designation:"",institutional_affiliation:"",title:"",from_date:"",to_date:"",brief_report:"",approval_status:"",approved_by:"",approved_date:null,deleted:!1,department:0,user:0,rejected_reason:null},deletedItem:{annual_year:0,name:"",designation:"",institutional_affiliation:"",title:"",from_date:"",to_date:"",brief_report:"",approval_status:"",approved_by:"",approved_date:null,deleted:!1,department:0,user:0,rejected_reason:null},approvals:["Pending","Rejected","Approved"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({staffs:function(t){return t.staffs},visitorsData:function(t){return t.visitor.visitorsData.result}}),{},Object(l.b)(["activities"]),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=r.state.auth.user.id,r.state.user.fullUser){e.next=5;break}return e.next=5,r.dispatch("user/setFullUser",{id:n});case 5:if(o="","FACULTY"!==r.state.auth.user.userType&&"STUDENT"!==r.state.auth.user.userType){e.next=12;break}return o="department.id=".concat(r.state.auth.user.department,"&user.id=").concat(n,"&annual_year=").concat(r.state.selectedYear,"&deleted_ne=true"),e.next=10,r.dispatch("visitor/setVisitorsData",{qs:o});case 10:e.next=15;break;case 12:return o="department.id=".concat(r.state.auth.user.department,"&annual_year=").concat(r.state.selectedYear,"&deleted_ne=true"),e.next=15,r.dispatch("visitor/setVisitorsData",{qs:o});case 15:return e.next=17,r.dispatch("setActivties");case 17:case"end":return e.stop()}}),e)})))()},mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/faculties"),this.annualYear=this.selectedYear,"DEPARTMENT"===this.$store.state.auth.user.userType&&(this.visitor.approved_by=this.$store.state.auth.user.fullname,this.visitor.approval_status="Approved")},methods:{changeReportingYear:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("setReportingYear",t.selectedYear);case 2:case"end":return e.stop()}}),e)})))()},getColor:function(t){return"REJECTED"===t?"red":"PENDING"===t?"orange":"green"},visitorAdd:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.form.validate()&&(t.visitor.annual_year=t.selectedYear,"DEPARTMENT"===t.$store.state.auth.user.userType&&(r=new Date,t.visitor.approved_date=t.$moment(r).format()),0==t.visitor.user&&(t.visitor.user=t.$store.state.auth.user.id),t.visitor.department=t.$store.state.auth.user.department,n=t.visitor,t.$store.dispatch("visitor/addVisitor",n).then((function(e){c.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reset(),t.reloadData()})).catch((function(e){t.snackbar=!0,t.submitMessage=e})));case 1:case"end":return e.stop()}}),e)})))()},reloadData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,r=t.$store.state.auth.user.id,n="","FACULTY"!==t.$store.state.auth.user.userType&&"STUDENT"!==t.$store.state.auth.user.userType){e.next=9;break}return n="department.id=".concat(t.$store.state.auth.user.department,"&user.id=").concat(r,"&annual_year=").concat(t.annualYear,"&deleted_ne=true"),e.next=7,t.$store.dispatch("visitor/setVisitorsData",{qs:n});case 7:e.next=12;break;case 9:return n="department.id=".concat(t.$store.state.auth.user.department,"&annual_year=").concat(t.annualYear,"&deleted_ne=true"),e.next=12,t.$store.dispatch("visitor/setVisitorsData",{qs:n});case 12:t.loading=!1;case 13:case"end":return e.stop()}}),e)})))()},reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.visitorsData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.deletedItem=Object.assign({},t),this.deletedItem.deleted=!0;var r=this.deletedItem;confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("visitor/updateVisitor",r).then((function(t){c.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()})).catch((function(t){e.snackbar=!0,e.submitMessage=t}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.visitorsData=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this;if(this.editedIndex>-1){if(this.editedItem.user=this.editedItem.user.id,this.editedItem.department=this.editedItem.department.id,"DEPARTMENT"===this.$store.state.auth.user.userType){var e=new Date;this.editedItem.approved_date=this.$moment(e).format(),this.editedItem.approval_status="Approved"}else this.editedItem.approval_status="Pending";var r=this.editedItem;this.$store.dispatch("visitor/updateVisitor",r).then((function(e){c.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()})).catch((function(e){t.snackbar=!0,t.submitMessage=e}))}else console.log(this.visitorsData.push(this.editedItem));this.close()}}},m=r(3),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tVisitors to the Department\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.activities,(function(e,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)})),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"12"}},["DEPARTMENT"===t.$store.state.auth.user.userType?r("v-select",{attrs:{items:t.staffs,"item-value":"id","item-text":"fullname",filled:"",label:"Data from (Select Faculty) *"},model:{value:t.visitor.user,callback:function(e){t.$set(t.visitor,"user",e)},expression:"visitor.user"}}):t._e()],1)],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Visitor Name *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.visitor.name,callback:function(e){t.$set(t.visitor,"name",e)},expression:"visitor.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Designation *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.visitor.designation,callback:function(e){t.$set(t.visitor,"designation",e)},expression:"visitor.designation"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Institute Affiliation *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.visitor.institutional_affiliation,callback:function(e){t.$set(t.visitor,"institutional_affiliation",e)},expression:"visitor.institutional_affiliation"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Lecture Title *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.visitor.title,callback:function(e){t.$set(t.visitor,"title",e)},expression:"visitor.title"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{"return-value":t.date,rules:[function(t){return!!t||"Item is required"}],readonly:"",label:"From Date *"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.visitor.from_date,callback:function(e){t.$set(t.visitor,"from_date",e)},expression:"visitor.from_date"}},n))]}}]),model:{value:t.duration_from,callback:function(e){t.duration_from=e},expression:"duration_from"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1","no-title":"",scrollable:""},model:{value:t.visitor.from_date,callback:function(e){t.$set(t.visitor,"from_date",e)},expression:"visitor.from_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.duration_from=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{rules:[function(t){return!!t||"Item is required"}],"return-value":t.date1,readonly:"",label:"To Date *"},on:{"update:returnValue":function(e){t.date1=e},"update:return-value":function(e){t.date1=e}},model:{value:t.visitor.to_date,callback:function(e){t.$set(t.visitor,"to_date",e)},expression:"visitor.to_date"}},n))]}}]),model:{value:t.duration_to,callback:function(e){t.duration_to=e},expression:"duration_to"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.visitor.to_date,callback:function(e){t.$set(t.visitor,"to_date",e)},expression:"visitor.to_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.duration_to=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu1.save(t.date1)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{counter:"1000",maxlength:"1000",rules:[function(t){return!!t||"Item is required"}],hint:"Only 1000 Characters are allowed.",label:"Brief Report *"},model:{value:t.visitor.brief_report,callback:function(e){t.$set(t.visitor,"brief_report",e)},expression:"visitor.brief_report"}}),t._v(" "),r("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.visitorAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-app",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.$store.state.visitor.visitorsData.result,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.updated_at",fn:function(e){var r=e.item;return[t._v("\n\t\t\t\t\t\t"+t._s(t.$moment(r.updated_at).fromNow())+"\n\t\t\t\t\t")]}},{key:"item.approval_status",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.getColor(n.approval_status),dark:""}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n.approval_status)+"\n\t\t\t\t\t\t")])]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Visitors to the Department")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-8",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Visitor to the Department | Update Details")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-title",[r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}})],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Visitor Name *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Designation *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.editedItem.designation,callback:function(e){t.$set(t.editedItem,"designation",e)},expression:"editedItem.designation"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Institute Affiliation *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.editedItem.institutional_affiliation,callback:function(e){t.$set(t.editedItem,"institutional_affiliation",e)},expression:"editedItem.institutional_affiliation"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Lecture Title *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{"return-value":t.date,rules:[function(t){return!!t||"Item is required"}],readonly:"",label:"From Date *"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.editedItem.from_date,callback:function(e){t.$set(t.editedItem,"from_date",e)},expression:"editedItem.from_date"}},n))]}}]),model:{value:t.editFrom,callback:function(e){t.editFrom=e},expression:"editFrom"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1","no-title":"",scrollable:""},model:{value:t.editedItem.from_date,callback:function(e){t.$set(t.editedItem,"from_date",e)},expression:"editedItem.from_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.editFrom=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{rules:[function(t){return!!t||"Item is required"}],"return-value":t.date1,readonly:"",label:"To Date *"},on:{"update:returnValue":function(e){t.date1=e},"update:return-value":function(e){t.date1=e}},model:{value:t.editedItem.to_date,callback:function(e){t.$set(t.editedItem,"to_date",e)},expression:"editedItem.to_date"}},n))]}}]),model:{value:t.editTo,callback:function(e){t.editTo=e},expression:"editTo"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.editedItem.to_date,callback:function(e){t.$set(t.editedItem,"to_date",e)},expression:"editedItem.to_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.editTo=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu1.save(t.date1)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{label:"Brief Report *",counter:"1000",maxlength:"1000",hint:"Only 1000 Characters are allowed."},model:{value:t.editedItem.brief_report,callback:function(e){t.$set(t.editedItem,"brief_report",e)},expression:"editedItem.brief_report"}}),t._v(" "),r("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t")])]},proxy:!0}])})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);