

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout'
import Gallery from './components/Gallery'
import axios from 'axios'

const Index = ({ cats }) => (
  <Layout>
    <Gallery cats={cats}/>
  </Layout>
)

Index.getInitialProps = async function() {
  const result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=25')
  return {
    'cats': result.data
  }
}

export default Index
