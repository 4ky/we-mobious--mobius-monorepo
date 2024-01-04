export const nxPlugins = ['@nrwl/nx']

/**
 * @see https://nx.dev/core-features/enforce-project-boundaries
 */
export const nxRules = {
  '@nrwl/nx/enforce-module-boundaries': [
    'error',
    {
      allow: [],
      allowCircularSelfDependency: true,
      enforceBuildableLibDependency: false,
      // NOTE: 2022-11-14 03:34 确认是 Nx bug，应该根据包的 package.json 判断是否为直接依赖，而非根据 workspace 的 package.json 判断
      // 在使用 pnpm 作为包管理工具，且关闭 shame hoist 的时候，这个选项也是没有必要的
      banTransitiveDependencies: false,
      depConstraints: [
        {
          sourceTag: '*',
          onlyDependOnLibsWithTags: [
            '*'
          ]
        },
        {
          sourceTag: 'type:free',
          onlyDependOnLibsWithTags: [
            '*'
          ]
        },
        {
          sourceTag: 'type:utility',
          onlyDependOnLibsWithTags: [
            'type:free',
            'type:utility'
          ]
        },
        {
          sourceTag: 'type:feature',
          onlyDependOnLibsWithTags: [
            'type:free',
            'type:utility',
            'type:feature'
          ]
        },
        {
          sourceTag: 'type:application',
          onlyDependOnLibsWithTags: [
            'type:free',
            'type:utility',
            'type:feature'
          ]
        },
        {
          sourceTag: 'type:engineering',
          onlyDependOnLibsWithTags: [
            'type:free',
            'type:utility',
            'type:feature',
            'type:engineering'
          ]
        },
        {
          sourceTag: 'type:element',
          onlyDependOnLibsWithTags: [
            'type:free',
            'type:utility',
            'type:feature',
            'type:element'
          ]
        },
        {
          sourceTag: 'type:service',
          onlyDependOnLibsWithTags: [
            'type:free',
            'type:utility',
            'type:feature',
            'type:service'
          ]
        },
        {
          sourceTag: 'type:component',
          onlyDependOnLibsWithTags: [
            'type:free',
            'type:utility',
            'type:feature',
            'type:element',
            'type:serivce',
            'type:component'
          ]
        }
      ]
    }
  ]
}
