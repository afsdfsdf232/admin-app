import React, { Component } from 'react'
//引入路由 不要hash路由, Switch:某个时间点只匹配一个组件
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// 引入相关的路由页面
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={ Login }></Route>
          <Route path='/' component={ Admin }></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
