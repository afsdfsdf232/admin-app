<!-- 项目笔记 -->
一、按需引入antUI库
  1. yarn add antd
  2. yarn add react-app-rewired customize-cra babel-plugin-import
二、安装路由
  1. yarn add react-router-dom
三、 高阶函数
  1. 一类特别的函数
       a. 接受函数类型的参数
       b. 返回值是函数
  2. 常见
       a. 定时器
       b. Promise: Promise(()=>{}) then(value => {}, reason => {})
       c. 数组遍历的相关方法： forEach() filter() readuce() find() ...
       d. 函数对象的bind()
       e. Form.create()
  3. 高阶函数更加动态，更加具有动态性
四、高阶组件
  1. 本质就是一个函数
  2. 接收一个组件(被包装组件)，返回一个新组件(包装组件),包装组件会向被包装组件传入特定属性
  3. 作用：用来扩展组件
  4. 高阶组件也是一个高阶函数：接收一个组件函数，返回新的组件函数