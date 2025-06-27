// eslint.config.mjs
import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  rules: {
    'no-console': 'off',
    'style/comma-dangle': 'off',
    'style/brace-style': 'off',
    'antfu/if-newline': 'off',
    'node/prefer-global/process': 'off'
  },
});
