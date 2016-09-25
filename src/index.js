import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import './styles/app.scss'







import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'



const App = () => {
    return(
        <div className="form">
            <div id="signup">
hello
            </div>

        </div>
    )
};
render(<App/>, document.getElementById('main'))
// ReactDOM.render((
//     <Router history={browserHistory}>
//         <Route path="/" component={App} />
//         <Route path="/sign-in" component={SignUp} />
//         <Route path="/passenger" component={Passenger}/>
//         <Route path="/emergency" component={Emergency}/>
//         <Route path="/modal" component={Modal} />
//
//     </Router>
// ), document.querySelector('.app'));