/**
 * The SVG Sprites contains Ids of the icon
 * to be consumed by Icon Prop of the element had
 * to be imported by the Window Element firs.
 * This is the functionality of the sprite injector
 * module required globally by Stencil compiler.
 */
import { Component, Element, Prop } from "@stencil/core";

@Component({
  tag: "sv-icon-sprite",
  styleUrl: "sv-icon-sprite.css"
})
export class SvIconSprite {
  /** Private width and height prop */
  width: string;
  height: string;

  /** Reference to the host elemenet */
  @Element() el!: HTMLElement;
  /** Required Icon prop (default: undefined) */
  @Prop({ reflectToAttr: true }) icon!: string;
  /** Optional Scale prop (default: "1") */
  @Prop({ reflectToAttr: true }) scale: string = "1"
  /** Optional Stroke Width prop (default: "2") */
  @Prop({ reflectToAttr: true }) strokeWidth: string = "2"
  /** Optional Fill color prop (default: "none") */
  @Prop({ reflectToAttr: true }) fillColor: string = "none";
  /** Optional Stroke color prop (default: "currentColor") */
  @Prop({ reflectToAttr: true }) strokeColor: string = "currentColor";

  /**
   * Setup the dimension of the Icon
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
  /** Populate widht and height props */
  componentWillLoad() {
    [this.width, this.height] = this.setDimension(this.scale);
  }

  render() {
    return (
      <svg
        width={this.width}
        height={this.height}
        stroke={this.strokeColor}
        fill={this.fillColor}
        stroke-width={this.strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round">
        <use xlinkHref={`#${this.icon}`}></use>
      </svg>
    )
  }
}
