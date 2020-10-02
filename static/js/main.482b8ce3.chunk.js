(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],[,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(13),n(1)),i=n.n(s),u=n(3),l=n(2),f=(n(15),n(6),function(e){var t=e.count,n=e.name;return r.a.createElement("div",{className:"CounterTab"},r.a.createElement("p",null,t),r.a.createElement("p",null,n))}),m=function(e){var t=e.player1,n=e.player2;return r.a.createElement("div",{className:"Scoreboard"},r.a.createElement(f,{count:t,name:"Player 1"}),r.a.createElement(f,{count:n,name:"Player 2"}))},p=(n(4),function(e){var t;return t="assets/"+(t=!0===e.isKill?"Hit":"Miss")+"Small.png",r.a.createElement("div",{className:"Indicator"},r.a.createElement("img",{src:t,alt:""}))}),h=function(e){var t=e.i,n=e.name,c=e.count,o=e.kill,s=e.changeKill,i="assets/"+n+"Shape.png",u=Object(a.useState)(b()),f=Object(l.a)(u,2),m=f[0],h=f[1];function b(){for(var e=[],t=0;t<o;t++)e.push(r.a.createElement(p,{isKill:!0}));for(var n=o;n<c;n++)e.push(r.a.createElement(p,{isKill:!1}));return e}return Object(a.useEffect)((function(){h(b())}),[o]),r.a.createElement("div",{className:"Ship"},r.a.createElement("img",{src:i,alt:n}),r.a.createElement("p",null,c),m,r.a.createElement("button",{onClick:function(){s(t,1)}},"+"),r.a.createElement("p",null,o))},b=["Aircraft","Battleship","Cruiser","Submarine","Carrier"],v=function(){var e=Object(a.useState)([0,0,0,0,0]),t=Object(l.a)(e,2),n=t[0],c=t[1];function o(e,t){var a=n;a[e]=(a[e]+1)%(e+2),c(a)}return r.a.createElement("div",{className:"Shipsboard"},function(){for(var e=[],t=0;t<5;t++)e.push(r.a.createElement(h,{key:[t,n[t]].toString(),i:t,name:b[t],count:t+1,kill:n[t],changeKill:o}));return e}())},d=r.a.memo((function(e){var t=e.i,n=e.isClear,c=e.element,o=e.gameMode,s=e.setCell,i=e.shot;function u(e){var a;return console.log("el : ",c),0===o?!1===e?(a=function(e,t){return!1===e&&!1===t?"Ship":"Empty"}(e,n),s(t)):a="Empty":1===o&&(!1===e?(i(t),a=0===c?"Miss":1===c?"Hit":"Empty",console.log("f 0: ",a)):(a=0===c?"Empty":1===c?"Miss":"Hit",console.log("f 1: ",a))),a="assets/"+a+".png",r.a.createElement("img",{src:a,alt:"",width:"100%",height:"100%"})}Object(a.useEffect)((function(){console.log("useEffect"),h(u(!0))}),[c]);var f=Object(a.useState)(u(!0)),m=Object(l.a)(f,2),p=m[0],h=m[1];return r.a.createElement("div",{className:"Cell",onClick:function(){return h(u(!1))}},p)})),E=r.a.memo((function(e){var t=e.i,n=e.isClear,c=e.gameMode,o=e.row,s=e.shot,l=Object(a.useState)(o);function f(e){Object(u.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s(t,e);case 2:case"end":return n.stop()}}),n)})))()}function m(e){o[e]=!1===n?1:0}o=l[0];var p=function(){for(var e=[],t=0;t<10;t++)e.push(r.a.createElement(d,{i:t,isClear:n,gameMode:c,setCell:m,shot:f,element:o[t]}));return e}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CellRow"},p))})),j=(n(16),function(e){var t=e.isClear,n=e.gameMode,a=e.field,c=e.shot;var o=function(){for(var e=[],o=0;o<10;o++)e.push(r.a.createElement(E,{i:o,isClear:t,gameMode:n,row:a[o],shot:c}));return e}();return r.a.createElement("div",{className:"Battlefield"},o)}),y=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ships",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ships:t})});case 2:if(0!==(a=e.sent).status){e.next=7;break}n("Server unavailable"),e.next=12;break;case 7:if(!a.ok){e.next=12;break}return e.next=10,a.json();case 10:r=e.sent,n(r.id);case 12:console.log("ships: ",t);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r){var c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="/shot/?id="+t+"&x="+n+"&y="+a,e.next=3,fetch(c,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:if(!(o=e.sent).ok){e.next=12;break}return e.next=7,o.json();case 7:return s=e.sent,e.next=10,r(s);case 10:e.next=13;break;case 12:o.status;case 13:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),g=function(){for(var e=[],t=0;t<10;t++){for(var n=[],a=0;a<10;a++)n.push(0);e.push(n)}return e},k=function(e){if(1===e)return{display:"none"}},w=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r){var c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return(s=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.type;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},o=function(e){return s.apply(this,arguments)},c="none",e.next=5,O(t,n,a,o);case 5:r(n,a,"miss"===c?1:2);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),s=Object(l.a)(o,2),f=s[0],p=(s[1],Object(a.useState)(0)),h=Object(l.a)(p,2),b=h[0],d=h[1],E=Object(a.useState)(g()),O=Object(l.a)(E,2),x=O[0],S=O[1],C=Object(a.useState)(!1),N=Object(l.a)(C,2),M=N[0],K=N[1],T=Object(a.useState)("0"),B=Object(l.a)(T,2),H=B[0],P=B[1],G=Object(a.useState)(0),J=Object(l.a)(G,2),A=J[0],F=J[1],I=Object(a.useState)(0),W=Object(l.a)(I,2),D=W[0],R=W[1];function Y(e,t,n){var a=x;a[e][t]=n,S(a),console.log(x)}var $=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x,e.next=3,y(t,P);case 3:S(g()),d(1),K(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(H,t,n,Y);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function z(e){Y(A,D,e),F((A+1)%10),R((D+1)%10),c(n+1)}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"inline-board"},r.a.createElement(m,{player1:n,player2:f}),r.a.createElement(v,null),r.a.createElement("button",{onClick:$,style:k(b)},"Go battle"),r.a.createElement("button",{onClick:function(){return K(!M)},style:k(b)},"Fix ships"),r.a.createElement("i",{style:k(b)},!0===M?"Enabled":"Disabled"),r.a.createElement("p",{style:k(b)},"You can fix ships if place them wrong"),r.a.createElement("p",{style:k((b+1)%2),onClick:function(){return d(0)}},"Good game! id=",H),r.a.createElement("button",{style:k((b+1)%2),onClick:function(){return z(1)}},"Miss"),r.a.createElement("button",{style:k((b+1)%2),onClick:function(){return z(2)}},"Hit"),r.a.createElement("button",{style:k((b+1)%2),onClick:function(){console.log(x)}},"Print")),r.a.createElement("div",{className:"inline-field"},r.a.createElement(j,{key:x.toString(),isClear:M,gameMode:b,field:x,shot:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.482b8ce3.chunk.js.map