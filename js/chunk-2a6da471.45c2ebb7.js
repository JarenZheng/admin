(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a6da471","chunk-2d0bdf09","chunk-2d229a09","chunk-2d23019d"],{"0d4b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{attrs:{label:"账号"}},[a("j-input",{attrs:{placeholder:"输入账号模糊查询"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"性别"}},[a("a-select",{attrs:{placeholder:"请选择性别"},model:{value:e.queryParam.sex,callback:function(t){e.$set(e.queryParam,"sex",t)},expression:"queryParam.sex"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择")]),a("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"真实名字"}},[a("a-input",{attrs:{placeholder:"请输入真实名字"},model:{value:e.queryParam.realname,callback:function(t){e.$set(e.queryParam,"realname",t)},expression:"queryParam.realname"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"手机号码"}},[a("a-input",{attrs:{placeholder:"请输入手机号码查询"},model:{value:e.queryParam.phone,callback:function(t){e.$set(e.queryParam,"phone",t)},expression:"queryParam.phone"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"用户状态"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择")]),a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"2"}},[e._v("冻结")])],1)],1)],1)]:e._e(),a("a-col",{attrs:{md:6,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"border-top":"5px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("添加用户")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("用户信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("a-button",{attrs:{type:"primary",icon:"hdd"},on:{click:function(t){e.recycleBinVisible=!0}}},[e._v("回收站")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[a("a-menu-item",{key:"1"},[a("a-icon",{attrs:{type:"delete"},on:{click:e.batchDel}}),e._v("\n          删除\n        ")],1),a("a-menu-item",{key:"2"},[a("a-icon",{attrs:{type:"lock"},on:{click:function(t){return e.batchFrozen("2")}}}),e._v("\n          冻结\n        ")],1),a("a-menu-item",{key:"3"},[a("a-icon",{attrs:{type:"unlock"},on:{click:function(t){return e.batchFrozen("1")}}}),e._v("\n          解冻\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n        批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"avatarslot",fn:function(t,n,r){return[a("div",{staticClass:"anty-img-wrap"},[a("a-avatar",{attrs:{shape:"square",src:e.getAvatarView(n.avatar),icon:"user"}})],1)]}},{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(n)}}},[e._v("详情")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleChangePassword(n.username)}}},[e._v("密码")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(n.id)}}},[a("a",[e._v("删除")])])],1),1==n.status?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定冻结吗?"},on:{confirm:function(){return e.handleFrozen(n.id,2,n.username)}}},[a("a",[e._v("冻结")])])],1):e._e(),2==n.status?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定解冻吗?"},on:{confirm:function(){return e.handleFrozen(n.id,1,n.username)}}},[a("a",[e._v("解冻")])])],1):e._e(),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleAgentSettings(n.username)}}},[e._v("代理人")])])],1)],1)],1)}}])})],1),a("user-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("password-modal",{ref:"passwordmodal",on:{ok:e.passwordModalOk}}),a("sys-user-agent-modal",{ref:"sysUserAgentModal"}),a("user-recycle-bin-modal",{attrs:{visible:e.recycleBinVisible},on:{"update:visible":function(t){e.recycleBinVisible=t},ok:e.modalFormOk}})],1)},r=[],s=a("418f"),i=a("ddf9"),o=a("0fea"),l=a("4ec3"),c=a("b65a"),d=a("74c6"),u=a("4349"),m=a("eb9c"),h={name:"UserList",mixins:[c["a"]],components:{SysUserAgentModal:d["default"],UserModal:s["default"],PasswordModal:i["default"],JInput:u["default"],UserRecycleBinModal:m["default"]},data:function(){return{description:"这是用户管理页面",queryParam:{},recycleBinVisible:!1,columns:[{title:"用户账号",align:"center",dataIndex:"username",width:120,sorter:!0},{title:"用户姓名",align:"center",width:100,dataIndex:"realname"},{title:"头像",align:"center",width:120,dataIndex:"avatar",scopedSlots:{customRender:"avatarslot"}},{title:"性别",align:"center",width:80,dataIndex:"sex_dictText",sorter:!0},{title:"生日",align:"center",width:100,dataIndex:"birthday"},{title:"手机号码",align:"center",width:100,dataIndex:"phone"},{title:"部门",align:"center",width:180,dataIndex:"orgCodeTxt"},{title:"状态",align:"center",width:80,dataIndex:"status_dictText"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:170}],url:{syncUser:"/process/extActProcess/doSyncUser",list:"/sys/user/list",delete:"/sys/user/delete",deleteBatch:"/sys/user/deleteBatch",exportXlsUrl:"/sys/user/exportXls",importExcelUrl:"sys/user/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{getAvatarView:function(e){return Object(o["d"])(e)},batchFrozen:function(e){if(this.selectedRowKeys.length<=0)return this.$message.warning("请选择一条记录！"),!1;var t="",a=this,n=!1;a.selectionRows.forEach((function(e){"admin"==e.username&&(n=!0)})),n?a.$message.warning("管理员账号不允许此操作,请重新选择！"):(a.selectedRowKeys.forEach((function(e){t+=e+","})),a.$confirm({title:"确认操作",content:"是否"+(1==e?"解冻":"冻结")+"选中账号?",onOk:function(){Object(l["s"])({ids:t,status:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)}))}}))},handleMenuClick:function(e){1==e.key?this.batchDel():2==e.key?this.batchFrozen(2):3==e.key&&this.batchFrozen(1)},handleFrozen:function(e,t,a){var n=this;"admin"!=a?Object(l["s"])({ids:e,status:t}).then((function(e){e.success?(n.$message.success(e.message),n.loadData()):n.$message.warning(e.message)})):n.$message.warning("管理员账号不允许此操作！")},handleChangePassword:function(e){this.$refs.passwordmodal.show(e)},handleAgentSettings:function(e){this.$refs.sysUserAgentModal.agentSettings(e),this.$refs.sysUserAgentModal.title="用户代理人设置"},passwordModalOk:function(){}}},p=h,f=(a("8500"),a("2877")),g=Object(f["a"])(p,n,r,!1,null,"68eb8424",null);t["default"]=g.exports},"2dab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{dropdownClassName:"j-date-picker",disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},r=[],s=a("c1df"),i=a.n(s),o={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?i()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?i()(e,this.dateFormat):null}},methods:{moment:i.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},l=o,c=a("2877"),d=Object(c["a"])(l,n,r,!1,null,null,null);t["default"]=d.exports},"3c53":function(e,t,a){},4349:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-input",{attrs:{placeholder:e.placeholder,value:e.inputVal},on:{input:e.backValue}})},r=[],s="like",i="ne",o="ge",l="le",c={name:"JInput",props:{value:{type:String,required:!1},type:{type:String,required:!1,default:s},placeholder:{type:String,required:!1,default:""}},watch:{value:{immediate:!0,handler:function(){this.initVal()}},type:function(){this.backValue({target:{value:this.inputVal}})}},model:{prop:"value",event:"change"},data:function(){return{inputVal:""}},methods:{initVal:function(){if(this.value){var e=this.value;switch(this.type){case s:e=e.substring(1,e.length-1);break;case i:e=e.substring(1);break;case o:e=e.substring(2);break;case l:e=e.substring(2);break;default:}this.inputVal=e}else this.inputVal=""},backValue:function(e){var t=e.target.value;switch(this.type){case s:t="*"+t+"*";break;case i:t="!"+t;break;case o:t=">="+t;break;case l:t="<="+t;break;default:}this.$emit("change",t)}}},d=c,u=a("2877"),m=Object(u["a"])(d,n,r,!1,null,"4aff72b2",null);t["default"]=m.exports},"5b37":function(e,t,a){},"74c6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userName",{}],expression:"['userName', {}]"}],attrs:{placeholder:"请输入用户名",readOnly:""}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理人用户名"}},[a("j-select-user-by-dep",{directives:[{name:"decorator",rawName:"v-decorator",value:["agentUserName",e.validatorRules.agentUserName],expression:"['agentUserName', validatorRules.agentUserName]"}],attrs:{placeholder:"请输入代理人用户名","trigger-change":!0}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理开始时间"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["startTime",e.validatorRules.startTime],expression:"[ 'startTime', validatorRules.startTime]"}],staticStyle:{width:"100%"},attrs:{"trigger-change":!0,showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择开始时间"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理结束时间"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["endTime",e.validatorRules.endTime],expression:"[ 'endTime', validatorRules.endTime]"}],staticStyle:{width:"100%"},attrs:{"trigger-change":!0,showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择结束时间"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{}],expression:"[ 'status', {}]"}],staticClass:"fontiframe",attrs:{name:"radioGroup"}},[a("a-radio",{staticClass:"radioGroup",attrs:{value:"1"}},[e._v("有效")]),a("a-radio",{staticClass:"radioGroup",attrs:{value:"0"}},[e._v("无效")])],1)],1)],1)],1)],1)},r=[],s=a("88bc"),i=a.n(s),o=a("0fea"),l=a("2dab"),c=a("c14a"),d={name:"SysUserAgentModal",components:{JDate:l["default"],JSelectUserByDep:c["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},username:"",confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{agentUserName:{rules:[{required:!0,message:"请输入代理人用户名!"}]},startTime:{rules:[{required:!0,message:"请输入代理开始时间!"}]},endTime:{rules:[{required:!0,message:"请输入代理结束时间!"}]}},url:{add:"/sys/sysUserAgent/add",edit:"/sys/sysUserAgent/edit",queryByUserName:"/sys/sysUserAgent/queryByUserName"}}},created:function(){},methods:{agentSettings:function(e){this.username=e,this.init()},init:function(){var e=this,t={userName:this.username};Object(o["c"])(this.url.queryByUserName,t).then((function(t){t.success?e.edit(t.result):e.edit({userName:e.username,status:"0"})}))},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(i()(t.model,"userName","agentUserName","status","startTime","endTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,n){if(!a){t.confirmLoading=!0;var r="",s="";e.model.id?(r+=e.url.edit,s="put"):(r+=e.url.add,s="post");var i=Object.assign(e.model,n);Object(o["h"])(r,i,s).then((function(e){e.success?t.$message.success(e.message):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},u=d,m=a("2877"),h=Object(m["a"])(u,n,r,!1,null,"5e663c2e",null);t["default"]=h.exports},8500:function(e,t,a){"use strict";var n=a("5b37"),r=a.n(n);r.a},"9ee5":function(e,t,a){"use strict";var n=a("3c53"),r=a.n(n);r.a},a505:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{staticStyle:{top:"50px"},attrs:{width:e.modalWidth,visible:e.visible,title:e.title,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleSubmit,cancel:e.close}},[a("a-row",{staticStyle:{"background-color":"#ececec",padding:"10px",margin:"-10px"},attrs:{gutter:10}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-directory-tree",{attrs:{selectable:"",selectedKeys:e.selectedDepIds,checkStrictly:!0,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,expandAction:!1,expandedKeys:e.expandedKeys},on:{"update:expandedKeys":function(t){e.expandedKeys=t},"update:expanded-keys":function(t){e.expandedKeys=t},select:e.onDepSelect}})],1)],1),a("a-col",{attrs:{md:18,sm:24}},[a("a-card",{attrs:{bordered:!1}},[e._v("\n        用户账号:\n        "),a("a-input-search",{style:{width:"150px",marginBottom:"15px"},attrs:{placeholder:"请输入账号"},on:{search:e.onSearch},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}}),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"redo"},on:{click:function(t){return e.searchReset(1)}}},[e._v("重置")]),a("a-table",{ref:"table",attrs:{scroll:e.scrollTrigger,size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.getType},loading:e.loading},on:{change:e.handleTableChange}})],1)],1)],1)],1)},r=[],s=a("a34a"),i=a.n(s),o=a("ca00"),l=a("4ec3");function c(e,t,a,n,r,s,i){try{var o=e[s](i),l=o.value}catch(c){return void a(c)}o.done?t(l):Promise.resolve(l).then(n,r)}function d(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function i(e){c(s,n,r,i,o,"next",e)}function o(e){c(s,n,r,i,o,"throw",e)}i(void 0)}))}}var u={name:"JSelectUserByDepModal",components:{},props:["modalWidth","multi","userIds"],data:function(){return{queryParam:{username:""},columns:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户姓名",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1===e?"男":2===e?"女":e}},{title:"手机",align:"center",dataIndex:"phone"},{title:"部门",align:"center",dataIndex:"orgCode"}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectUserRows:[],selectUserIds:[],title:"根据部门选择用户",ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},selectedDepIds:[],departTree:[],visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[]}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{userIds:{immediate:!0,handler:function(){this.initUserNames()}}},created:function(){this.resetScreenSize(),this.loadData()},methods:{initUserNames:function(){var e=this;if(this.userIds){var t=this.userIds.split(",")+",";Object(l["A"])({username:t,pageNo:1,pageSize:t.length}).then((function(t){if(t.success){var a=[],n=[];t.result.records.forEach((function(e){n.push(e["realname"]),a.push(e["id"])})),e.selectedRowKeys=a,e.$emit("initComp",n.join(","))}}))}else this.$emit("initComp","")},loadData:function(){var e=d(i.a.mark((function e(t){var a,n=this;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1===t&&(this.ipagination.current=1),!(this.selectedDepIds&&this.selectedDepIds.length>0)){e.next=6;break}return e.next=4,this.initQueryUserByDepId(this.selectedDepIds);case 4:e.next=10;break;case 6:return this.loading=!0,a=this.getQueryParams(),e.next=10,Object(l["A"])(a).then((function(e){e.success&&(n.dataSource=e.result.records,n.ipagination.total=e.result.total)})).finally((function(){n.loading=!1}));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetScreenSize:function(){var e=document.body.clientWidth;this.scrollTrigger=e<500?{x:800}:{}},showModal:function(){this.visible=!0,this.queryDepartTree(),this.initUserNames(),this.loadData(),this.form.resetFields()},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(o["d"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},searchReset:function(e){var t=this;0!==e&&(t.queryParam={},t.loadData(1)),t.selectedRowKeys=[],t.selectUserIds=[],t.selectedDepIds=[]},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"===a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleSubmit:function(){var e=this;this.getSelectUserRows(),e.$emit("ok",e.selectUserRows,e.selectUserIds),e.searchReset(0),e.close()},getSelectUserRows:function(e){var t=this.dataSource,a="";this.selectUserRows=[];for(var n=0,r=t.length;n<r;n++)this.selectedRowKeys.includes(t[n].id)&&(this.selectUserRows.push(t[n]),a=a+","+t[n].username);this.selectUserIds=a.substring(1)},onDepSelect:function(e){null!=e[0]&&(this.initQueryUserByDepId(e),this.selectedDepIds[0]!==e[0]&&(this.selectedDepIds=[e[0]]))},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onSearch:function(){this.loadData(1)},initQueryUserByDepId:function(e){var t=this;return this.loading=!0,Object(l["N"])({id:e.toString()}).then((function(e){e.success&&(t.dataSource=e.result,t.ipagination.total=e.result.length)})).finally((function(){t.loading=!1}))},queryDepartTree:function(){var e=this;Object(l["D"])().then((function(t){t.success&&(e.departTree=t.result,e.expandedKeys=e.departTree.map((function(e){return e.id})))}))},modalFormOk:function(){this.loadData()}}},m=u,h=(a("9ee5"),a("2877")),p=Object(h["a"])(m,n,r,!1,null,"6e33dfa5",null);t["default"]=p.exports},c14a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-input-search",{attrs:{placeholder:"请先选择用户",readOnly:"",unselectable:"on"},on:{search:e.onSearchDepUser},model:{value:e.userNames,callback:function(t){e.userNames=t},expression:"userNames"}},[a("a-button",{attrs:{slot:"enterButton",disabled:e.disabled},slot:"enterButton"},[e._v("选择用户")])],1),a("j-select-user-by-dep-modal",{ref:"selectModal",attrs:{"modal-width":e.modalWidth,multi:e.multi,"user-ids":e.value},on:{ok:e.selectOK,initComp:e.initComp}})],1)},r=[],s=a("a505");function i(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=o(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,s=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw s}}}}function o(e,t){if(e){if("string"===typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var c={name:"JSelectUserByDep",components:{JSelectUserByDepModal:s["default"]},props:{modalWidth:{type:Number,default:1250,required:!1},value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},multi:{type:Boolean,default:!0,required:!1}},data:function(){return{userIds:"",userNames:""}},mounted:function(){this.userIds=this.value},watch:{value:function(e){this.userIds=e}},model:{prop:"value",event:"change"},methods:{initComp:function(e){this.userNames=e},onSearchDepUser:function(){this.$refs.selectModal.showModal()},selectOK:function(e,t){if(e){var a,n="",r=i(e);try{for(r.s();!(a=r.n()).done;){var s=a.value;n+=","+s.realname}}catch(o){r.e(o)}finally{r.f()}this.userNames=n.substring(1),this.userIds=t}else this.userNames="",this.userIds="";this.$emit("change",this.userIds)}}},d=c,u=a("2877"),m=Object(u["a"])(d,n,r,!1,null,"bd3f15c8",null);t["default"]=m.exports},ddf9:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"20px"},attrs:{title:"重新设定密码",width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"用户账号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{}],expression:"[ 'username', {}]"}],attrs:{placeholder:"请输入用户账号",readOnly:!0}})],1),a("a-form-item",{attrs:{label:"登陆密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",e.validatorRules.password],expression:"[ 'password', validatorRules.password]"}],attrs:{type:"password",placeholder:"请输入登陆密码"}})],1),a("a-form-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmpassword",e.validatorRules.confirmpassword],expression:"[ 'confirmpassword', validatorRules.confirmpassword]"}],attrs:{type:"password",placeholder:"请重新输入登陆密码"},on:{blur:e.handleConfirmBlur}})],1)],1)],1)],1)},r=[],s=a("4ec3"),i={name:"PasswordModal",data:function(){return{visible:!1,confirmLoading:!1,confirmDirty:!1,validatorRules:{password:{rules:[{required:!0,pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,message:"密码由8位数字、大小写字母和特殊符号组成!"},{validator:this.validateToNextPassword}]},confirmpassword:{rules:[{required:!0,message:"请重新输入登陆密码!"},{validator:this.compareToFirstPassword}]}},model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:this.$form.createForm(this)}},created:function(){},methods:{show:function(e){var t=this;this.form.resetFields(),this.visible=!0,this.model.username=e,this.$nextTick((function(){t.form.setFieldsValue({username:e})}))},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1,this.selectedRole=[]},handleSubmit:function(){var e=this;this.form.validateFields((function(t,a){if(!t){e.confirmLoading=!0;var n=Object.assign(e.model,a);Object(s["g"])(n).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))}}))},handleCancel:function(){this.close()},validateToNextPassword:function(e,t,a){var n=this.form,r=n.getFieldValue("confirmpassword");t&&r&&t!==r&&a("两次输入的密码不一样！"),t&&this.confirmDirty&&n.validateFields(["confirm"],{force:!0}),a()},compareToFirstPassword:function(e,t,a){var n=this.form;t&&t!==n.getFieldValue("password")?a("两次输入的密码不一样！"):a()},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t}}},o=i,l=a("2877"),c=Object(l["a"])(o,n,r,!1,null,null,null);t["default"]=c.exports},eb9c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:1e3,title:e.title,visible:e.innerVisible,cancelText:"关闭",okButtonProps:{style:{display:"none"}}},on:{cancel:e.handleCancel}},[a("a-alert",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"info",showIcon:""}},[a("template",{slot:"message"},[a("span",[e._v("已选择")]),a("a",{staticStyle:{"font-weight":"600",padding:"0 4px"}},[e._v(e._s(e.selectedRowKeys.length))]),a("span",[e._v("项")]),e.selectedRowKeys.length>0?[a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleClearSelection}},[e._v("清空选择")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleRevertBatch}},[e._v("批量还原")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleDeleteBatch}},[e._v("批量删除")])]:e._e()],2)],2),a("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",bordered:"",columns:e.columns,loading:e.loading,dataSource:e.dataSource,pagination:!1,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.handleTableSelectChange}},scopedSlots:e._u([{key:"avatarslot",fn:function(t,n,r){return[a("div",{staticClass:"anty-img-wrap"},[a("a-avatar",{attrs:{shape:"square",src:e.url.getAvatar(n.avatar),icon:"user"}})],1)]}},{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleRevert([n.id])}}},[a("a-icon",{attrs:{type:"redo"}}),e._v(" 还原用户")],1),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handleDelete([n.id])}}},[a("a-icon",{attrs:{type:"delete"}}),e._v(" 彻底删除")],1)],1)}}])})],1)},r=[],s=a("0fea");function i(e){var t=this;this.loading=!!e.loading,e.promise.then((function(t){if(!t.success||"function"!==typeof e.success)throw new Error(t.message);e.success(t)})).catch((function(e){t.$message.warning("查询已删除的用户失败："+(e.message||e))})).finally((function(){t.loading=!1}))}var o={name:"UserRecycleBinModal",props:{visible:{type:Boolean,default:!1}},data:function(){return{title:"用户回收站",loading:!1,innerVisible:!1,selectedRowKeys:[],dataSource:[],columns:[{title:"#",align:"center",key:"rowIndex",width:80,customRender:function(e,t,a){return a+1}},{title:"账号",align:"center",dataIndex:"username"},{title:"姓名",align:"center",dataIndex:"realname"},{title:"头像",align:"center",dataIndex:"avatar",scopedSlots:{customRender:"avatarslot"}},{title:"部门",align:"center",dataIndex:"orgCode"},{title:"操作",align:"center",dataIndex:"action",width:200,scopedSlots:{customRender:"action"}}],url:{getAvatar:function(e){return Object(s["d"])("".concat(e))},recycleBin:"/sys/user/recycleBin",putRecycleBin:"/sys/user/putRecycleBin",deleteRecycleBin:"/sys/user/deleteRecycleBin"}}},watch:{visible:{immediate:!0,handler:function(e){e&&this.loadData(),this.innerVisible=e}},innerVisible:function(e){this.$emit("update:visible",e)}},methods:{loadData:function(){var e=this;i.call(this,{loading:!0,promise:this.$http.get(this.url.recycleBin),success:function(t){return e.dataSource=t.result}})},handleOk:function(){this.loadData(),this.$emit("ok")},handleCancel:function(){this.innerVisible=!1},handleRevert:function(e){var t=this;this.$confirm({title:"恢复用户",content:"您确定要恢复这 ".concat(e.length," 个用户吗？"),centered:!0,onOk:function(){Object(s["j"])(t.url.putRecycleBin,{userIds:e.join(",")}).then((function(a){a.success&&(t.handleOk(),t.handleClearSelection(),t.$message.success("还原 ".concat(e.length," 个用户成功！")))}))}})},handleDelete:function(e){var t=this,a=this.$createElement;this.$confirm({title:"彻底删除用户",content:a("div",[a("p",["您确定要彻底删除这 ",e.length," 个用户吗？"]),a("p",{style:"color:red;"},["注意：彻底删除后将无法恢复，请谨慎操作！"])]),centered:!0,onOk:function(){var a=t;Object(s["a"])(a.url.deleteRecycleBin,{userIds:e.join(",")}).then((function(n){n.success?(t.loadData(),t.handleClearSelection(),t.$message.success("彻底删除 ".concat(e.length," 个用户成功！"))):a.$message.warning(n.message)}))}})},handleRevertBatch:function(){this.handleRevert(this.selectedRowKeys)},handleDeleteBatch:function(){this.handleDelete(this.selectedRowKeys)},handleClearSelection:function(){this.handleTableSelectChange([],[])},handleTableSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t}}},l=o,c=a("2877"),d=Object(c["a"])(l,n,r,!1,null,"36eb7e79",null);t["default"]=d.exports}}]);