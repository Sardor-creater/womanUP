import React, { useContext } from 'react';
import './App.css';
import {Context} from "./index";

import { useAuthState } from 'react-firebase-hooks/auth';
import {Chat} from './components/Chat';
import {LoginBtn} from './components/LoginBtn';
import {LogoutBtn} from './components/LogoutBtn';
import { Loader } from './components/Loader';

export const App = () => {
  const {auth} = useContext(Context)
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader/>
  }

  return (
    <div className="App">
      <header>
        <h1>WomanUP</h1>
        <LogoutBtn />
      </header>

      <section>
        {user ? <Chat /> : <LoginBtn />}
      </section>

    </div>
  );
}