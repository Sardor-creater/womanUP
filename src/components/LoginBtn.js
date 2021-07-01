import React, {useContext} from 'react';
import {Context} from "../index";

export const LoginBtn = () => {
    const {auth, firebase} = useContext(Context)

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button className="sign-in" onClick={signInWithGoogle}>Войти с помощью Google</button>
    )
};