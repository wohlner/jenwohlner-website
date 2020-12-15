export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd8f00f95b9dc26d968282c',
                  title: 'Sanity Studio',
                  name: 'jenwohlner-website-studio',
                  apiId: 'ff835e73-d7f2-4d32-a790-ea6aec6975da'
                },
                {
                  buildHookId: '5fd8f00f420c6816cdbe62f2',
                  title: 'Portfolio Website',
                  name: 'jenwohlner-website',
                  apiId: '0905ac5c-1f9a-40b9-9461-72ffee8b4887'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wohlner/jenwohlner-website',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://jenwohlner-website.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
