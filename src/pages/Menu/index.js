import React, { Component } from 'react'
import Radium from 'radium'
import { 
  Container, 
  Header, 
  Segment, 
  Divider,
  Image,
  Grid
} from 'semantic-ui-react'

const styles = {
	menuItemSegment: {
	  margin: '20px',
		width: '300px',
		height: '400px'
	 },
	Image: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '80%'
	},
  wrapper: {
    paddingTop: '50px',
    padding: '50px',
    minWidth: '500px'
  }
} 

export default class Menu extends Component {
	render() {
		const { menuOptions } = this.props.childProps

    const menu = menuOptions.map((item) => {
      return (
        <div key={item['name']}>
          <Grid.Column>
         		<a
         			href={'/' + item['name']}
         		>
	            <Segment 
	              padded
	              style={styles['menuItemSegment']}
	            >
	              <div
	                style={{
	                  'height': '300px'
	                }}
	              >
	                <Image 
	                  fluid 
	                  src={item['image']} 
	                  style={styles['Image']} 
	                />
	              </div>
	              <Divider />
	              <Header as='h3' textAlign='center'>
	                {item['title']}
	              </Header>
	            </Segment>
	          </a>
          </Grid.Column>
        </div>
      )
    })
    return (
      <div style={styles['wrapper']}>
        <Container>
          <Segment style={styles['wrapperSegment']}>
            <Header as='h1' textAlign='center'>
              Menu
            </Header>
            <Divider />
            <Grid centered relaxed columns={3}>
              { menu }
            </Grid>
          </Segment>
        </Container>
      </div>
    );

	}
}
