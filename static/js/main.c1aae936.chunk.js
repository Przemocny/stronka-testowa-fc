(window["webpackJsonpstronka-testowa"]=window["webpackJsonpstronka-testowa"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),c=t.n(i),s=(t(15),t(2)),r=t(3),m=t(5),o=t(4),u=t(6),d=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={menuIsOpen:!1},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state.menuIsOpen;return l.a.createElement("div",{className:"navbar-fixed"},a&&l.a.createElement("a",{onClick:function(t){e.setState({menuIsOpen:!a})}},l.a.createElement("div",{className:"gray-fixed-bg"})),l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper container"},l.a.createElement("a",{href:"#",className:"brand-logo"},"Nazwa firmy"),l.a.createElement("a",{href:"#",className:"sidenav-trigger",onClick:function(t){e.setState({menuIsOpen:!a})}},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"O nas")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Oferta")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Kontakt"))),l.a.createElement("ul",{className:"sidenav",style:a?{transform:"translateX(0%)"}:{}},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"O nas")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Oferta")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Kontakt"))))))}}]),a}(n.Component),E=(t(16),function(){return l.a.createElement("div",{className:"attention valign-wrapper"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s8 no-p"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title text-bold"},"Nasza firma oferuje najwy\u017cszej jako\u015bci produkty."),l.a.createElement("p",null,"Nie wierz nam na s\u0142owo - sprawd\u017a")),l.a.createElement("div",{className:"card-action"},l.a.createElement("a",{href:"#",className:"waves-effect waves-light btn-large light-green"},"Oferta")))),l.a.createElement("div",{className:"col s4"}))))}),p=(t(17),[{fullname:"Jan Kowalski",group:"IT",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",image:"https://picsum.photos/640/640"},{fullname:"Anna Nowakowska",group:"HR",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",image:"https://picsum.photos/640/640"},{fullname:"Janusz Kowalski",group:"CEO",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",image:"https://picsum.photos/640/640"},{fullname:"Adam Nawa\u0142ka",group:"Coach",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",image:"https://picsum.photos/640/640"}]),v=function(e){var a=e.isEven,t=e.specialist,n=t.fullname,i=t.description,c=t.image,s=t.group;return a?l.a.createElement("div",{className:"row team-item"},l.a.createElement("div",{className:"col s3"},l.a.createElement("img",{src:c})),l.a.createElement("div",{className:"col s9"},l.a.createElement("h4",null,n," [",s,"]"),l.a.createElement("h6",null,i))):l.a.createElement("div",{className:"row team-item"},l.a.createElement("div",{className:"col s9"},l.a.createElement("h4",null,n," [",s,"]"),l.a.createElement("h6",null,i)),l.a.createElement("div",{className:"col s3"},l.a.createElement("img",{src:c})))},f=function(){return l.a.createElement("div",{className:"team"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Nasi specjali\u015bci"),p.map(function(e,a){return l.a.createElement(v,{isEven:a%2==0,specialist:e,key:a})})))},g=(t(18),[{name:"Us\u0142uga 1",isNew:!0},{name:"Us\u0142uga 2",isNew:!1},{name:"Us\u0142uga 3",isNew:!1},{name:"Us\u0142uga 4",isNew:!1},{name:"Us\u0142uga 5",isNew:!1},{name:"Us\u0142uga 6",isNew:!1}]),h=function(e){var a=e.name,t=e.isNew;return l.a.createElement("div",{className:"col l4 m6 s12 offer-item"},l.a.createElement("div",{className:"offer-item-inner valign-wrapper"},l.a.createElement("div",null,l.a.createElement("h4",null,a),t&&l.a.createElement("h6",null,"NOWO\u015a\u0106"))))},N=function(){return l.a.createElement("div",{className:"offer"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Czym zajmuje si\u0119 nasza firma?"),l.a.createElement("div",{className:"row"},g.map(function(e,a){return l.a.createElement(h,Object.assign({},e,{key:a}))}))))},w=t(9),b=t(1),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={email:"",content:"",imBusy:!1,message:""},t.changeValue=t.changeValue.bind(Object(b.a)(t)),t.sendContactMessage=t.sendContactMessage.bind(Object(b.a)(t)),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"changeValue",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(w.a)({},t,n))}},{key:"sendContactMessage",value:function(){var e=this;console.log(this.state),this.setState({imBusy:!0}),setTimeout(function(){console.log(e.state),e.setState({imBusy:!1,email:"",content:"",message:"Dzi\u0119kujemy za informacje, odezwiemy si\u0119 nied\u0142ugo"})},2e3)}},{key:"render",value:function(){var e=this,a=this.state,t=a.email,n=a.content,i=a.imBusy,c=a.message;return!0===i?l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,"Prosz\u0119 czeka\u0107")):""!==c?l.a.createElement("div",{className:"container"},l.a.createElement("h4",{className:"green"},c)):l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("h4",null,"Zapraszamy do kontaktu"),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"email",type:"email",value:t,onChange:function(a){e.changeValue(a)}}),l.a.createElement("label",{htmlFor:"email"},"Wpisz email")),l.a.createElement("div",{className:"input-field"},l.a.createElement("textarea",{name:"content",value:n,className:"materialize-textarea",onChange:function(a){e.changeValue(a)}}),l.a.createElement("label",{htmlFor:"content"},"Tre\u015b\u0107 wiadomo\u015bci")),l.a.createElement("button",{className:"waves-effect waves-light btn-large",onClick:function(a){a.preventDefault(),e.sendContactMessage()}},"Wy\u015blij")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component);t(19);var O=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(d,null),l.a.createElement(E,null),l.a.createElement(f,null),l.a.createElement(N,null),l.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.c1aae936.chunk.js.map