export default (str: string) =>
	str.split("").map((letter, i) => (
		<span key={`${str}${letter}${i}`} className="letter">
			{letter === " " ? <>&nbsp</> : letter}
		</span>
	));
