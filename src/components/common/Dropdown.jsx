import { useState } from "react";
import styles from "@/components/common/Dropdown.module.css";
import arrowDown from "@/assets/arrow_down.png";
import arrowTop from "@/assets/arrow_top.png";

function Dropdown({
  value,
  onChange,
  options = [],
  placeholder = "옵션을 선택해주세요",
  className = "",
  disabled = false,
  hasError = false,
  errorMessage = "필수 입력 항목입니다",
}) {

  // 드롭다운의 상태
  const [isOpen, setIsOpen] = useState(false);

  // isOpen 값을 true/false로 토글하여 드롭다운 메뉴 열기/닫기
  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  // 선택된 option의 value를 전달, 드롭다운 메뉴를 닫기 위해 isOpen을 false로 변경
  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // 현재 value와 label이라는 key를 가진 객체 배열을 전제로 작동하는 구조 반드시 있어야함
  const currentLabel =
    value ? options.find((opt) => opt.value === value)?.label : "";

  return (
    <>
      <div className={`${styles.container} ${className}`}>
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={`${styles.trigger} ${hasError ? styles.error : ""}`}
        >
          <span className={styles.label}>
            {currentLabel || placeholder}
          </span>
          <img
            src={isOpen ? arrowTop : arrowDown}
            alt=""
            className={styles.icon}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <ul className={styles.optionList}>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`${styles.optionItem} ${
                  value === option.value ? styles.active : ""
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
}

export default Dropdown;
