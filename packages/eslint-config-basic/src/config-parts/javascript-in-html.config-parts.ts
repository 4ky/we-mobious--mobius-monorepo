export const javascriptInHTMLPlugins = ['html']

/**
 * @see https://github.com/BenoitZugmeyer/eslint-plugin-html
 */
export const javascriptInHTMLSettings = {
  'html/html-extensions': ['.html', '.erb', '.handlebard', '.hbs', '.htm', '.mustache', '.nunjucks', '.php', '.twig', '.we'],
  'html/xml-extensions': ['.xml', '.xhtml'],
  'html/indent': '+2',
  'html/report-bad-indent': 'error',
  'html/javascript-tag-names': ['script', 'customscript'],
  'html/javascript-mime-types': '/^text\\/(javascript|jsx)$/'
}
