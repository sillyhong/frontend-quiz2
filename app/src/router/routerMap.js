import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'


import App from '../containers'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' >
                    <IndexRoute component={App}></IndexRoute>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
