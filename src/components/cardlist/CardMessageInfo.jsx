import CardList from './CardList';

function CardMessageInfo({ name, profileImages, messageCount }) {
  return (
    <div>
      <div>
        <span>To. {name}</span>
      </div>
      <div>
        {profileImages.map((profileImage, idx) => (
          <img key={idx} src={profileImage} />
        ))}
        <div>+{messageCount - 3}</div>
      </div>
      <div>
        <span>{messageCount}</span>
        <span>명이 작성했어요!</span>
      </div>
    </div>
  );
}

export default CardMessageInfo;
