import React, { Component } from 'react'
import './login.less'
import Logo from './images/logo.png'
import { Form, Icon, Input, Button } from 'antd';
const Item = Form.Item //不能写在import之前
class Login extends Component{
    handleSubmit = (e)=>{
        //阻止事件默认行为，不然会提交表单
        e.preventDefault();
       const form = this.props.form //得到form对象
       //获取表单数据
       const values = form.getFieldsValue();
       console.log('valus:',values);
       //对表单所有数据进行校验
       this.props.form.validateFields((err,values) =>{ //p17 3.16
            console.log('data:',err,values);
            if(!err){//校验成功，
                
            }
       })
    }
    // 验证密码
    validatePwd = (rule, value, callback) =>{
        //规则 被验证的值 回调函数（必须被调用）
        //callback 如果传参表示验证不通过，否则通过
        if(!value){   
            callback('请输入密码')
        }else if(value.length<4){
            callback('密码长度不能小于4位')
        }else if(value.length>12){
            callback('密码长度不能大于12位')
        }else if(/^[a-zA-Z0-9]+s/.test(value)){
            callback('密码格式不正确')
        }else{
            callback()
        }
    }
    render(){
        //具有强大功能的form对象
        const form = this.props.form
        const { getFieldDecorator } = form; //高阶函数
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={ Logo } alt='logo' />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <div>
                        <Form onSubmit={ this.handleSubmit }>
                            <Item>
                                {
                                    getFieldDecorator('username',{ //配置验证对象
                                        rules:[ //声明式验证：直接使用别人定义好的验证规则进行验证
                                            { required: true, whitespace: true, message:"请输入用户名" },
                                            { min: 4, message: "用户名最少4位" },
                                            { pattern: /^[a-zA-Z0-9]+s/, message:"请输入正确格式的用户名"}
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type="user" 
                                            style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="username"
                                        />
                                    )
                                    
                                }
                            </Item>
                            <Item>
                                {
                                    getFieldDecorator('password',{
                                        rules: [
                                            { //使用验证器配置验证
                                                validator: this.validatePwd
                                            }
                                        ]
                                    })(
                                        <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"/>
                                    )
                                    
                                }
                            </Item>
                            <Item>
                               <Button type="primary" htmlType='submit' className='login-form-buttom'>登录</Button>
                            </Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}
//高阶函数、高级组件
//包装Form组件生成新的组件：Form(Login)
//新组建
const WrapLogin = Form.create()(Login) 
export default WrapLogin