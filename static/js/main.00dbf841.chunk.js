(this.webpackJsonpnumerology=this.webpackJsonpnumerology||[]).push([[0],{66:function(e,a,t){e.exports=t(76)},71:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=(t(71),t(13)),i=function(e){for(var a=null;e>9;){a=e,e=null;for(var t=0;t<a.toString().length;t++)e+=+a.toString()[t]}return e},m=function(e){for(var a=0,t=0;t<e.length;t++)switch(e[t]){case"a":a+=1;break;case"b":a+=2;break;case"c":case"\xe7":a+=3;break;case"d":a+=4;break;case"e":a+=5;break;case"f":a+=6;break;case"g":a+=7;break;case"h":a+=8;break;case"i":a+=9;break;case"j":a+=1;break;case"k":a+=2;break;case"l":a+=3;break;case"m":a+=4;break;case"n":case"\xf1":a+=5;break;case"o":a+=6;break;case"p":a+=7;break;case"q":a+=8;break;case"r":a+=9;break;case"s":a+=1;break;case"t":a+=2;break;case"u":a+=3;break;case"v":a+=4;break;case"w":a+=5;break;case"x":a+=6;break;case"y":a+=7;break;case"z":a+=8}return a},s=t(104),u=t(107),d=t(108),b=function(e){return r.a.createElement(s.a,{item:!0,xs:e.grid},r.a.createElement("div",{className:"Casa"},r.a.createElement(u.a,{variant:"body2",color:"initial"},e.casa),r.a.createElement(d.a,{in:!0},r.a.createElement(u.a,{className:"trans",variant:"h1",color:"initial"},e.numero))))},g=function(e){return r.a.createElement(d.a,{in:!0},r.a.createElement("div",{onClick:e.click,className:"Letra",sytle:{display:"inline-block"}},r.a.createElement(u.a,{id:"nletra",variant:"body2",color:"initial"},e.casa),r.a.createElement(u.a,{variant:"h5",color:"initial"},e.numero)))},E=t(33),h=t(56),f=r.a.createContext({user:{},update:function(){}}),k=function(e){var a=Object(n.useState)({name:"",day:"",month:"",year:"",type:"light"}),t=Object(h.a)(a,2),c=t[0],l=t[1];return r.a.createElement(f.Provider,{value:{user:c,update:function(e){l(e)}}},e.children)},p=t(114),y=t(109),v=Object(y.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(2),width:"25ch"}}}})),C=function(){var e=v(),a=Object(n.useContext)(f).user,t=Object(n.useContext)(f).update,c=function(e){var a=e.target,n=a.name,r=a.value;t((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(E.a)({},n,r))}))};return r.a.createElement("div",null,r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(p.a,{id:"name",label:"Nombre",type:"text",onChange:c,value:a.name,name:"name"}),r.a.createElement(p.a,{id:"standard-number",label:"D\xeda",type:"number",onChange:c,value:a.day,name:"day"}),r.a.createElement(p.a,{id:"standard-number",label:"Mes",type:"number",onChange:c,value:a.month,name:"month"}),r.a.createElement(p.a,{id:"standard-number",label:"A\xf1o",type:"number",onChange:c,value:a.year,name:"year"})))},j=t(110),x=t(115),O=function(e,a,t,n,r){return r.filter((function(r){return r===e||r===a||r===t||r===n}))},N=i,w=function(e){for(var a=[],t=0;t<e.length;t++)a.push(e[t]);return a},S=function(e){return e.filter((function(e){return"a"===e||"e"===e||"i"===e||"o"===e||"u"===e}))},M=function(e){return e.filter((function(e){return"a"!==e&&"e"!==e&&"i"!==e&&"o"!==e&&"u"!==e&&" "!==e}))},z=function(e){var a=0;switch(e){case 44:a="44/8";break;case 33:a="33/6";break;case 26:a="26/8";break;case 22:a="22/4";break;case 20:a="20/2";break;case 19:a="19/1";break;case 16:a="16/7";break;case 15:a="15/6";break;case 14:a="14/5";break;case 13:a="13/4";break;case 12:a="12/3";break;case 11:a="11/2";break;case 10:a="10/1";break;default:for(var t=null;e>9;){t=e,e=null;for(var n=0;n<t.toString().length;n++)e+=+t.toString()[n]}a=e}return a},q=function(e){var a=Object(n.useContext)(f).update,t=Object(n.useContext)(f).user,c=t.name,l=t.day,d=t.month,E=t.year,h=l+d+N(E),k=N(h),p=w(c.toLowerCase()),y=w(c),v=function(e){y.splice(e,e+1),a((function(e){return Object(o.a)(Object(o.a)({},e),{},{name:y.join("")})}))},q=y.map((function(e,a){return" "===e?r.a.createElement(g,{key:a,numero:"   ",click:function(){return v(a)}}):r.a.createElement(g,{key:a,numero:e,casa:m(e.toLowerCase()),click:function(){return v(a)}})}));return r.a.createElement("div",{className:"bg"},r.a.createElement(j.a,{maxWidth:"lg"},r.a.createElement(C,null),q,r.a.createElement(x.a,{mt:5}),r.a.createElement(s.a,{container:!0,spacing:5},r.a.createElement(s.a,{item:!0,container:!0,lg:6},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(u.a,{variant:"h4"},"Inclusi\xf3n")),r.a.createElement(b,{grid:"4",casa:"Casa 1",numero:O("a","j","s",null,p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 2",numero:O("b","k","t",null,p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 3",numero:O("c","l","u","\xe7",p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 4",numero:O("d","m","v",null,p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 5",numero:O("e","n","w","\xf1",p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 6",numero:O("f","o","x",null,p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 7",numero:O("g","p","y",null,p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 8",numero:O("h","q","z",null,p).length}),r.a.createElement(b,{grid:"4",casa:"Casa 9",numero:O("i","r",null,null,p).length})),r.a.createElement(s.a,{container:!0,item:!0,lg:6},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(u.a,{variant:"h4"},"N\xfameros")),r.a.createElement(b,{grid:6,casa:"Camino de Vida",numero:z(+k)}),r.a.createElement(b,{grid:6,casa:"N\xfamero de Fuerza",numero:z(+N(l+d))}),r.a.createElement(b,{grid:4,casa:"N\xfamero de Alma",numero:z(N(m(S(p))))}),r.a.createElement(b,{grid:4,casa:"N\xfamero de Personalidad",numero:i(m(M(p)))}),r.a.createElement(b,{grid:4,casa:"N\xfamero de Expresi\xf3n",numero:i(m(M(p)+S(p)))}),r.a.createElement(b,{grid:4,casa:"N\xfamero de la Madre",numero:N(+l)}),r.a.createElement(b,{grid:4,casa:"N\xfamero del Ni\xf1o",numero:N(+d)}),r.a.createElement(b,{grid:4,casa:"N\xfamero del Padre",numero:N(+E)})))))},B=t(111),F=t(112),P=t(116),T=t(53),W=t.n(T),A=t(52),L=t.n(A),I=Object(y.a)((function(){return{navbar:{flexGrow:1,textAlign:"left"}}})),J=function(){var e=I(),a=Object(n.useContext)(f).update,t=Object(n.useContext)(f).user.type;return r.a.createElement("div",null,r.a.createElement(B.a,{position:"static",color:"primary"},r.a.createElement(F.a,null,r.a.createElement(u.a,{className:e.navbar,variant:"h6"},"Num+"),r.a.createElement(P.a,{onClick:function(){a((function(e){return Object(o.a)(Object(o.a)({},e),{},{type:"light"===t?"dark":"light"})}))}},r.a.createElement(L.a,null)),r.a.createElement(W.a,null))))},R=t(55),V=t(41),D=t.n(V),G=Object(R.a)({palette:{primary:{main:"#739574"},secondary:{main:D.a[900]},type:"light"},typography:{fontFamily:"MuseoModerno",body2:{fontSize:"0.6rem"}},shape:{borderRadius:"10px"}}),U=Object(R.a)({palette:{primary:{main:"#739574"},secondary:{main:D.a[900]},type:"dark"},typography:{fontFamily:"MuseoModerno",body2:{fontSize:"0.6rem"}},shape:{borderRadius:"10px"}}),$=t(113),H=t(54),K=t.n(H),Q=Object(y.a)({helloThere:{fontStyle:"normal"}});var X=function(){var e=Q(),a=Object(n.useContext)(f).user.type;return r.a.createElement("div",{className:"light"===a?"bglight":"bgdark"},r.a.createElement($.a,{theme:"light"===a?G:U},r.a.createElement(s.a,{container:!0,direction:"column",spacing:1},r.a.createElement(J,null),r.a.createElement(s.a,{item:!0}),r.a.createElement(s.a,{item:!0},r.a.createElement(j.a,{maxWidth:"md"},r.a.createElement(x.a,{my:8},r.a.createElement(u.a,{gutterBottom:!0,className:e.helloThere,color:"primary",variant:"h3"},"Numerolog\xeda"),r.a.createElement(K.a,{color:"primary",style:{fontSize:"8rem"}}),r.a.createElement(u.a,{gutterBottom:!0,color:"inherit",variant:"subtitle1"},"Pit\xe1goras afirm\xf3 aquello de \xabTodo es n\xfamero\xbb, donde por n\xfamero se refer\xeda a los n\xfameros naturales (1, 2, 3\u2026), dando a entender que todo el Universo, desde la m\xfasica hasta el movimiento de los planetas, se pod\xeda explicar con dichos n\xfameros y las relaciones entre ellos."))),r.a.createElement(q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.00dbf841.chunk.js.map