(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{485:function(t,n,e){"use strict";e.r(n);e(6);var r=e(0),o=e(60),c=e.n(o),l={layout:"normal",auth:!1,data:function(){return{res:""}},mounted:function(){this.activateAccount()},methods:{activateAccount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$get("/activate?key=".concat(t.$route.query.key)).then((function(n){return c.a.fire("Email Verification","Verfied Sucessfully!","success"),t.$router.push("/login")})).catch((function(n){return t.res=n.response.data.detail}));case 2:case"end":return n.stop()}}),n)})))()}}},f=e(3),component=Object(f.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-container",[e("v-banner",{scopedSlots:t._u([{key:"actions",fn:function(){return[e("v-btn",{attrs:{text:"",color:"warning"}},[t._v("\n\t\t\t\t\tRetry\n\t\t\t\t")]),t._v(" "),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(n){return t.$router.push("/login")}}},[t._v("\n\t\t\t\t\tLogin\n\t\t\t\t")])]},proxy:!0}])},[t._v("\n\t\t\tYour Account activation in progress..."),e("br"),t._v("\n\t\t\tStatus: "+t._s(t.res)+"\n\t\t\t")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);