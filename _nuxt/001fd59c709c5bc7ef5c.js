(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{498:function(t,e,n){"use strict";n.r(e);n(36),n(23),n(11),n(14),n(4),n(24),n(37),n(7);var r=n(0),o=n(15),c=n(20),l=n(59),d=n.n(l);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var m,f,h,_,k={data:function(){return{loading:!1,date:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,annualYear:0,dialog:!1,headers:[{text:"Last updated",align:"left",value:"updated_at"},{text:"Award / Honour",value:"award_title"},{text:"Organiztion",value:"organization"},{text:"Date",value:"date"},{text:"Place",value:"place"},{text:"Approval Status",value:"approval_status"},{text:"Actions",value:"action",sortable:!1}],recognition:{annual_year:0,award_title:"",faculty_name:"",organization:"",date:"",place:"",approval_status:"Pending",approved_by:null,approved_date:null,deleted:!1,department:0,user:0,image_1:null,image_2:null,image_3:null},editedIndex:-1,editedItem:{annual_year:0,award_title:"",faculty_name:"",organization:"",date:"",place:"",approval_status:"Pending",approved_by:null,approved_date:null,deleted:!1,department:0,user:0,image_1:null,image_2:null,image_3:null},deletedItem:{annual_year:0,award_title:"",faculty_name:"",organization:"",date:"",place:"",approval_status:"Pending",approved_by:null,approved_date:null,deleted:!1,department:0,user:0,image_1:null,image_2:null,image_3:null},approvals:["Pending","Rejected","Approved"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({success:function(t){return t.recognition.recognitionsData.status},recognitionsData:function(t){return t.recognition.recognitionsData.result},errorData:function(t){return t.recognition.recognitionsData.error},usersData:function(t){return t.user.userProfile.result},staffs:function(t){return t.staffs}}),{},Object(c.b)(["activities"]),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(_=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store,r=n.state.auth.user.id,o="","FACULTY"!==n.state.auth.userType&&"STUDENT"!==n.state.auth.userType){t.next=9;break}return o="department.id=".concat(n.state.auth.user.department,"&user.id=").concat(r,"&annual_year=").concat(n.state.selectedYear,"&deleted_ne=true"),t.next=7,n.dispatch("recognition/setRecognitionsData",{qs:o});case 7:t.next=12;break;case 9:return o="department.id=".concat(n.state.auth.user.department,"&annual_year=").concat(n.state.selectedYear,"&deleted_ne=true"),t.next=12,n.dispatch("recognition/setRecognitionsData",{qs:o});case 12:return t.next=14,n.dispatch("setActivties");case 14:case"end":return t.stop()}},t)})),function(t){return _.apply(this,arguments)}),mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/faculties"),this.annualYear=this.selectedYear,"DEPARTMENT"===this.$store.state.auth.user.userType&&(this.recognition.approval_status="Approved",this.recognition.approved_by=this.$store.state.auth.user.fullname)},methods:{changeReportingYear:(h=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),getColor:function(t){return"Rejected"===t?"red":"Pending"===t?"orange":"green"},recognitionAdd:(f=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.recognition.annual_year=this.selectedYear,0==this.recognition.user&&(this.recognition.user=this.$store.state.auth.user.id),"DEPARTMENT"===this.$store.state.auth.user.userType&&(e=new Date,this.recognition.approved_date=this.$moment(e).format()),this.recognition.department=this.$store.state.auth.user.department,n=this.recognition,this.$store.dispatch("recognition/recognitionAdd",n).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),reloadData:(m=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.$store.state.auth.user.id,n="","FACULTY"!==this.$store.state.auth.userType&&"STUDENT"!==this.$store.state.auth.userType){t.next=9;break}return n="department.id=".concat(this.$store.state.auth.user.department,"&user.id=").concat(e,"&annual_year=").concat(this.annualYear,"&deleted_ne=true"),t.next=7,this.$store.dispatch("recognition/setRecognitionsData",{qs:n});case 7:t.next=12;break;case 9:return n="department.id=".concat(this.$store.state.auth.user.department,"&annual_year=").concat(this.annualYear,"&deleted_ne=true"),t.next=12,this.$store.dispatch("recognition/setRecognitionsData",{qs:n});case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.recognitionsData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.recognitionsData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.deleted=!0;var n=this.deletedItem;console.log(n);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("recognition/updateRecognition",n).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.recognitionsData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){this.editedItem.user=this.editedItem.user.id,this.editedItem.department=this.editedItem.department.id,"DEPARTMENT"!=this.$store.state.auth.user.userType?this.editedItem.approval_status="Pending":this.editedItem.approval_status="Approved";var e=this.editedItem;this.$store.dispatch("recognition/updateRecognition",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.recognitionsData.push(this.editedItem));this.close()}}},x=n(3),component=Object(x.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[n("div",{staticClass:"uk-width-auto"},[n("div",{staticClass:"page-title"},[n("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tRecognitions\n\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[n("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[n("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),n("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[n("div",{staticClass:"uk-card uk-card-primary"},[n("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.activities,function(e,r){return n("li",{key:r,staticClass:"uk-padding-small-bottom"},[n("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[n("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),n("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[n("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("h3",[n("span",{staticClass:"frm-title"},[t._v("Awards and Honours")])])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},["DEPARTMENT"===t.$store.state.auth.user.userType?n("v-select",{attrs:{items:t.staffs,"item-value":"id","item-text":"fullname",filled:"",label:"Data from (Select Faculty) *"},model:{value:t.recognition.user,callback:function(e){t.$set(t.recognition,"user",e)},expression:"recognition.user"}}):t._e()],1)],1),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Faculty Name(s) *",required:""},model:{value:t.recognition.faculty_name,callback:function(e){t.$set(t.recognition,"faculty_name",e)},expression:"recognition.faculty_name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Award / Honour Title *",required:""},model:{value:t.recognition.award_title,callback:function(e){t.$set(t.recognition,"award_title",e)},expression:"recognition.award_title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Organization *",required:""},model:{value:t.recognition.organization,callback:function(e){t.$set(t.recognition,"organization",e)},expression:"recognition.organization"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{"return-value":t.date,rules:[function(t){return!!t||"Item is required"}],readonly:"",label:"Date *"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.recognition.date,callback:function(e){t.$set(t.recognition,"date",e)},expression:"recognition.date"}},r))]}}]),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.recognition.date,callback:function(e){t.$set(t.recognition,"date",e)},expression:"recognition.date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.date=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Place *"},model:{value:t.recognition.place,callback:function(e){t.$set(t.recognition,"place",e)},expression:"recognition.place"}})],1)],1),t._v(" "),n("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1),t._v(" "),n("div",{staticClass:"uk-width-1-1"},[n("div",{staticClass:"uk-width-expand"}),t._v(" "),n("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[n("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.recognitionAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t")])],1)])]),t._v(" "),n("hr"),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.recognitionsData,"sort-by":"updated_at","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.updated_at",fn:function(e){var n=e.item;return[t._v("\n\t\t\t\t\t"+t._s(t.$moment(n.updated_at).fromNow())+"\n\t\t\t\t")]}},{key:"item.approval_status",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:t.getColor(r.approval_status),dark:""}},[t._v("\n\t\t\t\t\t\t"+t._s(r.approval_status)+"\n\t\t\t\t\t")])]}},{key:"top",fn:function(){return[n("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[n("v-toolbar-title",[n("span",{staticClass:"frm-title"},[t._v("Recognition - Awards and Honours")])]),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Recognition - Awards and Honours | Update Details")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Faculty Name(s) *",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.faculty_name,callback:function(e){t.$set(t.editedItem,"faculty_name",e)},expression:"editedItem.faculty_name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Award / Honour Title *",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.award_title,callback:function(e){t.$set(t.editedItem,"award_title",e)},expression:"editedItem.award_title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Organization *",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.organization,callback:function(e){t.$set(t.editedItem,"organization",e)},expression:"editedItem.organization"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{"return-value":t.date,rules:[function(t){return!!t||"Item is required"}],readonly:"",label:"Date *"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}},r))]}}]),model:{value:t.editDate,callback:function(e){t.editDate=e},expression:"editDate"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.date=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$refs.menu.save(t.editDate)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Place *",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editedItem.place,callback:function(e){t.$set(t.editedItem,"place",e)},expression:"editedItem.place"}})],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var r=e.item;return[n("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(r)}}}),t._v(" "),n("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(r)}}})]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);