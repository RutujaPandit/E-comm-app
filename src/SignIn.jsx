import {useState} from 'react'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css";
const SignIn = ({setUser}) => {

    const [form, setForm] = useState({ email: "", password: "" })

    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, form.email, form.password)
        .then((user) => setUser(user))
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            })
    }
    return (
        <>
        
        <div className='container'>
        <form id="form">
        <h2 id="h2s">Sign In</h2>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" value={form.email} name="email" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" value={form.password} name="password" onChange={handleChange}></input>
            </div>
            <button id="btn1" type="submit" className="btn-btn-default" onClick={handlesubmit}>Sign in</button>

        </form>
        </div>
        </>
    )

}

export default SignIn
