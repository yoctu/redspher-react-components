/*! For license information please see main.737b3211.chunk.js.LICENSE.txt */
(this["webpackJsonpredspher-components-example"]=this["webpackJsonpredspher-components-example"]||[]).push([[0],{104:function(e,t,n){e.exports=n(118)},105:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);n(105);var r=n(0),a=n.n(r),o=n(11),l=n.n(o),i=n(70),s=n(151),c=n(160),u=n(162),d=n(155),m=n(156),f=n(164),p=n(90),b=n.n(p),y=n(13),v=n(157),h=n(161),g=n(74),C=n(91),E=n(159);function O(e,t){return e(t={exports:{}},t.exports),t.exports}var k="function"===typeof Symbol&&Symbol.for,w=k?Symbol.for("react.element"):60103,j=k?Symbol.for("react.portal"):60106,x=k?Symbol.for("react.fragment"):60107,T=k?Symbol.for("react.strict_mode"):60108,P=k?Symbol.for("react.profiler"):60114,S=k?Symbol.for("react.provider"):60109,N=k?Symbol.for("react.context"):60110,_=k?Symbol.for("react.async_mode"):60111,R=k?Symbol.for("react.concurrent_mode"):60111,F=k?Symbol.for("react.forward_ref"):60112,$=k?Symbol.for("react.suspense"):60113,I=k?Symbol.for("react.suspense_list"):60120,D=k?Symbol.for("react.memo"):60115,q=k?Symbol.for("react.lazy"):60116,M=k?Symbol.for("react.block"):60121,W=k?Symbol.for("react.fundamental"):60117,z=k?Symbol.for("react.responder"):60118,L=k?Symbol.for("react.scope"):60119;function A(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case w:switch(e=e.type){case _:case R:case x:case P:case T:case $:return e;default:switch(e=e&&e.$$typeof){case N:case F:case q:case D:case S:return e;default:return t}}case j:return t}}}function V(e){return A(e)===R}var K={AsyncMode:_,ConcurrentMode:R,ContextConsumer:N,ContextProvider:S,Element:w,ForwardRef:F,Fragment:x,Lazy:q,Memo:D,Portal:j,Profiler:P,StrictMode:T,Suspense:$,isAsyncMode:function(e){return V(e)||A(e)===_},isConcurrentMode:V,isContextConsumer:function(e){return A(e)===N},isContextProvider:function(e){return A(e)===S},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===w},isForwardRef:function(e){return A(e)===F},isFragment:function(e){return A(e)===x},isLazy:function(e){return A(e)===q},isMemo:function(e){return A(e)===D},isPortal:function(e){return A(e)===j},isProfiler:function(e){return A(e)===P},isStrictMode:function(e){return A(e)===T},isSuspense:function(e){return A(e)===$},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===x||e===R||e===P||e===T||e===$||e===I||"object"===typeof e&&null!==e&&(e.$$typeof===q||e.$$typeof===D||e.$$typeof===S||e.$$typeof===N||e.$$typeof===F||e.$$typeof===W||e.$$typeof===z||e.$$typeof===L||e.$$typeof===M)},typeOf:A},B=(O((function(e,t){0})),O((function(e){e.exports=K})),Object.getOwnPropertySymbols),H=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;function J(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}})()&&Object.assign;var U="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function Y(e,t,n,r,a){}Y.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function G(){}function Q(){}Q.resetWarningCache=G;var X=O((function(e){e.exports=function(){function e(e,t,n,r,a,o){if(o!==U){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Q,resetWarningCache:G};return n.PropTypes=n,n}()})),ee="_1Q1ln",te=function(e){var t=e.text,n=e.onClick,r=e.className,o=void 0===r?"":r,l=e.disabled,i=void 0!==l&&l,u=e.fullWidth,d=void 0!==u&&u,m=e.href,f=e.size,p=void 0===f?"medium":f,b=e.endIcon,y=e.startIcon;return a.a.createElement(c.b,{injectFirst:!0},a.a.createElement(s.a,{onClick:n,className:ee+" "+o,disabled:i,fullWidth:d,href:m,size:p,endIcon:b,startIcon:y},t))};te.propTypes={text:X.string.isRequired,onClick:X.func,className:X.string,disabled:X.bool,fullWidth:X.bool,href:X.string,size:X.oneOf(["small","medium","large"]),startIcon:X.element,endIcon:X.element};var ne="_IVw34",re="_361IS",ae="_3Vijt",oe="_1JRyc",le=function(e){var t=e.checked,n=void 0!==t&&t,r=e.className,o=void 0===r?"":r,l=e.disabled,i=void 0!==l&&l,s=e.id,d=e.onChange,m=e.size,f=void 0===m?"medium":m,p=e.inputRef,b=e.value,y=e.name;return a.a.createElement(c.b,{injectFirst:!0},a.a.createElement(u.a,{checked:n,className:ne+" "+o,disabled:i,id:s,onChange:d,size:f,inputRef:p,value:b,name:y,color:"primary",classes:{root:re,checked:ae,disabled:oe}}))};le.propTypes={checked:X.bool,className:X.string,disabled:X.bool,id:X.oneOfType([X.string,X.number]),onChange:X.func,size:X.oneOf(["small","medium"]),inputRef:X.string,value:X.oneOfType([X.string,X.number]),name:X.string};var ie="_2MsEZ",se=function(e){var t=e.control,n=e.label,r=e.checked,o=e.disabled,l=e.labelPlacement,i=e.onChange,s=e.value,u=e.inputRef,m=e.className,f=void 0===m?"":m;return a.a.createElement(c.b,{injectFirst:!0},a.a.createElement(d.a,{control:t,label:n,checked:r,disabled:o,labelPlacement:l,onChange:i,value:s,inputRef:u,className:""+f,classes:{label:ie}}))};function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}se.propTypes={control:X.element.isRequired,label:X.oneOfType([X.string,X.element]),checked:X.bool,disabled:X.bool,labelPlacement:X.oneOf(["bottom","end","start","top"]),onChange:X.func,value:X.oneOfType([X.string,X.number]),inputRef:X.string,className:X.string};var de="_1L0ob",me="_2tGwO",fe="_2xvYj",pe="_3qiml",be=function(e){var t=e.className,n=void 0===t?"":t,r=e.id,o=e.defaultValue,l=e.disabled,i=void 0!==l&&l,s=e.endAdornment,u=e.error,d=void 0!==u&&u,f=e.fullWidth,p=void 0!==f&&f,b=e.inputProps,y=e.inputRef,v=e.multiline,h=void 0!==v&&v,g=e.name,C=e.onChange,E=e.placeholder,O=e.readOnly,k=e.required,w=e.rows,j=e.rowsMax,x=e.startAdornment,T=e.type,P=e.value,S=e.onClick,N=ue(e,["className","id","defaultValue","disabled","endAdornment","error","fullWidth","inputProps","inputRef","multiline","name","onChange","placeholder","readOnly","required","rows","rowsMax","startAdornment","type","value","onClick"]);return a.a.createElement(c.b,{injectFirst:!0},a.a.createElement(m.a,ce({className:""+n,classes:{root:de,focused:me,disabled:fe,error:pe},disableUnderline:!0,endAdornment:s,id:r,defaultValue:o,disabled:i,error:d,fullWidth:p,inputProps:b,inputRef:y,multiline:h,name:g,onChange:C,placeholder:E,readOnly:O,required:k,rows:w,rowsMax:j,startAdornment:x,type:T,value:P,onClick:S},N)))};be.propTypes={className:X.string,defaultValue:X.any,disabled:X.bool,error:X.bool,endAdornment:X.node,fullWidth:X.bool,inputProps:X.object,inputRef:X.string,multiline:X.bool,name:X.string,onChange:X.func,placeholder:X.string,readOnly:X.bool,required:X.bool,rows:X.number,rowsMax:X.number,startAdornment:X.node,type:X.string,value:X.any,onClick:X.func};var ye="_36YBZ",ve=function(e){var t=e.children,n=e.disabled,r=e.error,o=e.htmlFor,l=e.className;return a.a.createElement(c.b,{injectFirst:!0},a.a.createElement(f.a,{disabled:n,error:r,htmlFor:o,classes:{root:ye},className:l},t))};ve.propTypes={children:X.node,className:X.string,disabled:X.bool,error:X.bool,htmlFor:X.string};var he="_1aNge",ge="_2gy4G",Ce=function(e){var t=e.text,n=e.onClick,r=e.className,o=void 0===r?"":r,l=e.disabled,i=void 0!==l&&l,u=e.fullWidth,d=void 0!==u&&u,m=e.href,f=e.size,p=void 0===f?"medium":f,b=e.endIcon,y=e.startIcon;return a.a.createElement(c.b,{injectFirst:!0},a.a.createElement(s.a,{onClick:n,className:""+o,disabled:i,fullWidth:d,href:m,size:p,endIcon:b,startIcon:y,classes:{root:he,disabled:ge}},t))};Ce.propTypes={text:X.string.isRequired,onClick:X.func,className:X.string,disabled:X.bool,fullWidth:X.bool,href:X.string,size:X.oneOf(["small","medium","large"]),startIcon:X.element,endIcon:X.element};var Ee="_1_j35",Oe=function(e){var t=e.onClick,n=e.text;return a.a.createElement("div",{className:Ee,onClick:t},a.a.createElement(b.a,null),n)};Oe.propTypes={onClick:X.func.isRequired,text:X.oneOfType([X.element,X.string])};var ke=function(e){var t=e.value,n=e.onClick,r=e.onChange,o=e.ampm,l=void 0!==o&&o,i=e.className,s=void 0===i?"defaultTimePicker":i,u=e.disabled,d=void 0!==u&&u,m=e.helperText,f=void 0===m?"":m,p=e.emptyLabel,b=void 0===p?"--:--":p,h=e.KeyboardButtonProps,C=void 0===h?{}:h;return a.a.createElement(y.a,{utils:g.a},a.a.createElement(c.b,{injectFirst:!0},a.a.createElement(v.a,{ampm:l,value:t,disabled:d,className:s,helperText:f,emptyLabel:b,onClick:n,onChange:r,KeyboardButtonProps:C})))};ke.propTypes={value:X.string.isRequired,onClick:X.func.isRequired,onChange:X.func.isRequired,ampm:X.bool,className:X.string,disabled:X.bool,helperText:X.string,emptyLabel:X.string,KeyboardButtonProps:X.object};var we=Object(C.a)({palette:{primary:{main:"#00c3ff"}}}),je=function(e){var t=e.onChange,n=e.value,r=e.allowKeyboardControl,o=void 0===r||r,l=e.ampm,i=void 0!==l&&l,s=e.disabled,c=void 0!==s&&s,u=e.disableFuture,d=void 0!==u&&u,m=e.disablePast,f=void 0!==m&&m,p=e.emptyLabel,b=void 0===p?"":p,v=e.format,C=void 0===v?"dd/MM/yyyy HH:mm":v,O=e.label,k=void 0===O?"":O,w=e.maxDate,j=void 0===w?new Date("2100-01-01"):w,x=e.minDate,T=void 0===x?new Date("1900-01-01"):x,P=e.onClose,S=void 0===P?function(){}:P,N=e.onError,_=void 0===N?function(){}:N,R=e.className,F=void 0===R?"":R,$=e.variant,I=void 0===$?"dialog":$,D=e.TextFieldComponent,q=ue(e,["onChange","value","allowKeyboardControl","ampm","disabled","disableFuture","disablePast","emptyLabel","format","label","maxDate","minDate","onClose","onError","className","variant","TextFieldComponent"]);return a.a.createElement(y.a,{utils:g.a},a.a.createElement(E.a,{theme:we},a.a.createElement(h.a,ce({label:k,value:n,onChange:t,allowKeyboardControl:o,ampm:i,disabled:c,disableFuture:d,disablePast:f,emptyLabel:b,format:C,className:F,minDate:T,maxDate:j,onClose:S,onError:_,variant:I,TextFieldComponent:D},q))))};je.propTypes={onChange:X.func.isRequired,value:X.oneOfType([X.instanceOf(Date).isRequired,X.string]),allowKeyboardControl:X.bool,ampm:X.bool,className:X.string,disabled:X.bool,disableFuture:X.bool,disablePast:X.bool,emptyLabel:X.string,format:X.string,label:X.string,maxDate:X.oneOfType([X.instanceOf(Date),X.string]),minDate:X.oneOfType([X.instanceOf(Date),X.string]),onClose:X.func,variant:X.string,onError:X.func};n(117);var xe=()=>{var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(r.useState)(null),s=Object(i.a)(l,2),c=s[0],u=s[1],d=Object(r.useState)(new Date("2020-10-05T00:00:00.000Z")),m=Object(i.a)(d,2),f=m[0],p=m[1],b=()=>{o(!n)},y={className:"test",id:"id",name:"name",onChange:()=>{},placeholder:"placeholder"},v=()=>{window.alert("Hello Rubiwin")};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"This is a test for github pages"),a.a.createElement(te,{text:"yes yes",onClick:v}),a.a.createElement("br",null),a.a.createElement(le,{onChange:b,checked:n,inputProps:{"aria-label":"primary checkbox"},name:"rubiwinCheck"}),a.a.createElement("br",null),a.a.createElement(se,{control:a.a.createElement(le,null),onChange:b,checked:n,name:"rubiwin",label:"Rubiwin",labelPlacement:"top"}),a.a.createElement("br",null),a.a.createElement(be,y),a.a.createElement("br",null),a.a.createElement(ve,{htmlFor:"test"},"tests 2"),a.a.createElement("br",null),a.a.createElement(be,{id:"test"}),a.a.createElement("br",null),a.a.createElement(Ce,{onClick:v,text:"Click me",className:"rubiwin"}),a.a.createElement("br",null),a.a.createElement(Oe,{text:a.a.createElement(a.a.Fragment,null,"test"),onClick:v}),a.a.createElement("br",null),a.a.createElement(Oe,{text:"test string",onClick:v}),a.a.createElement("br",null),a.a.createElement(ke,{value:c,onClick:e=>e.target.focus(),onChange:e=>u(e)}),a.a.createElement("br",null),a.a.createElement(je,{value:f,onChange:p,className:"test",label:"test label",minDate:new Date("2020-10-05T00:00:00.000Z"),maxDate:"10/10/2020"}),a.a.createElement("br",null))};l.a.render(a.a.createElement(xe,null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.737b3211.chunk.js.map