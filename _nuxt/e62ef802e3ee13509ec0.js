(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{491:function(e,t,r){var content=r(500);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("6ff43496",content,!0,{sourceMap:!1})},499:function(e,t,r){"use strict";var o=r(491);r.n(o).a},500:function(e,t,r){(t=r(14)(!1)).push([e.i,".disp[data-v-5d5b0249]{font-size:15px}.disp[data-v-5d5b0249],.disp-icon[data-v-5d5b0249]{color:#fff;font-weight:400}.disp-icon[data-v-5d5b0249]{font-size:24px}",""]),e.exports=t},503:function(e,t,r){"use strict";r(17),r(12),r(9),r(7),r(13),r(20);var o=r(0),n=r(4),l=r(66);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)(["activities"])),mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},m=(r(499),r(42)),v=r(47),f=r.n(v),_=r(98),h=r(200),x=r(120),y=r(36),k=r(204),w=r(108),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",{staticStyle:{"border-radius":"0"},attrs:{flat:"",color:"#41704e"}},[r("v-list-item-group",{attrs:{color:"#ffde00"}},e._l(e.activities,(function(t,i){return r("v-list-item",{key:i,attrs:{to:t.path}},[r("v-list-item-icon",{staticClass:"pl-2 mr-3"},[r("v-icon",{staticClass:"disp-icon",domProps:{textContent:e._s(t.icon)}})],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"disp",domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1)}),[],!1,null,"5d5b0249",null);t.a=component.exports;f()(component,{VIcon:_.a,VList:h.a,VListItem:x.a,VListItemContent:y.a,VListItemGroup:k.a,VListItemIcon:w.a,VListItemTitle:y.c})},504:function(e,t,r){"use strict";r(20);var o=r(0),n=r(31),l=r.n(n),c={data:function(){return{dialog:!1,show:!1,newUser:{username:"",fullname:"",email:"",password:"",userType:"",department:0,confirmed:!0,blocked:!1},userTypes:[{text:"Faculty / Staff",value:"FACULTY"},{text:"Student",value:"STUDENT"}],userType:null}},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{addUser:function(){var e=this;this.newUser.department=this.$store.state.auth.user.department,this.newUser.password="changemenow",this.newUser.username=this.newUser.email,this.userType=this.newUser.userType;var t=this.newUser;this.$store.dispatch("user/addUser",t).then((function(t){console.log(t),l.a.fire({title:"Added",text:"This account credentials should be given to the respective faculy / staff.",icon:"success",showConfirmButton:!1,timer:1500}),e.dialog=!1,"STUDENT"===e.userType?e.$emit("new-student"):e.$emit("new-user"),console.log("emitting....")})).catch((function(e){}))}}},d=r(42),m=r(47),v=r.n(m),f=r(110),_=r(97),h=r(26),x=r(471),y=r(266),k=r(98),w=r(472),I=r(475),T=r(274),O=r(511),$=r(72),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{persistent:"","max-width":"50%"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-btn",e._g({staticClass:"mt-4",attrs:{"x-small":"",color:"amber darken-4",fab:"",dark:""}},o),[r("v-icon",[e._v("mdi-account-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Add New User")]),r("br"),e._v(" "),r("span",{staticClass:"caption font-weight-light"},[e._v("This credentials can be given to the respective faculty / student for their use of this application."),r("br"),e._v("The default "),r("b",[e._v("PASSWORD")]),e._v(" is: changemenow")])]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{color:"green",label:"User Type",required:"",outlined:"",items:e.userTypes,"prepend-inner-icon":"mdi-account-question"},model:{value:e.newUser.userType,callback:function(t){e.$set(e.newUser,"userType",t)},expression:"newUser.userType"}})],1),e._v(" "),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{color:"green",label:"Full Name",outlined:"",hint:"Ex: Mr. Mighty Joe",rules:[function(e){return!!e||"Please Enter User's Full Name"}],"prepend-inner-icon":"mdi-account-settings"},model:{value:e.newUser.fullname,callback:function(t){e.$set(e.newUser,"fullname",t)},expression:"newUser.fullname"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{color:"green",label:"Email ID",required:"",hint:"Also your primary Login ID",outlined:"",rules:[function(e){return!!e||"Please enter email"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],"prepend-inner-icon":"email"},model:{value:e.newUser.email,callback:function(t){e.$set(e.newUser,"email",t)},expression:"newUser.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{color:"green",rules:[function(e){return!!e||"Password is Required"}],"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",label:"Password",value:"changemenow"},on:{"click:append":function(t){e.show=!e.show}}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-switch",{staticClass:"pl-2",attrs:{color:"red darken-3",label:"Blocked"}})],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"pr-5"},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",small:"",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",small:"",dark:""},on:{click:e.addUser}},[r("v-icon",{staticClass:"pr-2",attrs:{small:""}},[e._v("mdi-account-plus")]),e._v("Create\n          Account")],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;v()(component,{VBtn:f.a,VCard:_.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:x.a,VDialog:y.a,VIcon:k.a,VRow:w.a,VSelect:I.a,VSpacer:T.a,VSwitch:O.a,VTextField:$.a})},565:function(e,t,r){var content=r(707);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("63d74083",content,!0,{sourceMap:!1})},566:function(e,t,r){var content=r(709);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("9e71756e",content,!0,{sourceMap:!1})},567:function(e,t,r){var content=r(711);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("5e4462b4",content,!0,{sourceMap:!1})},706:function(e,t,r){"use strict";var o=r(565);r.n(o).a},707:function(e,t,r){(t=r(14)(!1)).push([e.i,".frm-title[data-v-1cce5eb7]{border-left:5px solid #e16949;padding:3px 10px}",""]),e.exports=t},708:function(e,t,r){"use strict";var o=r(566);r.n(o).a},709:function(e,t,r){(t=r(14)(!1)).push([e.i,".frm-title[data-v-7e700124]{border-left:5px solid #e16949;padding:3px 10px}.pullright[data-v-7e700124]{float:right}",""]),e.exports=t},710:function(e,t,r){"use strict";var o=r(567);r.n(o).a},711:function(e,t,r){(t=r(14)(!1)).push([e.i,".cust-icon[data-v-8e769b00]{font-size:20px;color:#ff7e00;padding-right:10px}.disp[data-v-8e769b00]{font-size:15px}.disp[data-v-8e769b00],.disp-icon[data-v-8e769b00]{color:#fff;font-weight:400}.disp-icon[data-v-8e769b00]{font-size:24px}",""]),e.exports=t},810:function(e,t,r){"use strict";r.r(t);r(17),r(12),r(9),r(7),r(13),r(20);var o=r(0),n=(r(32),r(4)),l=r(66),c=r(132),d=r(503),m=r(214),v=r(28),f=r(31),_=r.n(f),h={props:["programNames","dataFrom"],components:{AddUser:r(504).a},data:function(){return{imgLoader:!1,duration_from:!1,duration_to:!1,editFrom:!1,editTo:!1,valid:!1,program:{annual_year:0,type:"",name:"",location:"",forum:"",colloborations:"",from_date:"",to_date:"",participants_count:null,coordinators:"",brief_report:"",deleted:!1,approval_status:"Pending",approved_by:"",approved_date:null,rejected_reason:null,image:null,department:0,user:0},selectedFile:null,image_url:null,programTypes:["Conference","Workshop","Seminar","Symposium","Scientific"],programLevels:["International","National","Regional","State","Local"],locations:["NIMHANS","OUTSIDE_NIMHANS"],colloborations:["Departmental","Interdepartmental"],approvals:["Pending","Rejected","Approved"]}},methods:{getLatestUsers:function(){console.log("recieving....");var e;e="department.id=".concat(this.$store.state.auth.user.department,"&userType=FACULTY&blocked_ne=true"),this.$store.dispatch("setStaffs",{qs:e}),this.dataFrom=this.$store.state.staffs},getLatestStudents:function(){console.log("recieving...");var e;e="department.id=".concat(this.$store.state.auth.user.department,"&userType=STUDENT&blocked_ne=true"),this.$store.dispatch("setStudents",{qs:e}),this.dataFrom=this.$store.state.students},reset:function(){this.$refs.form.reset(),this.image_url=null},programAdd:function(){var e=this;if(this.$refs.form.validate()){this.program.annual_year=this.$store.state.selectedYear,this.program.department=this.$store.state.auth.user.department,"DEPARTMENT"!==this.$store.state.auth.user.userType&&(this.program.user=this.$auth.user.id),"DEPARTMENT"===this.$store.state.auth.user.userType&&(this.program.approval_status="Approved"),"object"===Object(v.a)(this.program.name)&&(this.program.name=this.program.name.name);var t=this.program;this.$store.dispatch("program/addProgram",t).then((function(data){data&&e.reset()}))}},reloadData:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,r=e.$store.state.auth.user.department,o=e.$store.state.auth.user.id,n="","Faculty"!==e.$store.state.auth.user.userType&&"Student"!==e.$store.state.auth.user.userType){t.next=10;break}return n="department.id=".concat(r,"&user.id=").concat(o,"&deleted_ne=true&annual_year=").concat(e.$store.state.selectedYear),t.next=8,e.$store.dispatch("program/setProgrammesData",{qs:n});case 8:t.next=13;break;case 10:return n="department.id=".concat(r,"&annual_year=").concat(e.$store.state.selectedYear,"&deleted_ne=true"),t.next=13,e.$store.dispatch("program/setProgrammesData",{qs:n});case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()},handleFileUpload:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var data,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.imgLoader=!0,t.selectedFile=e.target.files[0],(data=new FormData).append("files",t.selectedFile),r.next=6,t.$axios({method:"POST",url:"/upload",data:data});case 6:o=r.sent,t.image_url=o.data[0].url,t.program.image=o.data[0].id,t.imgLoader=!1;case 10:case"end":return r.stop()}}),r)})))()}}},x=(r(706),r(42)),y=r(47),k=r.n(y),w=r(110),I=r(471),T=r(613),O=r(805),$=r(91),P=r(488),D=r(512),C=r(127),S=r(206),j=r(195),V=r(194),F=r(472),R=r(475),U=r(274),Y=r(72),L=r(513),component=Object(x.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},["DEPARTMENT"===e.$auth.user.userType?r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"11",lg:"11"}},[r("v-select",{attrs:{items:e.dataFrom,"item-value":"id","item-text":"fullname",label:"Data received from?",placeholder:"Select Faculty / Staff from the List",color:"success",rules:[function(e){return!!e||"Selecting the Faculty / Staff is Required"}]},model:{value:e.program.user,callback:function(t){e.$set(e.program,"user",t)},expression:"program.user"}})],1),e._v(" "),r("v-col",{attrs:{cols:"1",lg:"1",sm:"1"}},[r("AddUser",{on:{"new-user":function(t){return e.getLatestUsers()},"new-student":function(t){return e.getLatestStudents()}}})],1)],1):e._e(),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.programTypes,label:"Program Type ",color:"success"},model:{value:e.program.type,callback:function(t){e.$set(e.program,"type",t)},expression:"program.type"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.programLevels,label:"Forum ",color:"success"},model:{value:e.program.forum,callback:function(t){e.$set(e.program,"forum",t)},expression:"program.forum"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.colloborations,label:"Colloborations ",color:"success"},model:{value:e.program.colloborations,callback:function(t){e.$set(e.program,"colloborations",t)},expression:"program.colloborations"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"8"}},[r("v-combobox",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.programNames,"item-text":"name","item-value":"name",label:"Program Name ",color:"success"},model:{value:e.program.name,callback:function(t){e.$set(e.program,"name",t)},expression:"program.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(e){return!!e||"Item is required"}],type:"number",label:"Participants Count ",color:"success"},model:{value:e.program.participants_count,callback:function(t){e.$set(e.program,"participants_count",t)},expression:"program.participants_count"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-text-field",e._g({attrs:{"return-value":e.duration_from,rules:[function(e){return!!e||"Item is required"}],readonly:"",color:"success",label:"From Date "},on:{"update:returnValue":function(t){e.duration_from=t},"update:return-value":function(t){e.duration_from=t}},model:{value:e.program.from_date,callback:function(t){e.$set(e.program,"from_date",t)},expression:"program.from_date"}},o))]}}]),model:{value:e.duration_from,callback:function(t){e.duration_from=t},expression:"duration_from"}},[e._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1","no-title":"",scrollable:""},model:{value:e.program.from_date,callback:function(t){e.$set(e.program,"from_date",t)},expression:"program.from_date"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.duration_from=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.duration_from)}}},[e._v("\n                  OK\n                ")])],1)],1)],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-text-field",e._g({attrs:{rules:[function(e){return!!e||"Item is required"}],"return-value":e.duration_to,readonly:"",color:"success",label:"To Date "},on:{"update:returnValue":function(t){e.duration_to=t},"update:return-value":function(t){e.duration_to=t}},model:{value:e.program.to_date,callback:function(t){e.$set(e.program,"to_date",t)},expression:"program.to_date"}},o))]}}]),model:{value:e.duration_to,callback:function(t){e.duration_to=t},expression:"duration_to"}},[e._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.program.to_date,callback:function(t){e.$set(e.program,"to_date",t)},expression:"program.to_date"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.duration_to=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu1.save(e.duration_to)}}},[e._v("\n                  OK\n                ")])],1)],1)],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.locations,label:"Location ",color:"success"},model:{value:e.program.location,callback:function(t){e.$set(e.program,"location",t)},expression:"program.location"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Co-ordinators",rules:[function(e){return!!e||"Item is required"}],color:"success"},model:{value:e.program.coordinators,callback:function(t){e.$set(e.program,"coordinators",t)},expression:"program.coordinators"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[r("v-textarea",{attrs:{counter:"",color:"success",label:"Brief Report "},model:{value:e.program.brief_report,callback:function(t){e.$set(e.program,"brief_report",t)},expression:"program.brief_report"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",lg:"4",md:"12"}},[r("h3",[r("span",{staticClass:"frm-title"},[e._v("Upload Images (If any)")])]),e._v(" "),r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[r("v-img",{staticClass:"mt-3",attrs:{src:e.image_url?""+e.$axios.defaults.baseURL+e.image_url:"/image_placeholder.png","max-width":"100%","max-height":"175"}},[r("v-progress-linear",{attrs:{active:e.imgLoader,indeterminate:e.imgLoader,absolute:"",bottom:"",color:"deep-purple accent-4"}}),e._v(" "),r("v-fade-transition",[o?r("v-overlay",{attrs:{absolute:"",color:"#00564c"}},[r("v-btn",{on:{click:function(t){return e.$refs.image.click()}}},[e._v("\n                        Upload Image\n                      ")])],1):e._e()],1)],1)]}}])}),e._v(" "),r("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",label:"File input"},on:{change:e.handleFileUpload}})],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{small:"",color:"#d74f4f",dark:""},on:{click:e.reset}},[e._v("\n      Reset\n    ")]),e._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{small:"",color:"#57a727",dark:""},on:{click:e.programAdd}},[e._v("\n      Submit\n    ")])],1)],1)}),[],!1,null,"1cce5eb7",null),A=component.exports;k()(component,{VBtn:w.a,VCol:I.a,VCombobox:T.a,VDatePicker:O.a,VFadeTransition:$.d,VForm:P.a,VHover:D.a,VImg:C.a,VMenu:S.a,VOverlay:j.a,VProgressLinear:V.a,VRow:F.a,VSelect:R.a,VSpacer:U.a,VTextField:Y.a,VTextarea:L.a});function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var N={props:["reportYears"],data:function(){return{loading:!1,dialog:!1,annualYear:0,headers:[{text:"Last Updated",align:"left",value:"updated_at"},{text:"Program Type",value:"type"},{text:"Forum",value:"forum"},{text:"Programme Name",align:"left",sortable:!1,value:"name"},{text:"No. of Participants",value:"participants_count"},{text:"From",value:"from_date"},{text:"To",value:"to_date"},{text:"Location",value:"location"},{text:"Approval Status",value:"approval_status"},{text:"Actions",value:"action",sortable:!1}],editedItem:{annual_year:0,type:"",name:"",location:"",forum:"",colloborations:"",from_date:"",to_date:"",participants_count:0,coordinators:"",brief_report:"",deleted:!1,approval_status:"Pending",approved_by:"",approved_date:null,rejected_reason:null,image:null,department:0,user:0},image_url:"/image_placeholder.png",selectedFile:null,deletedItem:{annual_year:0,type:"",name:"",location:"",forum:"",colloborations:"",from_date:"",to_date:"",participants_count:0,coordinators:"",brief_report:"",deleted:!1,approval_status:"Pending",approved_by:"",approved_date:null,rejected_reason:null,image:null,department:0,user:0},imageToDelete:null,editedIndex:-1,programTypes:["Conference","Workshop","Seminar","Symposium","Scientific"],programLevels:["International","National","Regional","State","Local"],locations:["NIMHANS","OUTSIDE_NIMHANS"],colloborations:["Departmental","Interdepartmental"],approvals:["Pending","Rejected","Approved"]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)({programmesData:function(e){return e.program.programmesData.result},staffs:function(e){return e.staffs}})),watch:{dialog:function(e){e||this.close()}},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,o=r.state.auth.user.id,n=r.state.user.fullUser.department.id,l="",console.log("Userid:"+o+",deptId:"+n+",QS:"+l),"FACULTY"!==r.state.auth.user.userType&&"STUDENT"!==r.state.auth.user.userType){t.next=11;break}return l="department.id=".concat(n,"&user.id=").concat(o,"&deleted_ne=true"),t.next=9,r.dispatch("program/setProgrammesData",{qs:l});case 9:t.next=14;break;case 11:return l="department.id=".concat(n,"&deleted_ne=true"),t.next=14,r.dispatch("program/setProgrammesData",{qs:l});case 14:case"end":return t.stop()}}),t)})))()},mounted:function(){this.annualYear=this.$store.state.selectedYear,this.reloadData()},methods:{handleclick:function(e){var t=this.programmesData.indexOf(e);"Rejected"===e.approval_status&&_.a.fire({title:"Reason for Rejection",text:this.programmesData[t].rejected_reason})},handleFileUpload:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var data,o,n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(t.image_url),void 0===t.image_url){r.next=13;break}return t.imageToDelete=t.editedItem.image.id,t.selectedFile=e.target.files[0],(data=new FormData).append("files",t.selectedFile),r.next=8,t.$axios({method:"POST",url:"/upload",data:data});case 8:o=r.sent,t.image_url=o.data[0].url,t.editedItem.image=o.data[0].id,r.next=23;break;case 13:return t.editedItem.image=null,t.selectedFile=e.target.files[0],(n=new FormData).append("files",t.selectedFile),n.append("ref","programmes"),r.next=20,t.$axios({method:"POST",url:"/upload",data:n});case 20:l=r.sent,t.image_url=l.data[0].url,t.editedItem.image=l.data[0].id;case 23:case"end":return r.stop()}}),r)})))()},getColor:function(e){return"Rejected"===e?"red":"Pending"===e?"orange":"green"},editItem:function(e){this.editedIndex=this.programmesData.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.image?this.image_url=this.editedItem.image.url:this.editedItem.image=0,this.dialog=!0},deleteItem:function(e){var t=this;this.deletedItem=Object.assign({},{id:e.id,deleted:e.deleted}),this.deletedItem.deleted=!0;var r=this.deletedItem;_.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&(t.loading=!0,t.$store.dispatch("program/updateProgram",r).then((function(e){t.loading=!1,_.a.fire({title:"Success",text:"Deleted Successfully!",icon:"success",showConfirmButton:!1,timer:1500}),t.reloadData()})))}))},reloadData:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,"FACULTY"!==e.$store.state.auth.user.userType&&"STUDENT"!==e.$store.state.auth.user.userType){t.next=8;break}return"",r="department.id=".concat(e.$auth.user.department,"&user.id=").concat(e.$auth.user.id,"&deleted_ne=true&annual_year=").concat(e.annualYear),t.next=6,e.$store.dispatch("program/setProgrammesData",{qs:r});case 6:t.next=12;break;case 8:return"",o="department.id=".concat(e.$auth.user.department,"&annual_year=").concat(e.annualYear,"&deleted_ne=true"),t.next=12,e.$store.dispatch("program/setProgrammesData",{qs:o});case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t)})))()},close:function(){this.dialog=!1,this.image_url="/image_placeholder.png"},save:function(){var e=this;if(this.editedIndex>-1){"DEPARTMENT"===this.$auth.user.userType?this.editedItem.approval_status="Approved":this.editedItem.approval_status="Pending",this.editedItem.user=this.editedItem.user.id,this.editedItem.department=this.editedItem.department.id;var t=this.editedItem;console.log(t),this.$store.dispatch("program/updateProgram",t).then((function(data){data&&(e.imageToDelete&&(e.$store.dispatch("deleteFile",{id:e.imageToDelete}),e.imageToDelete=null),e.reloadData(),e.image_url=null)}))}this.close()}}},M=(r(708),r(97)),B=r(26),H=r(205),z=r(483),J=r(823),W=r(266),K=r(198),G=r(98),Q=r(171),X=r(60),Z=r(99),ee=r(473),te=Object(x.a)(N,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-data-table",{staticClass:"elevation-1",staticStyle:{"border-radius":"0"},attrs:{headers:e.headers,items:e.programmesData,"sort-by":"updated_at","sort-desc":"",loading:e.loading,"loading-text":"Loading... Please wait","footer-props":{"items-per-page-options":[10,20,30,40,50]}},scopedSlots:e._u([{key:"item.updated_at",fn:function(t){var r=t.item;return[e._v("\n      "+e._s(e.$moment(r.updated_at).fromNow())+"\n    ")]}},{key:"item.approval_status",fn:function(t){var o=t.item;return[r("v-chip",{attrs:{color:e.getColor(o.approval_status),dark:""},on:{click:function(t){return e.handleclick(o)}}},[e._v("\n        "+e._s(o.approval_status)+"\n      ")])]}},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",staticStyle:{"border-radius":"0"},attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[e._v("Programmes / Events")])]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{color:"green",items:e.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(t){return e.reloadData()}},model:{value:e.annualYear,callback:function(t){e.annualYear=t},expression:"annualYear"}}),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-tooltip",{attrs:{right:"",color:"blue-grey darken-2"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-btn",e._g({attrs:{"x-small":"",fab:"",color:"green",dark:""},on:{click:e.reloadData}},o),[r("v-icon",[e._v("mdi-reload")])],1)]}}])},[e._v(" "),r("span",[e._v("Reload Data")])]),e._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",color:"#41704e"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:e.close}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-toolbar-title",[e._v("Programmes / Events")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:e.close}},[e._v("\n                  Cancel\n                ")]),e._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:e.save}},[e._v("\n                  Save\n                ")])],1)],1),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.programTypes,label:"Program Type"},model:{value:e.editedItem.type,callback:function(t){e.$set(e.editedItem,"type",t)},expression:"editedItem.type"}})],1)],e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.programLevels,label:"Forum"},model:{value:e.editedItem.forum,callback:function(t){e.$set(e.editedItem,"forum",t)},expression:"editedItem.forum"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{items:e.colloborations,label:"Colloborations"},model:{value:e.editedItem.colloborations,callback:function(t){e.$set(e.editedItem,"colloborations",t)},expression:"editedItem.colloborations"}})],1),e._v(" "),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{rules:[function(e){return!!e||"Item is required"}],label:"Program Name*",required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{rules:[function(e){return!!e||"Item is required"}],type:"number",label:"Participants Count*",required:""},model:{value:e.editedItem.participants_count,callback:function(t){e.$set(e.editedItem,"participants_count",t)},expression:"editedItem.participants_count"}})],1)],2),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Duration From",required:"",placeholder:"YYYY/MM/DD"},model:{value:e.editedItem.from_date,callback:function(t){e.$set(e.editedItem,"from_date",t)},expression:"editedItem.from_date"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Duration To",required:"",placeholder:"YYYY/MM/DD"},model:{value:e.editedItem.to_date,callback:function(t){e.$set(e.editedItem,"to_date",t)},expression:"editedItem.to_date"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(e){return!!e||"Item is required"}],items:e.locations,label:"Location*"},model:{value:e.editedItem.location,callback:function(t){e.$set(e.editedItem,"location",t)},expression:"editedItem.location"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Select Multiple Co-ordinators Press <TAB> key to end selection"},model:{value:e.editedItem.coordinators,callback:function(t){e.$set(e.editedItem,"coordinators",t)},expression:"editedItem.coordinators"}})],1),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{counter:"",label:"Brief Report"},model:{value:e.editedItem.brief_report,callback:function(t){e.$set(e.editedItem,"brief_report",t)},expression:"editedItem.brief_report"}})],1)],1),e._v(" "),r("v-row",[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[r("v-img",{staticClass:"grey lighten-2",attrs:{src:"/image_placeholder.png"===e.image_url?"/image_placeholder.png":""+e.$axios.defaults.baseURL+e.image_url,"lazy-src":"/image_placeholder.png","aspect-ratio":"1","max-width":"100%","max-height":"400"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[e._v(" "),r("v-fade-transition",[o?r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("v-btn",{on:{click:function(t){return e.$refs.image.click()}}},[e._v("\n                              "+e._s(e.image_url?"Edit Image":"Upload Image")+"\n                            ")])],1):e._e()],1)],1)]}}])}),e._v(" "),r("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",label:"File input"},on:{change:e.handleFileUpload}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var o=t.item;return[r("v-icon",{attrs:{centre:"",color:"green"},on:{click:function(t){return e.editItem(o)}}},[e._v("mdi-pencil-box")]),e._v(" "),r("v-icon",{attrs:{centre:"",color:"error"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("mdi-delete-circle")])]}}])})],1)}),[],!1,null,"7e700124",null),re=te.exports;function ae(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}k()(te,{VBtn:w.a,VCard:M.a,VCardText:B.b,VChip:H.a,VCol:I.a,VContainer:z.a,VDataTable:J.a,VDialog:W.a,VDivider:K.a,VFadeTransition:$.d,VHover:D.a,VIcon:G.a,VImg:C.a,VOverlay:j.a,VProgressCircular:Q.a,VRow:F.a,VSelect:R.a,VSpacer:U.a,VTextField:Y.a,VTextarea:L.a,VToolbar:X.a,VToolbarItems:Z.a,VToolbarTitle:Z.b,VTooltip:ee.a});var oe={head:function(){return{title:"Programmes & Events"}},components:{PageHeader:c.a,FacultyActivities:d.a,YearDialog:m.a,ProgramForm:A,ProgramTable:re},data:function(){return{}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ae(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):ae(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)({staffs:function(e){return e.staffs},programmesData:function(e){return e.program.programmesData.result}}),{reportYears:function(){return this.$store.state.reportYears},programNames:function(){return this.programmesData.map((function(e){return e.name}))}}),fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("setActivities");case 3:return"",o="department.id=".concat(r.state.auth.user.department,"&userType=FACULTY&blocked_ne=true"),t.next=7,r.dispatch("setStaffs",{qs:o});case 7:return"",n="department.id=".concat(r.state.auth.user.department,"&deleted_ne=true&annual_year=").concat(r.state.selectedYear),t.next=11,r.dispatch("program/setProgrammesData",{qs:n});case 11:case"end":return t.stop()}}),t)})))()},methods:{changeReportingYear:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("setReportingYear",e.selectedYear);case 2:case"end":return t.stop()}}),t)})))()},setReportingYear:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("setReportingYear",e.selectedYear);case 2:case"end":return t.stop()}}),t)})))()}}},ne=(r(710),r(795)),se=r(849),ie=r(827),le=Object(x.a)(oe,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-tabs",{attrs:{flat:"","background-color":"#323232",color:"#6ac447",dark:""}},[r("v-tab",[r("span",{staticClass:"mdi mdi-note-outline cust-icon"}),e._v("\n      Activities & Resources\n    ")]),e._v(" "),r("v-tab",[r("span",{staticClass:"mdi mdi-table cust-icon"}),e._v("\n      Records\n    ")]),e._v(" "),r("v-tab-item",[r("v-card",{attrs:{tile:""}},[r("v-card-text",[r("PageHeader",{staticClass:"ml-0 pb-0 pt-0",attrs:{title:e.$metaInfo.title,reportYears:e.reportYears},on:{"set-year":e.setReportingYear}}),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3",lg:"3"}},[r("v-card",{staticClass:"mx-auto"},[r("FacultyActivities")],1)],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"9",lg:"9"}},[r("ProgramForm",{attrs:{programNames:e.programNames,dataFrom:e.staffs,section:"Select Faculty / Staff from the list"}})],1)],1)],1)],1)],1),e._v(" "),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticClass:"px-0 py-1"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("ProgramTable",{attrs:{reportYears:e.reportYears,dataFrom:"FACULTY"}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"8e769b00",null);t.default=le.exports;k()(le,{VCard:M.a,VCardText:B.b,VCol:I.a,VRow:F.a,VTab:ne.a,VTabItem:se.a,VTabs:ie.a})}}]);