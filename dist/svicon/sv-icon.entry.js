const h = window.svicon.h;

class SvIcon {
    constructor() {
        /** Optional Scale prop (default: "1") */
        this.scale = "1";
        /** Optional Stroke Width prop (default: "2") */
        this.strokeWidth = "2";
        /** Optional Fill color prop (default: "none") */
        this.fillColor = "none";
        /** Optional Stroke color prop (default: "currentColor") */
        this.strokeColor = "currentColor";
    }
    /**
     * Setup the dimension of the Icon.
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
    /**
     * Fetch the svg file content.
     *
     * @access private
     * @since 1.0.0
     */
    async fetchSvgContent() {
        let divEl = await document.createElement('div');
        await fetch(this.iconPath)
            .then(res => {
            return res.text()
                .then(text => {
                divEl.innerHTML = text;
                this.svgEl = divEl.removeChild(divEl.firstChild);
            });
        });
        Promise.resolve();
    }
    setElAttributes(el) {
        el.setAttribute('width', this.width);
        el.setAttribute('height', this.height);
        el.setAttribute('fill', this.fillColor);
        el.setAttribute('stroke', this.strokeColor);
        el.setAttribute('stroke-width', this.strokeWidth);
        el.setAttribute('stroke-linejoin', 'round');
        el.setAttribute('stroke-linecap', 'round');
    }
    /** Populate widht and height props */
    async componentWillLoad() {
        [this.width, this.height] = await this.setDimension(this.scale);
        this.fetchSvgContent = await this.fetchSvgContent.bind(this);
        await this.fetchSvgContent();
        await this.el.shadowRoot.appendChild(this.svgEl);
        let svgEl = await this.el.shadowRoot.querySelector('svg');
        await this.setElAttributes(svgEl);
    }
    static get is() { return "sv-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "fillColor": {
            "type": String,
            "attr": "fill-color",
            "reflectToAttr": true
        },
        "iconPath": {
            "type": String,
            "attr": "icon-path",
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

export { SvIcon };
