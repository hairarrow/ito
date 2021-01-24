export default (str: string) => (
  <span aria-label={str}>
    {str.split("").map((letter, i) => (
      <span key={`${str}${letter}${i}`} className="letter" aria-hidden="true">
        {letter === " " ? <>&nbsp</> : letter}
      </span>
    ))}
  </span>
);
