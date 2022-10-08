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
      banTransitiveDependencies: true,
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
