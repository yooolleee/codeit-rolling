import ProfileImage from '../common/ProfileImage';
import RelationBadge from '../common/badge/relationalBadge/RelationBadge';
import styles from './Card.module.css';

function Card({
  sender, 
  content, 
  createdAt,
  profileImageUrl,
  relationship,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ProfileImage profileImageUrl={profileImageUrl}/>
        <div className={styles.senderInfo}>
          <p className={styles.sender}>From. {sender}</p>
          <RelationBadge relationship={relationship}/>
        </div>
      </div>
      <div className={styles.content}>{content}</div>
      <p className={styles.createdAt}>{createdAt}</p>
    </div>
  );
}

export default Card;