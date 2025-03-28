const marquee = [
  "We are committed to securing your data, anytime, anywhere.",
  "We are committed to securing your data, anytime, anywhere.",
  "We are committed to securing your data, anytime, anywhere.",
  "We are committed to securing your data, anytime, anywhere.",
  "We are committed to securing your data, anytime, anywhere.",
  "We are committed to securing your data, anytime, anywhere.",
];
const Marquee = ({ style }) => {
  return (
    <div
      className={`marquee-area ${style ? "marquee-style-two" : "marquee-area"}`}
    >
      <div className="marquee-wrap">
        {marquee.map((li, index) => (
          <span key={index}>{li}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
