(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{296:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(305),c=r.n(o);n.default.use(c.a)},297:function(t,e,r){var content=r(464);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("574b74dd",content,!0,{sourceMap:!1})},463:function(t,e,r){"use strict";var n=r(297);r.n(n).a},464:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".page-title{background:none;border-left:10px solid #57a727;display:inline-flex;line-height:0;height:40px;vertical-align:center!important}.uk-grid-grey{margin-top:0!important;background:none!important;box-shadow:none!important}.ck.ck-toolbar{background:none!important;border-radius:.4em .4em 0 0!important}",""])},491:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(301),r(29),r(37),r(7);var n=r(0),o=r(15),c=r(20),d=r(43),l=r.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}r(296);var h,f,v,k,w,y,x={name:"DepartmentAbout",data:function(){var t;return t={Ydialog:!1,editorConfig:{},selectedYear:0,departmentAbout:{annual_year:0,department:0,deleted:!1,introduction:"",facilities:""},editedItem:{annual_year:0,departmentId:0,status:"VALID",introduction:"",facilities:""},file:"",addDepartmentImage:{departmentProfileId:0,imageCode:"",name:"",path:"",status:"VALID"},addImageContent:{data:"",dataContentType:"",departmentImageId:0,status:"VALID"},reportYears:[{id:2017,val:"2017-2018"},{id:2018,val:"2018-2019"},{id:2019,val:"2019-2020"},{id:2020,val:"2020-2021"}]},Object(o.a)(t,"selectedYear",0),Object(o.a)(t,"aboutImages",[]),t},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({newAbout:function(t){return t.depabout.newAbout.data}}),{editor:function(){return r(306)},uniqueID:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-",i=0;i<8;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}}),fetch:(y=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,c,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=r.state.auth.user.id,t.next=4,r.dispatch("user/setUserProfile",{id:n}).catch(function(t){d.snackbar=!0,d.submitMessage=t});case 4:return o=r.state.user.userProfile.result.departmentId,r.state.user.userProfile.result.userId,this.selectedYear=r.state.selectedYear,console.log(o),c="department.id=".concat(o,"&annual_year=").concat(this.selectedYear),console.log(c),t.next=13,r.dispatch("depabout/setAboutData",{query:c});case 13:case"end":return t.stop()}},t,this)})),function(t){return y.apply(this,arguments)}),mounted:function(){0==this.$store.state.selectedYear?this.Ydialog=!0:this.selectedYear=this.$store.state.selectedYear,console.log(this.newAbout.length),this.newAbout.length>0&&(this.departmentAbout=Object.assign({},this.newAbout[0]))},methods:{addProfile:(w=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.newAbout.length>0)){t.next=9;break}return this.departmentAbout.department=this.$store.state.user.userProfile.result.departmentId,this.departmentAbout.deleted=!1,e=this.departmentAbout,console.log(e),t.next=7,this.$store.dispatch("depabout/updateAbout",e).then(function(t){l.a.fire({title:"Success",text:"Department Profile Added!",type:"success",showConfirmButton:!1,timer:1500}),r.reload()}).catch(function(t){l.a.fire({title:"Oops!",text:"Exceeds Word limit, (should be less than 150 words.)",type:"warning",showConfirmButton:!1,timer:3e3})});case 7:t.next=19;break;case 9:if(this.departmentAbout.annual_year=this.selectedYear,this.departmentAbout.department=this.$store.state.user.userProfile.result.departmentId,""==this.departmentAbout.introduction||""==this.departmentAbout.facilities){t.next=18;break}return e=this.departmentAbout,console.log(e),t.next=16,this.$store.dispatch("depabout/addProfile",e).then(function(t){l.a.fire({title:"Success",text:"Profile Added!",type:"success",showConfirmButton:!1,timer:1500}),r.reload()}).catch(function(t){l.a.fire({title:"Oops!",text:"Exceeds Word limit, (should be less than 150 words.)",type:"warning",showConfirmButton:!1,timer:3e3})});case 16:t.next=19;break;case 18:l.a.fire({title:"Oops!",text:"Please enter data before submit",type:"warning",showConfirmButton:!1,timer:3e3});case 19:case"end":return t.stop()}},t,this)})),function(){return w.apply(this,arguments)}),reload:(k=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$store.state.user.userProfile.result.departmentId,r="department.id=".concat(e,"&annual_year=").concat(this.selectedYear),t.next=5,this.$store.dispatch("depabout/setAboutData",{query:r});case 5:this.newAbout.length>0?this.departmentAbout=Object.assign({},this.$store.state.depabout.newAbout.data[0]):this.departmentAbout=this.editedItem;case 6:case"end":return t.stop()}},t,this)})),function(){return k.apply(this,arguments)}),changeReportingYear:(v=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setReportingYear",this.selectedYear);case 2:return t.next=4,this.reload();case 4:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)}),setReportingYear:(f=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.Ydialog=!1,t.next=3,this.$store.dispatch("setReportingYear",this.selectedYear);case 3:this.reload();case 4:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)}),handleFileUpload:function(){this.file=this.$refs.file.files[0]},submitFile:(h=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n,o,c,d,l,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.file.name,r=this.uniqueID,n="",o=this.file,n=o.type,c=this.deptProfileId,this.addDepartmentImage.departmentProfileId=c,this.addDepartmentImage.imageCode=r,this.addDepartmentImage.name=e,this.addDepartmentImage.path=e,d=this.addDepartmentImage,l=[],(m=new FileReader).readAsArrayBuffer(this.file),m.onloadend=function(t){if(t.target.readyState==FileReader.DONE)for(var e=t.target.result,r=new Uint8Array(e),i=0;i<r.length;i++)l.push(r[i])},!l){t.next=31;break}return console.log(d),t.next=24,this.$store.dispatch("depabout/addDeptImage",d);case 24:return this.addImageContent.data=l,this.addImageContent.dataContentType=n,this.addImageContent.departmentImageId=this.$store.state.depabout.addedImageId,d=this.addImageContent,console.log(d),t.next=31,this.$store.dispatch("depabout/addDeptImageContent",d).then(function(t){console.log(t),console.log(t.id)}).catch(function(t){console.log(t)});case 31:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)})}},A=(r(463),r(3)),component=Object(A.a)(x,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("v-dialog",{attrs:{persistent:"","max-width":"30%"},model:{value:t.Ydialog,callback:function(e){t.Ydialog=e},expression:"Ydialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"title"},[t._v("Select Reporting Year")])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{staticClass:"text-center",attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.Ydialog=!1}}},[t._v("\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{color:"blue",text:""},on:{click:t.setReportingYear}},[t._v("\n\t\t\t\t\t\t\tSet\n\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("div",{staticClass:"uk-text-center uk-grid",attrs:{"data-uk-grid":""}},[r("div",{staticClass:"uk-width-auto"},[r("div",{staticClass:"page-title"},[r("h1",{staticClass:"uk-margin-medium-left"},[t._v("\n\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"uk-width-expand uk-align-right"},[r("div",{staticClass:"uk-align-right",attrs:{"data-uk-form-custom":"target: > * > span:first-child"}},[r("v-select",{attrs:{items:t.reportYears,"item-text":"val","item-value":"id",label:"Reporting Year",required:""},on:{input:t.changeReportingYear},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1)])]),t._v(" "),r("v-form",{ref:"about",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"uk-card-grey"},[r("p",{staticClass:"uk-article"},[r("span",{staticClass:"frm-title"},[t._v("A. Introduction (in about 150 words); specifically indicate the recognition / contribution of the Department during the year to policies, planning and programmes at State / National and International levels.")])]),t._v(" "),r("div",{staticClass:"uk-card-body uk-padding-remove uk-margin-bottom"},[r("client-only",[r("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.departmentAbout.introduction,callback:function(e){t.$set(t.departmentAbout,"introduction",e)},expression:"departmentAbout.introduction"}})],1),t._v(" "),""!=t.departmentAbout.introduction?r("span",[t._v("Words: "+t._s(t.departmentAbout.introduction.split(" ").length))]):t._e()],1)]),t._v(" "),r("div",{staticClass:"uk-card-grey"},[r("p",{staticClass:"uk-article"},[r("span",{staticClass:"frm-title"},[t._v("B. New facilities developed, new initiatives taken up by the Department(s) within NIMHANS during the year.")])]),t._v(" "),r("div",{staticClass:"uk-card-body uk-padding-remove uk-margin-bottom"},[r("client-only",[r("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.departmentAbout.facilities,callback:function(e){t.$set(t.departmentAbout,"facilities",e)},expression:"departmentAbout.facilities"}})],1),t._v(" "),""!=t.departmentAbout.facilities?r("span",[t._v("Words: "+t._s(t.departmentAbout.facilities.split(" ").length))]):t._e()],1)])]),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary uk-margin-top uk-align-right",on:{click:t.addProfile}},[t._v("\n\t\t\t\tSubmit\n\t\t\t")])],1)])])},[],!1,null,null,null);e.default=component.exports}}]);