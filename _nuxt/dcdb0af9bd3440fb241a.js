(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{293:function(e,t,r){var content=r(314);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("3eb92356",content,!0,{sourceMap:!1})},313:function(e,t,r){"use strict";var n=r(293);r.n(n).a},314:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"#sc-page-aside .sc-page-aside-body[data-v-7c3364f5]{padding:6px!important}.v-application ol[data-v-7c3364f5],.v-application ul[data-v-7c3364f5]{padding-left:0!important}",""])},511:function(e,t,r){"use strict";r.r(t);r(36),r(23),r(11),r(14),r(4),r(24),r(38),r(29),r(60),r(83),r(7);var n=r(0),o=r(15),c=r(20),l=r(5),f=r(43),m=r.n(f);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}var d,v=l.a.closest,x={components:{},data:function(){return{}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach(function(t){Object(o.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(c.c)({approvalActivities:function(e){return e.approvalActivities},userProfile:function(e){return e.user.userProfile}})),fetch:(d=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("setApprovalActivities");case 3:if(r.state.user.userProfile.success){e.next=7;break}return n=r.state.auth.user.id,e.next=7,r.dispatch("user/setUserProfile",{id:n}).catch(function(e){o.snackbar=!0,o.submitMessage=e});case 7:case"end":return e.stop()}},e)})),function(e){return d.apply(this,arguments)}),mounted:function(){var e=this;this.$store.state.user.userProfile.success||m.a.fire({title:"Your Profile is Empty",text:"Please fill your profile before using this system",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Proceed"}).then(function(t){t.value&&e.$router.push("/admin/create_user")})},beforeDestroy:function(){this.$store.commit("setPageFixed",!1)},methods:{showMessage:function(e,t){v(e.target,function(e){return e.className?e.className.includes("pretty")||e.className.includes("sc-message-actions"):null})||(this.$router.push({name:"pages-mailbox-message-id",params:{id:t.id}}),this.$store.commit("mailbox/markAsRead",t))},closeMessage:function(e){e.preventDefault(),this.$router.push({name:"pages-mailbox"})},composeMessage:function(){this.$router.push({name:"pages-mailbox-compose"})},toggleAllMessages:function(e){var t=this;this.$store.commit("mailbox/toggleMessages",e),this.messages.forEach(function(r){t.messageSelected[r.id]=e})},toggleMessage:function(e,t){var r={id:t.id,value:e};this.$store.commit("mailbox/toggleMessage",r);var n=this.messages.map(function(e){return e.selected}),o=n.some(function(e){return!0===e});n.every(function(e){return!0===e})?(this.mailbox.checkAll=!0,this.mailbox.checkAllInd=!1):o?this.mailbox.checkAllInd=!0:(this.mailbox.checkAll=!1,this.mailbox.checkAllInd=!1)},messageTagColor:function(e){return this.tags.filter(function(t){return t.name===e})[0].color},tagName:function(e){if(e)return"sc-js-tag-"+e.toLowerCase().replace(/ /g,"")}}},y=(r(313),r(3)),component=Object(y.a)(x,function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("div",{staticClass:"sc-padding-remove uk-height-1-1",attrs:{id:"sc-page-content"}},[t("div",{staticClass:"uk-width-1-1 uk-margin"})])])},[],!1,null,"7c3364f5",null);t.default=component.exports}}]);