import { h } from '../svicon.core.js';

class SvIconSprite {
    constructor() {
        this.scale = "1";
        this.strokeWidth = "2";
        this.fillColor = "none";
        this.strokeColor = "currentColor";
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
    static get style() { return "sv-icon-sprite{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;margin:auto;line-height:1.5;-ms-flex-positive:0;flex-grow:0}"; }
}

export { SvIconSprite };
