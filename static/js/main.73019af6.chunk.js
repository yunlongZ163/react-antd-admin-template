(this.webpackJsonpreact_admin_template=this.webpackJsonpreact_admin_template||[]).push([[26],{202:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(131);var a=n(48),r=n(213),o=n.n(r);function l(e,t){var n=new o.a(t.target,{text:function(){return e}});n.on("success",(function(){a.a.success("\u590d\u5236\u6210\u529f"),n.destroy()})),n.on("error",(function(){a.a.error("\u590d\u5236\u5931\u8d25"),n.destroy()})),n.onClick(t)}},216:function(e,t,n){e.exports=n.p+"static/media/logo.106db4de.png"},22:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var a="USER_SET_USER_TOKEN",r="USER_SET_USER_INFO",o="USER_RESET_USER",l="APP_TOGGLE_SIDEBAR",c="APP_TOGGLE_SETTINGPANEL",i="SETTINGS_CHANGE_SETTINGS"},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return p}));var a=n(15),r=n(22),o=n(84);var l=function(e){return function(t){return new Promise((function(n,a){var r;(r=e,Object(o.a)({url:"/userInfo",method:"post",data:r})).then((function(e){var r=e.data;if(0===r.status){var o=r.userInfo;t(c(o)),n(r)}else{var l=r.message;a(l)}})).catch((function(e){a(e)}))}))}},c=function(e){return Object(a.a)({type:r.e},e)};var i=n(69),u=function(e,t){return function(n){return new Promise((function(a,l){var c;(c={username:e.trim(),password:t},Object(o.a)({url:"/login",method:"post",data:c})).then((function(e){var t=e.data;if(0===t.status){var o=t.token;n(function(e){return{type:r.f,token:e}}(o)),Object(i.c)(o),a(t)}else{var c=t.message;l(c)}})).catch((function(e){l(e)}))}))}},s=function(e){return function(t){return new Promise((function(n,a){var l;(l=e,Object(o.a)({url:"/logout",method:"post",data:l})).then((function(e){var o=e.data;if(0===o.status)t({type:r.d}),Object(i.b)(),n(o);else{var l=o.message;a(l)}})).catch((function(e){a(e)}))}))}},d=function(){return{type:r.b}},m=function(){return{type:r.a}},p=function(e){return Object(a.a)({type:r.c},e)}},250:function(e,t,n){e.exports=n(451)},336:function(e,t,n){},337:function(e,t,n){},338:function(e,t,n){},341:function(e,t,n){},349:function(e,t,n){},363:function(e,t,n){},377:function(e,t,n){},381:function(e,t,n){},450:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),c=n(39),i=n(40),u=n(42),s=n(41),d=n(49),m=n(59),p=n(19),h=n(24),f=(n(320),n(10)),g=n(224);for(var b=function(e){return r.a.createElement(f.a,{locale:g.a},e.children)},E=(n(105),n(50)),v=n(123),y=n.n(v),O=n(20),k=n.n(O),j=(n(171),n(113)),x=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(j.a,null))},S=k()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(10)]).then(n.bind(null,1334))},loading:x}),w=k()({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,1323))},loading:x}),P=k()({loader:function(){return Promise.all([n.e(0),n.e(34),n.e(15)]).then(n.bind(null,1340))},loading:x}),C=k()({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,1324))},loading:x}),N=k()({loader:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,1325))},loading:x}),I=k()({loader:function(){return Promise.all([n.e(0),n.e(29),n.e(22)]).then(n.bind(null,1339))},loading:x}),T=k()({loader:function(){return Promise.all([n.e(0),n.e(31),n.e(18)]).then(n.bind(null,1338))},loading:x}),_=k()({loader:function(){return Promise.all([n.e(2),n.e(16)]).then(n.bind(null,1337))},loading:x}),H=k()({loader:function(){return Promise.all([n.e(2),n.e(17)]).then(n.bind(null,1341))},loading:x}),L=k()({loader:function(){return Promise.all([n.e(2),n.e(21)]).then(n.bind(null,1336))},loading:x}),U=k()({loader:function(){return n.e(19).then(n.bind(null,1326))},loading:x}),A=k()({loader:function(){return n.e(20).then(n.bind(null,1327))},loading:x}),M=k()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(30),n.e(23)]).then(n.bind(null,1335))},loading:x}),z=k()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(13)]).then(n.bind(null,1328))},loading:x}),R=k()({loader:function(){return Promise.all([n.e(1),n.e(4),n.e(6),n.e(5),n.e(24)]).then(n.bind(null,1333))},loading:x}),D=k()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(25)]).then(n.bind(null,1329))},loading:x}),F=k()({loader:function(){return n.e(9).then(n.bind(null,1330))},loading:x}),G=k()({loader:function(){return n.e(12).then(n.bind(null,1331))},loading:x}),J=[{path:"/dashboard",component:S,roles:["admin","guest"]},{path:"/doc",component:w,roles:["admin","guest"]},{path:"/guide",component:P,roles:["admin","guest"]},{path:"/permission/adminPage",component:C,roles:["admin"]},{path:"/permission/guestPage",component:N,roles:["guest"]},{path:"/components/richTextEditor",component:I,roles:["admin","guest"]},{path:"/components/Markdown",component:T,roles:["admin","guest"]},{path:"/charts/keyboard",component:_,roles:["admin","guest"]},{path:"/charts/line",component:H,roles:["admin","guest"]},{path:"/charts/mix-chart",component:L,roles:["admin","guest"]},{path:"/nested/menu1/menu1-1",component:U,roles:["admin","guest"]},{path:"/nested/menu1/menu1-2/menu1-2-1",component:A,roles:["admin","guest"]},{path:"/table",component:M,roles:["admin","guest"]},{path:"/excel/export",component:z,roles:["admin","guest"]},{path:"/excel/upload",component:R,roles:["admin","guest"]},{path:"/zip",component:D,roles:["admin","guest"]},{path:"/clipboard",component:F,roles:["admin","guest"]},{path:"/about",component:k()({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,1332))},loading:x}),roles:["admin","guest"]},{path:"/error/404",component:G}],K=[{title:"\u9996\u9875",path:"/dashboard",icon:"home"},{title:"\u5f00\u53d1\u6587\u6863",path:"/doc",icon:"file"},{title:"\u5f15\u5bfc\u9875",path:"/guide",icon:"key"},{title:"\u6743\u9650\u6d4b\u8bd5",path:"/permission",icon:"lock",children:[{title:"\u7ba1\u7406\u5458\u9875\u9762",path:"/permission/adminPage",roles:["admin"]},{title:"\u6e38\u5ba2\u9875\u9762",path:"/permission/guestPage",roles:["guest"]}]},{title:"\u7ec4\u4ef6",path:"/components",icon:"appstore",children:[{title:"\u5bcc\u6587\u672c",path:"/components/richTextEditor"},{title:"Markdown",path:"/components/Markdown"}]},{title:"\u56fe\u8868",path:"/charts",icon:"area-chart",children:[{title:"\u952e\u76d8\u56fe\u8868",path:"/charts/keyboard"},{title:"\u6298\u7ebf\u56fe",path:"/charts/line"},{title:"\u6df7\u5408\u56fe\u8868",path:"/charts/mix-chart"}]},{title:"\u8def\u7531\u5d4c\u5957",path:"/nested",icon:"cluster",children:[{title:"\u83dc\u53551",path:"/nested/menu1",children:[{title:"\u83dc\u53551-1",path:"/nested/menu1/menu1-1"},{title:"\u83dc\u53551-2",path:"/nested/menu1/menu1-2",children:[{title:"\u83dc\u53551-2-1",path:"/nested/menu1/menu1-2/menu1-2-1"}]}]}]},{title:"\u8868\u683c",path:"/table",icon:"table"},{title:"Excel",path:"/excel",icon:"file-excel",children:[{title:"\u5bfc\u51faExcel",path:"/excel/export"},{title:"\u4e0a\u4f20Excel",path:"/excel/upload"}]},{title:"Zip",path:"/zip",icon:"file-zip"},{title:"\u526a\u8d34\u677f",path:"/clipboard",icon:"copy"},{title:"\u5173\u4e8e\u4f5c\u8005",path:"/about",icon:"user"}],V=E.a.Content,B=function(e,t){var n=[],a="Ant Design Pro";for(n=n.concat(e);n.length;){var r=n.shift();r.children&&r.children.length>0&&(n=r.children.concat(n)),t===r.path&&(a="".concat(r.title," - Ant Design Pro"))}return a},q=Object(p.b)((function(e){return e.user}))(Object(m.g)((function(e){var t=e.role,n=e.location.pathname;return r.a.createElement(y.a,{title:B(K,n)},r.a.createElement(V,{style:{margin:"0px 16px"}},r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/dashboard"}),J.map((function(e){return function(e){return!e.roles||e.roles.includes(t)}(e)&&r.a.createElement(m.b,{component:e.component,key:e.path,path:e.path})})),r.a.createElement(m.a,{to:"/error/404"}))))}))),W=n(15),X=(n(172),n(174)),Z=(n(62),n(4)),$=(n(331),n(212)),Y=(n(155),n(33)),Q=(n(169),n(117)),ee=(n(136),n(78)),te=(n(131),n(48)),ne=n(61),ae=n.n(ne),re=(n(336),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isFullscreen:!1},e.init=function(){ae.a.isEnabled&&ae.a.on("change",e.change)},e.change=function(){e.setState({isFullscreen:ae.a.isFullscreen})},e.click=function(){if(!ae.a.isEnabled)return te.a.warning("you browser can not work"),!1;ae.a.toggle()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){ae.a.isEnabled&&ae.a.off("change",this.change)}},{key:"render",value:function(){var e=this.state.isFullscreen?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f",t=this.state.isFullscreen?"fullscreen-exit":"fullscreen";return r.a.createElement("div",{className:"fullScreen-container"},r.a.createElement(ee.a,{placement:"bottom",title:e},r.a.createElement(Z.a,{type:t,onClick:this.click})))}}]),n}(a.Component)),oe=(n(337),Object(p.b)(null,{toggleSettingPanel:h.e})((function(e){var t=e.toggleSettingPanel;return r.a.createElement("div",{className:"settings-container"},r.a.createElement(ee.a,{placement:"bottom",title:"\u7cfb\u7edf\u8bbe\u7f6e"},r.a.createElement(Z.a,{type:"setting",onClick:t})))}))),le=(n(338),Object(p.b)((function(e){return e.app}),{toggleSiderBar:h.f})((function(e){var t=e.sidebarCollapsed,n=e.toggleSiderBar;return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement(Z.a,{type:t?"menu-unfold":"menu-fold",onClick:n}))}))),ce=(n(339),n(128)),ie=(n(341),Object(m.g)((function(e){var t=e.location.pathname,n=function(e,t){var n=[];try{for(var a=function e(a){if(n.push(a),a.path===t)throw new Error("GOT IT!");if(a.children&&a.children.length>0){for(var r=0;r<a.children.length;r++)e(a.children[r]);n.pop()}else n.pop()},r=0;r<e.length;r++)a(e[r])}catch(o){return n}}(K,t),a=n&&n[0];return a&&"\u9996\u9875"!==a.title.trim()&&(n=[{title:"\u9996\u9875",path:"/dashboard"}].concat(n)),r.a.createElement("div",{className:"Breadcrumb-container"},r.a.createElement(ce.a,null,n&&n.map((function(e){return"\u9996\u9875"===e.title?r.a.createElement(ce.a.Item,{key:e.path},r.a.createElement("a",{href:"#".concat(e.path)},e.title)):r.a.createElement(ce.a.Item,{key:e.path},e.title)}))))}))),ue=(n(349),E.a.Header),se=Object(p.b)((function(e){return Object(W.a)(Object(W.a)(Object(W.a)({},e.app),e.user),e.settings)}),{logout:h.d,getUserInfo:h.b})((function(e){var t=e.token,n=e.avatar,a=e.sidebarCollapsed,o=e.logout,l=e.getUserInfo,c=e.showSettings,i=e.fixedHeader;t&&l(t);var u=r.a.createElement(Y.a,{onClick:function(e){switch(e.key){case"logout":!function(e){Q.a.confirm({title:"\u6ce8\u9500",content:"\u786e\u5b9a\u8981\u9000\u51fa\u7cfb\u7edf\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){o(e)}})}(t)}}},r.a.createElement(Y.a.Item,{key:"0"},r.a.createElement(d.b,{to:"/dashboard"},"\u9996\u9875")),r.a.createElement(Y.a.Item,{key:"0"},r.a.createElement("a",{target:"_blank",href:"https://github.com/NLRX-WJC/react-antd-admin-template",rel:"noopener noreferrer"},"\u9879\u76ee\u5730\u5740")),r.a.createElement(Y.a.Divider,null),r.a.createElement(Y.a.Item,{key:"logout"},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(ue,null):null,r.a.createElement(ue,{style:i?a?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:i?"fix-header":""},r.a.createElement(le,null),r.a.createElement(ie,null),r.a.createElement("div",{className:"right-menu"},r.a.createElement(re,null),c?r.a.createElement(oe,null):null,r.a.createElement("div",{className:"dropdown-wrap"},r.a.createElement(X.a,{overlay:u},r.a.createElement("div",null,r.a.createElement($.a,{shape:"square",size:"medium",src:n}),r.a.createElement(Z.a,{style:{color:"rgba(0,0,0,.3)"},type:"caret-down"})))))))})),de=(n(350),n(225)),me=(n(82),n(25)),pe=(n(352),n(215)),he=(n(242),n(160)),fe=(n(226),n(97)),ge=(n(356),n(165)),be=(n(227),n(72)),Ee=n(202),ve=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sidebarLogo:!0,fixedHeader:!0},e.sidebarLogoChange=function(t){e.setState({sidebarLogo:t}),e.props.changeSetting({key:"sidebarLogo",value:t})},e.fixedHeaderChange=function(t){e.setState({fixedHeader:t}),e.props.changeSetting({key:"fixedHeader",value:t})},e.handleCopy=function(t){var n="\n    export default {\n      showSettings: true,\n      sidebarLogo: ".concat(e.state.sidebarLogo,",\n      fixedHeader: ").concat(e.state.fixedHeader,",\n    }\n    ");Object(Ee.a)(n,t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.settingPanelVisible,a=t.toggleSettingPanel,o=t.sidebarLogo,l=t.fixedHeader;return r.a.createElement("div",{className:"rightSettings"},r.a.createElement(de.a,{title:"\u7cfb\u7edf\u8bbe\u7f6e",placement:"right",width:350,onClose:a,visible:n},r.a.createElement(fe.a,null,r.a.createElement(be.a,{span:12},r.a.createElement("span",null,"\u4fa7\u8fb9\u680f Logo")),r.a.createElement(be.a,{span:12},r.a.createElement(ge.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:o,onChange:this.sidebarLogoChange}))),r.a.createElement(he.a,{dashed:!0}),r.a.createElement(fe.a,null,r.a.createElement(be.a,{span:12},r.a.createElement("span",null,"\u56fa\u5b9a Header")),r.a.createElement(be.a,{span:12},r.a.createElement(ge.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:l,onChange:this.fixedHeaderChange}))),r.a.createElement(he.a,{dashed:!0}),r.a.createElement(fe.a,null,r.a.createElement(be.a,{span:24},r.a.createElement(pe.a,{message:"\u5f00\u53d1\u8005\u8bf7\u6ce8\u610f:",description:"\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539/src/defaultSettings.js\u914d\u7f6e\u6587\u4ef6",type:"warning",showIcon:!0,icon:r.a.createElement(Z.a,{type:"notification"}),style:{marginBottom:"16px"}}),r.a.createElement(me.a,{style:{width:"100%"},icon:"copy",onClick:function(t){e.handleCopy(t)}},"\u62f7\u8d1d\u914d\u7f6e")))))}}]),n}(a.Component),ye=Object(p.b)((function(e){return Object(W.a)(Object(W.a)({},e.app),e.settings)}),{toggleSettingPanel:h.e,changeSetting:h.a})(ve),Oe=n(216),ke=n.n(Oe),je=(n(363),function(){return r.a.createElement("div",{className:"sidebar-logo-container"},r.a.createElement("img",{src:ke.a,className:"sidebar-logo",alt:""}),r.a.createElement("h1",{className:"sidebar-title"},"\u96be\u51c9\u70ed\u8840"))}),xe=n(207),Se=n(217),we=(n(377),Y.a.SubMenu),Pe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={menuTreeNode:null,openKey:[]},e.filterMenuItem=function(t){var n=t.roles,a=e.props,r=a.role;return!("admin"!==a.name&&n&&!n.includes(r))||!!t.children&&!!t.children.find((function(e){return n.includes(e.role)}))},e.getMenuNodes=function(t){var n=e.props.location.pathname;return t.reduce((function(t,a){e.filterMenuItem(a)&&(a.children?(a.children.find((function(e){return 0===n.indexOf(e.path)}))&&e.setState((function(e){return{openKey:[].concat(Object(xe.a)(e.openKey),[a.path])}})),t.push(r.a.createElement(we,{key:a.path,title:r.a.createElement("span",null,a.icon?r.a.createElement(Z.a,{type:a.icon}):null,r.a.createElement("span",null,a.title))},e.getMenuNodes(a.children)))):t.push(r.a.createElement(Y.a.Item,{key:a.path},r.a.createElement(d.b,{to:a.path},a.icon?r.a.createElement(Z.a,{type:a.icon}):null,r.a.createElement("span",null,a.title)))));return t}),[])},e}return Object(i.a)(n,[{key:"componentWillMount",value:function(){var e=this.getMenuNodes(K);this.setState({menuTreeNode:e})}},{key:"render",value:function(){var e=this.props.location.pathname,t=this.state.openKey;return r.a.createElement("div",{className:"sidebar-menu-container"},r.a.createElement(Se.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r.a.createElement(Y.a,{mode:"inline",theme:"dark",selectedKeys:[e],defaultOpenKeys:t},this.state.menuTreeNode)))}}]),n}(a.Component),Ce=Object(p.b)((function(e){return e.user}))(Object(m.g)(Pe)),Ne=E.a.Sider,Ie=Object(p.b)((function(e){return Object(W.a)(Object(W.a)({},e.app),e.settings)}))((function(e){var t=e.sidebarCollapsed,n=e.sidebarLogo;return r.a.createElement(Ne,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"}},n?r.a.createElement(je,null):null,r.a.createElement(Ce,null))})),Te=function(){return r.a.createElement(E.a,{style:{minHeight:"100vh"}},r.a.createElement(Ie,null),r.a.createElement(E.a,null,r.a.createElement(se,null),r.a.createElement(q,null),r.a.createElement(ye,null)))},_e=(n(229),n(66)),He=(n(228),n(138)),Le=n(166),Ue=n.n(Le),Ae=n(218),Me=(n(381),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields(function(){var t=Object(Ae.a)(Ue.a.mark((function t(n,a){var r,o;return Ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n?console.log("\u68c0\u9a8c\u5931\u8d25!"):(r=a.username,o=a.password,e.login(r,o));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},e.login=function(t,n){var a=e.props.login;e.setState({loading:!0}),a(t,n).then((function(t){te.a.success("\u767b\u5f55\u6210\u529f"),e.getUserInfo(t.token)})).catch((function(t){e.setState({loading:!1}),te.a.error(t)}))},e.getUserInfo=function(t){(0,e.props.getUserInfo)(t).then((function(e){localStorage.setItem("userInfo",JSON.stringify(e.userInfo))})).catch((function(e){te.a.error(e)}))},e.validatePwd=function(e,t,n){t?t.length<4?n("\u5bc6\u7801\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e4\u4f4d"):t.length>12?n("\u5bc6\u7801\u957f\u5ea6\u4e0d\u80fd\u5927\u4e8e12\u4f4d"):/^[a-zA-Z0-9_]+$/.test(t)?n():n("\u5bc6\u7801\u5fc5\u987b\u662f\u82f1\u6587\u3001\u6570\u5b57\u6216\u4e0b\u5212\u7ebf\u7ec4\u6210"):n("\u5bc6\u7801\u5fc5\u987b\u8f93\u5165")},e}return Object(i.a)(n,[{key:"render",value:function(){if(this.props.token)return r.a.createElement(m.a,{to:"/dashboard"});var e=this.props.form.getFieldDecorator;return r.a.createElement(y.a,{title:"\u7528\u6237\u767b\u5f55"},r.a.createElement("div",{className:"login-container"},r.a.createElement(_e.a,{onSubmit:this.handleSubmit,className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"\u7528\u6237\u767b\u5f55")),r.a.createElement(j.a,{spinning:this.state.loading,tip:"\u52a0\u8f7d\u4e2d..."},r.a.createElement(_e.a.Item,null,e("username",{rules:[{required:!0,whitespace:!0,message:"\u7528\u6237\u540d\u5fc5\u987b\u8f93\u5165"},{min:4,message:"\u7528\u6237\u540d\u81f3\u5c114\u4f4d"},{max:12,message:"\u7528\u6237\u540d\u6700\u591a12\u4f4d"},{pattern:/^[a-zA-Z0-9_]+$/,message:"\u7528\u6237\u540d\u5fc5\u987b\u662f\u82f1\u6587\u3001\u6570\u5b57\u6216\u4e0b\u5212\u7ebf\u7ec4\u6210"}],initialValue:"admin"})(r.a.createElement(He.a,{prefix:r.a.createElement(Z.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),r.a.createElement(_e.a.Item,null,e("password",{rules:[{validator:this.validatePwd}],initialValue:"123456"})(r.a.createElement(He.a,{prefix:r.a.createElement(Z.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement(_e.a.Item,null,r.a.createElement(me.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55")),r.a.createElement(_e.a.Item,null,r.a.createElement("span",null,"\u8d26\u53f7 : admin \u5bc6\u7801 : \u968f\u4fbf\u586b"),r.a.createElement("br",null),r.a.createElement("span",null,"\u8d26\u53f7 : guest \u5bc6\u7801 : \u968f\u4fbf\u586b"))))))}}]),n}(a.Component)),ze=_e.a.create()(Me),Re=Object(p.b)((function(e){return e.user}),{login:h.c,getUserInfo:h.b})(ze),De=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.role,a=e.getUserInfo;return r.a.createElement(d.a,null,r.a.createElement(b,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",component:Re}),r.a.createElement(m.b,{path:"/",render:function(){return t?n?r.a.createElement(Te,null):void a(t).then((function(){return r.a.createElement(Te,null)})):r.a.createElement(m.a,{to:"/login"})}}))))}}]),n}(r.a.Component),Fe=Object(p.b)((function(e){return e.user}),{getUserInfo:h.b})(De),Ge=n(80),Je=(n(449),n(450),n(26)),Ke=n.n(Je),Ve={admin:"admin-token",guest:"guest-token"},Be=function(e){var t=JSON.parse(e.body).username,n=Ve[t];return n?{status:0,token:n}:{status:1,message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}},qe=function(e){return{status:0,data:"success"}},We={"admin-token":{role:"admin",name:"\u96be\u51c9\u70ed\u8840",avatar:"https://s1.ax1x.com/2020/04/28/J5hUaT.jpg"},"guest-token":{role:"guest",name:"\u6e38\u5ba2",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}},Xe=function(e){var t=e.body,n=We[t];return n?{status:0,userInfo:n}:{status:1,message:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25"}},Ze=[],$e=0;$e<20;$e++)Ze.push(Ke.a.mock({key:"@increment",order_no:"@guid()",price:"@float(1000, 15000, 0, 2)","tag|1":["success","pending"]}));for(var Ye=function(e){return{code:2e4,data:{items:Ze}}},Qe=[],et=0;et<20;et++)Qe.push(Ke.a.mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var tt=function(e){return{code:2e4,data:{items:Qe}}},nt=[],at=0;at<100;at++)nt.push(Ke.a.mock({id:at,title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)","star|1-3":"\u2605","status|1":["published","draft"],date:"@datetime"}));var rt=function(e){var t=JSON.parse(e.body),n=t.pageNumber,a=t.pageSize,r=t.title,o=t.status,l=t.star,c=(n-1)*a,i=n*a,u=nt.filter((function(e){return(!l||e.star.length===l)&&((!o||e.status===o)&&!(r&&e.title.indexOf(r)<0))})),s=u.slice(c,i);return{code:2e4,data:{total:u.length,items:s}}},ot=function(e){var t=JSON.parse(e.body).id,n=nt.filter((function(e){return e.id===t})),a=nt.indexOf(n[0]);return nt.splice(a,1),{code:2e4}},lt=function(e){var t=JSON.parse(e.body),n=t.id,a=nt.filter((function(e){return e.id===n})),r=nt.indexOf(a[0]);return nt.splice(r,1,t),{code:2e4}};Ke.a.mock(/\/login/,"post",Be),Ke.a.mock(/\/logout/,"post",qe),Ke.a.mock(/\/userInfo/,"post",Xe),Ke.a.mock(/\/transaction\/list/,"get",Ye),Ke.a.mock(/\/excel\/list/,"get",tt),Ke.a.mock(/\/table\/list/,"post",rt),Ke.a.mock(/\/table\/delete/,"post",ot),Ke.a.mock(/\/table\/edit/,"post",lt);Ke.a;l.a.render(r.a.createElement(p.a,{store:Ge.a},r.a.createElement(Fe,null)),document.getElementById("root"))},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n(126),r=n.n(a);function o(){return r.a.get("Token")}function l(e){return r.a.set("Token",e)}function c(){return r.a.remove("Token")}},80:function(e,t,n){"use strict";var a=n(68),r=n(210),o=n(15),l=n(22),c=n(69),i={name:"",role:"",avatar:"",token:Object(c.a)()};var u={sidebarCollapsed:!1,settingPanelVisible:!1};var s=n(118),d={showSettings:!0,sidebarLogo:!0,fixedHeader:!1};var m=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.f:return Object(o.a)(Object(o.a)({},e),{},{token:t.token});case l.e:return Object(o.a)(Object(o.a)({},e),{},{name:t.name,role:t.role,avatar:t.avatar});case l.d:return{};default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.b:return Object(o.a)(Object(o.a)({},e),{},{sidebarCollapsed:!e.sidebarCollapsed});case l.a:return Object(o.a)(Object(o.a)({},e),{},{settingPanelVisible:!e.settingPanelVisible});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.c:var n=t.key,a=t.value;return e.hasOwnProperty(n)?Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},n,a)):e;default:return e}}}),p=Object(a.d)(m,Object(a.a)(r.a));t.a=p},84:function(e,t,n){"use strict";n(169);var a=n(117),r=n(209),o=n.n(r),l=n(80),c=n(69),i=n(24),u=o.a.create({baseURL:""});u.interceptors.request.use((function(e){return l.a.getState().user.token&&(e.headers.Authorization=Object(c.a)()),e}),(function(e){console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return console.log("err"+e),403===e.response.status&&a.a.confirm({title:"\u786e\u5b9a\u767b\u51fa?",content:"\u7531\u4e8e\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\uff0c\u60a8\u5df2\u88ab\u767b\u51fa\uff0c\u53ef\u4ee5\u53d6\u6d88\u7ee7\u7eed\u7559\u5728\u8be5\u9875\u9762\uff0c\u6216\u8005\u91cd\u65b0\u767b\u5f55",okText:"\u91cd\u65b0\u767b\u5f55",cancelText:"\u53d6\u6d88",onOk:function(){var e=l.a.getState().user.token;l.a.dispatch(Object(i.d)(e))},onCancel:function(){console.log("Cancel")}}),Promise.reject(e)})),t.a=u}},[[250,27,28]]]);