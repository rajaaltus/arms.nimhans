(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{507:function(t,e,n){var content=n(515);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("50788f08",content,!0,{sourceMap:!1})},515:function(t,e,n){(e=n(14)(!1)).push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=e},527:function(t,e,n){"use strict";n(17),n(12),n(9),n(7),n(13),n(92);var r=n(4),o=(n(507),n(475)),c=n(72),l=n(57),d=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m({},o.b,{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m({},o.a.options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m({},f,{},t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m({},data.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.v.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.v.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.v.backspace&&t!==d.v.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===t){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.n)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.n)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})},549:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(611),c=n.n(o);r.default.use(c.a)},551:function(t,e,n){var content=n(679);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("372df5a2",content,!0,{sourceMap:!1})},678:function(t,e,n){"use strict";var r=n(551);n.n(r).a},679:function(t,e,n){(e=n(14)(!1)).push([t.i,".document-editor[data-v-c97235ee]{border:1px solid var(--ck-color-base-border);border-radius:var(--ck-border-radius);max-height:700px;display:flex;flex-flow:column nowrap}.document-editor__toolbar[data-v-c97235ee]{z-index:1;box-shadow:0 0 5px rgba(0,0,0,.2);border-bottom:1px solid var(--ck-color-toolbar-border)}.document-editor__toolbar .ck-toolbar[data-v-c97235ee]{border:0;border-radius:0}.document-editor__editable-container[data-v-c97235ee]{padding:calc(2*var(--ck-spacing-large));background:var(--ck-color-base-foreground);overflow-y:scroll}.document-editor__editable-container .ck-editor__editable[data-v-c97235ee]{width:15.8cm;min-height:21cm;padding:1cm 2cm 2cm;border:1px solid #d3d3d3;border-radius:var(--ck-border-radius);background:#fff;box-shadow:0 0 5px rgba(0,0,0,.1);margin:0 auto}.document-editor .ck-content[data-v-c97235ee],.document-editor .ck-heading-dropdown .ck-list .ck-button__label[data-v-c97235ee]{font:16px/1.6 Helvetica Neue,Helvetica,Arial,sans-serif}.document-editor .ck-heading-dropdown .ck-list .ck-button__label[data-v-c97235ee]{line-height:calc(1.7*var(--ck-line-height-base)*var(--ck-font-size-base));min-width:6em}.document-editor .ck-heading-dropdown .ck-list .ck-button:not(.ck-heading_paragraph) .ck-button__label[data-v-c97235ee]{transform:scale(.8);transform-origin:left}.document-editor .ck-content h2[data-v-c97235ee],.document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label[data-v-c97235ee]{font-size:2.18em;font-weight:400}.document-editor .ck-content h2[data-v-c97235ee]{line-height:1.37em;padding-top:.342em;margin-bottom:.142em}.document-editor .ck-content h3[data-v-c97235ee],.document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label[data-v-c97235ee]{font-size:1.75em;font-weight:400;color:#009dff}.document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label[data-v-c97235ee]{color:var(--ck-color-list-button-on-text)}.document-editor .ck-content h3[data-v-c97235ee]{line-height:1.86em;padding-top:.171em;margin-bottom:.357em}.document-editor .ck-content h4[data-v-c97235ee],.document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label[data-v-c97235ee]{font-size:1.31em;font-weight:700}.document-editor .ck-content h4[data-v-c97235ee]{line-height:1.24em;padding-top:.286em;margin-bottom:.952em}.document-editor .ck-content p[data-v-c97235ee]{font-size:1em;line-height:1.63em;padding-top:.5em;margin-bottom:1.13em}.document-editor .ck-content blockquote[data-v-c97235ee]{font-family:Georgia,serif;margin-left:calc(2*var(--ck-spacing-large));margin-right:calc(2*var(--ck-spacing-large))}",""]),t.exports=e},834:function(t,e,n){"use strict";n.r(e);n(17),n(12),n(9),n(7),n(13);var r=n(73),o=(n(32),n(20),n(0)),c=n(4),l=n(66),d=(n(31),n(132));function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(549);var m={head:function(){return{title:"Testing Reporting"}},components:{PageHeader:d.a},data:function(){return{loading:!1,editorConfig:{height:"200px"},report:null,selectedUser:null,selectedYear:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({reportYears:function(){return this.$store.state.reportYears},people:function(){return this.$store.state.user.activeUsersList.result},editor:function(){return n(612)}},Object(l.c)({programmes:function(t){return t.program.programmesData.result},visitors:function(t){return t.visitor.visitorsData.result},trainings:function(t){return t.training.trainingsData.result},presentations:function(t){return t.presentation.presentationsData.result},participations:function(t){return t.participation.participationsData.result},publics:function(t){return t.public.publicData.result},researchData:function(t){return t.research.researchData.result},publications:function(t){return t.publication.publicationsData.result},recognitions:function(t){return t.recognition.recognitionsData.result},patents:function(t){return t.patent.patentsData.result},assignments:function(t){return t.assignment.assignmentsData.result},theses:function(t){return t.theses.thesesData.result}})),fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r="",r="department.id=".concat(n.state.auth.user.department,"&user.id=").concat(n.state.auth.user.id,"&annual_year=").concat(n.state.selectedYear,"&deleted_ne=true&_sort=created_at:DESC"),e.next=5,n.dispatch("program/setProgrammesData",{qs:r});case 5:return e.next=7,n.dispatch("visitor/setVisitorsData",{qs:r});case 7:return e.next=9,n.dispatch("training/setTrainingsData",{qs:r});case 9:return e.next=11,n.dispatch("presentation/setPresentationsData",{qs:r});case 11:return e.next=13,n.dispatch("participation/setParticipationsData",{qs:r});case 13:return e.next=15,n.dispatch("public/setPublicData",{qs:r});case 15:return e.next=17,n.dispatch("publication/setPublicationsData",{qs:r});case 17:return e.next=19,n.dispatch("research/setResearchData",{qs:r});case 19:return e.next=21,n.dispatch("recognition/setRecognitionsData",{qs:r});case 21:return e.next=23,n.dispatch("patent/setPatentsData",{qs:r});case 23:return e.next=25,n.dispatch("assignment/setAssignmentsData",{qs:r});case 25:return e.next=27,n.dispatch("theses/setThesesData",{qs:r});case 27:return"",o="department.id=".concat(n.state.auth.user.department,"&blocked_ne=true"),e.next=31,n.dispatch("user/setActiveUsersList",{qs:o});case 31:case"end":return e.stop()}}),e)})))()},mounted:function(){0==this.selectedYear&&(this.selectedYear=this.$store.state.selectedYear),null===this.selectedUser&&(this.selectedUser=this.$auth.user.id),this.fetchAllData()},methods:{setReport:function(){this.report=null;var t=this.programmes.map((function(t){return"\n            <h2>".concat(t.name.toUpperCase(),"<h2>\n            <h3><span>Duration: </span>").concat(t.from_date," - ").concat(t.to_date,"</h3>\n            <p>").concat(t.brief_report,"</p><hr>\n            ")})),e=this.visitors.map((function(t){return"\n            <h2>".concat(t.name.toUpperCase(),"<h2>\n            <h4><span>Duration: </span>").concat(t.from_date," - ").concat(t.to_date,"</h4>\n            <p>").concat(t.brief_report,"</p><hr>\n            ")})),n=this.trainings.map((function(t){return"\n            <h2>".concat(t.program_name.toUpperCase(),"<h2>\n            <h4><span>Duration: </span>").concat(t.from_date," - ").concat(t.to_date,"</h4>\n            <p>").concat(t.brief_report,"</p><hr>\n            ")})),o=this.presentations.map((function(t){return"\n            <h2>".concat(t.title.toUpperCase(),"<h2>\n            <h4><span>Type: </span>").concat(t.forum,"</h4>\n            <p>").concat(t.reference,"</p><hr>\n            ")})),c=this.participations.map((function(t){return"\n            <h2>".concat(t.program_name.toUpperCase(),"<h2>\n            <h4><span>Type: </span>").concat(t.forum,"</h4>\n            <p>").concat(t.place,"</p><hr>\n            ")})),l=this.publics.map((function(t){return"\n            <h2>".concat(t.program_name.toUpperCase(),"<h2>\n            <h4><span>Type: </span>").concat(t.type,"</h4>\n            <p>").concat(t.place,"</p><hr>\n            ")})),d=this.researchData.map((function(t){return"\n            <h2>".concat(t.title.toUpperCase(),"<h2>\n            <h4><span>Status: </span>").concat(t.research_status,"</h4>\n            <p>").concat(t.research_abstract,"</p><hr>\n            ")})),h=this.publications.map((function(t){return"\n            <h2>".concat(t.publication_type.toUpperCase(),"<h2>\n            <h4><span>Classification: </span>").concat(t.classification,"</h4>\n            <p>").concat(t.authors,"</p><hr>\n            ")})),m=this.recognitions.map((function(t){return"\n            <h2>".concat(t.award_title.toUpperCase(),"<h2>\n            <h4><span>Date: </span>").concat(t.date,"</h4>\n            <p>").concat(t.place,"</p><hr>\n            ")})),f=this.patents.map((function(t){return"\n            <h2>".concat(t.title.toUpperCase(),"<h2>\n            <h4><span>Reg.No: </span>").concat(t.registration_no,"</h4>\n            <p>").concat(t.patent_status,"</p><hr>\n            ")})),v=this.assignments.map((function(t){return"\n            <h2>".concat(t.roles.toUpperCase(),"<h2>\n            <h4><span>Faculty Name: </span>").concat(t.faculty_name,"</h4>\n            <p>").concat(t.designation,"</p><hr>\n            ")})),x=this.theses.map((function(t){return"\n            <h2>".concat(t.thesis_title.toUpperCase(),"<h2>\n            <h4><span>Student Name: </span>").concat(t.student_name,"</h4>\n            <p>").concat(t.guide,"</p><hr>\n            ")}));this.report=[].concat(['<div class="test">\n       <h1>Programmes / Events</h1>\n      <h4>Depertment of Science</h4>\n      </div>\n      '],Object(r.a)(t),Object(r.a)(e),Object(r.a)(n),Object(r.a)(o),Object(r.a)(c),Object(r.a)(l),Object(r.a)(d),Object(r.a)(h),Object(r.a)(m),Object(r.a)(f),[v],Object(r.a)(x)).join(" "),this.loading=!1},fetchAllData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n="",n="department.id=".concat(t.$store.state.auth.user.department,"&user.id=").concat(t.selectedUser,"&annual_year=").concat(t.selectedYear,"&deleted_ne=true&_sort=created_at:DESC"),e.next=5,t.$store.dispatch("program/setProgrammesData",{qs:n});case 5:return e.next=7,t.$store.dispatch("visitor/setVisitorsData",{qs:n});case 7:return e.next=9,t.$store.dispatch("training/setTrainingsData",{qs:n});case 9:return e.next=11,t.$store.dispatch("presentation/setPresentationsData",{qs:n});case 11:return t.$store.dispatch("participation/setParticipationsData",{qs:n}),t.$store.dispatch("public/setPublicData",{qs:n}),t.$store.dispatch("publication/setPublicationsData",{qs:n}),t.$store.dispatch("research/setResearchData",{qs:n}),t.$store.dispatch("recognition/setRecognitionsData",{qs:n}),t.$store.dispatch("patent/setPatentsData",{qs:n}),t.$store.dispatch("assignment/setAssignmentsData",{qs:n}),t.$store.dispatch("theses/setThesesData",{qs:n}),e.next=21,t.setReport();case 21:case"end":return e.stop()}}),e)})))()}}},f=(n(678),n(42)),v=n(47),x=n.n(v),_=n(527),D=n(110),I=n(471),y=n(98),k=n(202),S=n(36),O=n(194),w=n(472),j=n(475),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"px-5"},[n("v-col",{attrs:{cols:"11",lg:"3"}},[n("v-select",{attrs:{items:t.reportYears,"item-value":"id","item-text":"val",label:"Reporting Year",color:"success"},on:{input:t.fetchAllData},model:{value:t.selectedYear,callback:function(e){t.selectedYear=e},expression:"selectedYear"}})],1),t._v(" "),n("v-col",{attrs:{cols:"11",lg:"3"}},[n("v-autocomplete",{attrs:{items:t.people,color:"blue-grey lighten-2",label:"Faculty / Staff / Student","item-text":"fullname","item-value":"id"},on:{input:t.fetchAllData},scopedSlots:t._u([{key:"selection",fn:function(data){return[t._v("\n          "+t._s(data.item.fullname)+"\n        ")]}},{key:"item",fn:function(data){return["object"!=typeof data.item?[n("v-list-item-content",{domProps:{textContent:t._s(data.item)}})]:[n("v-list-item-avatar",[n("img",{attrs:{src:null!==data.item.avatar?t.$axios.defaults.baseURL+data.item.avatar.url:"/avatar-default-icon.png"}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(data.item.fullname)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(data.item.userType)}})],1)]]}}]),model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}})],1),t._v(" "),n("v-col",{attrs:{cols:"1",lg:"1"}},[n("div",{staticClass:"my-4"},[n("v-btn",{attrs:{color:"green darken-2",fab:"","x-small":"",dark:""}},[n("v-icon",[t._v("mdi-reload")])],1)],1)])],1),t._v(" "),n("client-only",[t.loading?n("div",{staticStyle:{height:"400px"}},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"subtitle-1 text-center",attrs:{cols:"12"}},[t._v("\n        Generating the Report. Please Wait...\n      ")]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-progress-linear",{attrs:{color:"green",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):n("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.report,callback:function(e){t.report=e},expression:"report"}})],1)],1)}),[],!1,null,"c97235ee",null);e.default=component.exports;x()(component,{VAutocomplete:_.a,VBtn:D.a,VCol:I.a,VIcon:y.a,VListItemAvatar:k.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VProgressLinear:O.a,VRow:w.a,VSelect:j.a})}}]);