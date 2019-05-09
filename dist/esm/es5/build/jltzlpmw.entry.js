import{h}from"../svicon.core.js";function injectSprites(t){var e=t.createElement("a"),r=t.createElement("div");function n(t,e,r){for(var n=0;n<e.length;++n){var i=e[n];i.hasOwnProperty(t)&&r(i[t])}}var i={};return function(o,s){s=s||{};var c=(e.href=o,e.href),l=i[c];if(l){var a=l.svgSprite;a?s.onInjected&&s.onInjected(a):l.optionsArr.push(s)}else{var p=!1;i[c]=l={spriteHandler:{remove:function(){if(!p){var t=l.svgSprite;if(t){var e=t.parentNode;e&&e.removeChild(t),l.svgSprite=null}delete i[c],p=!0}}},svgSprite:null,optionsArr:[s]},function(e,i,o){if(e){var s=new XMLHttpRequest;s.onreadystatechange=function(){var e;4==s.readyState&&200==s.status&&(e=function(t,e){r.innerHTML=t;var n=r.removeChild(r.firstChild).cloneNode(!0);return n.style="display:none",n["data-inject-url"]=e,n}(s.responseText,c),p||(l.svgSprite=e,t.documentElement.appendChild(e),n("afterInject",l.optionsArr,function(t){t(e)})))},s.onerror=function(t){n("onLoadFail",l.optionsArr,function(e){e(t)})},s.open("GET",e,!0),s.send()}}(o)}return l.spriteHandler}}var SVGSpriteInject=injectSprites(document),spriteInject=function(t,e){void 0===e&&(e={}),SVGSpriteInject(t,e)},SvIconSprite=function(){function t(){this.scale="1",this.strokeWidth="2",this.fillColor="none",this.strokeColor="currentColor",spriteInject("/assets/sprites/sprites.svg",{})}return t.prototype.setDimension=function(t){return[t+"em",t+"em"]},t.prototype.componentWillLoad=function(){var t;t=this.setDimension(this.scale),this.width=t[0],this.height=t[1]},t.prototype.render=function(){return h("svg",{width:this.width,height:this.height,stroke:this.strokeColor,fill:this.fillColor,"stroke-width":this.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},h("use",{xlinkHref:"#"+this.icon}))},Object.defineProperty(t,"is",{get:function(){return"sv-icon-sprite"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},fillColor:{type:String,attr:"fill-color",reflectToAttr:!0},icon:{type:String,attr:"icon",reflectToAttr:!0},scale:{type:String,attr:"scale",reflectToAttr:!0},strokeColor:{type:String,attr:"stroke-color",reflectToAttr:!0},strokeWidth:{type:String,attr:"stroke-width",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),t}();export{SvIconSprite};