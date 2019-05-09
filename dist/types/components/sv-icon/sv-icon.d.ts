export declare class SvIcon {
    /** Private width and height prop */
    width: string;
    height: string;
    /** Reference to svg dom */
    svgEl: ChildNode;
    /** Reference to the host elemenet */
    el: HTMLElement;
    /** Required Icon Path prop (default: undefined) */
    iconPath: string;
    /** Optional Scale prop (default: "1") */
    scale: string;
    /** Optional Stroke Width prop (default: "2") */
    strokeWidth: string;
    /** Optional Fill color prop (default: "none") */
    fillColor: string;
    /** Optional Stroke color prop (default: "currentColor") */
    strokeColor: string;
    /**
     * Setup the dimension of the Icon.
     *
     * @access private
     * @param scale The scale of the icon (string)
     * @since 1.0.0
     */
    private setDimension;
    /**
     * Fetch the svg file content.
     *
     * @access private
     * @since 1.0.0
     */
    private fetchSvgContent;
    private setElAttributes;
    /** Populate widht and height props */
    componentWillLoad(): Promise<void>;
}
