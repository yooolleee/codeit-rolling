import base from '../base/button.module.css';
import primary from '@components/common/button/style/primary.module.css';
import secondary from '@components/common/button/style/secondary.module.css';
import outlined from '@components/common/button/style/outlined.module.css';

const variantStyles = {
  primary,
  secondary,
  outlined,
};

export function getButtonClassName({ variant, state }) {
  const styles = variantStyles[variant];

  if (!styles) {
    throw new Error(`지정되지 않은 스타일 variant ${variant}`);
  }

  if (!styles[state]) {
    throw new Error(`지정되지 않은 타입 ${state}`);
  }

  return [base.buttonBase, styles.button, styles[state]].join(' ');
}

// UX & DX 고려한 환경 분기 코드
// if (!styles) {
//   const message = `지정되지 않은 스타일 variant: ${variant}`;
//   if (process.env.NODE_ENV === 'development') {
//     throw new Error(message);
//   } else {
//     console.warn(message);
//     return base.buttonBase; // UX 보호용 fallback
//   }
// }
