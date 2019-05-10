import '../../stencil.core';
export declare class SvIconSprite {
    /** Private width and height prop */
    width: string;
    height: string;
    /** Reference to the host elemenet */
    el: HTMLElement;
    /** Required Icon prop (default: undefined) */
    icon: string;
    /** Optional Scale prop (default: "1") */
    scale: string;
    /** Optional Stroke Width prop (default: "2") */
    strokeWidth: string;
    /** Optional Fill color prop (default: "none") */
    fillColor: string;
    /** Optional Stroke color prop (default: "currentColor") */
    strokeColor: string;
    /**
     * Setup the dimension of the Icon
     *
     * @access private
     * @param scale The scale of the icon (string)
     * @since 1.0.0
     */
    private setDimension;
    /** Populate widht and height props */
    componentWillLoad(): void;
    render(): JSX.Element;
}
