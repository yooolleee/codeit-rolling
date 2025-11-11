import CardMessageInfo from './CardMessageInfo';
import CardReactionBar from './CardReactionBar';
import styles from './CardList.module.css';

function CardList({
  name,
  profileImages,
  messageCount,
  reactions,
  background,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerShape}></div>
      <CardMessageInfo
        name={name}
        profileImages={profileImages}
        messageCount={messageCount}
      />
      <CardReactionBar reactions={reactions} />
    </div>
  );
}

export default CardList;
