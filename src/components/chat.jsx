import { Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as React from 'react';
import './chat.css'
//import { initiatSocketConnection, subscribeToChat } from '../services/socketio.service';



function Chat({username}) {
  const [comment, setComment] = React.useState('');
  const { TextArea } = Input;
  const [messages, setMessages] = React.useState([]);

  // React.useEffect(() => {
  //   initiatSocketConnection();
  // },[]);

//   React.useEffect(() => {
//     console.log(comment)
// },[comment])


//addind username before the comment and sending it
function sendComment(){
  console.log(messages)
  let msg = {'username':username,'message':comment};

  setMessages([...messages,msg]);

}
 return(
   <div>
     <div>
       {messages.map((msg) =>
       <p class="message" key={msg}>{msg.username}: {msg.message} <Button type="primary" shape="circle" style={{ marginLeft: '20px' }} icon={<DeleteOutlined />} /></p>)}
     </div>

      <div  className='chat' onChange={e => setComment(e.target.value)}>
        <TextArea rows={4}/>
        <Button type="primary" onClick={sendComment}>send</Button>
      </div>
   </div>
 
  
  );

}

export default Chat;
