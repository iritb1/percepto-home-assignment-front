// import logo from './logo.svg';
// import './App.css';

// import { ChatEngine } from "react-chat-engine";
// import io from 'socket.io-client';
import './App.css';
import {Form, Input, Button} from "antd";
import axios from 'axios';
import * as React from 'react';
import Chat from './components/chat';


function App() {
    const [user, setUser] = React.useState('');
    React.useEffect(() => {
        console.log(user)
    },[user])

    const [changeView, setChangeView] = React.useState(false);

    React.useEffect(() => {
        console.log(changeView)
    },[changeView])

// login and connectiong to server
function login(){
    console.log('login')
    console.log(user)
    axios.post('http://localhost:8080/user/login', {username:user}).then((response) => {
        setChangeView(response.data.success);
    })
}
//   creating login page
  return (
      <div className="app">
          {!changeView ? (<body className="app-header">
              <Form className="login-form">
                  <Form.Item label='User Name' name='username' className="user">
                      <Input placeholder='User name' required value={user} onChange={e => setUser(e.target.value)}></Input>
                  </Form.Item>
                  <Form.Item>
                      <Button block type='primary' htmlType='submit' onClick={login}>Log In</Button>
                  </Form.Item>
              </Form>
          </body>):
          <Chat username={user}/>}   
      </div>
  );
}


export default App;

