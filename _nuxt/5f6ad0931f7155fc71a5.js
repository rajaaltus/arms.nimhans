(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{515:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),o=r(15),c=r(20),l=r(59),d=r.n(l);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,f,_,h,k={data:function(){return{loading:!1,duration_from:!1,duration_to:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:0,annualYear:0,dialog:!1,headers:[{text:"Last updated",align:"left",value:"updated_at"},{text:"Forum",value:"forum"},{text:"Faculty Name",value:"faculty_name"},{text:"Designation",value:"designation"},{text:"Program Name",align:"left",value:"program_name"},{text:"From Date",value:"from_date"},{text:"To Date",value:"to_date"},{text:"Place",value:"place"},{text:"Approval Status",value:"approval_status"},{text:"Actions",value:"action",sortable:!1}],participation:{annual_year:0,forum:"",faculty_name:"",designation:"",program_name:"",from_date:"",to_date:"",place:"",approval_status:"Pending",approved_by:null,approved_date:null,deleted:!1,department:0,user:0},editedIndex:-1,editedItem:{annual_year:0,forum:"",faculty_name:"",designation:"",program_name:"",from_date:"",to_date:"",place:"",approval_status:"Pending",approved_by:null,approved_date:null,deleted:!1,department:0,user:0},deletedItem:{annual_year:0,forum:"",faculty_name:"",designation:"",program_name:"",from_date:"",to_date:"",place:"",approval_status:"Pending",approved_by:null,approved_date:null,deleted:!1,department:0,user:0},activeYear:null,forum:["National","International"],approvals:["Pending","Rejected","Approved"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({success:function(t){return t.participation.participationsData.status},participationsData:function(t){return t.participation.participationsData.result},errorData:function(t){return t.participation.participationsData.error},usersData:function(t){return t.user.userProfile.result},students:function(t){return t.students}}),{},Object(c.b)(["studentActivities"]),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(h=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,n=r.state.auth.user.id,o="","FACULTY"!==r.state.auth.user.userType&&"STUDENT"!==r.state.auth.user.userType){t.next=9;break}return o="department.id=".concat(r.state.auth.user.department,"&user.id=").concat(n,"&annual_year=").concat(r.state.selectedYear,"&deleted_ne=true"),t.next=7,r.dispatch("participation/setParticipationsData",{qs:o});case 7:t.next=12;break;case 9:return o="department.id=".concat(r.state.auth.user.department,"&annual_year=").concat(r.state.selectedYear,"&deleted_ne=true"),t.next=12,r.dispatch("participation/setParticipationsData",{qs:o});case 12:return t.next=14,r.dispatch("setStudentActivities");case 14:case"end":return t.stop()}},t)})),function(t){return h.apply(this,arguments)}),mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/faculties"),this.annualYear=this.selectedYear,"DEPARTMENT"===this.$store.state.auth.user.userType&&(this.participation.approval_status="Approved",this.participation.approved_by=this.$store.state.auth.user.fullname),this.reloadData()},methods:{changeReportingYear:(_=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return _.apply(this,arguments)}),getColor:function(t){return"Rejected"===t?"red":"Pending"===t?"orange":"green"},participationAdd:(f=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.participation.annual_year=this.selectedYear,0==this.participation.user&&(this.participation.user=this.$store.state.auth.user.id),"DEPARTMENT"===this.$store.state.auth.user.userType&&(e=new Date,this.participation.approved_date=this.$moment(e).format()),this.participation.department=this.$store.state.auth.user.department,r=this.participation,this.$store.dispatch("participation/participationAdd",r).then(function(t){d.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),n.reset(),n.reloadData()}).catch(function(t){n.snackbar=!0,n.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),reloadData:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.$store.state.auth.user.id,r="","FACULTY"!==this.$store.state.auth.user.userType&&"STUDENT"!==this.$store.state.auth.user.userType){t.next=9;break}return r="department.id=".concat(this.$store.state.auth.user.department,"&user.id=").concat(e,"&annual_year=").concat(this.annualYear,"&deleted_ne=true"),t.next=7,this.$store.dispatch("participation/setParticipationsData",{qs:r});case 7:t.next=12;break;case 9:return r="department.id=".concat(this.$store.state.auth.user.department,"&annual_year=").concat(this.annualYear,"&deleted_ne=true"),t.next=12,this.$store.dispatch("participation/setParticipationsData",{qs:r});case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.participationsData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.participationsData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.deleted=!0;var r=this.deletedItem;confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("participation/updateParticipation",r).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reset(),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.participationsData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){this.editedItem.user=this.editedItem.user.id,this.editedItem.department=this.editedItem.department.id,"DEPARTMENT"!=this.$store.state.auth.user.userType?this.editedItem.approval_status="Pending":this.editedItem.approval_status="Approved";var e=this.editedItem;this.$store.dispatch("participation/updateParticipation",e).then(function(e){d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.participationsData.push(this.editedItem));this.close()}}},x=r(3),component=Object(x.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tParticipations\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.studentActivities,function(e,n){return r("li",{key:n,staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"12"}},["DEPARTMENT"===t.$store.state.auth.user.userType?r("v-select",{attrs:{items:t.students,"item-value":"id","item-text":"fullname",filled:"",label:"Data from (Select Student) *"},model:{value:t.participation.user,callback:function(e){t.$set(t.participation,"user",e)},expression:"participation.user"}}):t._e()],1)],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Student Name *"},model:{value:t.participation.faculty_name,callback:function(e){t.$set(t.participation,"faculty_name",e)},expression:"participation.faculty_name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.forum,label:"Forum *"},model:{value:t.participation.forum,callback:function(e){t.$set(t.participation,"forum",e)},expression:"participation.forum"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Designation *",rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.participation.designation,callback:function(e){t.$set(t.participation,"designation",e)},expression:"participation.designation"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Program Name *",required:""},model:{value:t.participation.program_name,callback:function(e){t.$set(t.participation,"program_name",e)},expression:"participation.program_name"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{"return-value":t.date,rules:[function(t){return!!t||"Item is required"}],readonly:"",label:"From Date *"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.participation.from_date,callback:function(e){t.$set(t.participation,"from_date",e)},expression:"participation.from_date"}},n))]}}]),model:{value:t.duration_from,callback:function(e){t.duration_from=e},expression:"duration_from"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1","no-title":"",scrollable:""},model:{value:t.participation.from_date,callback:function(e){t.$set(t.participation,"from_date",e)},expression:"participation.from_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.duration_from=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{rules:[function(t){return!!t||"Item is required"}],"return-value":t.date1,readonly:"",label:"To Date *"},on:{"update:returnValue":function(e){t.date1=e},"update:return-value":function(e){t.date1=e}},model:{value:t.participation.to_date,callback:function(e){t.$set(t.participation,"to_date",e)},expression:"participation.to_date"}},n))]}}]),model:{value:t.duration_to,callback:function(e){t.duration_to=e},expression:"duration_to"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.participation.to_date,callback:function(e){t.$set(t.participation,"to_date",e)},expression:"participation.to_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.duration_to=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu1.save(t.date1)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Place *",required:""},model:{value:t.participation.place,callback:function(e){t.$set(t.participation,"place",e)},expression:"participation.place"}})],1)],1),t._v(" "),r("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.participationAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.participationsData,"sort-by":"updated_at","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.updated_at",fn:function(e){var r=e.item;return[t._v("\n\t\t\t\t\t"+t._s(t.$moment(r.updated_at).fromNow())+"\n\t\t\t\t")]}},{key:"item.approval_status",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.getColor(n.approval_status),dark:""}},[t._v("\n\t\t\t\t\t\t"+t._s(n.approval_status)+"\n\t\t\t\t\t")])]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Participations")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Participations | Update Details")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Student Name *"},model:{value:t.editedItem.faculty_name,callback:function(e){t.$set(t.editedItem,"faculty_name",e)},expression:"editedItem.faculty_name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.forum,label:"Forum *"},model:{value:t.editedItem.forum,callback:function(e){t.$set(t.editedItem,"forum",e)},expression:"editedItem.forum"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Designation *",required:""},model:{value:t.editedItem.designation,callback:function(e){t.$set(t.editedItem,"designation",e)},expression:"editedItem.designation"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Program Name *",required:""},model:{value:t.editedItem.program_name,callback:function(e){t.$set(t.editedItem,"program_name",e)},expression:"editedItem.program_name"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{"return-value":t.date,rules:[function(t){return!!t||"Item is required"}],readonly:"",label:"From Date *"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.editedItem.from_date,callback:function(e){t.$set(t.editedItem,"from_date",e)},expression:"editedItem.from_date"}},n))]}}]),model:{value:t.editFrom,callback:function(e){t.editFrom=e},expression:"editFrom"}},[t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1","no-title":"",scrollable:""},model:{value:t.editedItem.from_date,callback:function(e){t.$set(t.editedItem,"from_date",e)},expression:"editedItem.from_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.editFrom=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({attrs:{rules:[function(t){return!!t||"Item is required"}],"return-value":t.date1,readonly:"",label:"To Date *"},on:{"update:returnValue":function(e){t.date1=e},"update:return-value":function(e){t.date1=e}},model:{value:t.editedItem.to_date,callback:function(e){t.$set(t.editedItem,"to_date",e)},expression:"editedItem.to_date"}},n))]}}]),model:{value:t.editTo,callback:function(e){t.editTo=e},expression:"editTo"}},[t._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.editedItem.to_date,callback:function(e){t.$set(t.editedItem,"to_date",e)},expression:"editedItem.to_date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.editTo=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu1.save(t.date1)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"place *",required:""},model:{value:t.editedItem.place,callback:function(e){t.$set(t.editedItem,"place",e)},expression:"editedItem.place"}})],1)],1),t._v(" "),r("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("* Mandatory fields")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);