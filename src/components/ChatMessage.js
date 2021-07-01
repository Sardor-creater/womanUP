import React, {useContext} from 'react';
import {Context} from "../index";

export const ChatMessage = (props) => {
    const {auth} = useContext(Context)
    const { text, uid, photoURL } = props.message;

  return (<>
    <div className={`message ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='avatar' />
      <p>{text}</p>
    </div>
  </>)
};
