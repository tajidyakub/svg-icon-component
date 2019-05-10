import { h } from '../svicon.core.js';

function injectSprites(document) {
    const CREATE_ELEMENT = 'createElement';
    const A_ELEMENT = document[CREATE_ELEMENT]('a');
    const DIV_ELEMENT = document[CREATE_ELEMENT]('div');
    function load(path, callback, errorCallback) {
        if (path) {
            const req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (req.readyState == 4 &&
                    req.status == 200) {
                    callback(req.responseText);
                }
            };
            req.onerror = errorCallback;
            req.open('GET', path, true);
            req.send();
        }
    }
    function buildSvgSprite(svgSpriteStr, absUrl) {
        DIV_ELEMENT.innerHTML = svgSpriteStr;
        const svg = DIV_ELEMENT.removeChild(DIV_ELEMENT.firstChild).cloneNode(true);
        svg['style'] = 'display:none';
        svg['data-inject-url'] = absUrl;
        return svg;
    }
    function getAbsoluteUrl(url) {
        A_ELEMENT.href = url;
        return A_ELEMENT.href;
    }
    function applyAllOptions(optionKey, optionsArr, func) {
        for (let i = 0; i < optionsArr.length; ++i) {
            const options = optionsArr[i];
            if (options.hasOwnProperty(optionKey)) {
                func(options[optionKey]);
            }
        }
    }
    const cachedMap = {};
    function SVGSpriteInject(path, options) {
        options = options || {};
        const absUrl = getAbsoluteUrl(path);
        let cached = cachedMap[absUrl];
        if (cached) {
            const svgSprite = cached.svgSprite;
            if (svgSprite) {
                if (options.onInjected) {
                    options.onInjected(svgSprite);
                }
            }
            else {
                cached.optionsArr.push(options);
            }
        }
        else {
            let removed = false;
            cachedMap[absUrl] = cached = {
                spriteHandler: {
                    remove: function () {
                        if (!removed) {
                            let cachedSvgSprite = cached.svgSprite;
                            if (cachedSvgSprite) {
                                const parentNode = cachedSvgSprite.parentNode;
                                parentNode && parentNode.removeChild(cachedSvgSprite);
                                cached.svgSprite = null;
                            }
                            delete cachedMap[absUrl];
                            removed = true;
                        }
                    }
                },
                svgSprite: null,
                optionsArr: [options]
            };
            load(path, function (svgSpriteStr) {
                let svgSprite = buildSvgSprite(svgSpriteStr, absUrl);
                if (!removed) {
                    cached.svgSprite = svgSprite;
                    document.documentElement.appendChild(svgSprite);
                    applyAllOptions('afterInject', cached.optionsArr, function (afterInject) {
                        afterInject(svgSprite);
                    });
                }
            }, function (e) {
                applyAllOptions('onLoadFail', cached.optionsArr, function (onLoadFail) {
                    onLoadFail(e);
                });
            });
        }
        return cached.spriteHandler;
    }
    return SVGSpriteInject;
}
const SVGSpriteInject = injectSprites(document);
const spriteInject = (path, options = {}) => {
    SVGSpriteInject(path, options);
};

class SvIconSprite {
    constructor() {
        this.scale = "1";
        this.strokeWidth = "2";
        this.fillColor = "none";
        this.strokeColor = "currentColor";
        this.inject("https://cdn.jsdelivr.net/gh/tajidyakub/svg-icon-component@latest/dist/collection/assets/sprites/sprites.svg");
    }
    inject(path) {
        spriteInject(path, {});
    }
    setDimension(scale) {
        let width = `${scale}em`;
        let height = `${scale}em`;
        return [width, height];
    }
    componentWillLoad() {
        [this.width, this.height] = this.setDimension(this.scale);
    }
    render() {
        return (h("svg", { width: this.width, height: this.height, stroke: this.strokeColor, fill: this.fillColor, "stroke-width": this.strokeWidth, "stroke-linecap": "round", "stroke-linejoin": "round" },
            h("use", { xlinkHref: `#${this.icon}` })));
    }
    static get is() { return "sv-icon-sprite"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "fillColor": {
            "type": String,
            "attr": "fill-color",
            "reflectToAttr": true
        },
        "icon": {
            "type": String,
            "attr": "icon",
            "reflectToAttr": true
        },
        "scale": {
            "type": String,
            "attr": "scale",
            "reflectToAttr": true
        },
        "strokeColor": {
            "type": String,
            "attr": "stroke-color",
            "reflectToAttr": true
        },
        "strokeWidth": {
            "type": String,
            "attr": "stroke-width",
            "reflectToAttr": true
        }
    }; }
}

export { SvIconSprite };
