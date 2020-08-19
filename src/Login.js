import React from 'react';
import {auth, provider} from './firebase';
import { Button } from '@material-ui/core';
import './Login.css';
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

const Login = () => {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error))
        ;
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png" alt=""/>
                <div className="login__text">
                    Sign in to WhatsApp
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
};

export default Login;
