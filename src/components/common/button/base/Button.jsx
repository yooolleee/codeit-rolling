import { getButtonClasses } from '@components/common/button/utils/getButtonClasses.js';

export default function Button({
  label,
  variant = 'primary',
  state = 'enabled',
  ...props
}) {
  const className = getButtonClasses({ variant, state });

  return (
    <button className={className} disabled={state === 'disabled'} {...props}>
      {label}
    </button>
  );
}
