import 'tachyons'
import 'styling/semantic.less'

import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import HomePage from './pages/Home';

const App = () => 
<Router>
    <div>
        <Route exact path="/" component={HomePage} />
    </div>
</Router>

export default App
