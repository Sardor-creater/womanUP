import React, {useContext} from 'react';
import {Context} from "../index";

export const LogoutBtn = () => {
    const {auth} = useContext(Context)
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Выход</button>
    )
};
