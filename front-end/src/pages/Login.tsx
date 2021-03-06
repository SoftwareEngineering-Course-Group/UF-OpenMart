import { Button, Form, Image,Message,Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { getInfo, login } from '../utils';
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import Menu from '../components/Menu'
const Login = () => {
    
    const[sta , setSta] = useState('success')
    const[displayMoel , setDisplay] = useState(false)
    const navigate = useNavigate();
    const onFinish = (data: any) => {
        console.log(data);
        login(data)
          .then(response => {
                setSta('success')
                setDisplay(true)
                localStorage.setItem("logStatus","true")
                localStorage.clear()
                for(var key in response){
                    if(key==="token"){
                        localStorage.setItem("jwtToken",response[key]);
                        console.log(response[key]);
                    }
                    if(key==="id"){
                      localStorage.setItem("user-id",response[key]);
                      console.log(response[key]);
                    }
                    if(key==="id"){
                      localStorage.setItem("myId",response[key]);
                      console.log(localStorage.getItem('myId'));
                    }

                }
                getInfo().then(response => {
                  for(var key in response){
                      if(key==="email"){
                          localStorage.setItem("email",response[key]);
                          console.log(response[key]);
                      }
                      if(key==="name"){
                        localStorage.setItem("name",response[key]);
                        console.log(response[key]);
                      }
                  }
                  navigate('/profile');
            }).catch((err) => {

            })             
          }).catch((err) => {
              setSta('failed')
              setDisplay(true)
            //   console.log(displayMoel)
          })
      }
    const { register, handleSubmit} = useForm();
      
      return (
        <>
        <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>Welcome</h2>
        </div>
        <Form style={{display:'flex', flexDirection:'column',justifyContent: 'center'
        ,alignItems:'center',flexWarp:'wrap',marginTop:'2%'}} onSubmit={handleSubmit(onFinish)}>
        
        <Form.Field width={8}>
          <label>Email</label>
          <input {...register("email")} placeholder='Email' />
          {/* {errors.input1 && <Label pointing color='red'>{errors.input1}</Label>} */}
        </Form.Field >
        <Form.Field width={8}>
          <label>Password</label>
          <input type='password' {...register("password")} placeholder='password' />
        </Form.Field >
        <Button htmltype='submit' style={{marginTop:'2%'}}>Login</Button>
        </Form>
        <Message attached='bottom' warning style = {{width:'50%' , textAlign:"center" , margin:"auto",marginTop:'10px'}}>
          <Icon name='help' />
          Do not have an account?&nbsp;<a href='/register'>Sign up here</a>&nbsp;instead.
        </Message>
        {
            displayMoel===true ?(
            <div style = {{display:'flex', justifyContent: 'center', marginTop:'2%'}}>
                <Message
                style={{width:'20%', textAlign:'center'}}
                success
                header={sta ==='success' ? 'success':"error"}
                content={sta ==='success' ? 'login successful':"failed to login"} 
                color= {sta==="success" ? 'green':'red'}
                />
            </div>
            
            ):null
        }
        <footer>
          <Menu/>
        </footer>
        </>        
      )
  }
   
  export default Login;