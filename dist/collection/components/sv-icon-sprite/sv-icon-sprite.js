import { spriteInject } from "./sv-sprite-injector";
export class SvIconSprite {
    constructor() {
        /** Optional Scale prop (default: "1") */
        this.scale = "1";
        /** Optional Stroke Width prop (default: "2") */
        this.strokeWidth = "2";
        /** Optional Fill color prop (default: "none") */
        this.fillColor = "none";
        /** Optional Stroke color prop (default: "currentColor") */
        this.strokeColor = "currentColor";
        spriteInject('/assets/sprites/sprites.svg', {});
    }
    /**
     * Setup the dimension of the Icon
     *
     * @access private
     * @param scale The scale of the icon (string)
     * @since 1.0.0
     */
    setDimension(scale) {
        let width = `${scale}em`;
        let height = `${scale}em`;
        return [width, height];
    }
    /** Populate widht and height props */
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
