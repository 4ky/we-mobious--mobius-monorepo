/**
 * @see https://gitlab.com/pawelbbdrozd/eslint-plugin-markdownlint
 * @see https://github.com/DavidAnson/markdownlint
 * TODO: 没有找到合适的可以同时格式化 Markdown 语法和 Markdown 中 Codeblock 中代码语法的插件，暂时只考虑处理 Codeblock 中的 JavaScript 代码
 * 之后需要自己写插件，最好将 Vale 的功能也集成进来
 */
export const markdownlintRules = {
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md001---heading-levels-should-only-increment-by-one-level-at-a-time
  'markdownlint/md001': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md003---heading-style
  'markdownlint/md003': ['error', { style: 'consistent' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md004---unordered-list-style
  'markdownlint/md004': ['error', { style: 'consistent' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md005---inconsistent-indentation-for-list-items-at-the-same-level
  'markdownlint/md005': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007---unordered-list-indentation
  'markdownlint/md007': ['error', { indent: 2, start_indented: false }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md009---trailing-spaces
  'markdownlint/md009': ['error', { br_spaces: 2, list_item_empty_lines: true, strict: false }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md010---hard-tabs
  'markdownlint/md010': ['error', { code_blocks: true, spaces_per_tab: 2 }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md011---reversed-link-syntax
  'markdownlint/md011': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md012---multiple-consecutive-blank-lines
  'markdownlint/md012': ['error', { maximum: 2 }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md013---line-length
  'markdownlint/md013': ['error', {
    line_length: 120, heading_line_length: 80, code_block_line_length: 120, code_blocks: false, tables: false, headings: true, strict: false, stern: true
  }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md014---dollar-signs-used-before-commands-without-showing-output
  'markdownlint/md014': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md018---no-space-after-hash-on-atx-style-heading
  'markdownlint/md018': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md019---multiple-spaces-after-hash-on-atx-style-heading
  'markdownlint/md019': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md020---no-space-inside-hashes-on-closed-atx-style-heading
  'markdownlint/md020': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md021---multiple-spaces-inside-hashes-on-closed-atx-style-heading
  'markdownlint/md021': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md022---headings-should-be-surrounded-by-blank-lines
  'markdownlint/md022': ['error', { lines_above: 2, lines_below: 1 }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md023---headings-must-start-at-the-beginning-of-the-line
  'markdownlint/md023': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md024---multiple-headings-with-the-same-content
  'markdownlint/md024': ['error', { siblings_only: true, allow_different_nesting: true }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md025---multiple-top-level-headings-in-the-same-document
  // eslint-disable-next-line no-useless-escape -- regex as string
  'markdownlint/md025': ['error', { level: 1, front_matter_title: '^\s*"?title"?\s*[:=]' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026---trailing-punctuation-in-heading
  'markdownlint/md026': ['error', { punctuation: '.,;:!。，；：！' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md027---multiple-spaces-after-blockquote-symbol
  'markdownlint/md027': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md028---blank-line-inside-blockquote
  'markdownlint/md028': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md029---ordered-list-item-prefix
  'markdownlint/md029': ['error', { style: 'one_or_ordered' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md030---spaces-after-list-markers
  'markdownlint/md030': ['error', { ul_single: 1, ul_multi: 3, ol_single: 1, ol_multi: 3 }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031---fenced-code-blocks-should-be-surrounded-by-blank-lines
  'markdownlint/md031': ['error', { list_items: false }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md032---lists-should-be-surrounded-by-blank-lines
  'markdownlint/md032': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md033---inline-html
  'markdownlint/md033': ['off', { allowed_elements: [] }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md034---bare-url-used
  'markdownlint/md034': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md035---horizontal-rule-style
  'markdownlint/md035': ['error', { style: 'consistent' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md036---emphasis-used-instead-of-a-heading
  'markdownlint/md036': ['off'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md037---spaces-inside-emphasis-markers
  'markdownlint/md037': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md038---spaces-inside-code-span-elements
  'markdownlint/md038': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md039---spaces-inside-link-text
  'markdownlint/md039': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md040---fenced-code-blocks-should-have-a-language-specified
  'markdownlint/md040': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md041---first-line-in-a-file-should-be-a-top-level-heading
  'markdownlint/md041': ['off'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md042---no-empty-links
  'markdownlint/md042': ['off'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md043---required-heading-structure
  'markdownlint/md043': ['off'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md044---proper-names-should-have-the-correct-capitalization
  'markdownlint/md044': ['error', { names: ['JavaScript', 'TypeScript', 'ESLint', 'Haskell', 'PureScript', 'Vue', 'React', 'Angular', 'Node.js', 'Markdown'], code_blocks: false }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md045---images-should-have-alternate-text-alt-text
  'markdownlint/md045': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md046---code-block-style
  'markdownlint/md046': ['error', { style: 'fenced' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md047---files-should-end-with-a-single-newline-character
  'markdownlint/md047': ['error'],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md048---code-fence-style
  'markdownlint/md048': ['error', { style: 'backtick' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md049---emphasis-style-should-be-consistent
  'markdownlint/md049': ['error', { style: 'consistent' }],
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md050---strong-style-should-be-consistent
  'markdownlint/md050': ['error', { style: 'consistent' }]
  // // TODO: 2022-10-08 03:06:00 not released yet
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md051---link-fragments-should-be-valid
  // 'markdownlint/md051': ['error'],
  // // TODO: 2022-10-08 03:06:00 not released yet
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md052---reference-links-and-images-should-use-a-label-that-is-defined
  // 'markdownlint/md052': ['error'],
  // // TODO: 2022-10-08 03:06:00 not released yet
  // https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md053---link-and-image-reference-definitions-should-be-needed
  // 'markdownlint/md053': ['error', { ignored_definitions: ['//'] }]
}
export const markdownlintOverride = {
  files: ['**/*.{md,mkdn,mdown,markdown}'],
  extends: [],
  plugins: ['markdownlint'],
  parser: 'eslint-plugin-markdownlint/parser',
  rules: { ...markdownlintRules }
}
