(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dc5486c","chunk-2d20fed6"],{2095:function(e,t,n){"use strict";n.r(t);var a,r,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("").reduce((function(e,t){var n=t.charCodeAt(0);return n>=0&&n<=128?e+1:e+2}),0)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=0;return e.split("").reduce((function(e,a){var r=a.charCodeAt(0);return n+=r>=0&&r<=128?1:2,n<=t?e+a:e}),"")},l={name:"Ellipsis",props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean,default:!0},length:{type:Number,default:25},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{},render:function(){var e=arguments[0],t=this.$props,n=t.tooltip,a=t.length,r="";return this.$slots.default&&(r=this.$slots.default.map((function(e){return e.text})).join("")),n&&i(r)>a?e("a-tooltip",[e("template",{slot:"title"},[r]),e("span",[s(r,this.length)+"…"])]):e("span",[r])}},o=l,c=n("2877"),u=Object(c["a"])(o,a,r,!1,null,null,null);t["default"]=u.exports},a1ed:function(e,t,n){"use strict";var a=n("cae5"),r=n.n(a);r.a},b16a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("j-modal",{attrs:{centered:"",title:e.name+"选择",width:e.width,visible:e.visible,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.close}},[n("a-row",{attrs:{gutter:18}},[n("a-col",{attrs:{span:16}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[n("a-row",{attrs:{gutter:24}},[n("a-col",{attrs:{span:14}},[n("a-form-item",{attrs:{label:e.queryParamText||e.name}},[n("a-input",{attrs:{placeholder:"请输入"+(e.queryParamText||e.name)},on:{pressEnter:e.searchQuery},model:{value:e.queryParam[e.queryParamCode||e.valueKey],callback:function(t){e.$set(e.queryParam,e.queryParamCode||e.valueKey,t)},expression:"queryParam[queryParamCode||valueKey]"}})],1)],1),n("a-col",{attrs:{span:8}},[n("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),n("a-table",{attrs:{size:"middle",bordered:"",rowKey:e.rowKey,columns:e.innerColumns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,scroll:{y:240},rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.multiple?"checkbox":"radio"},customRow:e.customRowFn},on:{change:e.handleTableChange}})],1),n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"已选"+e.name,bordered:!1,"head-style":{padding:0},"body-style":{padding:0}}},[n("a-table",e._b({attrs:{size:"middle",rowKey:e.rowKey,bordered:""},scopedSlots:e._u([{key:"action",fn:function(t,a,r){return n("span",{},[n("a",{on:{click:function(t){return e.handleDeleteSelected(a,r)}}},[e._v("删除")])])}}])},"a-table",e.selectedTable,!1))],1)],1)],1)],1)},r=[],i=n("0fea"),s=n("c4db"),l=n("b65a"),o=n("ca00");function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=u(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={name:"JSelectBizComponentModal",mixins:[l["a"]],components:{Ellipsis:s["a"]},props:{value:{type:Array,default:function(){return[]}},visible:{type:Boolean,default:!1},valueKey:{type:String,required:!0},multiple:{type:Boolean,default:!0},width:{type:Number,default:900},name:{type:String,default:""},listUrl:{type:String,required:!0,default:""},valueUrl:{type:String,default:""},displayKey:{type:String,default:null},columns:{type:Array,required:!0,default:function(){return[]}},queryParamCode:{type:String,default:null},queryParamText:{type:String,default:null},rowKey:{type:String,default:"id"},ellipsisLength:{type:Number,default:12}},data:function(){var e=this,t=this.$createElement;return{innerValue:[],selectedTable:{pagination:!1,scroll:{y:240},columns:[f(f({},this.columns[0]),{},{width:this.columns[0].widthRight||this.columns[0].width}),{title:"操作",dataIndex:"action",align:"center",width:60,scopedSlots:{customRender:"action"}}],dataSource:[]},renderEllipsis:function(n){return t("ellipsis",{attrs:{length:e.ellipsisLength}},[n])},url:{list:this.listUrl},ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},options:[],dataSourceMap:{}}},computed:{innerColumns:function(){var e=this,t=Object(o["b"])(this.columns);return t.forEach((function(t){-1!==e.ellipsisLength&&(t.customRender=function(t){return e.renderEllipsis(t)})})),t}},watch:{value:{deep:!0,immediate:!0,handler:function(e){this.innerValue=Object(o["b"])(e),this.selectedRowKeys=[],this.valueWatchHandler(e),this.queryOptionsByValue(e)}},dataSource:{deep:!0,handler:function(e){this.emitOptions(e),this.valueWatchHandler(this.innerValue)}},selectedRowKeys:{immediate:!0,deep:!0,handler:function(e){var t=this;this.selectedTable.dataSource=e.map((function(e){var n,a=c(t.dataSource);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r[t.rowKey]===e)return Object(o["h"])(t.innerValue,r[t.valueKey]),r}}catch(u){a.e(u)}finally{a.f()}var i,s=c(t.selectedTable.dataSource);try{for(s.s();!(i=s.n()).done;){var l=i.value;if(l[t.rowKey]===e)return Object(o["h"])(t.innerValue,l[t.valueKey]),l}}catch(u){s.e(u)}finally{s.f()}return{}}))}}},methods:{close:function(){this.$emit("update:visible",!1)},valueWatchHandler:function(e){var t=this;e.forEach((function(e){t.dataSource.concat(t.selectedTable.dataSource).forEach((function(n){n[t.valueKey]===e&&Object(o["h"])(t.selectedRowKeys,n[t.rowKey])}))}))},queryOptionsByValue:function(e){var t,n=this;if(e&&0!==e.length){var a,r=!1,s=c(e);try{for(s.s();!(a=s.n()).done;){var l,u=a.value,d=!1,h=c(this.options);try{for(h.s();!(l=h.n()).done;){var f=l.value;if(u===f.value){d=!0;break}}}catch(y){h.e(y)}finally{h.f()}if(!d){r=!0;break}}}catch(y){s.e(y)}finally{s.f()}r&&Object(i["c"])(this.valueUrl||this.listUrl,(t={},p(t,this.valueKey,e.join(",")+","),p(t,"pageNo",1),p(t,"pageSize",e.length),t)).then((function(e){if(e.success){var t=e.result;t instanceof Array||(t=e.result.records),n.emitOptions(t,(function(e){Object(o["h"])(n.innerValue,e[n.valueKey]),Object(o["h"])(n.selectedRowKeys,e[n.rowKey]),Object(o["h"])(n.selectedTable.dataSource,e,n.rowKey)}))}}))}},emitOptions:function(e,t){var n=this;e.forEach((function(e){var a=e[n.valueKey];n.dataSourceMap[a]=e,Object(o["h"])(n.options,{label:e[n.displayKey||n.valueKey],value:a},"value"),"function"===typeof t&&t(e)})),this.$emit("options",this.options,this.dataSourceMap)},handleOk:function(){var e=this,t=this.selectedTable.dataSource.map((function(t){return t[e.valueKey]}));this.$emit("input",t),this.close()},handleDeleteSelected:function(e,t){this.selectedRowKeys.splice(this.selectedRowKeys.indexOf(e[this.rowKey]),1),this.selectedTable.dataSource.splice(t,1)},customRowFn:function(e){var t=this;return{on:{click:function(){var n=e[t.rowKey];if(t.multiple){var a=t.selectedRowKeys.indexOf(n);-1===a?(t.selectedRowKeys.push(n),t.selectedTable.dataSource.push(e)):t.handleDeleteSelected(e,a)}else t.selectedRowKeys=[n],t.selectedTable.dataSource=[e]}}}}}},m=y,b=n("2877"),g=Object(b["a"])(m,a,r,!1,null,"6b41dd4c",null);t["default"]=g.exports},b296:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-row",{staticClass:"j-select-biz-component-box",attrs:{type:"flex",gutter:8}},[n("a-col",{staticClass:"left",class:{full:!e.buttons}},[e._t("left",[n("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:e.placeholder,options:e.selectOptions,allowClear:"",disabled:e.disabled,open:e.selectOpen},on:{dropdownVisibleChange:e.handleDropdownVisibleChange},nativeOn:{click:function(t){e.visible=!e.buttons||e.visible}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})])],2),e.buttons?n("a-col",{staticClass:"right"},[n("a-button",{attrs:{type:"primary",icon:"search",disabled:e.disabled},on:{click:function(t){e.visible=!0}}},[e._v(e._s(e.selectButtonText))])],1):e._e(),n("j-select-biz-component-modal",e._b({attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t},options:e.handleOptions},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},"j-select-biz-component-modal",e.modalProps,!1))],1)},r=[],i=n("b16a"),s={name:"JSelectBizComponent",components:{JSelectBizComponentModal:i["default"]},props:{value:{type:String,default:""},returnId:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},buttons:{type:Boolean,default:!0},displayKey:{type:String,default:null},returnKeys:{type:Array,default:function(){return["id","id"]}},selectButtonText:{type:String,default:"选择"}},data:function(){return{selectValue:[],selectOptions:[],dataSourceMap:{},visible:!1,selectOpen:!1}},computed:{valueKey:function(){return this.returnId?this.returnKeys[0]:this.returnKeys[1]},modalProps:function(){return Object.assign({valueKey:this.valueKey,multiple:this.multiple,returnKeys:this.returnKeys,displayKey:this.displayKey||this.valueKey},this.$attrs)}},watch:{value:{immediate:!0,handler:function(e){this.selectValue=e?e.split(","):[]}},selectValue:{deep:!0,handler:function(e){var t=this,n=e.map((function(e){return t.dataSourceMap[e]})),a=e.join(",");a!==this.value&&(this.$emit("select",n),this.$emit("input",a),this.$emit("change",a))}}},methods:{handleOptions:function(e,t){this.selectOptions=e,this.dataSourceMap=t},handleDropdownVisibleChange:function(){var e=this;this.selectOpen=!0,this.$nextTick((function(){e.selectOpen=!1}))}}},l=s,o=(n("a1ed"),n("2877")),c=Object(o["a"])(l,a,r,!1,null,"3d386544",null);t["default"]=c.exports},b65a:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("ca00"),r=n("0fea"),i=n("2b0e"),s=n("9fb0");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":i["default"].ls.get(s["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var n=this.getQueryParams();this.loading=!0,Object(r["c"])(this.url.list,n).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(a["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var n=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){n.loading=!0,Object(r["a"])(n.url.deleteBatch,{ids:e}).then((function(e){e.success?(n.$message.success(e.message),n.loadData(),n.onClearSelected()):n.$message.warning(e.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(r["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,n){Object.keys(n).length>0&&(this.isorter.column=n.field,this.isorter.order="ascend"==n.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var n=o({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),Object(r["b"])(this.url.exportXlsUrl,n).then((function(n){if(n)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([n],{type:"application/vnd.ms-excel"}),e+".xls");else{var a=window.URL.createObjectURL(new Blob([n],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var n=e.file.response,a=n.message,r=n.result,i=r.msg,s=r.fileUrl,l=r.fileName,o=window._CONFIG["domianURL"]+s;this.$warning({title:a,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:o,target:"_blank",download:l}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(r["d"])(e)},downloadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(r["d"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},c4db:function(e,t,n){"use strict";var a=n("2095");t["a"]=a["default"]},cae5:function(e,t,n){}}]);