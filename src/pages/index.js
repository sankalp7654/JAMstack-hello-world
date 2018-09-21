import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>This is Sankalp Saxena from India</p>
    <p>3rd year CS Undergraduate</p>
    <p>Now we're good to go</p>
    <p>Let's build something great!</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
