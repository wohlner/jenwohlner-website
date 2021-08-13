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
  query CeramicsPageQuery {
    projects: allSanitySampleProject(
      limit: 200
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}, categories: {elemMatch: {title: {in: "ceramics"}}}}
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
          _rawCategories
            categories {
                _id
                title
              }
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const CeramicsPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects  && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Ceramics' />
      <Container>
        <h1 hidden className={responsiveTitle1}>Projects</h1>
        <h1>Jen's ceramics</h1>
        {projectNodes && projectNodes.length > 0 && 
          <ProjectPreviewGrid 
            nodes={projectNodes} 
            // title='Ceramic art'
          />
        }
      </Container>
    </Layout>
  )
}

export default CeramicsPage
