import React from 'react'
import Container from '../components/container'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Container>
    <SEO title='404: Not found' />
    <h1>NOT FOUND!</h1>
    <p>You just hit a page on my site that doesn&#39;t exist... the sadness, the horror, the desolation.</p>
    <p><a href="/">Go home!</a></p>
    </Container>
  </Layout>
)

export default NotFoundPage
