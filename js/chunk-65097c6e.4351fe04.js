(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65097c6e","chunk-2d0bdf09"],{1120:function(e,t,r){},"2dab":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-date-picker",{attrs:{dropdownClassName:"j-date-picker",disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},o=[],i=r("c1df"),n=r.n(i),s={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?n()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?n()(e,this.dateFormat):null}},methods:{moment:n.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},l=s,c=r("2877"),d=Object(c["a"])(l,a,o,!1,null,null,null);t["default"]=d.exports},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,o="[object Arguments]",i="[object Function]",n="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,a=e?e.length:0,o=Array(a);while(++r<a)o[r]=t(e[r],r,e);return o}function p(e,t){var r=-1,a=t.length,o=e.length;while(++r<a)e[o+r]=t[r];return e}var f=Object.prototype,g=f.hasOwnProperty,h=f.toString,v=d.Symbol,b=f.propertyIsEnumerable,O=v?v.isConcatSpreadable:void 0,j=Math.max;function w(e,t,r,a,o){var i=-1,n=e.length;r||(r=k),o||(o=[]);while(++i<n){var s=e[i];t>0&&r(s)?t>1?w(s,t-1,r,a,o):p(o,s):a||(o[o.length]=s)}return o}function C(e,t){return e=Object(e),y(e,t,(function(t,r){return r in e}))}function y(e,t,r){var a=-1,o=t.length,i={};while(++a<o){var n=t[a],s=e[n];r(s,n)&&(i[n]=s)}return i}function M(e,t){return t=j(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,o=j(r.length-t,0),i=Array(o);while(++a<o)i[a]=r[t+a];a=-1;var n=Array(t+1);while(++a<t)n[a]=r[a];return n[t]=i,u(e,this,n)}}function k(e){return D(e)||x(e)||!!(O&&e&&e[O])}function L(e){if("string"==typeof e||S(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function x(e){return V(e)&&g.call(e,"callee")&&(!b.call(e,"callee")||h.call(e)==o)}var D=Array.isArray;function T(e){return null!=e&&$(e.length)&&!_(e)}function V(e){return q(e)&&T(e)}function _(e){var t=F(e)?h.call(e):"";return t==i||t==n}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return!!e&&"object"==typeof e}function S(e){return"symbol"==typeof e||q(e)&&h.call(e)==s}var N=M((function(e,t){return null==e?{}:C(e,m(w(t,1),L))}));e.exports=N}).call(this,r("c8ba"))},"8a45":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1),r("a-tabs",{attrs:{defaultActiveKey:"1"}},[r("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[r("div",[r("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:5}},[e._v("客户名")]),r("a-col",{attrs:{span:5}},[e._v("性别")]),r("a-col",{attrs:{span:5}},[e._v("身份证号码")]),r("a-col",{attrs:{span:5}},[e._v("手机号")]),r("a-col",{attrs:{span:4}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderCustomerList,(function(t,a){return r("a-row",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].name",{initialValue:t.name,rules:[{required:!0,message:"请输入用户名!"}]}],expression:"['jeecgOrderCustomerList['+index+'].name', {'initialValue':item.name,rules: [{ required: true, message: '请输入用户名!' }]}]"}],attrs:{placeholder:"客户名"}})],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].sex",{initialValue:t.sex}],expression:"['jeecgOrderCustomerList['+index+'].sex', {'initialValue':item.sex}]"}],attrs:{placeholder:"性别"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("男")]),r("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].idcard",{initialValue:t.idcard,rules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"身份证号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].idcard', {'initialValue':item.idcard,rules: [{ pattern: '^\\\\d{6}(18|19|20)?\\\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\\\d|3[01])\\\\d{3}(\\\\d|[xX])$', message: '身份证号格式不对!' }]}]"}],attrs:{placeholder:"身份证号"}})],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].telphone",{initialValue:t.telphone,rules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"手机号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].telphone', {'initialValue':item.telphone,rules: [{ pattern: '^1(3|4|5|7|8)\\\\d{9}$', message: '手机号格式不对!' }]}]"}],attrs:{placeholder:"手机号"}})],1)],1),r("a-col",{attrs:{span:4}},[r("a-form-item",[r("a-button",{attrs:{icon:"plus"},on:{click:e.addRowCustom}}),e._v(" \n                  "),r("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowCustom(a)}}})],1)],1)],1)}))],2)]),r("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[r("div",[r("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:6}},[e._v("航班号")]),r("a-col",{attrs:{span:6}},[e._v("航班时间")]),r("a-col",{attrs:{span:6}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderTicketList,(function(t,a){return r("a-row",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+a+"].ticketCode",{initialValue:t.ticketCode,rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['jeecgOrderTicketList['+index+'].ticketCode', {'initialValue':item.ticketCode,rules: [{ required: true, message: '请输入航班号!' }]}]"}],attrs:{placeholder:"航班号"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+a+"].tickectDate",{initialValue:t.tickectDate}],expression:"['jeecgOrderTicketList['+index+'].tickectDate', {'initialValue':item.tickectDate}]"}],attrs:{placeholder:"航班时间","trigger-change":!0}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-button",{attrs:{icon:"plus"},on:{click:e.addRowTicket}}),e._v(" \n                  "),r("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowTicket(a)}}})],1)],1)],1)}))],2)])],1)],1)],1)],1)},o=[],i=r("0fea"),n=r("2dab"),s=r("88bc"),l=r.n(s),c=r("c1df"),d=r.n(c);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={name:"JeecgOrderMainModal",components:{JDate:n["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;if(this.form.resetFields(),this.orderMainModel=Object.assign({},e),this.orderMainModel.jeecgOrderCustomerList=[{}],this.orderMainModel.jeecgOrderTicketList=[{}],this.orderMainModel.id){var r={id:this.orderMainModel.id};Object(i["c"])(this.url.orderCustomerList,r).then((function(e){e.success&&(t.orderMainModel.jeecgOrderCustomerList=e.result,t.$forceUpdate())})),Object(i["c"])(this.url.orderTicketList,r).then((function(e){e.success&&(t.orderMainModel.jeecgOrderTicketList=e.result,t.$forceUpdate())}))}this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?d()(t.orderMainModel.orderDate):null})}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var o="",n="";e.orderMainModel.id?(o+=e.url.edit,n="put"):(o+=e.url.add,n="post");var s=Object.assign(e.orderMainModel,a);s.orderDate=s.orderDate?s.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var l=m(m({},s),{},{jeecgOrderCustomerList:s.jeecgOrderCustomerList,jeecgOrderTicketList:s.jeecgOrderTicketList});Object(i["h"])(o,l,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},addRowCustom:function(){this.orderMainModel.jeecgOrderCustomerList.push({}),this.$forceUpdate()},delRowCustom:function(e){var t=this.form.getFieldsValue();t["jeecgOrderCustomerList"].splice(e,1),this.form.setFieldsValue(t),this.orderMainModel.jeecgOrderCustomerList.splice(e,1),this.$forceUpdate()},addRowTicket:function(){this.orderMainModel.jeecgOrderTicketList.push({}),this.$forceUpdate()},delRowTicket:function(e){var t=this.form.getFieldsValue();t["jeecgOrderTicketList"].splice(e,1),this.form.setFieldsValue(t),this.orderMainModel.jeecgOrderTicketList.splice(e,1),this.$forceUpdate()}}},g=f,h=(r("ce8e"),r("2877")),v=Object(h["a"])(g,a,o,!1,null,"71240f1e",null);t["default"]=v.exports},ce8e:function(e,t,r){"use strict";var a=r("1120"),o=r.n(a);o.a}}]);