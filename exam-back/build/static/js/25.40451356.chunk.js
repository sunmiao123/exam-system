(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{341:function(e,t,n){"use strict";var r=n(320),o=n.n(r),a=n(1),i=n(290),l=n(284),c=n.n(l),s=n(299),u=n(397),p=n(289),f=n(293),d=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function w(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return k}),n.d(t,"b",function(){return N});var C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};if("undefined"!==typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}}}var x={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},k=o()({}),E=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),P=function(e){function t(e){var n,r,o;return b(this,t),(n=w(this,O(t).call(this,e))).responsiveHandler=function(e){n.setState({below:e.matches});var t=n.props.onBreakpoint;t&&t(e.matches),n.state.collapsed!==e.matches&&n.setCollapsed(e.matches,"responsive")},n.setCollapsed=function(e,t){"collapsed"in n.props||n.setState({collapsed:e});var r=n.props.onCollapse;r&&r(e,t)},n.toggle=function(){var e=!n.state.collapsed;n.setCollapsed(e,"clickTrigger")},n.belowShowChange=function(){n.setState(function(e){return{belowShow:!e.belowShow}})},n.renderSider=function(e){var t,r=e.getPrefixCls,o=n.props,i=o.prefixCls,l=o.className,u=o.theme,p=o.collapsible,y=o.reverseArrow,b=o.trigger,v=o.style,g=o.width,w=o.collapsedWidth,O=C(o,["prefixCls","className","theme","collapsible","reverseArrow","trigger","style","width","collapsedWidth"]),S=r("layout-sider",i),j=Object(s.a)(O,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook"]),x=n.state.collapsed?w:g,k=d(x)?"".concat(x,"px"):String(x),E=0===parseFloat(String(w||0))?a.createElement("span",{onClick:n.toggle,className:"".concat(S,"-zero-width-trigger ").concat(S,"-zero-width-trigger-").concat(y?"right":"left")},a.createElement(f.a,{type:"bars"})):null,P={expanded:y?a.createElement(f.a,{type:"right"}):a.createElement(f.a,{type:"left"}),collapsed:y?a.createElement(f.a,{type:"left"}):a.createElement(f.a,{type:"right"})}[n.state.collapsed?"collapsed":"expanded"],N=null!==b?E||a.createElement("div",{className:"".concat(S,"-trigger"),onClick:n.toggle,style:{width:k}},b||P):null,_=m(m({},v),{flex:"0 0 ".concat(k),maxWidth:k,minWidth:k,width:k}),H=c()(l,S,"".concat(S,"-").concat(u),(h(t={},"".concat(S,"-collapsed"),!!n.state.collapsed),h(t,"".concat(S,"-has-trigger"),p&&null!==b&&!E),h(t,"".concat(S,"-below"),!!n.state.below),h(t,"".concat(S,"-zero-width"),0===parseFloat(k)),t));return a.createElement("aside",m({className:H},j,{style:_}),a.createElement("div",{className:"".concat(S,"-children")},n.props.children),p||n.state.below&&E?N:null)},n.uniqueId=E("ant-sider-"),"undefined"!==typeof window&&(r=window.matchMedia),r&&e.breakpoint&&e.breakpoint in x&&(n.mql=r("(max-width: ".concat(x[e.breakpoint],")"))),o="collapsed"in e?e.collapsed:e.defaultCollapsed,n.state={collapsed:o,below:!1},n}return S(t,a["Component"]),g(t,[{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql)),this.props.siderHook&&this.props.siderHook.addSider(this.uniqueId)}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.props.siderHook&&this.props.siderHook.removeSider(this.uniqueId)}},{key:"render",value:function(){var e=this.state.collapsed,t=this.props.collapsedWidth;return a.createElement(k.Provider,{value:{siderCollapsed:e,collapsedWidth:t}},a.createElement(p.a,null,this.renderSider))}}],[{key:"getDerivedStateFromProps",value:function(e){return"collapsed"in e?{collapsed:e.collapsed}:null}}]),t}();P.defaultProps={collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80,style:{},theme:"dark"},Object(i.polyfill)(P);var N=function(e){function t(){return b(this,t),w(this,O(t).apply(this,arguments))}return S(t,a["Component"]),g(t,[{key:"render",value:function(){var e=this;return a.createElement(u.a.Consumer,null,function(t){return a.createElement(P,m({},t,e.props))})}}]),t}()},397:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var r=n(1),o=n(284),a=n.n(o),i=n(320),l=n.n(i),c=n(289);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function h(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},w=l()({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function O(e){var t=e.suffixCls,n=e.tagName;return function(e){return function(o){function a(){var o;return f(this,a),(o=h(this,m(a).apply(this,arguments))).renderComponent=function(a){var i=a.getPrefixCls,l=o.props.prefixCls,c=i(t,l);return r.createElement(e,p({prefixCls:c,tagName:n},o.props))},o}return b(a,r["Component"]),y(a,[{key:"render",value:function(){return r.createElement(c.a,null,this.renderComponent)}}]),a}()}}var S=function(e){var t=e.prefixCls,n=e.className,o=e.children,i=e.tagName,l=g(e,["prefixCls","className","children","tagName"]),c=a()(n,t);return r.createElement(i,p({className:c},l),o)},j=function(e){function t(){var e;return f(this,t),(e=h(this,m(t).apply(this,arguments))).state={siders:[]},e}return b(t,r["Component"]),y(t,[{key:"getSiderHook",value:function(){var e=this;return{addSider:function(t){e.setState(function(e){return{siders:[].concat(u(e.siders),[t])}})},removeSider:function(t){e.setState(function(e){return{siders:e.siders.filter(function(e){return e!==t})}})}}}},{key:"render",value:function(){var e,t,n,o=this.props,i=o.prefixCls,l=o.className,c=o.children,s=o.hasSider,u=o.tagName,f=g(o,["prefixCls","className","children","hasSider","tagName"]),d=a()(l,i,(e={},t="".concat(i,"-has-sider"),n="boolean"===typeof s?s:this.state.siders.length>0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return r.createElement(w.Provider,{value:{siderHook:this.getSiderHook()}},r.createElement(u,p({className:d},f),c))}}]),t}(),C=O({suffixCls:"layout",tagName:"section"})(j),x=O({suffixCls:"layout-header",tagName:"header"})(S),k=O({suffixCls:"layout-footer",tagName:"footer"})(S),E=O({suffixCls:"layout-content",tagName:"main"})(S);C.Header=x,C.Footer=k,C.Content=E,t.b=C},519:function(e,t,n){"use strict";n(292),n(520)},520:function(e,t,n){},521:function(e,t,n){"use strict";var r=n(397),o=n(341);r.b.Sider=o.b,t.a=r.b},671:function(e,t,n){"use strict";n.r(t);n(527);var r=n(528),o=n(77),a=n(78),i=n(80),l=n(79),c=n(81),s=(n(519),n(521)),u=n(1),p=n.n(u),f=s.a.Content,d=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return p.a.createElement(s.a,null,p.a.createElement(f,null,p.a.createElement(r.a,{style:{height:100}}),p.a.createElement(r.a,{type:"flex",justify:"center",style:{fontSize:20,fontWeight:"bold",color:"blue"}},"\u6b22\u8fce\u6765\u5230\u8003\u8bd5\u7ba1\u7406\u7cfb\u7edf")))}}]),t}(u.Component);t.default=d}}]);
//# sourceMappingURL=25.40451356.chunk.js.map