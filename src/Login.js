import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { auth } from './fb';
import { login } from './features/userSlice';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(login({
                    email: user.user.email,
                    uid: user.user.uid,
                    displayName: user.user.displayName,
                    profileUrl: user.user.photoURL,
                }))
            }).catch(error => {
                console.log(error);
            });
    };
    const register = () => {
        if(!name){
            return alert("Please enter your name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid : userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
            }))
        })
        }).catch((err)=>{alert(err)});
    };

  return (
    <div className="login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWFswJ_LlrSnL7ibh8KxETu2n_tDYDAvk2w2N4w-dQh9xE2tZ5ERtCzMINOH8i8TsNg&usqp=CAU" alt="" />

        <form action="">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name (required if registering)" />
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (Optional)" />
            <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button type='submit' onClick={loginToApp} >Sign In</button>
        </form>
        <p>Not a member?{" "}
            <span className="login_register" onClick={register} >Register Now</span>
        </p>
    </div>
  )
}

export default Login