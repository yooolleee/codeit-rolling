import styles from "@/components/common/Input.module.css";

function Input({
  value,
  onChange,
  placeholder = "이름을 입력해주세요",
  className = "",
  hasError = false,
  errorMessage = "유효한 입력이 아닙니다",
  disabled = false,
}) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${hasError ? styles.error : ""} ${className}`}
      />
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
}

export default Input;


