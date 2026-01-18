import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	Button,
} from "@wordpress/components";
import "./editor.scss";

const SlideItem = ({ index, slide, onImageChange, onRemove }) => {
	return (
		<div className="slide-item">
			<div className="slide-item-image">
				<p>Light Version Logo</p>
				{slide.lightImage && (
					<div className="image-box">
						<img src={slide.lightImage} alt="Slide image" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "lightImage")}
					onSelectURL={(url) => onImageChange(url, index, "lightImage")}
					labels={{
						title: "Slide Light Image",
						instructions: "Upload an image for the slide.",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<div className="slide-item-image">
				<p>Dark Version Logo</p>
				{slide.darkImage && (
					<div className="image-box">
						<img src={slide.darkImage} alt="Slide image" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "darkImage")}
					onSelectURL={(url) => onImageChange(url, index, "darkImage")}
					labels={{
						title: "Slide Dark Image",
						instructions: "Upload an image for the slide.",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<Button
				className="components-button is-destructive"
				onClick={() => onRemove(index)}
			>
				Remove
			</Button>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		link,
		video,
		linkAnchor,
		image,
		isVideo,
		slides: initialSlides,
		lightLogo,
		darkLogo,
	} = attributes;
	const slides = Array.isArray(initialSlides) ? initialSlides : [];
	const isVideoUpload = typeof isVideo === "boolean" ? isVideo : Boolean(video);

	const onSlideChange = (updatedSlide, index) => {
		const updatedSlides = [...slides];
		updatedSlides[index] = updatedSlide;
		setAttributes({ slides: updatedSlides });
	};

	const addSlide = () => {
		const newSlide = { lightImage: "", darkImage: "" };
		const updateSlides = [...slides, newSlide];
		setAttributes({ slides: updateSlides });
	};

	const removeSlide = (index) => {
		const updatedSlides = [...slides];
		updatedSlides.splice(index, 1);
		setAttributes({ slides: updatedSlides });
	};

	const handleImageChange = (url, index, imageType) => {
		const updatedSlide = { ...slides[index], [imageType]: url };
		onSlideChange(updatedSlide, index);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Hero Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<TextareaControl
						label="Description"
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					<TextControl
						label="Button URL"
						value={link}
						onChange={(link) => setAttributes({ link })}
					/>
					<TextControl
						label="Button Value"
						value={linkAnchor}
						onChange={(linkAnchor) => setAttributes({ linkAnchor })}
					/>
					<ToggleControl
						label="Upload Video"
						checked={isVideoUpload}
						onChange={(value) => setAttributes({ isVideo: value })}
					/>
					{isVideoUpload
						? video && (
								<video controls muted>
									<source src={video} type="video/mp4" />
								</video>
							)
						: image && <img src={image} alt="Uploaded" />}
					<MediaUpload
						onSelect={(media) => {
							if (isVideoUpload) {
								setAttributes({ video: media.url, isVideo: true });
							} else {
								setAttributes({ image: media.url, isVideo: false });
							}
						}}
						allowedTypes={isVideoUpload ? ["video"] : ["image"]}
						render={({ open }) => (
							<button
								className="components-button is-secondary media-upload"
								onClick={open}
							>
								{isVideoUpload ? "Upload Video" : "Upload Image"}
							</button>
						)}
					/>
				</PanelBody>
				<PanelBody title="Logos">
					<div style={{ display: "grid", gap: 12 }}>
						<div>
							<p style={{ marginBottom: 6 }}>Light logo (SVG)</p>
							{lightLogo && (
								<img
									src={lightLogo}
									alt="Light logo preview"
									style={{ maxWidth: "100%", height: "auto" }}
								/>
							)}
							<MediaUpload
								onSelect={(media) => setAttributes({ lightLogo: media.url })}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button
										className="components-button is-secondary"
										onClick={open}
									>
										{lightLogo ? "Change Light Logo" : "Upload Light Logo"}
									</Button>
								)}
							/>
							{lightLogo && (
								<Button
									className="components-button is-link is-destructive"
									onClick={() => setAttributes({ lightLogo: "" })}
								>
									Remove Light Logo
								</Button>
							)}
						</div>
						<div>
							<p style={{ marginBottom: 6 }}>Dark logo (SVG)</p>
							{darkLogo && (
								<img
									src={darkLogo}
									alt="Dark logo preview"
									style={{ maxWidth: "100%", height: "auto" }}
								/>
							)}
							<MediaUpload
								onSelect={(media) => setAttributes({ darkLogo: media.url })}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button
										className="components-button is-secondary"
										onClick={open}
									>
										{darkLogo ? "Change Dark Logo" : "Upload Dark Logo"}
									</Button>
								)}
							/>
							{darkLogo && (
								<Button
									className="components-button is-link is-destructive"
									onClick={() => setAttributes({ darkLogo: "" })}
								>
									Remove Dark Logo
								</Button>
							)}
						</div>
					</div>
				</PanelBody>
				<PanelBody title="Hero Slider">
					{slides.map((slide, index) => (
						<SlideItem
							key={index}
							index={index}
							slide={slide}
							onImageChange={handleImageChange}
							onRemove={removeSlide}
						/>
					))}
					<Button className="components-button is-primary" onClick={addSlide}>
						Add Slide
					</Button>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{isVideoUpload && video && (
					<video
						className="video-bg"
						loop="loop"
						autoplay=""
						muted
						playsinline
						width="100%"
						height="100%"
					>
						<source className="source-element" src={video} type="video/mp4" />
					</video>
				)}
				{!isVideoUpload && image && (
					<img className="image-bg" src={image} alt="Background" />
				)}
				<div className="hero-mask"></div>
				<div className="hero-content">
					<RichText
						tagName="h1"
						className="hero-title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<RichText
						tagName="p"
						className="hero-description"
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					<a href={link} className="hero-button shadow">
						{linkAnchor}
					</a>
				</div>
				{slides && (
					<div className="hero-slider">
						<div className="slider-container">
							<div className="swiper-wrapper">
								{slides.map((slide, index) => (
									<div key={index} className="swiper-slide slide-item">
										<img
											src={slide.lightImage}
											alt="Logo"
											className="light-logo"
										/>
										<img
											src={slide.darkImage}
											alt="Logo"
											className="dark-logo"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
