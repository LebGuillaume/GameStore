import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";
import placeholder from "./img/placeholder.jpg";
export default function Edit({ attributes, setAttributes }) {
	const { count } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "blocks-gamestore")}>
					<TextControl
						label={__("Number of games to display", "blocks-gamestore")}
						value={count}
						type="number"
						onChange={(value) =>
							setAttributes({ count: parseInt(value, 10) || 0 })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<img src={placeholder}></img>
			</div>
		</>
	);
}
