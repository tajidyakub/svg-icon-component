/**
 * The SVG File is to be referenced
 * through Icon Path prop, hence it must be
 * reachable to be imported by the element private method.
 */
import { Component, Element, Prop } from "@stencil/core";

@Component({
  tag: "sv-icon",
  styleUrl: "sv-icon.css",
  shadow: true
})
export class SvIcon {
  /** Private width and height prop */
  width: string;
  height: string;
  /** Reference to svg dom */
  svgEl: ChildNode;

  /** Reference to the host elemenet */
  @Element() el!: HTMLElement;
  /** Required Icon Path prop (default: undefined) */
  @Prop({ reflectToAttr: true }) iconPath!: string;
  /** Optional Scale prop (default: "1") */
  @Prop({ reflectToAttr: true }) scale: string = "1"
  /** Optional Stroke Width prop (default: "2") */
  @Prop({ reflectToAttr: true }) strokeWidth: string = "2"
  /** Optional Fill color prop (default: "none") */
  @Prop({ reflectToAttr: true }) fillColor: string = "none";
  /** Optional Stroke color prop (default: "currentColor") */
  @Prop({ reflectToAttr: true }) strokeColor: string = "currentColor";

  /**
   * Setup the dimension of the Icon.
   *
   * @access private
   * @param scale The scale of the icon (string)
   * @since 1.0.0
   */
  private setDimension(scale) {
    let width = `${scale}em`;
    let height = `${scale}em`;
    return [ width, height ]
  }

  /**
   * Fetch the svg file content.
   *
   * @access private
   * @since 1.0.0
   */
  private async fetchSvgContent() {
    let divEl = await document.createElement('div');
    await fetch(this.iconPath)
      .then(res => {
        return res.text()
          .then(text => {
            divEl.innerHTML = text;
            this.svgEl = divEl.removeChild(divEl.firstChild);
          })
      });
    Promise.resolve();
  }

  private setElAttributes(el) {
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


}
