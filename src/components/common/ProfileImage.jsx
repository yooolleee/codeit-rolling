import styles from './ProfileImage.module.css';

function ProfileImage({profileImageUrl}) {
  const src = profileImageUrl;

  return (
    <div className={styles.container}>
      <img src={src} alt='프로필 이미지'/>
    </div>
  )
}

export default ProfileImage;