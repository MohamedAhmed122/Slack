import React from "react";

import "./StyleLogin.css";

import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import firebase  from "../../Firebase/firebaseConfig";
import { userSignIn } from "../../redux/Auth/AuthAction";

const Login = () => {
    const signIn = (selectedProvider) => {
        socialLogin(selectedProvider);
    };

    const dispatch = useDispatch();
    const socialLogin = async (selectedProvider) => {
        let provider;
        const auth = firebase.auth();
        if (selectedProvider === "facebook") {
        provider = new firebase.auth.FacebookAuthProvider();
        }
        if (selectedProvider === "google") {
        provider = new firebase.auth.GoogleAuthProvider();
        }
        if (selectedProvider === "github") {
            provider = new firebase.auth.GithubAuthProvider()
            console.log(provider);
            }
        try {
        const result = await auth.signInWithPopup(provider);
        console.log(result.user);
        dispatch(userSignIn(result.user));
        } catch (error) {
        console.log(error);
        }
    };
    return (
        <section className="login">
        <div className="logo-container">
            <img src='https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif' alt="logo"  className='img'
            
            />
        </div>
        <div>
            <Button
            variant="outlined"
            className="sign-btn"
            type="submit"
            style={{backgroundColor:  '#F4511E'}}
            onClick={() => signIn("google")}
            >
            Sign in With google
            </Button>
            <br />
            <Button
            variant="outlined"
            className="sign-btn"
            type="submit"
            onClick={() => signIn("facebook")}
            >
            Sign in With Facebook
            </Button>
            < br />
            <Button
            variant="outlined"
            className="sign-btn"
            type="submit"
            style={{backgroundColor:  'black'}}
            onClick={() => signIn("github")}
            >
            Sign in With Github
            </Button>
        </div>
        </section>
    );
};
export default Login;