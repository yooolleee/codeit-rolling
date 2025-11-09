import { getButtonClassName } from '@components/common/button/utils/getButtonClassName.js';
import { getButtonIcon } from '@components/common/button/utils/getButtonIcon.js';
import { validateButtonSize } from '@components/common/button/utils/validateButtonSize.js';
import { validateButtonIcon } from '@components/common/button/utils/validateButtonIcon.js';

export default function Button({
  buttonName,
  variant = 'primary',
  state = 'enabled',
  isIcon = false,
  ...props
}) {
  if (state !== 'disabled' && typeof props.onClick !== 'function') {
    console.warn(`Button("${buttonName}")에 대해서 onClick 핸들러를 정의할 것`);
  }

  if (variant === 'outlined') {
    props.size = validateButtonSize(props.size);
    validateButtonIcon({ variant, size: props.size, isIcon });
  }

  const className = getButtonClassName({
    variant,
    state,
    isIcon,
    size: props.size,
  });
  const icon = getButtonIcon({ variant, className, isIcon });

  return (
    <button className={className} disabled={state === 'disabled'} {...props}>
      {icon && <img src={icon.src} alt="icon" className={icon.className} />}
      <span>{buttonName}</span>
    </button>
  );
}
