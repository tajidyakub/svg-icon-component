/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='svicon']"));
function e(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)y.push(arguments[r]);for(;y.length>0;){let t=y.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)y.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&y.push(r);t.class=y.join(" "),y.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],M):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}const t={},o=e=>null!=e,l=e=>e.toLowerCase(),i=(e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS(s,l(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS(s,l(t),n):e.setAttribute(t,n))},s="http://www.w3.org/1999/xlink",a=(e,t,n,o,s,r,a)=>{if("class"!==n||r)if("style"===n){for(const e in o)s&&null!=s[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in s)o&&s[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,s[e]):t.style[e]=s[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!r&&(n in t||-1!==["object","function"].indexOf(typeof s)&&null!==s)){const o=e.l(t);o&&o.i&&o.i[n]?(u(t,n,s),a&&o.i[n].s&&i(t,o.i[n].u,s,4===o.i[n].p)):"ref"!==n&&(u(t,n,null==s?"":s),null!=s&&!1!==s||e.v.m(t,n))}else null!=s&&"key"!==n?i(t,n,s):(r||e.v.M(t,n)&&(null==s||!1===s))&&e.v.m(t,n);else n=l(n)in t?l(n.substring(2)):l(n[2])+n.substring(3),s?s!==o&&e.v.g(t,n,s):e.v.k(t,n);else if(o!==s){const e=f(o),n=f(s),l=e.filter(e=>!n.includes(e)),i=f(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...r),t.className=i.join(" ")}},f=e=>null==e||""===e?[]:e.trim().split(/\s+/),u=(e,t,n)=>{try{e[t]=n}catch(e){}},p=(e,n,o,l,i)=>{const s=11===o.t.nodeType&&o.t.host?o.t.host:o.t,r=n&&n.vattrs||t,c=o.vattrs||t;for(i in r)c&&null!=c[i]||null==r[i]||a(e,s,i,r[i],void 0,l,o.o);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?s[i]:r[i])||a(e,s,i,r[i],c[i],l,o.o)};let b=!1;const m=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{m(e,t)}))},v=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},y=[],M={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},$=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{u:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={j:n[1],s:!!n[2],u:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,p:n[4]};return{C:o,W:l,i:Object.assign({},a),O:s,N:r?r.map(g):void 0}},g=e=>({S:e[0],A:e[1],T:!!e[2],R:!!e[3],L:!!e[4]}),k=(e,t)=>o(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,j=(e,t,n)=>{e.D.add(t),e.q.has(t)||(e.q.set(t,!0),e.B?e.queue.write(()=>C(e,t,n)):e.queue.tick(()=>C(e,t,n)))},C=async(t,n,o,l,i,s)=>{if(t.q.delete(n),!t.I.has(n)){if(!(i=t.P.get(n))){if((s=t.F.get(n))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{C(t,n,o)});if(i=E(t,n,t.H.get(n),o))try{i.componentWillLoad&&await i.componentWillLoad()}catch(e){t.U(e,3,n)}}((t,n,o,l)=>{try{const i=n.Z.host,s=n.Z.encapsulation,r="shadow"===s&&t.v.G;let a,c=o;if(a=((e,t,n)=>(e&&Object.keys(e).forEach(o=>{e[o].reflectToAttr&&((n=n||{})[o]=t[o])}),n))(n.Z.properties,l),r&&(c=o.shadowRoot),l.render||l.hostData||i||a){t.J=!0;const n=l.render&&l.render();let i;a&&(i=i?Object.assign(i,a):a),t.J=!1;const f=e(null,i,n),u=t.K.get(o)||{};u.t=c,f.o=!0,t.K.set(o,t.render(o,u,f,r,s))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.J=!1,t.U(e,8,o,!0)}})(t,t.l(n),n,i),n["s-init"]()}},W=(e,t,n,l,i,s,r,a,c)=>{if(t.type){const f=e.V.get(n);!t.attr||void 0!==f[i]&&""!==f[i]||(a=s&&s.X)&&o(c=a[t.attr])&&(f[i]=k(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=k(t.type,n[i])),"mode"!==i&&delete n[i]),l.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=l[i]),S(l,i,function f(t){return(t=e.V.get(e.Y.get(this)))&&t[i]},function u(n,o){(o=e.Y.get(this))&&t.mutable&&O(e,o,i,n,r)})}else t.elementRef&&N(l,i,n)},O=(e,t,n,o,l,i,s)=>{(s=e.V.get(t))||e.V.set(t,s={}),o!==s[n]&&(s[n]=o,e.P.get(t)&&!e.J&&t["s-rn"]&&j(e,t,l))},N=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},S=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},E=(e,t,n,o,l,i)=>{try{l=new(i=e.l(t).Z),((e,t,n,o,l,i)=>{e.Y.set(o,n),e.V.has(n)||e.V.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{W(e,s,n,o,t,l,i)})})(e,i,t,l,n,o)}catch(n){l={},e.U(n,7,t,!0)}return e.P.set(t,l),l},A=(e,t,n,o,l,i)=>{if(e.D.delete(t),(l=e.F.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.F.delete(t)),e._.length&&!e.D.size)for(;i=e._.shift();)i()},T=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.j&&S(n,t,function n(){return(e.V.get(this)||{})[t]},function n(i){O(e,this,t,k(l.p,i),o)})})},R=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.I.delete(n),e.ee.has(n)||(e.te=!0,e.D.add(n),e.ee.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.ne(n);)if(e.oe(n)){e.le.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.H.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ie(n)),n["s-cr"]||e.se(n,"ssrv")||e.G&&1===t.O||(n["s-cr"]=e.re(""),n["s-cr"]["s-cn"]=!0,e.ae(n,n["s-cr"],e.ce(n)[0])),1===t.O&&e.G&&!n.shadowRoot&&e.fe(n,{mode:"open"}),o={X:{}},t.i&&Object.keys(t.i).forEach(i=>{(l=t.i[i].u)&&(o.X[l]=e.se(n,l))}),o))(e.v,t,n)),e.ue(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.pe&&((e,t)=>{for(;t;){if(!e.de(t))return 9!==e.be(t);t=e.de(t)}})(e.v,t)&&(e.I.set(t,!0),A(e,t),m(e.K.get(t),!0),e.v.k(t),e.me.delete(t),[e.F,e.ve,e.H].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i)=>{if(e.P.get(t)&&!e.I.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.le.set(t,!0),e.he.has(t)||(e.he.set(t,!0),t["s-ld"]=void 0,e.v.ye(t,n));try{m(e.K.get(t)),(i=e.ve.get(t))&&(i.forEach(e=>e(t)),e.ve.delete(t))}catch(n){e.U(n,4,t)}A(e,t)}})(e,this,o)},n.forceUpdate=function(){j(e,this,i)},t.i){const o=Object.entries(t.i);{let e={};o.forEach(([t,{u:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[l(n)];i&&(t[i]=o)})(e,this,t,o)}}T(e,o,n,i)}};((t,n,i,s,r,a,c)=>{const f=i.performance,u={html:{}},d=i[t]=i[t]||{},m=((e,t,n)=>{const o=new WeakMap,i={we:n,G:!!n.documentElement.attachShadow,Me:!1,be:e=>e.nodeType,$e:e=>n.createElement(e),ge:(e,t)=>n.createElementNS(e,t),re:e=>n.createTextNode(e),ke:e=>n.createComment(e),ae:(e,t,n)=>e.insertBefore(t,n),je:e=>e.remove(),Ce:(e,t)=>e.appendChild(t),ye:(e,t)=>{e.classList.add(t)},ce:e=>e.childNodes,de:e=>e.parentNode,We:e=>e.nextSibling,Oe:e=>e.previousSibling,Ne:e=>l(e.nodeName),Se:e=>e.textContent,Ee:(e,t)=>e.textContent=t,se:(e,t)=>e.getAttribute(t),xe:(e,t,n)=>e.setAttribute(t,n),m:(e,t)=>e.removeAttribute(t),M:(e,t)=>e.hasAttribute(t),ie:t=>t.getAttribute("mode")||(e.Context||{}).mode,Ae:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.ne(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,g:(t,n,l,s,r,a,c,f,u)=>{let p=t,d=l,b=o.get(t);u=n,b&&b[u]&&b[u](),"object"==typeof a&&(p=a),p&&(c=i.Me?{capture:!!s,passive:!!r}:!!s,e.ael(p,n,d,c),b||o.set(t,b={}),b[u]=(()=>{p&&e.rel(p,n,d,c),b[u]=null}))},k:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},Te:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),ne:(e,t)=>(t=i.de(e))&&11===i.be(t)?t.host:t,Re:(e,t,n,o)=>e.setAttributeNS(t,n,o),fe:(e,t)=>e.attachShadow(t)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(d,i,s),h=m.we.documentElement,y=i["s-defined"]=i["s-defined"]||{},w=(e,t)=>{i.customElements.get(e.C)||(R(M,u[e.C]=e,t.prototype,a,f),t.observedAttributes=Object.values(e.i).map(e=>e.u).filter(e=>!!e),i.customElements.define(e.C,t))},M={v:m,Le:w,l:e=>u[m.Ne(e)],De:e=>n[e],isClient:!0,oe:e=>!(!y[m.Ne(e)]&&!M.l(e)),U:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=v(d,i),ue:(e,t)=>{{const n=e.W,o=!m.G;let i=r+n+(o?".sc":"")+".entry.js";import(i).then(n=>{try{e.Z=n[(e=>l(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.C)],j(M,t,f)}catch(t){console.error(t),e.Z=class{}}},e=>console.error(e,i))}},J:!1,B:!1,pe:!1,qe:void 0,F:new WeakMap,Be:new WeakMap,ee:new WeakMap,me:new WeakMap,he:new WeakMap,le:new WeakMap,Y:new WeakMap,H:new WeakMap,P:new WeakMap,I:new WeakMap,q:new WeakMap,ve:new WeakMap,Ie:new WeakMap,K:new WeakMap,V:new WeakMap,D:new Set,_:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=i,n.location=i.location,n.document=s,n.resourcesUrl=n.publicPath=r,d.h=e,d.Context=n,d.onReady=(()=>new Promise(e=>M.queue.write(()=>M.D.size?M._.push(e):e()))),M.render=((e,t)=>{let n,l,i,s,r,a,c;const f=(i,d,m,v,h,y,w,M,$)=>{if(M=d.vchildren[m],n||(s=!0,"slot"===M.vtag&&(l&&t.ye(v,l+"-s"),M.vchildren?M.Pe=!0:M.Fe=!0)),o(M.vtext))M.t=t.re(M.vtext);else if(M.Fe)M.t=t.re("");else{if(y=M.t=b||"svg"===M.vtag?t.ge("http://www.w3.org/2000/svg",M.vtag):t.$e(M.Pe?"slot-fb":M.vtag),e.oe(y)&&e.le.delete(c),b="svg"===M.vtag||"foreignObject"!==M.vtag&&b,p(e,null,M,b),o(l)&&y["s-si"]!==l&&t.ye(y,y["s-si"]=l),M.vchildren)for(h=0;h<M.vchildren.length;++h)(w=f(i,M,h,y))&&t.Ce(y,w);"svg"===M.vtag&&(b=!1)}return M.t["s-hn"]=a,(M.Pe||M.Fe)&&(M.t["s-sr"]=!0,M.t["s-cr"]=r,M.t["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[m])&&$.vtag===M.vtag&&i.t&&u(i.t)),M.t},u=(n,o,l,i)=>{e.pe=!0;const r=t.ce(n);for(l=r.length-1;l>=0;l--)(i=r[l])["s-hn"]!==a&&i["s-ol"]&&(t.je(i),t.ae(y(i),i,h(i)),t.je(i["s-ol"]),i["s-ol"]=null,s=!0),o&&u(i,o);e.pe=!1},d=(e,n,l,i,s,r,c,u)=>{const p=e["s-cr"];for((c=p&&t.de(p)||e).shadowRoot&&t.Ne(c)===a&&(c=c.shadowRoot);s<=r;++s)i[s]&&(u=o(i[s].vtext)?t.re(i[s].vtext):f(null,l,s,e))&&(i[s].t=u,t.ae(c,u,h(n)))},m=(e,n,l,s)=>{for(;n<=l;++n)o(e[n])&&(s=e[n].t,i=!0,s["s-ol"]?t.je(s["s-ol"]):u(s,!0),t.je(s))},v=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),h=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.de(e["s-ol"]?e["s-ol"]:e),w=(n,l,i)=>{const s=l.t=n.t,r=n.vchildren,a=l.vchildren;b=l.t&&o(t.ne(l.t))&&void 0!==l.t.ownerSVGElement,b="svg"===l.vtag||"foreignObject"!==l.vtag&&b,o(l.vtext)?(i=s["s-cr"])?t.Ee(t.de(i),l.vtext):n.vtext!==l.vtext&&t.Ee(s,l.vtext):("slot"!==l.vtag&&p(e,n,l,b),o(r)&&o(a)?((e,n,l,i,s,r,a,c)=>{let p=0,b=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,j=i[0],C=i[k];for(;p<=M&&b<=k;)if(null==$)$=n[++p];else if(null==g)g=n[--M];else if(null==j)j=i[++b];else if(null==C)C=i[--k];else if(v($,j))w($,j),$=n[++p],j=i[++b];else if(v(g,C))w(g,C),g=n[--M],C=i[--k];else if(v($,C))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.de($.t)),w($,C),t.ae(e,$.t,t.We(g.t)),$=n[++p],C=i[--k];else if(v(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.de(g.t)),w(g,j),t.ae(e,g.t,$.t),g=n[--M],j=i[++b];else{for(s=null,r=p;r<=M;++r)if(n[r]&&o(n[r].vkey)&&n[r].vkey===j.vkey){s=r;break}o(s)?((c=n[s]).vtag!==j.vtag?a=f(n&&n[b],l,s,e):(w(c,j),n[s]=void 0,a=c.t),j=i[++b]):(a=f(n&&n[b],l,b,e),j=i[++b]),a&&t.ae(y($.t),a,h($.t))}p>M?d(e,null==i[k+1]?null:i[k+1].t,l,i,b,k):b>k&&m(n,p,M)})(s,r,l,a):o(a)?(o(n.vtext)&&t.Ee(s,""),d(s,null,l,a,0,a.length-1)):o(r)&&m(r,0,r.length-1)),b&&"svg"===l.vtag&&(b=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.ce(e)).length;l<i;l++)if(n=o[l],1===t.be(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.be(o[s]),""!==r){if(1===a&&r===t.se(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Se(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,l,s,r,a,c,f,u)=>{for(s=0,r=(n=t.ce(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(c=t.ce(t.de(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.be(l))||8===u)&&""===f||1===u&&null===t.se(l,"slot")&&""===f||1===u&&t.se(l,"slot")===f)&&($.some(e=>e.He===l)||(i=!0,l["s-sn"]=f,$.push({Qe:o,He:l})));1===t.be(o)&&g(o)}};return(o,f,u,p,d,b,m,v,h,y,k,j)=>{if(c=o,a=t.Ne(c),r=c["s-cr"],n=p,l=c["s-sc"],s=i=!1,w(f,u),s){for(g(u.t),m=0;m<$.length;m++)(v=$[m]).He["s-ol"]||((h=t.re(""))["s-nr"]=v.He,t.ae(t.de(v.He),v.He["s-ol"]=h,v.He));for(e.pe=!0,m=0;m<$.length;m++){for(v=$[m],k=t.de(v.Qe),j=t.We(v.Qe),h=v.He["s-ol"];h=t.Oe(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===v.He["s-sn"]&&k===t.de(y)&&(y=t.We(y))&&y&&!y["s-nr"]){j=y;break}(!j&&k!==t.de(v.He)||t.We(v.He)!==j)&&v.He!==j&&(t.je(v.He),t.ae(k,v.He,j))}e.pe=!1}return i&&M(u.t),$.length=0,u}})(M,m),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{M.le.set(h,d.loaded=M.B=!0),m.Te(i,"appload",{detail:{namespace:t}})}),c.map($).forEach(e=>w(e,class extends HTMLElement{})),M.te||h["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.l(t);if(o)if(e.le.has(t))n(t);else{const o=e.ve.get(t)||[];o.push(n),e.ve.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})(M,d,i,i["s-apps"],i["s-cr"]),d.initialized=!0,M})(n,x,w,d,r,h,c);
})(window,document,{},"svicon","hydrated",[["sv-icon","2sejchax",0,[["el",64],["fillColor",1,1,"fill-color",2],["iconPath",1,1,"icon-path",2],["scale",1,1,1,2],["strokeColor",1,1,"stroke-color",2],["strokeWidth",1,1,"stroke-width",2]],1],["sv-icon-sprite","jltzlpmw",0,[["el",64],["fillColor",1,1,"fill-color",2],["icon",1,1,1,2],["scale",1,1,1,2],["strokeColor",1,1,"stroke-color",2],["strokeWidth",1,1,"stroke-width",2]]]]);