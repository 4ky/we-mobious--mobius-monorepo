import { DEFAULT_COMMITIZEN_CONFIG } from '../prompt/basic'

export const DEFAULT_COMMITLINT_CONFIG = {
  rules: {
    'type-enum': [2, 'always', DEFAULT_COMMITIZEN_CONFIG.types.map((type) => type.value)],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-max-length': [2, 'always', Infinity],
    'type-min-length': [2, 'always', 0],

    'scope-enum': [0, 'always', DEFAULT_COMMITIZEN_CONFIG.scopes.map((scope) => scope.value)],
    'scope-case': [0, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'scope-max-length': [2, 'always', Infinity],
    'scope-min-length': [2, 'always', 0],

    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', Infinity],
    'subject-min-length': [2, 'always', 0],
    'subject-exclamation-mark': [0, 'never'],

    'header-full-stop': [2, 'never', '.'],
    'header-case': [0, 'always', 'lower-case'],
    'header-max-length': [2, 'always', Infinity],
    'header-min-length': [2, 'always', 0],

    'body-full-stop': [2, 'never', '.'],
    'body-leading-blank': [1, 'always'],
    'body-empty': [0, 'never'],
    'body-max-length': [2, 'always', Infinity],
    'body-max-line-length': [2, 'always', DEFAULT_COMMITIZEN_CONFIG.bodyMaxLineLength],
    'body-min-length': [2, 'always', 0],
    'body-case': [0, 'always', 'sentence-case'],

    'footer-leading-blank': [1, 'always'],
    'footer-empty': [0, 'never'],
    'footer-max-length': [2, 'always', Infinity],
    'footer-max-line-length': [2, 'always', DEFAULT_COMMITIZEN_CONFIG.footerMaxLineLength],
    'footer-min-length': [2, 'always', 0],
    'references-empty': [0, 'never'],

    'signed-off-by': [0, 'always', 'Signed-off-by:'],
    'trailer-exists': [0, 'always', 'Signed-off-by:']
  }
}
