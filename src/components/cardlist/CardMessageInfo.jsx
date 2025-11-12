import ProfileImage from '../common/profileImage/ProfileImage';
import styles from './CardMessageInfo.module.css';

function CardMessageInfo({ name, profileImages, messageCount, isImage }) {
  return (
    <div>
      <div>
        <span className={`${styles.name} ${isImage ? styles.imageMode : ''}`}>
          To. {name}
        </span>
      </div>
      <div className={styles.profileWrapper}>
        {profileImages.map((profileImage, idx) => (
          <ProfileImage
            imageUrl={null}
            key={idx}
            alt={`profile-${idx}`}
            className={styles.profileImage}
          />
        ))}
        <div className={styles.profileCount}>+{messageCount - 3}</div>
      </div>
      <div
        className={`${styles.messageCount} ${isImage ? styles.imageMode : ''}`}
      >
        <span className={styles.messageCountNumber}>{messageCount}</span>
        <span className={styles.messageCountText}>명이 작성했어요!</span>
      </div>
    </div>
  );
}

export default CardMessageInfo;
