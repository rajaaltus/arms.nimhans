(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{522:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(37),r(7);var n=r(0),l=r(15),d=r(20),o=r(43),c=r.n(o);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var v,f,h,k,I={data:function(){return{valid:!1,loading:!1,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],selectedYear:null,hrd:{annualYear:"",approvalStatus:"PENDING",approvedBy:"",approvedDate:"",candidateName:"",courseName:"",departmentId:0,departmentName:"",duration:0,guides:"",instituteAffiliation:"",name:"",remarks:"",status:"VALID",thesesTitle:"",type:"REGULAR_COURSE",userProfileId:0},editedItem:{annualYear:"",approvalStatus:"PENDING",approvedBy:"",approvedDate:"",candidateName:"",courseName:"",departmentId:0,departmentName:"",duration:0,guides:"",instituteAffiliation:"",name:"",remarks:"",status:"VALID",thesesTitle:"",type:"REGULAR_COURSE",userProfileId:0},deletedItem:{annualYear:"",approvalStatus:"PENDING",approvedBy:"",approvedDate:"",candidateName:"",courseName:"",departmentId:0,departmentName:"",duration:0,guides:"",instituteAffiliation:"",name:"",remarks:"",status:"VALID",thesesTitle:"",type:"REGULAR_COURSE",userProfileId:0},courses:["POST_DOCTORAL_FELLOW","PHD","DM_OR_MCH","MPHIL","MSC","OTHERS"],remarks:["COMPLETED","PASSED_OUT","AWARDED","SUBMITTED","ONGOING","JOINED"],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!",dialog:!1,headers:[{text:"Id",align:"left",value:"id"},{text:"Course",value:"name"},{text:"Name",value:"courseName"},{text:"Candidate Name",value:"candidateName"},{text:"Institute",value:"instituteAffiliation"},{text:"Duration",value:"duration"},{text:"Theses Title",value:"thesesTitle"},{text:"Remarks",value:"remarks"},{text:"Actions",value:"action",sortable:!1}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(l.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(d.c)({success:function(t){return t.hrd.hrdData.status},hrdData:function(t){return t.hrd.hrdData.result},errorData:function(t){return t.hrd.hrdData.error},selectedYear:function(t){return t.selectedYear}}),{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},fetch:(k=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.user.userProfile.result.departmentId,l="departmentId.equals=".concat(n,"&status.notEquals=DELETED"),t.next=6,r.dispatch("hrd/setHRDData",{qs:l});case 6:case"end":return t.stop()}},t)})),function(t){return k.apply(this,arguments)}),mounted:function(){this.reset(),this.annualYear=this.$store.state.selectedYear,this.selectedYear=this.$store.state.selectedYear,this.reloadData()},methods:{changeReportingYear:(h=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),addHRD:(f=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$refs.form.validate()&&(this.hrd.annualYear=this.selectedYear,this.hrd.userProfileId=this.$store.state.user.userProfile.result.userId,this.hrd.departmentId=this.$store.state.user.userProfile.result.departmentId,e=this.hrd,this.$store.dispatch("hrd/addHRD",e).then(function(t){c.a.fire({title:"Success",text:"Added Successfully!",type:"success",showConfirmButton:!1,timer:1500}),r.reset(),r.reloadData()}).catch(function(t){r.snackbar=!0,r.submitMessage=t}));case 1:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),reloadData:function(){this.loading=!0;var t,e=this.$store.state.user.userProfile.result.departmentId;t="departmentId.equals=".concat(e,"&status.notEquals=DELETED&annualYear.equals=").concat(this.annualYear),this.$store.dispatch("hrd/setHRDData",{qs:t}),this.loading=!1},reloadByYear:(v=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,r="departmentId.equals=".concat(e,"&status.notEquals=DELETED&annualYear.equals=").concat(this.annualYear),t.next=6,this.$store.dispatch("hrd/setHRDData",{qs:r});case 6:this.loading=!1;case 7:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.hrdData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.hrdData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.annualYear=this.deletedItem.annualYear,this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var r=this.deletedItem;console.log(r);confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("hrd/updateHRD",r).then(function(t){c.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.hrdData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){var e=this.editedItem;console.log(e);this.$store.dispatch("hrd/updateHRD",e).then(function(e){c.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.hrdData.push(this.editedItem));this.close()}}},x=r(3),component=Object(x.a)(I,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tHRD\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporing Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-primary"},[r("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},[r("li",{staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:"/admin/departments/hrd"}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":"list"}}),t._v(" Courses at NIMHANS\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),r("li",{staticClass:"uk-padding-small-bottom"},[r("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:"/admin/departments/hrd/trainings"}},[r("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":"lifesaver"}}),t._v(" Trainings at NIMHANS\n\t\t\t\t\t\t\t\t")])],1)])])]),t._v(" "),r("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("h2",[r("span",{staticClass:"frm-title"},[t._v("Details of Regular Courses")])])])],1),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{rules:[function(t){return!!t||"Item is required"}],items:t.courses,label:"Select Course*"},model:{value:t.hrd.name,callback:function(e){t.$set(t.hrd,"name",e)},expression:"hrd.name"}})],1),t._v(" "),"OTHERS"===t.hrd.name?r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Course Name*",required:""},model:{value:t.hrd.courseName,callback:function(e){t.$set(t.hrd,"courseName",e)},expression:"hrd.courseName"}})],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Name of the Candidate*",required:""},model:{value:t.hrd.candidateName,callback:function(e){t.$set(t.hrd,"candidateName",e)},expression:"hrd.candidateName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Institutional Affiliation",required:""},model:{value:t.hrd.instituteAffiliation,callback:function(e){t.$set(t.hrd,"instituteAffiliation",e)},expression:"hrd.instituteAffiliation"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Duration*(Years)",rules:[function(t){return!!t||"Item is required"}],required:"",type:"number"},model:{value:t.hrd.duration,callback:function(e){t.$set(t.hrd,"duration",e)},expression:"hrd.duration"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Title of theses(if applicaple)",required:""},model:{value:t.hrd.thesesTitle,callback:function(e){t.$set(t.hrd,"thesesTitle",e)},expression:"hrd.thesesTitle"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Guides",required:""},model:{value:t.hrd.guides,callback:function(e){t.$set(t.hrd,"guides",e)},expression:"hrd.guides"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.remarks,label:"Remarks"},model:{value:t.hrd.remarks,callback:function(e){t.$set(t.hrd,"remarks",e)},expression:"hrd.remarks"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-width-expand"}),t._v(" "),r("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[r("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.addHRD}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t"),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),r("hr"),t._v(" "),r("v-app",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.hrdData,"sort-by":"id","sort-desc":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"d-flex justify pt-1",attrs:{flat:"",color:"#ebebeb"}},[r("v-toolbar-title",[r("span",{staticClass:"frm-title"},[t._v("Details of Regular Courses")])]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Select Year"},on:{change:function(e){return t.reloadByYear()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("HRD - Courses | Edit Form")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.courses,label:"Courses"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporing Year",required:""},model:{value:t.editedItem.annualYear,callback:function(e){t.$set(t.editedItem,"annualYear",e)},expression:"editedItem.annualYear"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},["OTHERS"===t.editedItem.name?r("v-text-field",{attrs:{label:"Course Name"},model:{value:t.editedItem.courseName,callback:function(e){t.$set(t.editedItem,"courseName",e)},expression:"editedItem.courseName"}}):t._e()],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Candidate Name"},model:{value:t.editedItem.candidateName,callback:function(e){t.$set(t.editedItem,"candidateName",e)},expression:"editedItem.candidateName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Institute Affiliation"},model:{value:t.editedItem.instituteAffiliation,callback:function(e){t.$set(t.editedItem,"instituteAffiliation",e)},expression:"editedItem.instituteAffiliation"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Duration",type:"number"},model:{value:t.editedItem.duration,callback:function(e){t.$set(t.editedItem,"duration",e)},expression:"editedItem.duration"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Theses Title"},model:{value:t.editedItem.thesesTitle,callback:function(e){t.$set(t.editedItem,"thesesTitle",e)},expression:"editedItem.thesesTitle"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Guides"},model:{value:t.editedItem.guides,callback:function(e){t.$set(t.editedItem,"guides",e)},expression:"editedItem.guides"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:t.remarks,label:"Remarks"},model:{value:t.editedItem.remarks,callback:function(e){t.$set(t.editedItem,"remarks",e)},expression:"editedItem.remarks"}})],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[r("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(n)}}}),t._v(" "),r("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(n)}}})]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t")])]},proxy:!0}])})],1)],1)])])},[],!1,null,null,null);e.default=component.exports}}]);