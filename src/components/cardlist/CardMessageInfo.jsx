import CardList from './CardList';
import styles from './CardMessageInfo.module.css';

function CardMessageInfo({ name, profileImages, messageCount }) {
  return (
    <div>
      <div>
        <span className={styles.name}>To. {name}</span>
      </div>
      <div className={styles.profileWrapper}>
        {profileImages.map((profileImage, idx) => (
          <img
            key={idx}
            src={profileImage}
            alt={`profile-${idx}`}
            className={styles.profileImage}
            style={{ zIndex: profileImages.length - idx }} // 뒤에 올수록 살짝 밑으로 감춤
          />
        ))}
        <div className={styles.profileCount}>+{messageCount - 3}</div>
      </div>
      <div className={styles.messageCount}>
        <span className={styles.messageCountNumber}>{messageCount}</span>
        <span className={styles.messageCountText}>명이 작성했어요!</span>
      </div>
    </div>
  );
}

export default CardMessageInfo;
