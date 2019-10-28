import styled from "styled-components";

const SOCIAL_MEDIA = [
	{
		name: "Linked In",
		icon: "/linkedin.svg",
		href: "//linkedin.com/in/hairarrow"
	},
	{
		name: "Github",
		icon: "/github.svg",
		href: "//github.com/hairarrow"
	},

	{
		name: "Dribbble",
		icon: "/dribbble.svg",
		href: "//dribbble.com/hairarrow"
	},

	{
		name: "Codepen",
		icon: "/codepen.svg",
		href: "//codepen.io/hairarrow"
	}
];

const SocialMedia = () => {
	return (
		<List>
			{SOCIAL_MEDIA.map(({ href, icon, name }) => (
				<li key={name} className="sm-link-container">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer nofollow external"
						className="sm-link"
					>
						<img src={icon} alt={name} className="sm-link-img" />
					</a>
				</li>
			))}
		</List>
	);
};

const List = styled.ul`
	max-width: 600px;
	width: 100%;
	justify-content: space-around;
	margin: auto;
	display: flex;
	padding: 0;
	padding-top: 80px;
	list-style: none;

	.sm-link-img {
		height: 32px;
		opacity: 0;

		@media (prefers-color-scheme: dark) {
			filter: grayscale(100%) invert(100%) contrast(1000%);
		}

		&:hover {
			opacity: 1;
		}
	}
`;

export default SocialMedia;
