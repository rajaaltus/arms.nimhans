(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{294:function(t,e,r){var content=r(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("43f80de4",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";var n=r(294);r.n(n).a},307:function(t,e,r){(e=r(13)(!1)).push([t.i,"#sc-page-aside .sc-page-aside-body[data-v-559f0f34]{padding:6px!important}.v-application ol[data-v-559f0f34],.v-application ul[data-v-559f0f34]{padding-left:0!important}",""]),t.exports=e},486:function(t,e,r){"use strict";r.r(e);r(35),r(16),r(9),r(4),r(22),r(6);var n=r(0),o=r(12),c=r(17),l=r(5);r(60);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}l.a.closest;var h={loading:{color:"#57A527",height:"5px"},components:{},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({approvalActivities:function(t){return t.approvalActivities},userProfile:function(t){return t.user.userProfile},programmesData:function(t){return t.program.programmesData}})),fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("setApprovalActivities");case 3:return n=r.state.auth.user.id,o="",o="DEPARTMENT"===r.state.auth.user.userType?"department.id=".concat(r.state.auth.user.department,"&approval_status=Pending&deleted_ne=true"):"department.id=".concat(r.state.auth.user.department,"&user.id=").concat(n),e.next=8,r.dispatch("program/setProgrammesData",{qs:o});case 8:return e.next=10,r.dispatch("visitor/setVisitorsData",{qs:o});case 10:return e.next=12,r.dispatch("training/setTrainingsData",{qs:o});case 12:return e.next=14,r.dispatch("presentation/setPresentationsData",{qs:o});case 14:return e.next=16,r.dispatch("participation/setParticipationsData",{qs:o});case 16:return e.next=18,r.dispatch("public/setPublicData",{qs:o});case 18:return e.next=20,r.dispatch("research/setResearchData",{qs:o});case 20:return e.next=22,r.dispatch("publication/setPublicationsData",{qs:o});case 22:return e.next=24,r.dispatch("recognition/setRecognitionsData",{qs:o});case 24:return e.next=26,r.dispatch("patent/setPatentsData",{qs:o});case 26:return e.next=28,r.dispatch("assignment/setAssignmentsData",{qs:o});case 28:return e.next=30,r.dispatch("theses/setThesesData",{qs:o});case 30:case"end":return e.stop()}}),e)})))()},mounted:function(){},beforeDestroy:function(){this.$store.commit("setPageFixed",!1)},methods:{getCountsForApprovals:function(t){return 1==t?this.$store.state.program.programmesData.result.length:2==t?this.$store.state.visitor.visitorsData.result.length:3==t?this.$store.state.training.trainingsData.result.length:4==t?this.$store.state.presentation.presentationsData.result.length:5==t?this.$store.state.participation.participationsData.result.length:6==t?this.$store.state.public.publicData.result.length:7==t?this.$store.state.research.researchData.result.length:8==t?this.$store.state.publication.publicationsData.result.length:9==t?this.$store.state.recognition.recognitionsData.result.length:10==t?this.$store.state.patent.patentsData.result.length:11==t?this.$store.state.assignment.assignmentsData.result.length:12==t?this.$store.state.theses.thesesData.result.length:void 0}}},v=(r(306),r(3)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"uk-flex uk-flex-column",attrs:{id:"sc-page-wrapper"}},[r("div",{staticClass:"uk-flex uk-height-1-1"},[r("div",{staticClass:"uk-visible@m",attrs:{id:"sc-page-aside"}},[r("div",{staticClass:"sc-page-aside-body"},[r("ul",[r("li",{staticClass:"uk-open"},[r("div",{staticClass:"uk-accordion-content"},[r("ul",{staticClass:"uk-list"},[t._l(t.approvalActivities,(function(e,n){return r("li",{key:n},[r("nuxt-link",{attrs:{to:"/admin/approvals/"+e.id}},[r("i",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.title)+"  \n\t\t\t\t\t\t\t\t\t\t\t"),t.getCountsForApprovals(e.id)>0?r("v-chip",{staticClass:"ma-1",attrs:{color:"green","x-small":"","text-color":"white"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.getCountsForApprovals(e.id))+"\n\t\t\t\t\t\t\t\t\t\t\t")]):t._e()],1)],1)})),t._v(" "),r("hr"),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"mdi mdi-inbox-arrow-up uk-margin-small-right"}),t._v("Rejected\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"mdi mdi-delete uk-margin-small-right sc-icon-22"}),t._v("Deleted\n\t\t\t\t\t\t\t\t\t\t")])])],2)])])])])]),t._v(" "),r("div",{staticClass:"sc-padding-remove uk-height-1-1",attrs:{id:"sc-page-content"}},[r("nuxt-child"),t._v(" "),r("ul",{staticClass:"sc-js-message-filter",attrs:{hidden:""}})],1)])])])}),[],!1,null,"559f0f34",null);e.default=component.exports}}]);