export default (str: string) =>
	str.split("").map((letter, i) => (
		<span key={`${letter}${i}`} className="letter">
			{letter === " " ? <>&nbsp</> : letter}
		</span>
	));
