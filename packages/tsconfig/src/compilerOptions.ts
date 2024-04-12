import ts from 'typescript'

import type { CompilerOptions } from 'typescript'

export const DEFAULT_COMPILER_OPTIONS: CompilerOptions = {
  /* Visit https://aka.ms/tsconfig.json to read more about this file */
  /* Fully compatible with @vue/tsconfig, see https://vuejs.org/guide/typescript/overview.html#configuring-tsconfig-json */

  /*************************************************************************************************************
   *                                                   Type Checking
   *************************************************************************************************************/
  /* Disable error reporting for unreachable code. */
  allowUnreachableCode: false,
  /* Disable error reporting for unused labels. */
  allowUnusedLabels: false,
  /* Ensure 'use strict' is always emitted. */
  alwaysStrict: true,
  /* Differentiate between undefined and not present when type checking */
  exactOptionalPropertyTypes: true,
  /* Enable error reporting for fallthrough cases in switch statements. */
  noFallthroughCasesInSwitch: false,
  /* Enable error reporting for expressions and declarations with an implied any type. */
  noImplicitAny: true,
  /* Ensure overriding members in derived classes are marked with an override modifier. */
  noImplicitOverride: true,
  /* Enable error reporting for codepaths that do not explicitly return in a function. */
  noImplicitReturns: true,
  /* Enable error reporting when this is given the type any. */
  noImplicitThis: true,
  /* Enforces using indexed accessors for keys declared using an indexed type */
  noPropertyAccessFromIndexSignature: true,
  /* Add undefined to a type when accessed using an index. */
  noUncheckedIndexedAccess: true,
  /* Enable error reporting when a local variables aren't read. */
  noUnusedLocals: false,
  /* Raise an error when a function parameter isn't read */
  noUnusedParameters: false,
  /* Enable all strict type checking options. */
  strict: true,
  /* Check that the arguments for bind, call, and apply methods match the original function. */
  strictBindCallApply: true,
  /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
  strictFunctionTypes: true,
  /* When type checking, take into account null and undefined. */
  strictNullChecks: true,
  /* Check for class properties that are declared but not set in the constructor. */
  strictPropertyInitialization: true,
  /* Default catch clause variables as unknown instead of any. */
  useUnknownInCatchVariables: true,
  /*************************************************************************************************************
   *                                                   Modules
   *************************************************************************************************************/
  /* Allow accessing UMD globals from modules. */
  allowUmdGlobalAccess: true,
  /* Specify the base directory to resolve non-relative module names. */
  baseUrl: '.',
  /* Specify what module code is generated. */
  module: ts.ModuleKind.ESNext,
  /* Specify how TypeScript looks up a file from a given module specifier. */
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  /* Provides a way to override the default list of file name suffixes to search when resolving a module. */
  moduleSuffixes: [''],
  /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */
  noResolve: false,
  /* Specify a set of entries that re-map imports to additional lookup locations. */
  paths: {},
  /* Enable importing .json files */
  resolveJsonModule: true,
  /* Specify the root folder within your source files. */
  rootDir: './',
  /* Allow multiple folders to be treated as one when resolving modules. */
  rootDirs: [],
  /* Specify multiple folders that act like `./node_modules/@types`. */
  typeRoots: [],
  /* Specify type package names to be included without being referenced in a source file. */
  types: ['node'],
  /*************************************************************************************************************
   *                                                     Emit
   *************************************************************************************************************/
  /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
  declaration: true,
  /* Specify the output directory for generated declaration files. */
  declarationDir: './.mobius/.temp/typings',
  /* Create sourcemaps for d.ts files. */
  declarationMap: true,
  /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
  downlevelIteration: true,
  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
  emitBOM: false,
  /* Only output d.ts files and not JavaScript files. */
  emitDeclarationOnly: false,
  /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
  importHelpers: true,
  /* Include sourcemap files inside the emitted JavaScript. */
  inlineSourceMap: true,
  /* Include source code in the sourcemaps inside the emitted JavaScript. */
  inlineSources: true,
  /* Specify the location where debugger should locate map files instead of generated locations. */
  mapRoot: '',
  /* Set the newline character for emitting files. */
  newLine: ts.NewLineKind.LineFeed,
  /* Disable emitting files from a compilation. */
  noEmit: false,
  /* Disable generating custom helper functions like `__extends` in compiled output. */
  noEmitHelpers: false,
  /* Disable emitting files if any type checking errors are reported. */
  noEmitOnError: false,
  /* Specify an output folder for all emitted files. */
  outDir: './.mobius/.temp/transpiled',
  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
  //  "outFile": "",
  /* Disable erasing `const enum` declarations in generated code. */
  preserveConstEnums: true,
  /* Disable emitting comments. */
  removeComments: false,
  /* Create source map files for emitted JavaScript files. */
  // "sourceMap": true,
  /* Specify the root path for debuggers to find the reference source code. */
  sourceRoot: '',
  /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
  stripInternal: true,

  /*************************************************************************************************************
    *                                                 JavaScript Support
    *************************************************************************************************************/
  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
  allowJs: true,
  /* Enable error reporting in type-checked JavaScript files. */
  checkJs: true,
  /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */
  maxNodeModuleJsDepth: 1,

  /*************************************************************************************************************
    *                                                 Editor Support
    *************************************************************************************************************/
  disableSizeLimit: true,
  /* List of language service plugins to run inside the editor. */
  plugins: [],

  /*************************************************************************************************************
    *                                                 Interop Constraints
    *************************************************************************************************************/
  /* Allow 'import x from y' when a module doesn't have a default export. */
  allowSyntheticDefaultImports: true,
  /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
  // Enabling esModuleInterop will also enable allowSyntheticDefaultImports.
  esModuleInterop: true,
  /* Ensure that casing is correct in imports. */
  forceConsistentCasingInFileNames: true,
  /* Ensure that each file can be safely transpiled without relying on other imports. */
  // Required in Vite
  isolatedModules: true,
  /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
  // NOTE: when working with pnpm, preserveSymlinks should be set to false.
  preserveSymlinks: false,

  /*************************************************************************************************************
    *                                                 Backwards Compatibility
    *************************************************************************************************************/

  /*************************************************************************************************************
    *                                           Language and Environment
    *************************************************************************************************************/
  /* Emit design-type metadata for decorated declarations in source files. */
  emitDecoratorMetadata: true,
  /* Enable experimental support for TC39 stage 2 draft decorators. */
  experimentalDecorators: true,
  /* Specify what JSX code is generated. */
  // Required in Vue projects
  jsx: ts.JsxEmit.Preserve,
  /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
  jsxFactory: 'React.createElement',
  /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
  jsxFragmentFactory: 'React.Fragment',
  /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
  // NOTE: only enable when `jsx` is set to `react-jsx` or `react-jsxdev`.
  // "jsxImportSource": "react",
  /* Specify a set of bundled library declaration files that describe the target runtime environment. */
  lib: [
    'DOM',
    'DOM.Iterable',
    'ESNext'
  ],
  moduleDetection: ts.ModuleDetectionKind.Auto,
  /* Disable including any library files, including the default lib.d.ts. */
  noLib: false,
  /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
  // "reactNamespace": "React",
  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
  // A few notes:
  // - Vue 3 supports ES2016+
  // - For Vite, the actual compilation target is determined by the
  //   `build.target` option in the Vite config.
  //   So don't change the `target` field here. It has to be
  //   at least `ES2020` for dynamic `import()`s and `import.meta` to work correctly.
  // - If you are not using Vite, feel free to override the `target` field.
  target: ts.ScriptTarget.ESNext,
  /* Emit ECMAScript-standard-compliant class fields. */
  useDefineForClassFields: true,

  /*************************************************************************************************************
    *                                                  Compiler Diagnostics
    *************************************************************************************************************/
  explainFiles: false,
  /* Output more detailed compiler performance information after building. */
  extendedDiagnostics: true,
  /* Emit a v8 CPU profile of the compiler run for debugging. */
  generateCpuProfile: './.mobius/.temp/profile.cpuprofile',
  /* Print the names of emitted files after a compilation. */
  listEmittedFiles: false,
  /* Print all of the files read during the compilation. */
  listFiles: false,
  /* Enable tracing of the name resolution process. Requires TypeScript version 2.0 or later. */
  traceResolution: false,

  /*************************************************************************************************************
    *                                                  Projects
    *************************************************************************************************************/
  /* Enable constraints that allow a TypeScript project to be used with project references. */
  composite: true,
  /* Reduce the number of projects loaded automatically by TypeScript. */
  disableReferencedProjectLoad: true,
  /* Opt a project out of multi-project reference checking when editing. */
  disableSolutionSearching: false,
  /* Disable preferring source files instead of declaration files when referencing composite projects */
  disableSourceOfProjectReferenceRedirect: false,
  /* Enable incremental compilation */
  incremental: true,
  /* Specify the folder for .tsbuildinfo incremental compilation files. */
  tsBuildInfoFile: './.mobius/.temp/.tsbuildinfo',

  /*************************************************************************************************************
    *                                                  Output Formatting
    *************************************************************************************************************/
  /* Disable truncating types in error messages. */
  noErrorTruncation: true,
  /* Disable wiping the console in watch mode */
  preserveWatchOutput: true,
  /* Enable color and formatting in output to make compiler errors easier to read */
  pretty: true,

  /*************************************************************************************************************
    *                                                  Completeness
    *************************************************************************************************************/
  /* Skip type checking all .d.ts files. */
  // See <https://github.com/vuejs/vue-cli/pull/5688>
  skipLibCheck: true,

  /*************************************************************************************************************
    *                                                  Command Line
    *************************************************************************************************************/

  /*************************************************************************************************************
    *                                                  Watch Options
    *************************************************************************************************************/
  assumeChangesOnlyAffectDirectDependencies: true
}
