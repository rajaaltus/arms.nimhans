(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{370:function(t,e,r){var content=r(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("7e1694a2",content,!0,{sourceMap:!1})},386:function(t,e,r){"use strict";var n=r(370);r.n(n).a},387:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,"#sc-page-aside .sc-page-aside-body[data-v-decd84ae]{padding:6px!important}.v-application ol[data-v-decd84ae],.v-application ul[data-v-decd84ae]{padding-left:0!important}",""])},528:function(t,e,r){"use strict";r.r(e);r(36),r(23),r(11),r(14),r(4),r(24),r(38),r(29),r(60),r(84),r(7);var n=r(0),o=r(15),c=r(20),l=r(5),h=r(43),d=r.n(h);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var f,v=l.a.closest,x={loading:{color:"#57A527",height:"5px"},components:{},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.c)({studentActivities:function(t){return t.studentActivities},userProfile:function(t){return t.user.userProfile},programmesData:function(t){return t.program.programmesData}})),fetch:(f=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,c,l,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("setStudentActivties");case 3:if(r.state.user.userProfile.success){t.next=7;break}return n=r.state.auth.user.id,t.next=7,r.dispatch("user/setUserProfile",{id:n}).catch(function(t){h.snackbar=!0,h.submitMessage=t});case 7:return o=r.state.auth.user.id,c=r.state.user.userProfile.result.departmentId,l="",l="ROLE_DEPARTMENT"===r.state.auth.user.authorities[0]?"departmentId.equals=".concat(c,"&approvalStatus.notEquals=REJECTED&approvalStatus.equals=PENDING"):"departmentId.equals=".concat(c,"&userProfileId.equals=").concat(o),t.next=13,r.dispatch("program/setProgrammesData",{qs:l});case 13:return t.next=15,r.dispatch("visitor/setVisitorsData",{qs:l});case 15:return t.next=17,r.dispatch("training/setTrainingsData",{qs:l});case 17:return t.next=19,r.dispatch("presentation/setPresentationsData",{qs:l});case 19:return t.next=21,r.dispatch("participation/setParticipationsData",{qs:l});case 21:return t.next=23,r.dispatch("public/setPublicData",{qs:l});case 23:return t.next=25,r.dispatch("research/setResearchData",{qs:l});case 25:return t.next=27,r.dispatch("publication/setPublicationsData",{qs:l});case 27:return t.next=29,r.dispatch("recognition/setRecognitionsData",{qs:l});case 29:return t.next=31,r.dispatch("patent/setPatentsData",{qs:l});case 31:return t.next=33,r.dispatch("assignment/setAssignmentsData",{qs:l});case 33:return t.next=35,r.dispatch("theses/setThesesData",{qs:l});case 35:case"end":return t.stop()}},t)})),function(t){return f.apply(this,arguments)}),mounted:function(){var t=this;this.$store.state.user.userProfile.success||d.a.fire({text:"Please update the profile details to complete the registration process",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YES PROCEED",allowOutsideClick:!1}).then(function(e){e.value&&t.$router.push("/admin/create_user")})},beforeDestroy:function(){this.$store.commit("setPageFixed",!1)},methods:{getCountsForApprovals:function(t){return 1==t?this.$store.state.program.programmesData.result.length:2==t?this.$store.state.visitor.visitorsData.result.length:3==t?this.$store.state.training.trainingsData.result.length:4==t?this.$store.state.presentation.presentationsData.result.length:5==t?this.$store.state.participation.participationsData.result.length:6==t?this.$store.state.public.publicData.result.length:7==t?this.$store.state.research.researchData.result.length:8==t?this.$store.state.publication.publicationsData.result.length:9==t?this.$store.state.recognition.recognitionsData.result.length:10==t?this.$store.state.patent.patentsData.result.length:11==t?this.$store.state.assignment.assignmentsData.result.length:12==t?this.$store.state.theses.thesesData.result.length:void 0},showMessage:function(t,e){v(t.target,function(t){return t.className?t.className.includes("pretty")||t.className.includes("sc-message-actions"):null})||(this.$router.push({name:"pages-mailbox-message-id",params:{id:e.id}}),this.$store.commit("mailbox/markAsRead",e))},closeMessage:function(t){t.preventDefault(),this.$router.push({name:"pages-mailbox"})},composeMessage:function(){this.$router.push({name:"pages-mailbox-compose"})},toggleAllMessages:function(t){var e=this;this.$store.commit("mailbox/toggleMessages",t),this.messages.forEach(function(r){e.messageSelected[r.id]=t})},toggleMessage:function(t,e){var r={id:e.id,value:t};this.$store.commit("mailbox/toggleMessage",r);var n=this.messages.map(function(t){return t.selected}),o=n.some(function(t){return!0===t});n.every(function(t){return!0===t})?(this.mailbox.checkAll=!0,this.mailbox.checkAllInd=!1):o?this.mailbox.checkAllInd=!0:(this.mailbox.checkAll=!1,this.mailbox.checkAllInd=!1)},messageTagColor:function(t){return this.tags.filter(function(e){return e.name===t})[0].color},tagName:function(t){if(t)return"sc-js-tag-"+t.toLowerCase().replace(/ /g,"")}}},D=(r(386),r(3)),component=Object(D.a)(x,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"uk-flex uk-flex-column",attrs:{id:"sc-page-wrapper"}},[r("div",{staticClass:"uk-flex uk-height-1-1"},[r("div",{staticClass:"uk-visible@m",attrs:{id:"sc-page-aside"}},[r("div",{staticClass:"sc-page-aside-body"},[r("ul",[r("li",{staticClass:"uk-open"},[r("div",{staticClass:"uk-accordion-content"},[r("ul",{staticClass:"uk-list"},[t._l(t.studentActivities,function(e,n){return r("li",{key:n},[r("nuxt-link",{attrs:{to:"/admin/approvals/"+e.id}},[r("i",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"  \n\t\t\t\t\t\t\t\t\t\t\t"),t.getCountsForApprovals(e.id)>0?r("v-chip",{staticClass:"ma-1",attrs:{color:"green","x-small":"","text-color":"white"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.getCountsForApprovals(e.id))+"\n\t\t\t\t\t\t\t\t\t\t\t")]):t._e()],1)],1)}),t._v(" "),r("hr"),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"mdi mdi-inbox-arrow-up uk-margin-small-right"}),t._v("Rejected\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"mdi mdi-delete uk-margin-small-right sc-icon-22"}),t._v("Deleted\n\t\t\t\t\t\t\t\t\t\t")])])],2)])])])])]),t._v(" "),r("div",{staticClass:"sc-padding-remove uk-height-1-1",attrs:{id:"sc-page-content"}},[r("nuxt-child"),t._v(" "),r("ul",{staticClass:"sc-js-message-filter",attrs:{hidden:""}})],1)])])])},[],!1,null,"decd84ae",null);e.default=component.exports}}]);