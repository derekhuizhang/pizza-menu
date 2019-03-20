// Basic
import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

// Menu
import { menuOptions } from './options'

import Menu from './pages/Menu'
import Description from './pages/Description'
import MainLayout from './layouts/MainLayout'

export default class App extends Component {
  render() {
    const menuRoute = (
      <Route exact path = '/' key='home'
        render={ (route) =>
          <MainLayout
            Component={Menu}
            route = '/'
            childProps = {{menuOptions}}
          />
        }
      />
    )
    const descriptionRoutes = menuOptions.map( (item) => {
      return (
        <Route
          exact
          path={'/' + item['name']}
          key={item['name']}
          render={ (route) =>
            <MainLayout
              Component={Description}
              route={item['name']}
              childProps={{item}}
            />
          }
        />
      )
    })
    return (
      <BrowserRouter>
        <Switch>
          { menuRoute }
          { descriptionRoutes }
        </Switch>
      </BrowserRouter>
    )
  }
}
