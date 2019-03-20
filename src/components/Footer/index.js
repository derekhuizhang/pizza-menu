import React, { Component } from 'react'
import { 
  Container, 
  Header
} from 'semantic-ui-react'

const styles = {
  header: {
    marginLeft: '100px',
    padding: '30px',
    color: '#FFFFFF'
  },
  container: {
    backgroundColor: '#251605'
  }
}

export default class Appbar extends Component {
	render() {
		return (
      <div>
        <Container fluid style={styles['container']}>
          <Header 
            as='h6' 
            style={styles['header']}
          >
            All Rights Reserved
          </Header>
        </Container>
      </div>
		);
	}
}
