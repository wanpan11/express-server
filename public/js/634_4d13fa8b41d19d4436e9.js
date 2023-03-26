"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[634],{5386:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(319),a=t(8024),i=t(1470),s=(t(1405),t(5836),t(7765),t(2273),t(8424),t(7168),t(6445),t(8666),t(5625),t(1165),t(1222),t(3785));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}const l=new(function(){function e(n){(0,r.Z)(this,e),(0,i.Z)(this,"baseConfig",{withCredentials:!0,baseURL:"",timeout:3e4}),this.instance=s.Z.create(Object.assign(this.baseConfig,n)),this.instance.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),this.instance.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e.response)}))}return(0,a.Z)(e,[{key:"send",value:function(e,n,t,r){var a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},r);return a.url=e,a.method=n,"get"===n?a.params=t:a.data=t,this.instance.request(a)}}]),e}())({})},7634:(e,n,t)=>{t.r(n),t.d(n,{default:()=>q});var r=t(270),a=t(7231),i=t(366),s=t.n(i),o=t(79);t(8246);var l=t(2584),c=t(4931),u=t(5178),p=t(2746),d=t(5012),m=t(9023),h=t(7869),f=t(8860),y=t(5250),b=d.Z.RangePicker,j=function(e,n){switch(e){case"radio":return(0,y.jsx)(m.ZP.Group,{options:n.options,optionType:"button",buttonStyle:"solid"});case"input":return(0,y.jsx)(h.Z,{});case"select":return(0,y.jsx)(f.Z,{options:n.options});case"date":return(0,y.jsx)(b,{placeholder:["开始时间","结束时间"]})}},x=function(e){var n=e.filterInfo,t=e.onSubmit,r=e.reset,a=e.loading;return(0,y.jsx)("div",{className:"aWBYJM3Th7WmLyY24Zis",children:(0,y.jsxs)(l.Z,{onFinish:function(e){t(e)},colon:!1,children:[(0,y.jsxs)(c.Z,{gutter:24,children:[n.length>0?n.map((function(e){return(0,y.jsx)(u.Z,{span:6,children:(0,y.jsx)(l.Z.Item,{name:e.name,label:e.label,children:j(e.type,e)})},e.name)})):null,n.length>2?null:(0,y.jsxs)("div",{className:"PKHigT9m1ShJb6dAzFBs",children:[r?(0,y.jsx)(p.ZP,{htmlType:"reset",children:"重置"}):null,(0,y.jsx)(p.ZP,{htmlType:"submit",type:"primary",loading:a,children:"查询"})]})]}),n.length>2?(0,y.jsxs)(c.Z,{justify:"end",className:"zVESEnCLVZsRuTYUjzlW",children:[r?(0,y.jsx)(p.ZP,{htmlType:"reset",children:"重置"}):null,(0,y.jsx)(p.ZP,{htmlType:"submit",type:"primary",loading:a,children:"查询"})]}):null]})})};const g=(0,o.memo)(x);var Z=t(7044),v=function(e){var n=e.open,t=e.title,r=e.editInfo,i=e.onCancel,s=e.onOk,o=l.Z.useForm(),c=(0,a.Z)(o,1)[0];return(0,y.jsx)(Z.Z,{open:n,title:t,okText:"确定",cancelText:"取消",width:800,closable:!1,destroyOnClose:!0,maskClosable:!1,onCancel:i,onOk:function(){c.submit()},children:(0,y.jsx)("div",{className:"oBIcZpEHWa28_tCCUJZN",children:(0,y.jsx)(l.Z,{form:c,labelCol:{span:5},labelAlign:"left",onFinish:s,children:r.map((function(e){return(0,y.jsx)(l.Z.Item,{name:e.name,label:e.label,rules:e.rule?[e.rule]:void 0,children:j(e.type,e)},e.name)}))})})})};const k=(0,o.memo)(v);var O=t(6430),P=t(8705),w=t(3151),C=t(5386),I=function(e){return C.Z.send("/company/insert","post",e,{headers:{"Content-Type":"application/json"}})},T=function(e){return C.Z.send("/company/list","get",e)},S=[{name:"projectName",type:"input",label:"厂商名称"}],N=[{name:"category",label:"类型",type:"radio",rule:{required:!0,message:"请选择厂商类型！"},options:[{label:"研发",value:"1"},{label:"发行",value:"2"},{label:"研发一体",value:"3"}]},{label:"厂商名称",name:"name",type:"input",rule:{required:!0,message:"请输入厂商名称！"}},{label:"联系人",name:"contact",type:"input",rule:{required:!0,message:"请输入厂商类型联系人！"}},{label:"联系电话",name:"mobile",type:"input",rule:{required:!0,message:"请输入正确的厂商联系电话！",pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/}}];const q=function(){var e=(0,o.useState)(!1),n=(0,a.Z)(e,2),t=n[0],i=n[1],l=(0,w.Z)(T,{defaultParams:[{pageNum:1,pageSize:5,name:""}],loadingDelay:300}),c=l.data,u=l.error,d=l.loading,m=l.run,h=[{title:"ID",key:"id",dataIndex:"id"},{title:"类型",key:"category",dataIndex:"category"},{title:"厂商名称",key:"name",dataIndex:"name"},{title:"联系人",key:"contact",dataIndex:"contact"},{title:"联系电话",key:"mobile",dataIndex:"mobile"},{title:"创建时间",key:"updateTime",dataIndex:"updateTime"},{title:"编辑",key:"edit",render:function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.ZP,{type:"link",children:"删除"}),(0,y.jsx)(p.ZP,{type:"link",children:"编辑"})]})}}],f=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m({pageNum:1,pageSize:10,name:""});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(n);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("createManufacturerReq err");case 10:i(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();return u&&console.error("companyService.list ===> ",u),(0,y.jsxs)("div",{children:[(0,y.jsx)(g,{loading:d,filterInfo:S,onSubmit:f,reset:!0}),(0,y.jsx)("div",{style:{height:"12px"}}),(0,y.jsxs)(O.Z,{children:[(0,y.jsx)("div",{style:{marginBottom:"12px"},children:(0,y.jsx)(p.ZP,{type:"primary",onClick:function(){i(!0)},children:"新建厂商"})}),(0,y.jsx)(P.Z,{dataSource:null==c?void 0:c.data.list,columns:h,rowKey:"id",loading:d})]}),(0,y.jsx)(k,{open:t,title:"厂商编辑",editInfo:N,onCancel:function(){i(!1)},onOk:function(e){b(e)}})]})}}}]);