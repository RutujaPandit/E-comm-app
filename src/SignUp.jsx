import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css";

const SignUp = () => {
    const [form, setForm] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    const handleClick = (e) => {
        e.preventDefault();
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((user) => console.log(user))
            .catch(err => console.log(err))
    }
    return (
        <>
        <div className="container">
        <form>
        <h2 id="h2s">Sign Up</h2>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" value={form.email} name="email" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" value={form.password} name="password" onChange={handleChange}></input>
            </div>
            <button id="btn1"type="submit" className="btn-btn-default" onClick={handleClick}>Sign Up</button>

        </form>
        </div>
        </>
    )
}

export default SignUp;
