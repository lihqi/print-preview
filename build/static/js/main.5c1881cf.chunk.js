(this["webpackJsonpnew-print"]=this["webpackJsonpnew-print"]||[]).push([[0],{223:function(e,t,n){e.exports=n(543)},228:function(e,t,n){},542:function(e,t,n){},543:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),o=n.n(r),c=(n(228),n(229),n(208)),l=n(222),s=n(37),u=n(38),m=n(41),p=n(39),g=n(42),f=n(32),h=(n(542),f.c.Option),d=["1X1","1X2","2X3","3X4"],v={0:"\u4e00",1:"\u4e8c",2:"\u4e09"},b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.changePageMargin,n=e.pageMarginBottom,a=e.pageMarginLeft,r=e.pageMarginRight,o=e.pageMarginTop,c=e.composingStyle,l=e.changeComposingStyle,s=e.nameValues,u=e.selectNameValue,m=e.options;return i.a.createElement("div",{className:"print-set"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"\u7eb8\u5f20\u5927\u5c0f"),i.a.createElement("p",{className:"tmp-A4"},"A4")),i.a.createElement("fieldset",null,i.a.createElement("legend",null,"\u9875\u8fb9\u8ddd"),i.a.createElement("div",null,"\u4e0a:",i.a.createElement(f.b,{size:"small",precision:2,step:.01,value:o,onChange:function(e){t("top",e)}}),"\u5398\u7c73"),i.a.createElement("div",null,"\u4e0b:",i.a.createElement(f.b,{size:"small",precision:2,step:.01,value:n,onChange:function(e){t("bottom",e)}}),"\u5398\u7c73"),i.a.createElement("div",null,"\u5de6:",i.a.createElement(f.b,{size:"small",precision:2,step:.01,value:a,onChange:function(e){t("left",e)}}),"\u5398\u7c73"),i.a.createElement("div",null,"\u53f3:",i.a.createElement(f.b,{size:"small",precision:2,step:.01,value:r,onChange:function(e){t("right",e)}}),"\u5398\u7c73")),i.a.createElement("fieldset",null,i.a.createElement("legend",null,"\u6392\u7248\u6837\u5f0f"),i.a.createElement(f.c,{value:c,style:{width:"100%"},size:"small",onChange:l},d.map((function(e,t){return i.a.createElement(h,{value:e,key:t},e)})))),i.a.createElement("fieldset",null,i.a.createElement("legend",null,"\u663e\u793a\u540d\u79f0"),i.a.createElement("div",null,i.a.createElement("p",{className:"name-value-text"},s.map((function(e,t){var n;e?n=e:n="\u5b57\u6bb5".concat(v[""+t]);return"[".concat(n,"]")})))),i.a.createElement("div",null,s.map((function(e,t){var n=e||"\u8bf7\u9009\u62e9\u5b57\u6bb5";return i.a.createElement("div",{key:t},i.a.createElement(f.c,{key:t,value:n,style:{width:"100%"},size:"small",onChange:function(e){u(t,e)}},m.map((function(e,t){return i.a.createElement(h,{value:e.value,key:t},e.name)}))),i.a.createElement("div",{className:"icon-container"},null))})))))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pageMarginBottom,n=e.pageMarginLeft,a=e.pageMarginRight,r=e.pageMarginTop,o=e.pageSize,c=e.oneItem,l=e.itemLength,s=[];return i.a.createElement("div",{className:"".concat(o,"-page-size")},i.a.createElement("div",{className:"".concat(o,"-page-content"),style:{paddingBottom:t/2+"cm",paddingTop:r/2+"cm",paddingLeft:n/2+"cm",paddingRight:a/2+"cm"}},c.map((function(e,t){return i.a.createElement("div",{className:"QR-code-container",key:t},i.a.createElement("img",{src:e.src,alt:t}),i.a.createElement("p",null,"\u6570\u636e\u6807\u9898\u6570\u636e..."))})),function(){if(l>c.length)for(var e=0;e<l-c.length;e++)s.push(i.a.createElement("div",{className:"QR-code-container empty-container",key:e},i.a.createElement("div",{className:"empty-content"}),i.a.createElement("p",null,"\u6570\u636e\u6807\u9898")))}(),s.length?s:null))}}]),t}(a.Component),E={"1X1":1,"1X2":2,"2X3":6,"3X4":12},O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props,n=t.composingStyle,a=t.allData,r=[],o=E[n],c=0,l=a.length;c<l;c+=o)r.push(a.slice(c,c+o));return r.map((function(t,a){return i.a.createElement("div",{className:"QR-code-container p".concat(n),key:a},i.a.createElement(y,Object.assign({},e.props,{oneItem:t,itemLength:o})))}))}}]),t}(a.Component),w=n(221),j=n.n(w),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"print-query-code-modal clearfix"},i.a.createElement(b,this.props),i.a.createElement(j.a,{trigger:function(){return i.a.createElement("div",{className:"print-btn"},i.a.createElement(f.a,null,"\u6253\u5370"))},content:function(){return e.componentRef},bodyClass:"print-query-code-iframe"}),i.a.createElement("div",{className:"print-preview-container"},i.a.createElement("div",{ref:function(t){return e.componentRef=t}},i.a.createElement(O,this.props))))}}]),t}(a.Component);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}for(var N=[{name:"\u9009\u987913434343",value:"option1"},{name:"\u9009\u98792",value:"option2"},{name:"\u9009\u98793",value:"option3"}],M={src:"https://qr.api.cli.im/qr?data=www.baidu.com&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=f33aa9d4852b6c3e3439d4e50f311c26"},C=[],V=0;V<27;V++)C.push(M);var P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={visible:!0,pageSize:"A4",pageMarginTop:1.27,pageMarginBottom:1.27,pageMarginLeft:1.27,pageMarginRight:1.27,composingStyle:"1X1",nameValues:[""]},n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"selectNameValue",value:function(e,t){var n=this.state.nameValues;n[e]=t,this.setState({nameValues:n})}},{key:"addNameValue",value:function(){var e=this.state.nameValues;3===e.length?f.d.error("\u663e\u793a\u540d\u79f0\u6700\u591a\u652f\u6301\u4e09\u4e2a\u5b57\u6bb5\u9009\u62e9"):this.setState({nameValues:[].concat(Object(l.a)(e),[""])})}},{key:"removeNameValue",value:function(e){var t=this.state.nameValues;t=t.filter((function(t,n){return n!==e})),this.setState({nameValues:t})}},{key:"showModal",value:function(){this.setState({visible:!0})}},{key:"changePageSize",value:function(e){this.setState({pageSize:e})}},{key:"changeComposingStyle",value:function(e){this.setState({composingStyle:e})}},{key:"changePageMargin",value:function(e,t){switch(e){case"top":this.setState({pageMarginTop:t});break;case"bottom":this.setState({pageMarginBottom:t});break;case"left":this.setState({pageMarginLeft:t});break;default:this.setState({pageMarginRight:t})}}},{key:"render",value:function(){var e=this,t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state,{changePageMargin:this.changePageMargin.bind(this),changePageSize:this.changePageSize.bind(this),changeComposingStyle:this.changeComposingStyle.bind(this),addNameValue:this.addNameValue.bind(this),removeNameValue:this.removeNameValue.bind(this),selectNameValue:this.selectNameValue.bind(this),options:N,allData:C,onCancel:function(){e.setState({visible:!1})},onOk:function(){window.print(),e.setState({visible:!1})}});return i.a.createElement("div",{className:"App"},i.a.createElement(k,t))}}]),t}(a.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/print-preview/build",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/print-preview/build","/service-worker.js");z?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):R(e)}))}}()}},[[223,1,2]]]);
//# sourceMappingURL=main.5c1881cf.chunk.js.map