export default function Stars({ count = 60 }: { count?: number }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    dur: `${2 + Math.random() * 4}s`,
    delay: `${-Math.random() * 6}s`,
    size: Math.random() > 0.8 ? "3px" : "2px",
  }));

  return (
    <div className="stars">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            "--dur": s.dur,
            "--delay": s.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
