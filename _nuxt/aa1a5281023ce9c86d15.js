(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{548:function(t,e,r){var content=r(675);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7ccb57e3",content,!0,{sourceMap:!1})},609:function(t,e,r){"use strict";var o=r(31),n=r.n(o),c=(r(66),{props:["info"],methods:{getColor:function(t){return"Approved"===t?"green":"Pending"===t?"orange":"red"},handleApprove:function(){var t=this,e=Object.assign({},{id:this.info.id,approval_status:"Approved"});this.$store.dispatch("program/updateProgram",e).then((function(e){var r;r="department.id=".concat(t.$store.state.auth.user.department,"&approval_status=Pending&deleted_ne=true"),t.$store.dispatch("program/setProgrammesData",{qs:r}),n.a.fire({title:"Success",text:"Approved successfully!",icon:"success",showConfirmButton:!1,timer:1500,position:"top-end"})})),this.$emit("approved",1),console.log("handled")},handleReject:function(){var t=this,e=Object.assign({},{id:this.info.id,approval_status:"Rejected",approved_by:this.info.approved_by,rejected_reason:this.info.rejected_reason});e.approved_by=this.$store.state.auth.user.fullname,n.a.fire({title:"Reason for Rejection",input:"text",showCancelButton:!0,confirmButtonText:"Confirm",showLoaderOnConfirm:!0,preConfirm:function(t){e.rejected_reason=t},allowOutsideClick:function(){return!n.a.isLoading()}}).then((function(r){r.dismiss||t.$store.dispatch("program/updateProgram",e).then((function(e){n.a.fire({type:"success",title:"Status saved!",icon:"success",showConfirmButton:!1,timer:1500});var r;r="department.id=".concat(t.$store.state.auth.user.department,"&approval_status=Pending&deleted_ne=true"),t.$store.dispatch("program/setProgrammesData",{qs:r})}))}))},handleDelete:function(){var t=this,e=this.info.id;n.a.fire({title:"Are you sure you want to permanently delete this record?",showCancelButton:!0,confirmButtonText:"Yes, I am Sure.",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!n.a.isLoading()}}).then((function(r){r.dismiss||t.$store.dispatch("program/deleteProgram",{id:e}).then((function(e){n.a.fire({type:"success",title:"Deleted Successfully!",position:"top-end",icon:"success",showConfirmButton:!1,timer:1500});var r;r="department.id=".concat(t.$store.state.auth.user.department,"&approval_status=Pending&deleted_ne=true"),t.$store.dispatch("program/setProgrammesData",{qs:r})}))}))}}}),l=r(42),d=r(47),m=r.n(d),f=r(110),v=r(97),h=r(26),_=r(98),C=r(127),y=r(482),w=r(120),O=r(202),j=r(36),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mx-auto mb-1",attrs:{outlined:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("\n          Submitted By "+t._s(t.info.user.fullname)+" on "+t._s(t.$moment(t.info.created_at).format("DD MMM YYYY, HH:MM"))+"  \n          ")]),t._v(" "),r("p",{staticClass:"body-2 font-weight-medium"},[t._v(t._s(t.info.forum)+" "+t._s(t.info.type)+" on "+t._s(t.info.name)+" from "+t._s(t.$moment(t.info.from_date).format("DD MMM YYYY"))+" to "+t._s(t.$moment(t.info.to_date).format("DD MMM YYYY"))+" held at "+t._s(t.info.location))]),t._v(" "),r("p",{staticClass:"body-2"},[r("b",[t._v("Coordinators:")]),t._v(" "+t._s(t.info.coordinators))]),t._v(" "),r("p",{staticClass:"body-2 font-weight-medium"},[r("b",[r("u",[t._v("Brief Report")])])]),t._v(" "),r("p",{staticClass:"body-2 font-weight-normal"},[t._v(t._s(t.info.brief_report))])]),t._v(" "),t.info.image?r("v-list-item-avatar",{attrs:{tile:"",size:"100",color:"grey"}},[r("v-img",{attrs:{src:t.info.image?""+t.$axios.defaults.baseURL+t.info.image.url:"","max-width":"100%"}})],1):t._e()],1),t._v(" "),r("v-card-actions",[r("v-layout",{attrs:{"align-end":"","justify-end":""}},[r("v-btn",{staticClass:"mr-2",attrs:{small:"",color:"red darken-3",dark:""},on:{click:function(e){return t.handleReject()}}},[r("v-icon",{staticClass:"pr-2",attrs:{small:""}},[t._v("mdi-message-bulleted-off")]),t._v("Reject")],1),t._v(" "),r("v-btn",{attrs:{small:"",color:"green darken-3",dark:""},on:{click:function(e){return t.handleApprove()}}},[r("v-icon",{staticClass:"pr-2",attrs:{small:""}},[t._v("mdi-check-all")]),t._v(" Approve")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VBtn:f.a,VCard:v.a,VCardActions:h.a,VIcon:_.a,VImg:C.a,VLayout:y.a,VListItem:w.a,VListItemAvatar:O.a,VListItemContent:j.a})},674:function(t,e,r){"use strict";var o=r(548);r.n(o).a},675:function(t,e,r){(e=r(14)(!1)).push([t.i,".disp[data-v-30eb1168]{font-size:15px}.disp[data-v-30eb1168],.disp-icon[data-v-30eb1168]{color:#fff;font-weight:400}.disp-icon[data-v-30eb1168]{font-size:24px}",""]),t.exports=e},825:function(t,e,r){"use strict";r.r(e);r(20);var o=r(0),n=r(132),c=(r(17),r(12),r(9),r(7),r(13),r(4)),l=r(66);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["approvalActivities"]),{},Object(l.c)(["program/programmesCount"])),mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{getApprovalCount:function(t){return 1==t?this.$store.state.program.programmesCount:2==t?this.$store.state.visitor.visitorsCount:3==t?this.$store.state.training.trainingsCount:4==t?this.$store.state.presentation.presentationsCount:5==t?this.$store.state.participation.participationsCount:6==t?this.$store.state.public.publicEngagementsCount:7==t?this.$store.state.research.researchCount:8==t?this.$store.state.publication.publicationsCount:9==t?this.$store.state.recognition.recognitionsCount:10==t?this.$store.state.patent.patentsCount:11==t?this.$store.state.assignment.assignmentsCount:12==t?this.$store.state.theses.thesesCount:void 0}}},f=(r(674),r(42)),v=r(47),h=r.n(v),_=r(205),C=r(98),y=r(200),w=r(120),O=r(36),j=r(204),$=r(108),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticStyle:{"border-radius":"0"},attrs:{flat:"",color:"#41704e"}},[r("v-list-item-group",{attrs:{color:"#ffde00"}},t._l(t.approvalActivities,(function(e,i){return r("v-list-item",{key:i,attrs:{to:"/admin/approvals/"+e.id}},[r("v-list-item-icon",{staticClass:"pl-2 mr-3"},[r("v-icon",{staticClass:"disp-icon",domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"disp"},[t._v(t._s(e.title)+"\n          "),0!==t.getApprovalCount(e.id)?r("v-chip",{attrs:{"x-small":"","text-color":"black",color:"yellow"}},[t._v("\n            "+t._s(t.getApprovalCount(e.id))+"\n          ")]):t._e()],1)],1)],1)})),1)],1)}),[],!1,null,"30eb1168",null),x=component.exports;h()(component,{VChip:_.a,VIcon:C.a,VList:y.a,VListItem:w.a,VListItemContent:O.a,VListItemGroup:j.a,VListItemIcon:$.a,VListItemTitle:O.c});var A=r(609),P={head:function(){return{title:"Approvals"}},components:{PageHeader:n.a,ApprovalActivities:x,Program:A.a},data:function(){return{}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("setApprovalActivities");case 3:case"end":return e.stop()}}),e)})))()}},V=r(471),k=r(472),D=Object(f.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",lg:"3"}},[e("ApprovalActivities")],1),this._v(" "),e("v-col",{attrs:{cols:"12",lg:"9"}},[e("nuxt-child")],1)],1)],1)}),[],!1,null,null,null);e.default=D.exports;h()(D,{VCol:V.a,VRow:k.a})}}]);