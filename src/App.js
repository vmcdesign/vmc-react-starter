import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Layout } from './components/layout'
import { GlobalStyles } from './GlobalStyles'
import { Theme } from './Theme'
import { ThemeStore } from './store/ThemeStore'

import { Home } from './views/Home'
import { SamplePage } from './views/SamplePage'

import './App.css'

const App = props => {
  return (
    <Router>
      {/* Theme controller */}
      <ThemeStore>
        {/* Theme provider */}
        <Theme>
          <GlobalStyles />
          <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/sample-page">
                  <SamplePage />
                </Route>
              </Switch> 
            </Layout>
          </div>
        </Theme>
      </ThemeStore>
    </Router>
  )
}

export default App
