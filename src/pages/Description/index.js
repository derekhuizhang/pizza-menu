import React, { Component } from 'react'
import { 
  Container, 
  Header, 
  Segment,
  Divider,
  Image
} from 'semantic-ui-react'

const styles = {
  wrapper: {
    paddingTop: '50px',
    padding: '50px'
  },
  container: {
    width: '700px',
    margin: '0 auto'
  }
}

export default class Description extends Component {
	render() {
		const {
			item
		} = this.props.childProps
	
		return (
			<div style={styles['wrapper']}>
        <Container style={styles['container']}>
          <Segment>
            <Header as='h1' textAlign='center'>
              { item['title'] }
            </Header>
            <Divider />
      	    <Image  
              src={item['image']} 
              size='large'
              centered
            />
            <Divider />
            <div> 
            	{ item['description'] }
            </div>
            <Divider />
            <a href='/'>
            	<p>
            		Back
            	</p>
            </a>
          </Segment>
        </Container>
      </div>
		);
	}
}
