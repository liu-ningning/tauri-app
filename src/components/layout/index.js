import React, { Component } from 'react'
import flexible from '../flexible'

import './index.less'

class Layout extends Component {
  constructor() {
    super()
    this.setState = {}

    flexible(window, document)
  }

  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

export default Layout
