import { useState } from 'react';
import styles from './ModalFooter.module.css';
import Button from '@components/common/button/base/Button.jsx';

function ModalFooter({ onClose }) {
  const [visualState, setVisualState] = useState('enabled');

  return (
    <>
      <div className={styles.footer}>
        <Button
          onClick={onClose}
          buttonName="확인"
          variant="primary"
          visualState={visualState}
          onMouseEnter={() => setVisualState('hover')}
          onMouseLeave={() => setVisualState('enabled')}
          onMouseDown={() => setVisualState('pressed')}
          onMouseUp={() => setVisualState('hover')}
          onFocus={() => setVisualState('focus')}
          onBlur={() => setVisualState('enabled')}
        />
      </div>
    </>
  );
}

export default ModalFooter;
