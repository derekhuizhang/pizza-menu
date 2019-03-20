import React, { Component } from 'react'

import Appbar from '../components/Appbar/index'
import Footer from '../components/Footer/index'

export default class MainLayout extends Component {
  constructor() {
    super()
  }

	render() {
		let {
      Component,
      route,
      childProps
    } = this.props
    
		return (
			<div>
				<Appbar />
				<Component childProps={childProps} route={route} />
        <Footer />
			</div>
		)
	}
}
