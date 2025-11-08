/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules: {
    // ✅ camelCase, kebab-case, snake_case 모두 허용
    'selector-class-pattern': '^[a-zA-Z0-9_-]+$',

    // ✅ CSS Modules에서 사용하는 compose 문법 허용
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],

    'color-hex-length': 'long',

    // ✅ 중복 속성, 잘못된 색상 등 기본 문법 체크
    'declaration-block-no-duplicate-properties': true,
    'color-no-invalid-hex': true,

    // ⚙️ 불필요한 경고 제거 (중첩 관련)
    'no-descending-specificity': null,
  },
};
