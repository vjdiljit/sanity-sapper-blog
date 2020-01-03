export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e0f741c15c28a7ecce5722e',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-toyxq8mg',
                  apiId: '81ea37cc-bbc6-4fd7-91d0-f230af497909'
                },
                {
                  buildHookId: '5e0f741c9abebe87023a3185',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-m4w23mv9',
                  apiId: '5f8fa4d1-a975-4ec4-bac7-895ca46fed7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vjdiljit/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-m4w23mv9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
