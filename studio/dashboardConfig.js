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
                  buildHookId: '5dc196f7d4723969e40facc8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5jmwgidh',
                  apiId: 'e2ffdfcf-725f-42c6-931d-a1aadaf34522'
                },
                {
                  buildHookId: '5dc196f7182624ebf69ab397',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fcm3jzo5',
                  apiId: '6de47b48-0c94-42dc-9cd2-de824469ee97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/demus05/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fcm3jzo5.netlify.com', category: 'apps'}
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
