import React, {useState} from 'react';

function Form(){
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="formbox">  
            <div className="formHeader">
                <h5>sign up</h5>
            </div>
            <div className="createAccount"> 
                <h2>Create your account</h2>
            </div>
            <div className="smallText">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="thirdPartySignup">
                <div className="googleSignup">
                    <button className="thirdPartyButtonGoogle">
                        <i className="fa fa-google"></i> Sign up with Google
                    </button>
                </div>
                <div className="facebookSignup">
                    <button className="thirdPartyButton">
                        <i className="fa fa-facebook"></i> Sign up with Facebook
                    </button>
                </div>
            </div>
            <div className="or">
                <p><span>or</span></p>
            </div>
            <form>
                <div className="inputFieldHolder">
                    <input class="inputField" type="text" name="fname" value={fname} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                </div>
                <div className="inputFieldHolder">
                    <input class="inputField" type="text" name="lname" value={lname} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                </div>
                <div className="inputFieldHolder">
                    <input class="inputField" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                </div>
                <div className="inputFieldHolder">
                    <input class="inputField" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>
            </form>
            <div className="tnc">
                <p>By clicking Sign Up, you agree to our <a href="/">Terms of Use</a> and <a href="/">Privacy Policy.</a></p>
            </div>
            <button className="signUp">
                SIGN UP
            </button>
        </div>
    )
}

export default Form;
