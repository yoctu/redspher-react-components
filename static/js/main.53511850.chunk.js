/*! For license information please see main.53511850.chunk.js.LICENSE.txt */
(this["webpackJsonpredspher-components-example"]=this["webpackJsonpredspher-components-example"]||[]).push([[0],{29:function(e,t,n){e.exports=n(42)},30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);n(30);var r=n(0),o=n.n(r),a=n(12),l=n.n(a),i=n(25),c=n(68),s=n(69),u=n(70),d=n(72),m=n(71),f=n(73);function p(e,t){return e(t={exports:{}},t.exports),t.exports}var b="function"===typeof Symbol&&Symbol.for,y=b?Symbol.for("react.element"):60103,h=b?Symbol.for("react.portal"):60106,g=b?Symbol.for("react.fragment"):60107,v=b?Symbol.for("react.strict_mode"):60108,O=b?Symbol.for("react.profiler"):60114,C=b?Symbol.for("react.provider"):60109,E=b?Symbol.for("react.context"):60110,w=b?Symbol.for("react.async_mode"):60111,S=b?Symbol.for("react.concurrent_mode"):60111,j=b?Symbol.for("react.forward_ref"):60112,k=b?Symbol.for("react.suspense"):60113,_=b?Symbol.for("react.suspense_list"):60120,x=b?Symbol.for("react.memo"):60115,P=b?Symbol.for("react.lazy"):60116,N=b?Symbol.for("react.block"):60121,$=b?Symbol.for("react.fundamental"):60117,R=b?Symbol.for("react.responder"):60118,T=b?Symbol.for("react.scope"):60119;function I(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case y:switch(e=e.type){case w:case S:case g:case O:case v:case k:return e;default:switch(e=e&&e.$$typeof){case E:case j:case P:case x:case C:return e;default:return t}}case h:return t}}}function F(e){return I(e)===S}var W={AsyncMode:w,ConcurrentMode:S,ContextConsumer:E,ContextProvider:C,Element:y,ForwardRef:j,Fragment:g,Lazy:P,Memo:x,Portal:h,Profiler:O,StrictMode:v,Suspense:k,isAsyncMode:function(e){return F(e)||I(e)===w},isConcurrentMode:F,isContextConsumer:function(e){return I(e)===E},isContextProvider:function(e){return I(e)===C},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===y},isForwardRef:function(e){return I(e)===j},isFragment:function(e){return I(e)===g},isLazy:function(e){return I(e)===P},isMemo:function(e){return I(e)===x},isPortal:function(e){return I(e)===h},isProfiler:function(e){return I(e)===O},isStrictMode:function(e){return I(e)===v},isSuspense:function(e){return I(e)===k},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===g||e===S||e===O||e===v||e===k||e===_||"object"===typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===x||e.$$typeof===C||e.$$typeof===E||e.$$typeof===j||e.$$typeof===$||e.$$typeof===R||e.$$typeof===T||e.$$typeof===N)},typeOf:I},z=(p((function(e,t){0})),p((function(e){e.exports=W})),Object.getOwnPropertySymbols),M=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;function A(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var V="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function L(e,t,n,r,o){}L.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function B(){}function J(){}J.resetWarningCache=B;var U=p((function(e){e.exports=function(){function e(e,t,n,r,o,a){if(a!==V){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J,resetWarningCache:B};return n.PropTypes=n,n}()})),Y="_1Q1ln",D=function(e){var t=e.text,n=e.onClick,r=e.className,a=void 0===r?"":r,l=e.disabled,i=void 0!==l&&l,u=e.fullWidth,d=void 0!==u&&u,m=e.href,f=e.size,p=void 0===f?"medium":f,b=e.endIcon,y=e.startIcon;return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(c.a,{onClick:n,className:Y+" "+a,disabled:i,fullWidth:d,href:m,size:p,endIcon:b,startIcon:y},t))};D.propTypes={text:U.string.isRequired,onClick:U.func,className:U.string,disabled:U.bool,fullWidth:U.bool,href:U.string,size:U.oneOf(["small","medium","large"]),startIcon:U.element,endIcon:U.element};var G="_IVw34",H="_361IS",Z="_3Vijt",Q="_1JRyc",K=function(e){var t=e.checked,n=void 0!==t&&t,r=e.className,a=void 0===r?"":r,l=e.disabled,i=void 0!==l&&l,c=e.id,d=e.onChange,m=e.size,f=void 0===m?"medium":m,p=e.inputRef,b=e.value,y=e.name;return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(u.a,{checked:n,className:G+" "+a,disabled:i,id:c,onChange:d,size:f,inputRef:p,value:b,name:y,color:"primary",classes:{root:H,checked:Z,disabled:Q}}))};K.propTypes={checked:U.bool,className:U.string,disabled:U.bool,id:U.oneOfType([U.string,U.number]),onChange:U.func,size:U.oneOf(["small","medium"]),inputRef:U.string,value:U.oneOfType([U.string,U.number]),name:U.string};var X="_2MsEZ",ee=function(e){var t=e.control,n=e.label,r=e.checked,a=e.disabled,l=e.labelPlacement,i=e.onChange,c=e.value,u=e.inputRef,m=e.className,f=void 0===m?"":m;return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(d.a,{control:t,label:n,checked:r,disabled:a,labelPlacement:l,onChange:i,value:c,inputRef:u,className:""+f,classes:{label:X}}))};ee.propTypes={control:U.element.isRequired,label:U.oneOfType([U.string,U.element]),checked:U.bool,disabled:U.bool,labelPlacement:U.oneOf(["bottom","end","start","top"]),onChange:U.func,value:U.oneOfType([U.string,U.number]),inputRef:U.string,className:U.string};var te="_1L0ob",ne="_2tGwO",re="_2xvYj",oe="_3qiml",ae=function(e){var t=e.className,n=void 0===t?"":t,r=e.id,a=e.defaultValue,l=e.disabled,i=void 0!==l&&l,c=e.endAdornment,u=e.error,d=void 0!==u&&u,f=e.fullWidth,p=void 0!==f&&f,b=e.inputProps,y=e.inputRef,h=e.multiline,g=void 0!==h&&h,v=e.name,O=e.onChange,C=e.placeholder,E=e.readOnly,w=e.required,S=e.rows,j=e.rowsMax,k=e.startAdornment,_=e.type,x=e.value;return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(m.a,{className:""+n,classes:{root:te,focused:ne,disabled:re,error:oe},disableUnderline:!0,endAdornment:c,id:r,defaultValue:a,disabled:i,error:d,fullWidth:p,inputProps:b,inputRef:y,multiline:g,name:v,onChange:O,placeholder:C,readOnly:E,required:w,rows:S,rowsMax:j,startAdornment:k,type:_,value:x}))};ae.propTypes={className:U.string,defaultValue:U.any,disabled:U.bool,error:U.bool,endAdornment:U.node,fullWidth:U.bool,inputProps:U.object,inputRef:U.string,multiline:U.bool,name:U.string,onChange:U.func,placeholder:U.string,readOnly:U.bool,required:U.bool,rows:U.number,rowsMax:U.number,startAdornment:U.node,type:U.string,value:U.any};var le="_36YBZ",ie=function(e){var t=e.children,n=e.disabled,r=e.error,a=e.htmlFor,l=e.className;return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(f.a,{disabled:n,error:r,htmlFor:a,classes:{root:le},className:l},t))};ie.propTypes={children:U.node,className:U.string,disabled:U.bool,error:U.bool,htmlFor:U.string};var ce="_1aNge",se="_2gy4G",ue=function(e){var t=e.text,n=e.onClick,r=e.className,a=void 0===r?"":r,l=e.disabled,i=void 0!==l&&l,u=e.fullWidth,d=void 0!==u&&u,m=e.href,f=e.size,p=void 0===f?"medium":f,b=e.endIcon,y=e.startIcon;return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(c.a,{onClick:n,className:""+a,disabled:i,fullWidth:d,href:m,size:p,endIcon:b,startIcon:y,classes:{root:ce,disabled:se}},t))};ue.propTypes={text:U.string.isRequired,onClick:U.func,className:U.string,disabled:U.bool,fullWidth:U.bool,href:U.string,size:U.oneOf(["small","medium","large"]),startIcon:U.element,endIcon:U.element};n(41);var de=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],l=function(){a(!n)},c={className:"test",id:"id",name:"name",onChange:function(){},placeholder:"placeholder"},s=function(){window.alert("Hello Rubiwin")};return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{text:"Create React Library Example \ud83d\ude04",onClick:s}),o.a.createElement(K,{onChange:l,checked:n,inputProps:{"aria-label":"primary checkbox"},name:"rubiwinCheck"}),o.a.createElement(ee,{control:o.a.createElement(K,null),onChange:l,checked:n,name:"rubiwin",label:"Rubiwin",labelPlacement:"top"}),o.a.createElement(ae,c),o.a.createElement(ie,{htmlFor:"test"},"tests"),o.a.createElement(ae,{id:"test"}),o.a.createElement(ue,{onClick:s,text:"Click me",className:"rubiwin"}))};l.a.render(o.a.createElement(de,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.53511850.chunk.js.map