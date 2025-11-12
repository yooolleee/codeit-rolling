import CardMessageInfo from './CardMessageInfo';
import CardReactionBar from './CardReactionBar';
import styles from './CardList.module.css';
import image01 from './assets/pattern_01.png';
import image02 from './assets/pattern_02.png';
import image03 from './assets/pattern_03.png';
import image04 from './assets/pattern_04.png';

function CardList({
  name,
  profileImages,
  messageCount,
  reactions,
  background,
}) {
  const { type, value, id } = background;
  const colorShape = [image01, image02, image03, image04];

  const backgroundStyle =
    type === 'color'
      ? { backgroundColor: value }
      : { backgroundImage: `url(${value})`, backgroundSize: 'cover' };

  const colorShapeStyle =
    type === 'color'
      ? { backgroundImage: `url(${colorShape[id]})`, backgroundSize: 'cover' }
      : {};

  const backgroundValueStyle = `${styles.container} ${type === 'color' ? styles.valueColor : styles.valueImage}`;

  return (
    <div className={backgroundValueStyle} style={backgroundStyle}>
      <div className={styles.containerShape} style={colorShapeStyle}></div>
      <div className={styles.overlay}></div>
      <CardMessageInfo
        name={name}
        profileImages={profileImages}
        messageCount={messageCount}
        isImage={type === 'image'}
      />
      <CardReactionBar reactions={reactions} />
    </div>
  );
}

export default CardList;
