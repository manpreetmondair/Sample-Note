// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
// Import your Todos and Completed components here...
import Welcome from './Welcome'
import Addnote from './Addnote'
import Existingnotes from './Existingnotes'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
             
                <Route path="/" component={Welcome} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/addnote" component={Addnote} />
                <Route path="/existingnotes" component={Existingnotes} />
            </Router>
        </Provider>
    }
}

export default Routes
    // <Route path="/" component={Todos} />