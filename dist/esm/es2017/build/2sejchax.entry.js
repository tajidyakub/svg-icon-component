import { h } from '../svicon.core.js';

class SvIcon {
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
