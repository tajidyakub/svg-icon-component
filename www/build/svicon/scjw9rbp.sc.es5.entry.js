var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function l(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,l)}c((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};svicon.loadBundle("scjw9rbp",["exports"],function(t){window;var e=function(){function t(){this.scale="1",this.strokeWidth="2",this.fillColor="none",this.strokeColor="currentColor"}return t.prototype.setDimension=function(t){return[t+"em",t+"em"]},t.prototype.fetchSvgContent=function(){return __awaiter(this,void 0,void 0,function(){var t,e=this;return __generator(this,function(r){switch(r.label){case 0:return[4,document.createElement("div")];case 1:return t=r.sent(),[4,fetch(this.iconPath).then(function(r){return r.text().then(function(r){t.innerHTML=r,e.svgEl=t.removeChild(t.firstChild)})})];case 2:return r.sent(),[2]}})})},t.prototype.setElAttributes=function(t){t.setAttribute("width",this.width),t.setAttribute("height",this.height),t.setAttribute("fill",this.fillColor),t.setAttribute("stroke",this.strokeColor),t.setAttribute("stroke-width",this.strokeWidth),t.setAttribute("stroke-linejoin","round"),t.setAttribute("stroke-linecap","round")},t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,e,r;return __generator(this,function(n){switch(n.label){case 0:return[4,this.setDimension(this.scale)];case 1:return t=n.sent(),this.width=t[0],this.height=t[1],e=this,[4,this.fetchSvgContent.bind(this)];case 2:return e.fetchSvgContent=n.sent(),[4,this.fetchSvgContent()];case 3:return n.sent(),[4,this.el.shadowRoot.appendChild(this.svgEl)];case 4:return n.sent(),[4,this.el.shadowRoot.querySelector("svg")];case 5:return r=n.sent(),[4,this.setElAttributes(r)];case 6:return n.sent(),[2]}})})},Object.defineProperty(t,"is",{get:function(){return"sv-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},fillColor:{type:String,attr:"fill-color",reflectToAttr:!0},iconPath:{type:String,attr:"icon-path",reflectToAttr:!0},scale:{type:String,attr:"scale",reflectToAttr:!0},strokeColor:{type:String,attr:"stroke-color",reflectToAttr:!0},strokeWidth:{type:String,attr:"stroke-width",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"sv-icon.sc-sv-icon{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;margin:auto;line-height:1.5;-ms-flex-positive:0;flex-grow:0}"},enumerable:!0,configurable:!0}),t}();t.SvIcon=e,Object.defineProperty(t,"__esModule",{value:!0})});