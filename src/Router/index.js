import {HashRouter as Router,Redirect,Switch,Route} from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home'
import Cart from '../Views/Cart'
import List from '../Views/List'
import Center from '../Views/Center'
import Detail from '../Views/Detail'
import ChaoS from '../Views/ChaoS'
import FengQ from '../Views/FengQ'
import MiaoS from '../Views/MiaoS'
import TeMai from '../Views/TeMai'
import Login from '../Views/Center/Login'
import Register from '../Views/Center/Register'
import React from 'react'

const router = (
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/list" component={List}/>
                <Route path="/center" component={Center}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/chaos" component={ChaoS}/>
                <Route path="/fengq" component={FengQ}/>
                <Route path="/miaos" component={MiaoS}/>
                <Route path="/temai" component={TeMai}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Redirect from="/" to="home"/>
            </Switch>
        </App>
    </Router>
)


export default router;