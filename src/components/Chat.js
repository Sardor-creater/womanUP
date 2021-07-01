import React, {useContext, useRef, useState} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Context} from "../index";
import {ChatMessage} from './ChatMessage';

export const Chat = () => {
    const {auth, firestore, firebase} = useContext(Context)
    const down = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      down.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={down}></span>
      </main>
  
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Сообщение" />  
        <button type="submit" disabled={!formValue}> > </button>
      </form>
    </>
    )
};