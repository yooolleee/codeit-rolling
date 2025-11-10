function CardReactionBar({ reactions }) {
  return (
    <div>
      {reactions.map((reaction, idx) => (
        <div key={idx}>
          <div>{reaction.emoji}</div>
          <div>{reaction.count}</div>
        </div>
      ))}
    </div>
  );
}

export default CardReactionBar;
