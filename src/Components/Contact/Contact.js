import React, {useState} from "react";

function Contact() {

    const [newAccount, setNewAccount] = useState({
        email: '',
        password: '',
    })
    
    const setAccount = (event) =>{
        setNewAccount({...newAccount, [event.target.name]: event.target.value})
    }

    const accounts = () => {
        JSON.parse(localStorage.getItem('account'));
        localStorage.setItem('account', JSON.stringify(newAccount));
    }

    return(
        <form className="d-flex flex-column align-items-center form-contact justify-content-center">
            <label htmlFor="" >Email</label>
            <input type="text" name="email" className="w-25" value={newAccount.email} onChange={setAccount}/>

            <label htmlFor="">Password</label>
            <input type="password" name="password" className="w-25" value={newAccount.password} onChange={setAccount}/>

            <a className="btn btn-primary w-25 mt-3 mb-5" onClick={accounts}>Add</a>                
        </form>
    )
}

export default Contact;