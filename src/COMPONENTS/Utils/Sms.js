// import *  as tw from 'twilio'
import React from 'react'
// import { client } from './SmsFunc'

// const accountSid = 'ACe82b98d62f1af62ee4d4906ad815eb19'; 
// const authToken='d34c3a6e54522229a9619fe60a89e11d'
// const client=require('twilio')(accountSid, authToken);
// // export const client=tw(accountSid,authToken)



const Sms = () => {
    const sendMessage=()=>{
        fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            phoneNumber:"+919515235212",
            orderId:"12133232",
            address:"this is the address",
            productName:"productName"
          })
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
          
    }
  return (
    <div>
        <h1>sms</h1>
        <button onClick={sendMessage}>send </button>
    </div>
  )
}

export default Sms