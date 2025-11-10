import CardMessageInfo from './CardMessageInfo';
import CardReactionBar from './CardReactionBar';

function CardList({
  name,
  profileImages,
  messageCount,
  reactions,
  background,
}) {
  return (
    <div>
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
