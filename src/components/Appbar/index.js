import React, { Component } from 'react'
import { 
  Container, 
  Header
} from 'semantic-ui-react'

const styles = {
  header: {
    padding: '100px',
    color: '#FFFFFF'
  },
  container: {
    backgroundColor: '#251605'
  }
}

export default class Appbar extends Component {
	render() {
		return (
      <div
        style={styles['wrapper']}
      >
        <Container 
          fluid
          style={styles['container']}
        >
          <Header 
            as='h1' 
            textAlign='center'
            style={styles['header']}
          >
            Derek's Pizza Shop
          </Header>
        </Container>
      </div>
		);
	}
}
