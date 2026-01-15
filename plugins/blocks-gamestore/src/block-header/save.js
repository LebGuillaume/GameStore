import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { memberLink, cartLink } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="inner-header">
				<InnerBlocks.Content />

				<div className="right-section">
					<div className="header-search">
						<svg
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.5996 19.9696L15.9196 15.2596C19.2796 11.5096 19.0096 5.74959 15.2596 2.35959C11.5096 -1.03041 5.74959 -0.730408 2.35959 3.01959C-1.03041 6.76959 -0.730408 12.5296 3.01959 15.9196C6.49959 19.0696 11.8096 19.0696 15.2896 15.9196L19.9996 20.6296L20.5996 19.9696ZM9.13959 17.3596C4.60959 17.3596 0.919592 13.6696 0.919592 9.13959C0.919592 4.57959 4.60959 0.919592 9.13959 0.919592C13.6696 0.919592 17.3596 4.60959 17.3596 9.13959C17.3596 13.6696 13.6696 17.3596 9.13959 17.3596Z"
								fill="var(--action-main-svg, rgba(14, 13, 15))"
								fill-opacity="0.64"
							/>
							<path
								d="M9.13965 2.14941V3.04941C12.4996 3.04941 15.2296 5.77941 15.2296 9.13941H16.1296C16.1296 5.26941 13.0096 2.14941 9.13965 2.14941Z"
								fill="var(--action-main-svg, rgba(14, 13, 15))"
								fill-opacity="0.64"
							/>
						</svg>
					</div>
					<div className="header-mode-switcher">
						<svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 24V12"
								stroke="var(--action-main-svg, rgba(14, 13, 15))"
								stroke-opacity="0.64"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9 18H12"
								stroke="var(--var(--action-main-svg, rgba(14, 13, 15))"
								stroke-opacity="0.64"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.5098 9.51025L14.6398 11.6403"
								stroke="var(--var(--action-main-svg, rgba(14, 13, 15))"
								stroke-opacity="0.64"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M21 6V9"
								stroke="var(--var(--action-main-svg, rgba(14, 13, 15))"
								stroke-opacity="0.64"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M21 30V27"
								stroke="var(--var(--action-main-svg, rgba(14, 13, 15))"
								stroke-opacity="0.64"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.5098 26.4899L14.6398 24.3599"
								stroke="var(--action-main-svg, rgba(14, 13, 15))"
								stroke-opacity="0.64"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M21 24C24.3137 24 27 21.3137 27 18C27 14.6863 24.3137 12 21 12C17.6863 12 15 14.6863 15 18C15 21.3137 17.6863 24 21 24Z"
								stroke="var(--action-main-svg, rgba(14, 13, 15))"
								stroke-opacity="0.64"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					{cartLink && (
						<div className="header-cart-link">
							<a href={cartLink}>
								<svg
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.71436 14.5718L9.42864 26.5718H26.5715L28.2858 14.5718"
										stroke="var(--action-main-svg, rgba(14, 13, 15))"
										stroke-opacity="0.64"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12.8569 16.2859L14.5712 9.42871"
										stroke="var(--action-main-svg, rgba(14, 13, 15))"
										stroke-opacity="0.64"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M23.143 16.2859L21.4287 9.42871"
										stroke="var(--action-main-svg, rgba(14, 13, 15))"
										stroke-opacity="0.64"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M6 14.5718H30"
										stroke="var(--action-main-svg, rgba(14, 13, 15))"
										stroke-opacity="0.64"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					)}
					{memberLink && (
						<div className="header-member-link">
							<a href={memberLink}>Member Area</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
