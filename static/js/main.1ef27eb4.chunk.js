(window.webpackJsonplauncher=window.webpackJsonplauncher||[]).push([[0],{10:function(e,t,n){e.exports={welcome:"style_welcome__2SbjV",welcome_logo:"style_welcome_logo__2n_br",welcome_text:"style_welcome_text__2zhyI",welcome_text_value:"style_welcome_text_value__2-ay3",welcome_text_line:"style_welcome_text_line__2GVLS"}},13:function(e,t,n){e.exports={registrationContent:"style_registrationContent__1xvuW",registrationContent_form:"style_registrationContent_form__1UKkS",backButton:"style_backButton__fY_Qj",backButton_icon:"style_backButton_icon__hAJ8V",backButton_text:"style_backButton_text__2YrVF"}},15:function(e,t,n){e.exports={header:"style_header__OMpc0",header_back:"style_header_back__3kvDu",header_back_icon:"style_header_back_icon__FQJmi",header_back_text:"style_header_back_text__3PWnO",header_right:"style_header_right__8ufBv",header_right_close:"style_header_right_close__Y1G4C",header_right_hide:"style_header_right_hide__nac9m"}},16:function(e,t,n){e.exports={radioButton:"style_radioButton__2Fc5S",radioButton_circle:"style_radioButton_circle__dIDSy",radioButton_circle_checked:"style_radioButton_circle_checked__stn5-"}},17:function(e,t,n){e.exports={checkBox:"style_checkBox__3H6Uf",checkBox_square:"style_checkBox_square__3yD37",checkBox_square_checked:"style_checkBox_square_checked__1_AUX"}},19:function(e,t,n){e.exports={button:"style_button__1HQff",button_white:"style_button_white__3xCVX"}},20:function(e,t,n){e.exports={main:"style_main__2rq8m",buttons:"style_buttons__20n9r"}},22:function(e,t,n){e.exports={loginContent:"style_loginContent__3QkuD",loginContent_servers:"style_loginContent_servers__StBcc",loginContent_form:"style_loginContent_form__uxtyC",loginContent_welcome:"style_loginContent_welcome__1Gfi5",loginContent_welcome_logo:"style_loginContent_welcome_logo__3NYgC",loginContent_welcome_text:"style_loginContent_welcome_text__1_u53",loginContent_welcome_text_value:"style_loginContent_welcome_text_value__110L3",loginContent_welcome_text_line:"style_loginContent_welcome_text_line__2DOVT"}},39:function(e,t,n){e.exports={input:"style_input__178bl"}},41:function(e,t,n){e.exports={app:"style_app__2q9UC"}},45:function(e,t,n){e.exports=n(80)},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),l=n(4),i=n.n(l),s=n(35),u=n(36),_=n(42),m=n(37),d=n(43),f=n(1),v=n.n(f),p=n(14),h=n(3),g=n(38),b=n(7),y=n(12),E=n.n(y),w={set:function(e,t){return localStorage.setItem(t,JSON.stringify(e))},get:function(e){return JSON.parse(localStorage.getItem(e))}},x={login:function(e,t){var n;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=w.get("authUrl"),a.next=3,v.a.awrap(E.a.post("".concat(n,"users/login"),{email:e,password:t}).then((function(e){return e.data})).catch((function(e){return alert(e)})));case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}))},registration:function(e,t,n){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=w.get("authUrl"),r.next=3,v.a.awrap(E.a.post("".concat(a,"users"),{email:e,password:t,name:n}).then((function(e){return alert("Ok!")})).catch((function(e){var t,n;return alert(null!==(t=null===e||void 0===e?void 0:null===(n=e.response)||void 0===n?void 0:n.data)&&void 0!==t?t:"Something wrong.")})));case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}))},getSession:function(e,t,n){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=w.get("authUrl"),r.next=3,v.a.awrap(E.a.post("".concat(a,"users/").concat(e,"/play/").concat(t),{},{headers:{Authorization:n}}).then((function(e){return e.data})).catch((function(e){return console.log(e)})));case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}))}},k={getServers:function(e,t){var n;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=w.get("authUrl"),a.next=3,v.a.awrap(E.a.get("".concat(n,"servers"),{email:e,password:t}).then((function(e){return e.data})).catch((function(e){return console.log(e)})));case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}))}},O=n(15),C=n.n(O),j=window.require("electron").remote.app,S=function(e){var t=e.Left,n=void 0===t?function(){return o.a.createElement("div",null)}:t,a=e.Center,r=void 0===a?function(){return o.a.createElement("div",null)}:a,c=e.Right,l=void 0===c?function(){return o.a.createElement("div",null)}:c;return o.a.createElement("div",{className:C.a.header},o.a.createElement(n,null),o.a.createElement(r,null),o.a.createElement("div",{className:C.a.header_right},o.a.createElement(l,null),o.a.createElement("div",{className:C.a.header_right_hide,onClick:function(){}}),o.a.createElement("div",{className:C.a.header_right_close,onClick:function(){return j.exit()}})))},N=n(39),B=n.n(N),V=function(e){var t=e.placeholder,n=void 0===t?"placeholder":t,a=e.value,r=e.setValue,c=e.label,l=void 0===c?"":c,i=e.type,s=void 0===i?"text":i;return o.a.createElement(o.a.Fragment,null,!!l&&o.a.createElement("div",{style:{color:"white"}},l),o.a.createElement("input",{value:a,onChange:function(e){return r(e.target.value)},className:B.a.input,placeholder:n,type:s}))},q=n(9),P=n.n(q),R=function(e){var t=e.ip,n=e.maxPlayers,a=e.name,r=e.online,c=e.port,l=e.isSelected,i=void 0!==l&&l,s=e.chooseServer,u=e.header;return o.a.createElement("div",{className:"".concat(P.a.table_row," ").concat(i?P.a.selected:""),onClick:function(){return!u&&s()}},o.a.createElement("div",{className:P.a.table_row_ip},t,":",c),o.a.createElement("div",{className:P.a.table_row_name},a),o.a.createElement("div",{className:P.a.table_row_online},r,n?"/":"",n))},F=function(e){var t=e.servers,n=void 0===t?[]:t,a=e.chosenServer,r=e.chooseServer;return o.a.createElement("div",{className:P.a.table},o.a.createElement(R,{name:"\u0418\u043c\u044f",ip:"ip",online:"\u041e\u043d\u043b\u0430\u0439\u043d",header:!0}),n.map((function(e,t){return o.a.createElement(R,Object.assign({key:t},e,{isSelected:a["server-ip"]===e.ip,chooseServer:function(){return r(e)}}))})))},U=n(19),A=n.n(U),D=function(e){var t=e.name,n=e.type,a=void 0===n?"white":n,r=e.onClick;return o.a.createElement("div",{className:"".concat(A.a["button_".concat(a)]," ").concat(A.a.button),onClick:function(){return r()}},t)},J=(n(16),n(17)),L=n.n(J),I=function(e){var t=e.onClick,n=e.isChecked,a=void 0!==n&&n,r=e.label;return o.a.createElement("div",{className:L.a.checkBox,onClick:function(){return t()}},o.a.createElement("div",{className:L.a.checkBox_square},a&&o.a.createElement("div",{className:L.a.checkBox_square_checked})),r&&o.a.createElement("div",null,r))},M=n(10),Q=n.n(M),Y=function(e){var t=e.text,n=void 0===t?"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c":t;return o.a.createElement("div",{className:Q.a.welcome},o.a.createElement("div",{className:Q.a.welcome_logo}),o.a.createElement("div",{className:Q.a.welcome_text},o.a.createElement("div",{className:Q.a.welcome_text_line}),o.a.createElement("div",{className:Q.a.welcome_text_value},n," "),o.a.createElement("div",{className:Q.a.welcome_text_line})))},z=n(20),G=n.n(z),T=window.require("fs"),W=window.require("electron").remote.shell,X=function(e){var t;Object(g.a)(e);var n=Object(c.useState)([]),a=Object(h.a)(n,2),r=a[0],l=a[1],i=Object(c.useState)({}),s=Object(h.a)(i,2),u=s[0],_=s[1],m=Object(c.useState)({"server-ip":"","server-port":0,"show-me":!1,"enable-console":!1,gameData:{session:""}}),d=Object(h.a)(m,2),f=d[0],y=d[1],E=Object(c.useState)(null!==(t=w.get("gamePath"))&&void 0!==t?t:""),O=Object(h.a)(E,2),C=O[0],j=O[1];Object(c.useEffect)((function(){w.set(C,"gamePath")}),[C]),Object(c.useEffect)((function(){k.getServers().then(l),_(w.get("connection"))}),[]);var N=function(){if(C){var e="".concat(C,"/Data/Platform/Plugins/skymp5-client-settings.txt");try{T.existsSync(e)?(T.unlinkSync(e),T.appendFile(e,JSON.stringify(f),(function(e){return console.log(e)}))):T.appendFile(e,JSON.stringify(f),(function(e){return console.log(e)})),f["server-ip"]||b.NotificationManager.warning("\u0412\u044b\u0431\u0435\u0440\u0438 \u0441\u0435\u0440\u0432\u0435\u0440."),(null===u||void 0===u?void 0:u.id)&&f["server-ip"]&&function(){try{C?W.openItem("".concat(C,"/skse64_loader.exe")):alert("gamePath ")}catch(e){alert(e)}}()}catch(t){alert(t)}}else b.NotificationManager.warning("\u041d\u0430\u0434\u043e \u043f\u0443\u0442\u044c \u0438\u0433\u0440\u044b")};return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null),o.a.createElement("div",{className:G.a.main},o.a.createElement(F,{servers:r,chosenServer:f,chooseServer:function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u&&x.getSession(u.id,"".concat(e.ip,":").concat(e.port),u.token).then((function(t){console.log(t),y((function(n){return Object(p.a)({},n,{"server-ip":e.ip,"server-port":e.port,gameData:{session:t.session}})}))}));case 1:case"end":return t.stop()}}))}}),o.a.createElement(V,{value:C,setValue:j,placeholder:"\u041f\u0443\u0442\u044c \u0438\u0433\u0440\u044b (//)"}),o.a.createElement("div",{className:G.a.buttons},o.a.createElement("div",null,o.a.createElement(D,{name:"\u0418\u0433\u0440\u0430\u0442\u044c",onClick:function(){N()}})),o.a.createElement("div",null,o.a.createElement(D,{name:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",onClick:function(){k.getServers().then(l),b.NotificationManager.success("\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e")}}))),o.a.createElement(b.NotificationContainer,null)))},H=n(5),K=n(8),Z=n(11),$=Object(K.b)("accountReducer/login",(function(e,t){var n,a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.rejectWithValue,r.prev=1,r.next=4,v.a.awrap(x.login(e.email,e.password));case 4:return a=r.sent,e.isSaveAccount&&w.set(a,"connection"),r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(1),r.abrupt("return",n(r.t0));case 12:case"end":return r.stop()}}),null,null,[[1,9]])})),ee={user:null!==(a=w.get("connection"))&&void 0!==a?a:null,loading:"",error:""},te=Object(K.c)({name:"accountReducer",initialState:ee,reducers:{logout:function(e,t){w.set(null,"connection"),e.user=null}},extraReducers:(r={},Object(Z.a)(r,$.pending.type,(function(e){e.loading="pending",e.error=""})),Object(Z.a)(r,$.fulfilled.type,(function(e,t){var n=t.payload;e.loading="idle",e.error="",e.user=n})),Object(Z.a)(r,$.rejected.type,(function(e,t){e.loading="idle",e.error=t.payload})),r)}),ne=Object(K.c)({name:"screenReducer",initialState:{screen:"Preloader",loading:"",error:""},reducers:{changeScreen:function(e,t){e.screen=t.payload}}}),ae=Object(K.a)({reducer:{accountReducer:te.reducer,screenReducer:ne.reducer}}),re=Object(p.a)({},te.actions,{asyncActions:{login:$}}),ce=Object(p.a)({},ne.actions),oe=ae,le=n(22),ie=n.n(le),se=function(){var e=Object(c.useState)("testEmain@email.com"),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("1q2w3e4r5t"),l=Object(h.a)(r,2),i=l[0],s=l[1],u=Object(c.useState)(!1),_=Object(h.a)(u,2),m=_[0],d=_[1],f=Object(H.b)(),v=Object(c.useCallback)((function(e,t){return f(re.asyncActions.login({email:e,password:t,isSaveAccount:m}))})),p=Object(c.useCallback)((function(e){return f(ce.changeScreen(e))}));return Object(c.useEffect)((function(){return w.set("https://skymp-auth.herokuapp.com/api/","authUrl")}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null),o.a.createElement("div",{className:ie.a.loginContent},o.a.createElement(Y,null),o.a.createElement("div",{className:ie.a.loginContent_form},o.a.createElement(V,{value:n,setValue:a,type:"text",placeholder:"\u041f\u043e\u0447\u0442\u0430"}),o.a.createElement(V,{value:i,setValue:s,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"}),o.a.createElement(I,{isChecked:m,onClick:function(){return d((function(e){return!e}))},label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),o.a.createElement(D,{name:"\u0412\u043e\u0439\u0442\u0438",onClick:function(){return v(n,i)}}),o.a.createElement(D,{name:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onClick:function(){return p("Registration")}})),o.a.createElement(b.NotificationContainer,null)))},ue=n(13),_e=n.n(ue),me=function(e){var t=e.text,n=e.onClick,a=void 0===n?function(){}:n;return o.a.createElement("div",{className:_e.a.backButton,onClick:function(){return a()}},o.a.createElement("div",{className:_e.a.backButton_icon}),o.a.createElement("div",{className:_e.a.backButton_text},t))},de=function(){var e=Object(c.useState)("testEmain@email.com"),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("1q2w3e4r5t"),l=Object(h.a)(r,2),i=l[0],s=l[1],u=Object(c.useState)("TestName1233"),_=Object(h.a)(u,2),m=_[0],d=_[1],f=Object(H.b)(),v=Object(c.useCallback)((function(e){return f(ce.changeScreen(e))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{Left:function(){return o.a.createElement(me,{text:"\u041d\u0430\u0437\u0430\u0434",onClick:function(){return v("Login")}})}}),o.a.createElement("div",{className:_e.a.registrationContent},o.a.createElement(Y,{text:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),o.a.createElement("div",{className:_e.a.registrationContent_form},o.a.createElement(V,{value:m,setValue:d,type:"text",placeholder:"\u0418\u043c\u044f"}),o.a.createElement(V,{value:n,setValue:a,type:"text",placeholder:"\u041f\u043e\u0447\u0442\u0430"}),o.a.createElement(V,{value:i,setValue:s,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"}),o.a.createElement(D,{name:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onClick:function(){x.registration(n,i,m)}}))))},fe=n(41),ve=n.n(fe),pe=(window.require("electron").remote.app,{Preloader:be,Login:se,Registration:de,Main:X});function he(e){for(var t=e.component,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return t?o.a.createElement(t,a):o.a.createElement(o.a.Fragment,null)}var ge=function(){var e=Object(H.c)((function(e){return e.accountReducer})),t=e.user,n=e.loading,a=Object(H.c)((function(e){return e.screenReducer})).screen,r=Object(H.b)(),l=Object(c.useCallback)((function(e){return r(ce.changeScreen(e))}));return Object(c.useEffect)((function(){t&&l("Main"),!t&&l("Login")}),[t]),o.a.createElement("div",{className:ve.a.app},o.a.createElement(he,{component:pe["pending"===n?"Preloader":a]}))},be=function(e){return o.a.createElement("div",null," Preloader")},ye=function(e){function t(){return Object(s.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(ge,null)}}]),t}(c.Component);n(78),n(79);i.a.render(o.a.createElement(H.a,{store:oe},o.a.createElement(ye,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={table:"style_table__2TLCE",table_row:"style_table_row__3XQ9g",table_row_ip:"style_table_row_ip__vO0EC",table_row_name:"style_table_row_name__3V0z7",selected:"style_selected__1avxB"}}},[[45,1,2]]]);
//# sourceMappingURL=main.1ef27eb4.chunk.js.map