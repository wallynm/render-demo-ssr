import React, { Component } from 'react'
import axios from 'axios'
import { Image } from 'semantic-ui-react'

class Gallery extends Component {

  render() {
    if(!this.props.cats) {
      return null
    }
    return (
      <div class="ui small images">
        {this.props.cats.map(cat => {
          return (
            <Image src={cat.url} size='medium' rounded/>
          )
        })}
      </div>
    )
  }
}

export default Gallery