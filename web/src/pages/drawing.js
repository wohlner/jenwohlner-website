import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query DrawingPageQuery {
    projects: allSanitySampleProject(
      limit: 200
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}, categories: {elemMatch: {title: {in: "drawing"}}}}
    ) {
      edges {
        node {
          publishedAt
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const DrawingPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Drawings' />
      <Container>
        <h1>Drawings</h1>
        {projectNodes && projectNodes.length > 0 && 
          <ProjectPreviewGrid 
            nodes={projectNodes} 
            //title='All projects'
          />
        }
      </Container>
    </Layout>
  )
}

export default DrawingPage
