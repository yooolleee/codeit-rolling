import styles from './CardReactionBar.module.css';
import ReactionBadge from '@components/common/badge/reactionBadge/ReactionBadge';

function CardReactionBar({ reactions }) {
  return (
    <div className={styles.container}>
      {reactions.map((reaction, idx) => (
        <div key={idx}>
          <ReactionBadge emoji={reaction.emoji} count={reaction.count} />
        </div>
      ))}
    </div>
  );
}

export default CardReactionBar;
