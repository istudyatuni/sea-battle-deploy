(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],[,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=(a(13),a(3)),s=a.n(l),o=a(7),u=a(1),m=(a(15),a(5),function(e){var t=e.count,a=e.name;return r.a.createElement("div",{className:"CounterTab"},r.a.createElement("p",null,t),r.a.createElement("p",null,a))}),p=function(e){var t=e.player1,a=e.player2;return r.a.createElement("div",{className:"Scoreboard"},r.a.createElement(m,{count:t,name:"player 1"}),r.a.createElement(m,{count:a,name:"player 2"}))},f=(a(2),function(e){var t;return t="assets/"+(t=!0===e.isKill?"Hit":"Miss")+"Small.png",r.a.createElement("div",{className:"Indicator"},r.a.createElement("img",{src:t,alt:""}))}),h=function(e){var t=e.i,a=e.name,c=e.count,i=e.kill,l=e.changeKill,s="assets/"+a+"Shape.png",o=[];function u(){for(var e=[],t=0;t<i;t++)e.push(r.a.createElement(f,{isKill:!0}));for(var a=i;a<c;a++)e.push(r.a.createElement(f,{isKill:!1}));return e}return Object(n.useEffect)((function(){o=u()}),[i]),o=u(),r.a.createElement("div",{className:"Ship"},r.a.createElement("img",{src:s,alt:a}),r.a.createElement("p",null,c),o,r.a.createElement("button",{onClick:function(){l(t,1)}},"+"),r.a.createElement("p",null,i))},v=["Aircraft","Battleship","Cruiser","Submarine","Carrier"],E=function(){var e=Object(n.useState)([0,0,0,0,0]),t=Object(u.a)(e,2),a=t[0],c=t[1];function i(e,t){var n=a;n[e]=(n[e]+1)%(e+2),c(n)}function l(){for(var e=[],t=0;t<5;t++)e.push(r.a.createElement(h,{key:[t,a[t]].toString(),i:t,name:v[t],count:t+1,kill:a[t],changeKill:i}));return e}return Object(n.useEffect)((function(){l()}),[a]),r.a.createElement("div",{className:"Shipsboard"},l())};var d=r.a.memo((function(e){var t=e.i,a=e.isClear,c=e.gameMode,i=e.setShip;function l(e){var n,l;return 0===c?!1===e?(n=function(e,t){return!1===e&&!1===t?"Ship":"Empty"}(e,a),i(t)):n="Empty":1===c&&(n=!1===e?1===(l=1)?"Miss":2===l?"Hit":"Empty":"Empty"),n="assets/"+n+".png",r.a.createElement("img",{src:n,alt:"",width:"100%",height:"100%"})}var s=Object(n.useState)(l(!0)),o=Object(u.a)(s,2),m=o[0],p=o[1];return r.a.createElement("div",{className:"Cell",onClick:function(){return p(l(!1))}},m)})),b=r.a.memo((function(e){e.i;var t=e.isClear,a=e.gameMode,c=e.ship,i=Object(n.useState)(c);function l(e){c[e]=!1===t}c=i[0];var s=function(){for(var e=[],n=0;n<10;n++)e.push(r.a.createElement(d,{i:n,isClear:t,gameMode:a,setShip:l}));return e}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CellRow"},s))})),g=(a(16),function(e){var t=e.isClear,a=e.gameMode,n=e.ships;var c=function(){for(var e=[],c=0;c<10;c++)e.push(r.a.createElement(b,{i:c,isClear:t,gameMode:a,ship:n[c]}));return e}();return r.a.createElement("div",{className:"Battlefield"},c)});function y(){for(var e=[],t=0;t<10;t++){for(var a=[],n=0;n<10;n++)a.push(!1);e.push(a)}return e}function S(e){for(var t=[],a=0;a<10;a++){for(var n=[],r=0;r<10;r++)!0===e[a][r]?n.push(1):n.push(0);t.push(n)}return t}var j=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=(t[1],Object(n.useState)(0)),i=Object(u.a)(c,2),l=i[0],m=i[1],f=Object(n.useState)(y()),h=Object(u.a)(f,2),v=h[0],d=h[1],b=Object(n.useState)(!1),j=Object(u.a)(b,2),O=j[0],C=j[1],w={display:"none"},k=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S(v),e.next=3,fetch("/ships",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ships:t})});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,n.id,d(y()),m(1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function N(e){if(1===e)return w}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"inline-board"},r.a.createElement(p,{player1:a,player2:3}),r.a.createElement(E,null),r.a.createElement("button",{onClick:function(){return C(!O)},style:N(l)},"Fix ships is now ",r.a.createElement("i",null,O.toString())),r.a.createElement("button",{onClick:k,style:N(l)},"Go battle"),r.a.createElement("p",{style:N(l)},"Fix ships - if you place it wrong"),r.a.createElement("p",{style:N((l+1)%2)},"Good game!")),r.a.createElement("div",{className:"inline-field"},r.a.createElement(g,{key:l.toString(),isClear:O,gameMode:l,ships:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f3baa626.chunk.js.map