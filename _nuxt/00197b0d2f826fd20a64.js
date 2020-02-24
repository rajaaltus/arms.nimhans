(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{517:function(t,e,l){"use strict";l.r(e);l(36),l(23),l(11),l(14),l(24),l(37),l(6),l(4),l(8),l(7);var o=l(0),r=l(15),n=l(20),c=l(43),d=l.n(c);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,l)}return e}var v,h,f,I,T,x={data:function(){return{loading:!1,search:"",loader:null,loading5:!1,date:!1,valid:!0,value:"Hello!",reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}],journalArticle:{title:"",fulljournalname:"",epubdate:"",volume:"",pages:""},selectedYear:0,dialog:!1,headers:[{text:"Id",align:"left",value:"id",sortable:!0},{text:"Type of Publication",value:"publicationTypeId"},{text:"Reference",value:"reference",width:"40%"},{text:"Approval Status",value:"approvalStatus"},{text:"Actions",value:"action",sortable:!1}],publication:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",articleTitle:"",authorNames:"",bookTitle:"",chapterTitle:"",classifcation:"",departmentId:0,edition:"",editorNames:"",journalTitle:"",pages:"",place:"",pmid:"",publicationDate:(new Date).toISOString().substr(0,10),publicationTypeId:0,publisher:"",referance:"",reference:"",rejectedReason:"",specifyPublicationType:"",status:"VALID",userProfileId:0,volumeIssueNo:"",year:0},editedIndex:-1,editedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",articleTitle:"",authorNames:"",bookTitle:"",chapterTitle:"",classifcation:"",departmentId:0,edition:"",editorNames:"",journalTitle:"",pages:"",place:"",pmid:"",publicationDate:(new Date).toISOString().substr(0,10),publicationTypeId:0,publisher:"",referance:"",reference:"",rejectedReason:"",specifyPublicationType:"",status:"VALID",userProfileId:0,volumeIssueNo:"",year:0},deletedItem:{annualYear:0,approvalStatus:"PENDING",approvedBy:"",approvedDate:"",articleTitle:"",authorNames:"",bookTitle:"",chapterTitle:"",classifcation:"",departmentId:0,edition:"",editorNames:"",journalTitle:"",pages:"",place:"",pmid:"",publicationDate:(new Date).toISOString().substr(0,10),publicationTypeId:0,publisher:"",referance:"",reference:"",rejectedReason:"",specifyPublicationType:"",status:"DELETED",userProfileId:0,volumeIssueNo:"",year:0},loaderdialog:!1,classifications:[{value:"INTERNATION",name:"International"},{value:"NATIONAL",name:"National"},{value:"NOT_APPLICABLE",name:"Not Applicable"},{value:"OTHERS",name:"Others"}],snackbar:!1,timeout:2e3,submitMessage:"Added sucessfully!"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(n.c)({success:function(t){return t.publication.publicationsData.status},publicationsData:function(t){return t.publication.publicationsData.result},errorData:function(t){return t.publication.publicationsData.error},usersData:function(t){return t.user.userProfile.result},publicationTypes:function(t){return t.publication.publicationTypes},journalArticle:function(t){return t.publication.journalArticle},staffs:function(t){return t.staffs}}),{},Object(n.b)(["studentActivities"])),watch:{dialog:function(t){t||this.close()},loaderdialog:function(t){t||this.close()},loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout(function(){return t[e]=!1},3e3),this.loader=null}},fetch:(T=Object(o.a)(regeneratorRuntime.mark(function t(e){var l,o,r,n,c,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.store,o=l.state.auth.user.id,t.next=4,l.dispatch("user/setUserProfile",{id:o}).catch(function(t){d.snackbar=!0,d.submitMessage=t});case 4:return t.next=6,l.dispatch("publication/setPublicationTypes");case 6:if(r=l.state.user.userProfile.result.departmentId,n=l.state.user.userProfile.result.userId,c="","ROLE_FACULTY"!==l.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==l.state.auth.user.authorities[0]){t.next=15;break}return c="departmentId.equals=".concat(r,"&userProfileId.equals=").concat(n,"&annualYear.equals=").concat(l.state.selectedYear,"&status.notEquals=DELETED"),t.next=13,l.dispatch("publication/setPublicationsData",{qs:c});case 13:t.next=18;break;case 15:return c="departmentId.equals=".concat(r,"&annualYear.equals=").concat(l.state.selectedYear,"&status.notEquals=DELETED"),t.next=18,l.dispatch("publication/setPublicationsData",{qs:c});case 18:return t.next=20,l.dispatch("setStudentActivties");case 20:case"end":return t.stop()}},t)})),function(t){return T.apply(this,arguments)}),mounted:function(){this.reset(),this.$store.state.selectedYear?this.selectedYear=this.$store.state.selectedYear:this.$router.push("/admin/activities/students"),this.annualYear=this.selectedYear,"ROLE_DEPARTMENT"===this.$store.state.auth.user.authorities[0]&&(this.publication.approvalStatus="APPROVED")},methods:{getColor:function(t){return"REJECTED"===t?"red":"PENDING"===t?"orange":"green"},getPublicationType:function(t){return this.publicationTypes[t-1].publicationType},changeReportingYear:(I=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:case"end":return t.stop()}},t,this)})),function(){return I.apply(this,arguments)}),fetchArticle:(f=Object(o.a)(regeneratorRuntime.mark(function t(){var e,l=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.publication.pmid,this.loaderdialog=!0,this.$store.dispatch("publication/setJournalArticle",{id:e}).then(function(t){l.journalArticle=Object.assign({},l.$store.state.publication.journalArticle),l.loaderdialog=!0}).catch(function(t){l.snackbar=!0,l.submitMessage="No data found!"}).finally(function(){return l.loaderdialog=!1,l.composeReference()});case 3:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),composeReference:function(){1==this.publication.publicationTypeId&&this.$refs.form.validate()&&(this.publication.reference=this.publication.authorNames+". "+this.journalArticle.title+" "+this.journalArticle.fulljournalname+" "+this.journalArticle.epubdate+";"+this.journalArticle.volume+":"+this.journalArticle.pages),2==this.publication.publicationTypeId&&this.$refs.form.validate()&&(this.publication.reference=this.publication.authorNames+". "+this.publication.articleTitle+". "+this.publication.publicationDate+":"+this.publication.pages),3==this.publication.publicationTypeId&&(this.publication.reference=this.publication.authorNames+". "+this.publication.bookTitle+". "+this.publication.edition+". "+this.publication.edition+":"+this.publication.publisher+";"+this.publication.year),4==this.publication.publicationTypeId&&(this.publication.reference=this.publication.authorNames+". "+this.publication.chapterTitle+". In: "+this.publication.editorNames+". "+this.publication.bookTitle+"."+this.publication.edition+"."+this.publication.place+":"+this.publication.publisher+";"+this.publication.year),this.publication.publicationTypeId>4&&(this.publication.reference=this.publication.authorNames+". "+this.publication.articleTitle+"."+this.publication.edition+"."+this.publication.place+":"+this.publication.publisher+";"+this.publication.year)},editedComposeReference:function(){1==this.editedItem.publicationTypeId&&(this.editedItem.reference=this.editedItem.authorNames+". "+this.editedItem.journalTitle+" "+this.editedItem.articleTitle+" "+this.$moment(this.editedItem.publicationDate).format("YYYY MMM DD")+";"+this.editedItem.volumeIssueNo+":"+this.editedItem.pages),2==this.editedItem.publicationTypeId&&(this.editedItem.reference=this.editedItem.authorNames+". "+this.editedItem.articleTitle+". "+this.editedItem.editedItemDate+":"+this.editedItem.pages),3==this.editedItem.publicationTypeId&&(this.editedItem.reference=this.editedItem.authorNames+". "+this.editedItem.bookTitle+". "+this.editedItem.edition+". "+this.editedItem.edition+":"+this.editedItem.publisher+";"+this.editedItem.year),4==this.editedItem.publicationTypeId&&(this.editedItem.reference=this.editedItem.authorNames+". "+this.editedItem.chapterTitle+". In: "+this.editedItem.editorNames+". "+this.editedItem.bookTitle+"."+this.editedItem.edition+"."+this.editedItem.place+":"+this.editedItem.publisher+";"+this.editedItem.year),this.editedItem.publicationTypeId>4&&(this.editedItem.reference=this.editedItem.authorNames+". "+this.editedItem.articleTitle+"."+this.editedItem.edition+"."+this.editedItem.place+":"+this.editedItem.publisher+";"+this.editedItem.year)},publicationAdd:(h=Object(o.a)(regeneratorRuntime.mark(function t(){var e,l=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.publication.annualYear=this.selectedYear,0==this.publication.userProfileId&&(this.publication.userProfileId=this.$store.state.user.userProfile.result.id),this.publication.departmentId=this.$store.state.user.userProfile.result.departmentId,1==this.publication.publicationTypeId&&(this.publication.journalTitle=this.journalArticle.title,this.publication.articleTitle=this.journalArticle.fulljournalname,this.publication.pages=this.journalArticle.pages,this.publication.volumeIssueNo=this.journalArticle.volume,this.publication.publicationDate=this.$moment(this.journalArticle.epubdate).format("YYYY-MM-DD"),this.publication.authorNames=this.publication.authorNames.join()),this.publication.publicationDate=this.$moment(this.publication.publicationDate).format("YYYY-MM-DD"),this.publication.publicationDate=this.publication.publicationDate+"T23:36:22Z",this.publication.publicationTypeId>4&&(this.publication.classifcation="NATIONAL"),e=this.publication,console.log(e),this.$store.dispatch("publication/publicationAdd",e).then(function(t){l.reset(),d.a.fire({title:"Success",text:"Publication Submitted successfully!",type:"success",showConfirmationButton:!1,timer:1500}),l.reloadData()}).catch(function(t){l.snackbar=!0,l.submitMessage=t});case 11:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),reloadData:(v=Object(o.a)(regeneratorRuntime.mark(function t(){var e,l,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.$store.state.user.userProfile.result.departmentId,l=this.$store.state.user.userProfile.result.userId,o="","ROLE_FACULTY"!==this.$store.state.auth.user.authorities[0]&&"ROLE_STUDENT"!==this.$store.state.auth.user.authorities[0]){t.next=10;break}return o="departmentId.equals=".concat(e,"&userProfileId.equals=").concat(l,"&annualYear.equals=").concat(this.annualYear,"&status.notEquals=DELETED"),t.next=8,this.$store.dispatch("publication/setPublicationsData",{qs:o});case 8:t.next=13;break;case 10:return o="departmentId.equals=".concat(e,"&annualYear.equals=").concat(this.annualYear,"&status.notEquals=DELETED"),t.next=13,this.$store.dispatch("publication/setPublicationsData",{qs:o});case 13:this.loading=!1;case 14:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),reset:function(){this.$refs.form.reset()},editItem:function(t){this.editedIndex=this.publicationsData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.publicationsData.indexOf(t);this.deletedItem=Object.assign({},t),this.deletedItem.id=this.deletedItem.id,this.deletedItem.status="DELETED";var l=this.deletedItem;confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("publication/updatePublication",l).then(function(t){d.a.fire({title:"Success",text:"Deleted Successfully!",type:"success",showConfirmButton:!1,timer:1500}),e.reloadData()}).catch(function(t){e.snackbar=!0,e.submitMessage=t})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.publicData=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;if(this.editedIndex>-1){this.editedItem.id=this.publicationsData[this.editedIndex].id,"ROLE_DEPARTMENT"!=this.$store.state.auth.user.authorities[0]&&(this.editedItem.approvalStatus="PENDING");var e=this.editedItem;console.log(e);this.$store.dispatch("publication/updatePublication",e).then(function(e){t.dialog=!1,d.a.fire({title:"Success",text:"Updated Successfully!",type:"success",showConfirmButton:!1,timer:1500}),t.reloadData()}).catch(function(e){t.snackbar=!0,t.submitMessage=e})}else console.log(this.publicationsData.push(this.editedItem));this.close()}}},k=l(3),component=Object(k.a)(x,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-app",[l("div",{staticClass:"wrapper-bg",attrs:{id:"sc-page-wrapper"}},[l("div",{attrs:{id:"sc-page-content"}},[l("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[l("div",{staticClass:"uk-width-auto"},[l("div",{staticClass:"page-title"},[l("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\t\tPublications\n\t\t\t\t\t\t\t")])])]),t._v(" "),l("div",{staticClass:"uk-width-expand@s uk-align-right@s"},[l("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[l("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),l("div",{staticClass:"uk-text-center",attrs:{"uk-grid":""}},[l("div",{staticClass:"uk-width-1-4@s uk-width-1-1"},[l("div",{staticClass:"uk-card uk-card-primary"},[l("ul",{staticClass:"uk-margin-left uk-nav-default uk-nav-parent-icon uk-text-left uk-text-bold uk-padding-small",attrs:{"uk-nav":""}},t._l(t.studentActivities,function(e,o){return l("li",{key:o,staticClass:"uk-padding-small-bottom"},[l("nuxt-link",{staticClass:"uk-text-normal",attrs:{to:e.path}},[l("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t")])],1)}),0)])]),t._v(" "),l("div",{staticClass:"uk-width-3-4@s uk-width-1-1"},[l("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left"},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{attrs:{cols:"12",md:"12"}},["ROLE_DEPARTMENT"===t.$store.state.auth.user.authorities[0]?l("v-autocomplete",{attrs:{items:t.staffs,"item-value":"id","item-text":"firstname",filled:"",label:"Data from (Select Student)"},model:{value:t.publication.userProfileId,callback:function(e){t.$set(t.publication,"userProfileId",e)},expression:"publication.userProfileId"}}):t._e()],1)],1),t._v(" "),l("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-container",[l("v-row",[l("v-col",{attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.publicationTypes,label:"Select Publication Type","item-text":"publicationType","item-value":"id"},model:{value:t.publication.publicationTypeId,callback:function(e){t.$set(t.publication,"publicationTypeId",e)},expression:"publication.publicationTypeId"}})],1),t._v(" "),t.publication.publicationTypeId<=4?l("v-col",{attrs:{cols:"8"}},[l("v-select",{attrs:{items:t.classifications,"item-text":"name","item-value":"value",rules:[function(t){return!!t||"Item is required"}],label:"Classification",required:""},model:{value:t.publication.classifcation,callback:function(e){t.$set(t.publication,"classifcation",e)},expression:"publication.classifcation"}})],1):t._e(),t._v(" "),1==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"4"}},[l("v-row",{attrs:{justify:"space-around"}},[l("v-text-field",{attrs:{label:"Enter PMID to fetch data",required:""},on:{blur:t.fetchArticle},model:{value:t.publication.pmid,callback:function(e){t.$set(t.publication,"pmid",e)},expression:"publication.pmid"}}),t._v(" "),l("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loaderdialog,callback:function(e){t.loaderdialog=e},expression:"loaderdialog"}},[l("v-card",{attrs:{color:"green",dark:""}},[l("v-card-text",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease stand by\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),l("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),1==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"12"}},[l("v-autocomplete",{attrs:{value:"journalArticle.authors",items:t.journalArticle.authors,"item-text":"name",chips:"",label:"Authors","full-width":"","hide-details":"","hide-no-data":"","hide-selected":"",multiple:"","single-line":""},on:{blur:function(e){return t.composeReference()}},model:{value:t.publication.authorNames,callback:function(e){t.$set(t.publication,"authorNames",e)},expression:"publication.authorNames"}})],1):t._e(),t._v(" "),t.publication.publicationTypeId>=2?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Name of the Author(s)*",required:""},model:{value:t.publication.authorNames,callback:function(e){t.$set(t.publication,"authorNames",e)},expression:"publication.authorNames"}})],1):t._e(),t._v(" "),l("v-col",{attrs:{cols:"12"}},[1==t.publication.publicationTypeId?l("v-text-field",{attrs:{value:"journalArticle.title",label:"Article Title",required:"","text-val":"journalArticle.title"},model:{value:t.journalArticle.title,callback:function(e){t.$set(t.journalArticle,"title",e)},expression:"journalArticle.title"}}):t._e()],1),t._v(" "),l("v-col",{attrs:{cols:"12"}},[2==t.publication.publicationTypeId?l("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.publication.articleTitle,callback:function(e){t.$set(t.publication,"articleTitle",e)},expression:"publication.articleTitle"}}):t._e()],1),t._v(" "),l("v-col",{attrs:{cols:"12"}},[3==t.publication.publicationTypeId?l("v-text-field",{attrs:{label:"Book Title",required:""},model:{value:t.publication.bookTitle,callback:function(e){t.$set(t.publication,"bookTitle",e)},expression:"publication.bookTitle"}}):t._e()],1),t._v(" "),4==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Title of the chapter",required:""},model:{value:t.publication.chapterTitle,callback:function(e){t.$set(t.publication,"chapterTitle",e)},expression:"publication.chapterTitle"}})],1):t._e(),t._v(" "),t.publication.publicationTypeId>4?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.publication.articleTitle,callback:function(e){t.$set(t.publication,"articleTitle",e)},expression:"publication.articleTitle"}})],1):t._e(),t._v(" "),4==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Name of the Editor",required:""},model:{value:t.publication.editorNames,callback:function(e){t.$set(t.publication,"editorNames",e)},expression:"publication.editorNames"}})],1):t._e(),t._v(" "),1==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{value:"journalArticle.fulljournalname",label:"Title of Journal (With standard Abbrevation)",required:""},model:{value:t.journalArticle.fulljournalname,callback:function(e){t.$set(t.journalArticle,"fulljournalname",e)},expression:"journalArticle.fulljournalname"}})],1):t._e(),t._v(" "),2==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Title of Journal (With standard Abbrevation)",required:""},model:{value:t.publication.journalTitle,callback:function(e){t.$set(t.publication,"journalTitle",e)},expression:"publication.journalTitle"}})],1):t._e(),t._v(" "),1==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Publication Date",required:""},model:{value:t.journalArticle.epubdate,callback:function(e){t.$set(t.journalArticle,"epubdate",e)},expression:"journalArticle.epubdate"}})],1):t._e(),t._v(" "),2==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{label:"Publication Date",required:""},model:{value:t.publication.publicationDate,callback:function(e){t.$set(t.publication,"publicationDate",e)},expression:"publication.publicationDate"}})],1):t._e(),t._v(" "),1==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{value:"jouralArticle.volume",label:"Volume / Issue No",required:""},model:{value:t.journalArticle.volume,callback:function(e){t.$set(t.journalArticle,"volume",e)},expression:"journalArticle.volume"}})],1):t._e(),t._v(" "),2==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{label:"Volume / Issue No",required:""},model:{value:t.publication.volumeIssueNo,callback:function(e){t.$set(t.publication,"volumeIssueNo",e)},expression:"publication.volumeIssueNo"}})],1):t._e(),t._v(" "),t.publication.publicationTypeId>2?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{label:"Edition",required:""},model:{value:t.publication.edition,callback:function(e){t.$set(t.publication,"edition",e)},expression:"publication.edition"}})],1):t._e(),t._v(" "),t.publication.publicationTypeId>2?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{label:"Place",required:""},model:{value:t.publication.place,callback:function(e){t.$set(t.publication,"place",e)},expression:"publication.place"}})],1):t._e(),t._v(" "),t.publication.publicationTypeId>2?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{label:"Publisher",required:""},model:{value:t.publication.publisher,callback:function(e){t.$set(t.publication,"publisher",e)},expression:"publication.publisher"}})],1):t._e(),t._v(" "),t.publication.publicationTypeId>2?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{label:"Year",required:""},model:{value:t.publication.year,callback:function(e){t.$set(t.publication,"year",e)},expression:"publication.year"}})],1):t._e(),t._v(" "),1==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{value:"jouralArticle.pages",label:"Pages",required:""},model:{value:t.journalArticle.pages,callback:function(e){t.$set(t.journalArticle,"pages",e)},expression:"journalArticle.pages"}})],1):t._e(),t._v(" "),2==t.publication.publicationTypeId?l("v-col",{attrs:{cols:"3"}},[l("v-text-field",{attrs:{label:"Pages",required:""},model:{value:t.publication.pages,callback:function(e){t.$set(t.publication,"pages",e)},expression:"publication.pages"}})],1):t._e(),t._v(" "),l("v-spacer"),t._v(" "),l("v-btn",{staticClass:"mx-3 my-5",attrs:{color:"green"},on:{click:function(e){return t.composeReference()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCompose Reference\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-textarea",{attrs:{label:"Reference",value:t.publication.reference,placeholder:"Example: Andrade C, Prasad Y, Devaraj A, Pinto EF, Shukla L. ECT and Pronounced Impairment in Spatial Cognition: The Fallacy of Drawing Conclusions From a Single Case. J ECT. 2018 Jun;34(2):75–7."},model:{value:t.publication.reference,callback:function(e){t.$set(t.publication,"reference",e)},expression:"publication.reference"}})],1)],1)],1),t._v(" "),l("div",{staticClass:"uk-width-1-1"},[l("div",{staticClass:"uk-width-expand"}),t._v(" "),l("div",{staticClass:"uk-form-controls uk-width-auto uk-align-right"},[l("v-btn",{attrs:{medium:"",color:"#d74f4f",dark:""},on:{click:t.reset}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),l("v-btn",{attrs:{medium:"",color:"#57a727",dark:""},on:{click:t.publicationAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t")])],1)])],1),t._v(" "),l("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.submitMessage)+"\n\t\t\t\t\t\t\t\t"),l("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t\t")])],1)],1)])]),t._v(" "),l("hr"),t._v(" "),l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.publicationsData,"sort-by":"id","sort-desc":"",search:t.search,loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.approvalStatus",fn:function(e){var o=e.item;return[l("v-chip",{attrs:{color:t.getColor(o.approvalStatus),dark:""}},[t._v("\n\t\t\t\t\t\t\t"+t._s(o.approvalStatus)+"\n\t\t\t\t\t\t")])]}},{key:"item.publicationTypeId",fn:function(e){var l=e.item;return[t._v("\n\t\t\t\t\t\t"+t._s(t.getPublicationType(l.publicationTypeId))+"\n\t\t\t\t\t")]}},{key:"top",fn:function(){return[l("v-toolbar",{staticClass:"d-flex justify mt-4 pt-1",attrs:{flat:"",color:"#ebebeb"}},[l("v-toolbar-title",[l("span",{staticClass:"frm-title"},[t._v("Publications")])]),t._v(" "),l("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),l("v-spacer"),t._v(" "),l("v-select",{staticClass:"justify-end mt-6",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{change:function(e){return t.reloadData()}},model:{value:t.annualYear,callback:function(e){t.annualYear=e},expression:"annualYear"}}),t._v(" "),l("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[l("v-card",[l("v-toolbar",{attrs:{dark:"",color:"#4da96b"}},[l("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[l("v-icon",[t._v("mdi-close")])],1),t._v(" "),l("v-toolbar-title",[t._v("Publications | Update Details")]),t._v(" "),l("v-spacer"),t._v(" "),l("v-toolbar-items",[l("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),l("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),l("v-card-text",[l("v-container",[l("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-container",[l("v-row",[1==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"3"}},[l("v-row",{attrs:{justify:"space-around"}},[l("v-text-field",{attrs:{label:"Enter PubMedId to fetch data",required:""},on:{blur:t.fetchArticle},model:{value:t.editedItem.pmid,callback:function(e){t.$set(t.editedItem,"pmid",e)},expression:"editedItem.pmid"}}),t._v(" "),l("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loaderdialog,callback:function(e){t.loaderdialog=e},expression:"loaderdialog"}},[l("v-card",{attrs:{color:"primary",dark:""}},[l("v-card-text",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease stand by\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),l("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),t.editedItem.publicationTypeId<=4?l("v-col",{attrs:{cols:"4"}},[l("v-select",{attrs:{items:t.classifications,"item-text":"name","item-value":"value",rules:[function(t){return!!t||"Item is required"}],label:"Classification",required:""},model:{value:t.editedItem.classifcation,callback:function(e){t.$set(t.editedItem,"classifcation",e)},expression:"editedItem.classifcation"}})],1):t._e(),t._v(" "),1==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Name of the Author(s)*","single-line":""},model:{value:t.editedItem.authorNames,callback:function(e){t.$set(t.editedItem,"authorNames",e)},expression:"editedItem.authorNames"}})],1):t._e(),t._v(" "),t.editedItem.publicationTypeId>=2?l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{rules:[function(t){return!!t||"Item is required"}],label:"Name of the Author(s)*",required:""},model:{value:t.editedItem.authorNames,callback:function(e){t.$set(t.editedItem,"authorNames",e)},expression:"editedItem.authorNames"}})],1):t._e(),t._v(" "),l("v-col",{attrs:{cols:"12"}},[1==t.editedItem.publicationTypeId?l("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.editedItem.journalTitle,callback:function(e){t.$set(t.editedItem,"journalTitle",e)},expression:"editedItem.journalTitle"}}):t._e()],1),t._v(" "),l("v-col",{attrs:{cols:"12"}},[2==t.editedItem.publicationTypeId?l("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.editedItem.articleTitle,callback:function(e){t.$set(t.editedItem,"articleTitle",e)},expression:"editedItem.articleTitle"}}):t._e()],1),t._v(" "),l("v-col",{attrs:{cols:"12"}},[3==t.editedItem.publicationTypeId?l("v-text-field",{attrs:{label:"Book Title",required:""},model:{value:t.editedItem.bookTitle,callback:function(e){t.$set(t.editedItem,"bookTitle",e)},expression:"editedItem.bookTitle"}}):t._e()],1),t._v(" "),4==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Title of the chapter",required:""},model:{value:t.editedItem.chapterTitle,callback:function(e){t.$set(t.editedItem,"chapterTitle",e)},expression:"editedItem.chapterTitle"}})],1):t._e(),t._v(" "),t.editedItem.publicationTypeId>4?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.editedItem.articleTitle,callback:function(e){t.$set(t.editedItem,"articleTitle",e)},expression:"editedItem.articleTitle"}})],1):t._e(),t._v(" "),4==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Name of the Editor",required:""},model:{value:t.editedItem.editorNames,callback:function(e){t.$set(t.editedItem,"editorNames",e)},expression:"editedItem.editorNames"}})],1):t._e(),t._v(" "),1==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"4"}},[l("v-text-field",{attrs:{label:"Title of Journal (With standard Abbrevation",required:""},model:{value:t.editedItem.articleTitle,callback:function(e){t.$set(t.editedItem,"articleTitle",e)},expression:"editedItem.articleTitle"}})],1):t._e(),t._v(" "),2==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"4"}},[l("v-text-field",{attrs:{label:"Title of Journal (With standard Abbrevation",required:""},model:{value:t.editedItem.journalTitle,callback:function(e){t.$set(t.editedItem,"journalTitle",e)},expression:"editedItem.journalTitle"}})],1):t._e(),t._v(" "),1==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"4"}},[l("v-text-field",{attrs:{label:"Publication Date",required:"",readonly:""},model:{value:t.editedItem.publicationDate,callback:function(e){t.$set(t.editedItem,"publicationDate",e)},expression:"editedItem.publicationDate"}})],1):t._e(),t._v(" "),2==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"4"}},[l("v-text-field",{attrs:{label:"Publication Date",required:""},model:{value:t.editedItem.publicationDate,callback:function(e){t.$set(t.editedItem,"publicationDate",e)},expression:"editedItem.publicationDate"}})],1):t._e(),t._v(" "),1==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"2"}},[l("v-text-field",{attrs:{label:"Volume / Issue No",required:""},model:{value:t.editedItem.volumeIssueNo,callback:function(e){t.$set(t.editedItem,"volumeIssueNo",e)},expression:"editedItem.volumeIssueNo"}})],1):t._e(),t._v(" "),2==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"2"}},[l("v-text-field",{attrs:{label:"Volume / Issue No",required:""},model:{value:t.editedItem.volumeIssueNo,callback:function(e){t.$set(t.editedItem,"volumeIssueNo",e)},expression:"editedItem.volumeIssueNo"}})],1):t._e(),t._v(" "),t.editedItem.publicationTypeId>2?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Edition",required:""},model:{value:t.editedItem.edition,callback:function(e){t.$set(t.editedItem,"edition",e)},expression:"editedItem.edition"}})],1):t._e(),t._v(" "),t.editedItem.publicationTypeId>2?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Place",required:""},model:{value:t.editedItem.place,callback:function(e){t.$set(t.editedItem,"place",e)},expression:"editedItem.place"}})],1):t._e(),t._v(" "),t.editedItem.publicationTypeId>2?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Publisher",required:""},model:{value:t.editedItem.publisher,callback:function(e){t.$set(t.editedItem,"publisher",e)},expression:"editedItem.publisher"}})],1):t._e(),t._v(" "),t.editedItem.publicationTypeId>2?l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{attrs:{label:"Year",required:""},model:{value:t.editedItem.year,callback:function(e){t.$set(t.editedItem,"year",e)},expression:"editedItem.year"}})],1):t._e(),t._v(" "),1==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"2"}},[l("v-text-field",{attrs:{value:"jouralArticle.pages",label:"Pages",required:""},model:{value:t.editedItem.pages,callback:function(e){t.$set(t.editedItem,"pages",e)},expression:"editedItem.pages"}})],1):t._e(),t._v(" "),2==t.editedItem.publicationTypeId?l("v-col",{attrs:{cols:"2"}},[l("v-text-field",{attrs:{label:"Pages",required:""},model:{value:t.editedItem.pages,callback:function(e){t.$set(t.editedItem,"pages",e)},expression:"editedItem.pages"}})],1):t._e(),t._v(" "),l("v-spacer"),t._v(" "),l("v-btn",{staticClass:"mx-3 my-5",attrs:{color:"primary"},on:{click:function(e){return t.editedComposeReference()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompose Referance\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),l("v-col",{attrs:{cols:"12"}},[l("v-textarea",{attrs:{filled:"",label:"Reference: TAndrade C, Prasad Y, Devaraj A, Pinto EF, Shukla L. ECT and Pronounced Impairment in Spatial\nCognition: The Fallacy of Drawing Conclusions from a Single Case. J ECT. 2018 Jun;34(2):75–7.",value:t.editedItem.reference},model:{value:t.editedItem.reference,callback:function(e){t.$set(t.editedItem,"reference",e)},expression:"editedItem.reference"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var o=e.item;return[l("span",{staticClass:"uk-margin-small-right edit-icon",attrs:{"uk-icon":"pencil"},on:{click:function(e){return t.editItem(o)}}}),t._v(" "),l("span",{staticClass:"delete-icon",attrs:{"uk-icon":"trash"},on:{click:function(e){return t.deleteItem(o)}}})]}},{key:"no-data",fn:function(){return[l("v-btn",{attrs:{color:"primary"}},[t._v("\n\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t")])]},proxy:!0}])})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);