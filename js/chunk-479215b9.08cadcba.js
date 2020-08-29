(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-479215b9","chunk-2d0bdf09"],{"2dab":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-date-picker",{attrs:{dropdownClassName:"j-date-picker",disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},n=[],s=r("c1df"),i=r.n(s),o={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?i()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?i()(e,this.dateFormat):null}},methods:{moment:i.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},l=o,c=r("2877"),u=Object(c["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports},"3c53":function(e,t,r){},"74c6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userName",{}],expression:"['userName', {}]"}],attrs:{placeholder:"请输入用户名",readOnly:""}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理人用户名"}},[r("j-select-user-by-dep",{directives:[{name:"decorator",rawName:"v-decorator",value:["agentUserName",e.validatorRules.agentUserName],expression:"['agentUserName', validatorRules.agentUserName]"}],attrs:{placeholder:"请输入代理人用户名","trigger-change":!0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理开始时间"}},[r("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["startTime",e.validatorRules.startTime],expression:"[ 'startTime', validatorRules.startTime]"}],staticStyle:{width:"100%"},attrs:{"trigger-change":!0,showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择开始时间"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理结束时间"}},[r("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["endTime",e.validatorRules.endTime],expression:"[ 'endTime', validatorRules.endTime]"}],staticStyle:{width:"100%"},attrs:{"trigger-change":!0,showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择结束时间"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{}],expression:"[ 'status', {}]"}],staticClass:"fontiframe",attrs:{name:"radioGroup"}},[r("a-radio",{staticClass:"radioGroup",attrs:{value:"1"}},[e._v("有效")]),r("a-radio",{staticClass:"radioGroup",attrs:{value:"0"}},[e._v("无效")])],1)],1)],1)],1)],1)},n=[],s=r("88bc"),i=r.n(s),o=r("0fea"),l=r("2dab"),c=r("c14a"),u={name:"SysUserAgentModal",components:{JDate:l["default"],JSelectUserByDep:c["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},username:"",confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{agentUserName:{rules:[{required:!0,message:"请输入代理人用户名!"}]},startTime:{rules:[{required:!0,message:"请输入代理开始时间!"}]},endTime:{rules:[{required:!0,message:"请输入代理结束时间!"}]}},url:{add:"/sys/sysUserAgent/add",edit:"/sys/sysUserAgent/edit",queryByUserName:"/sys/sysUserAgent/queryByUserName"}}},created:function(){},methods:{agentSettings:function(e){this.username=e,this.init()},init:function(){var e=this,t={userName:this.username};Object(o["c"])(this.url.queryByUserName,t).then((function(t){t.success?e.edit(t.result):e.edit({userName:e.username,status:"0"})}))},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(i()(t.model,"userName","agentUserName","status","startTime","endTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var n="",s="";e.model.id?(n+=e.url.edit,s="put"):(n+=e.url.add,s="post");var i=Object.assign(e.model,a);Object(o["h"])(n,i,s).then((function(e){e.success?t.$message.success(e.message):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},d=u,h=r("2877"),m=Object(h["a"])(d,a,n,!1,null,"5e663c2e",null);t["default"]=m.exports},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",s="[object Function]",i="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function h(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function m(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var f=Object.prototype,p=f.hasOwnProperty,g=f.toString,y=u.Symbol,v=f.propertyIsEnumerable,b=y?y.isConcatSpreadable:void 0,w=Math.max;function S(e,t,r,a,n){var s=-1,i=e.length;r||(r=j),n||(n=[]);while(++s<i){var o=e[s];t>0&&r(o)?t>1?S(o,t-1,r,a,n):m(n,o):a||(n[n.length]=o)}return n}function x(e,t){return e=Object(e),C(e,t,(function(t,r){return r in e}))}function C(e,t,r){var a=-1,n=t.length,s={};while(++a<n){var i=t[a],o=e[i];r(o,i)&&(s[i]=o)}return s}function D(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=w(r.length-t,0),s=Array(n);while(++a<n)s[a]=r[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=r[a];return i[t]=s,d(e,this,i)}}function j(e){return I(e)||U(e)||!!(b&&e&&e[b])}function T(e){if("string"==typeof e||B(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function U(e){return O(e)&&p.call(e,"callee")&&(!v.call(e,"callee")||g.call(e)==n)}var I=Array.isArray;function N(e){return null!=e&&R(e.length)&&!k(e)}function O(e){return A(e)&&N(e)}function k(e){var t=q(e)?g.call(e):"";return t==s||t==i}function R(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){return!!e&&"object"==typeof e}function B(e){return"symbol"==typeof e||A(e)&&g.call(e)==o}var F=D((function(e,t){return null==e?{}:x(e,h(S(t,1),T))}));e.exports=F}).call(this,r("c8ba"))},"9ee5":function(e,t,r){"use strict";var a=r("3c53"),n=r.n(a);n.a},a505:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("j-modal",{staticStyle:{top:"50px"},attrs:{width:e.modalWidth,visible:e.visible,title:e.title,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleSubmit,cancel:e.close}},[r("a-row",{staticStyle:{"background-color":"#ececec",padding:"10px",margin:"-10px"},attrs:{gutter:10}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-card",{attrs:{bordered:!1}},[r("a-directory-tree",{attrs:{selectable:"",selectedKeys:e.selectedDepIds,checkStrictly:!0,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,expandAction:!1,expandedKeys:e.expandedKeys},on:{"update:expandedKeys":function(t){e.expandedKeys=t},"update:expanded-keys":function(t){e.expandedKeys=t},select:e.onDepSelect}})],1)],1),r("a-col",{attrs:{md:18,sm:24}},[r("a-card",{attrs:{bordered:!1}},[e._v("\n        用户账号:\n        "),r("a-input-search",{style:{width:"150px",marginBottom:"15px"},attrs:{placeholder:"请输入账号"},on:{search:e.onSearch},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}}),r("a-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"redo"},on:{click:function(t){return e.searchReset(1)}}},[e._v("重置")]),r("a-table",{ref:"table",attrs:{scroll:e.scrollTrigger,size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.getType},loading:e.loading},on:{change:e.handleTableChange}})],1)],1)],1)],1)},n=[],s=r("a34a"),i=r.n(s),o=r("ca00"),l=r("4ec3");function c(e,t,r,a,n,s,i){try{var o=e[s](i),l=o.value}catch(c){return void r(c)}o.done?t(l):Promise.resolve(l).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var s=e.apply(t,r);function i(e){c(s,a,n,i,o,"next",e)}function o(e){c(s,a,n,i,o,"throw",e)}i(void 0)}))}}var d={name:"JSelectUserByDepModal",components:{},props:["modalWidth","multi","userIds"],data:function(){return{queryParam:{username:""},columns:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户姓名",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1===e?"男":2===e?"女":e}},{title:"手机",align:"center",dataIndex:"phone"},{title:"部门",align:"center",dataIndex:"orgCode"}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectUserRows:[],selectUserIds:[],title:"根据部门选择用户",ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},selectedDepIds:[],departTree:[],visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[]}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{userIds:{immediate:!0,handler:function(){this.initUserNames()}}},created:function(){this.resetScreenSize(),this.loadData()},methods:{initUserNames:function(){var e=this;if(this.userIds){var t=this.userIds.split(",")+",";Object(l["A"])({username:t,pageNo:1,pageSize:t.length}).then((function(t){if(t.success){var r=[],a=[];t.result.records.forEach((function(e){a.push(e["realname"]),r.push(e["id"])})),e.selectedRowKeys=r,e.$emit("initComp",a.join(","))}}))}else this.$emit("initComp","")},loadData:function(){var e=u(i.a.mark((function e(t){var r,a=this;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1===t&&(this.ipagination.current=1),!(this.selectedDepIds&&this.selectedDepIds.length>0)){e.next=6;break}return e.next=4,this.initQueryUserByDepId(this.selectedDepIds);case 4:e.next=10;break;case 6:return this.loading=!0,r=this.getQueryParams(),e.next=10,Object(l["A"])(r).then((function(e){e.success&&(a.dataSource=e.result.records,a.ipagination.total=e.result.total)})).finally((function(){a.loading=!1}));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetScreenSize:function(){var e=document.body.clientWidth;this.scrollTrigger=e<500?{x:800}:{}},showModal:function(){this.visible=!0,this.queryDepartTree(),this.initUserNames(),this.loadData(),this.form.resetFields()},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(o["d"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},searchReset:function(e){var t=this;0!==e&&(t.queryParam={},t.loadData(1)),t.selectedRowKeys=[],t.selectUserIds=[],t.selectedDepIds=[]},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(e,t,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"===r.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleSubmit:function(){var e=this;this.getSelectUserRows(),e.$emit("ok",e.selectUserRows,e.selectUserIds),e.searchReset(0),e.close()},getSelectUserRows:function(e){var t=this.dataSource,r="";this.selectUserRows=[];for(var a=0,n=t.length;a<n;a++)this.selectedRowKeys.includes(t[a].id)&&(this.selectUserRows.push(t[a]),r=r+","+t[a].username);this.selectUserIds=r.substring(1)},onDepSelect:function(e){null!=e[0]&&(this.initQueryUserByDepId(e),this.selectedDepIds[0]!==e[0]&&(this.selectedDepIds=[e[0]]))},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onSearch:function(){this.loadData(1)},initQueryUserByDepId:function(e){var t=this;return this.loading=!0,Object(l["N"])({id:e.toString()}).then((function(e){e.success&&(t.dataSource=e.result,t.ipagination.total=e.result.length)})).finally((function(){t.loading=!1}))},queryDepartTree:function(){var e=this;Object(l["D"])().then((function(t){t.success&&(e.departTree=t.result,e.expandedKeys=e.departTree.map((function(e){return e.id})))}))},modalFormOk:function(){this.loadData()}}},h=d,m=(r("9ee5"),r("2877")),f=Object(m["a"])(h,a,n,!1,null,"6e33dfa5",null);t["default"]=f.exports},c14a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-input-search",{attrs:{placeholder:"请先选择用户",readOnly:"",unselectable:"on"},on:{search:e.onSearchDepUser},model:{value:e.userNames,callback:function(t){e.userNames=t},expression:"userNames"}},[r("a-button",{attrs:{slot:"enterButton",disabled:e.disabled},slot:"enterButton"},[e._v("选择用户")])],1),r("j-select-user-by-dep-modal",{ref:"selectModal",attrs:{"modal-width":e.modalWidth,multi:e.multi,"user-ids":e.value},on:{ok:e.selectOK,initComp:e.initComp}})],1)},n=[],s=r("a505");function i(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=o(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw s}}}}function o(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var c={name:"JSelectUserByDep",components:{JSelectUserByDepModal:s["default"]},props:{modalWidth:{type:Number,default:1250,required:!1},value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},multi:{type:Boolean,default:!0,required:!1}},data:function(){return{userIds:"",userNames:""}},mounted:function(){this.userIds=this.value},watch:{value:function(e){this.userIds=e}},model:{prop:"value",event:"change"},methods:{initComp:function(e){this.userNames=e},onSearchDepUser:function(){this.$refs.selectModal.showModal()},selectOK:function(e,t){if(e){var r,a="",n=i(e);try{for(n.s();!(r=n.n()).done;){var s=r.value;a+=","+s.realname}}catch(o){n.e(o)}finally{n.f()}this.userNames=a.substring(1),this.userIds=t}else this.userNames="",this.userIds="";this.$emit("change",this.userIds)}}},u=c,d=r("2877"),h=Object(d["a"])(u,a,n,!1,null,"bd3f15c8",null);t["default"]=h.exports}}]);