import React, { useState } from 'react';
import '../../assets/login.css';
const Login = () => {


    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState(undefined);



    const trueUsername = "elifosso";
    const truePassword = "123";



    const HandleLogin = () => {

        if (username === undefined) {
            setErrorMessage("lutfen kullanici adi giriniz")
        }
        else if (password === undefined) {
            setErrorMessage("lutfen sifre giriniz")
        }


        else if (password !== truePassword) {
            setErrorMessage("Sifre Yanlis. Lutfen tekrar deneyin")
        }
        else if (username !== trueUsername) {
            setErrorMessage("Kullanici adi Yanlis. Lutfen tekrar deneyin")
        }
        else {
            setErrorMessage("hosgeldiniz");
        }


    }


    const HandleErrorMessage = () => {


        if (errorMessage === undefined) {
            return
            <></>;

        }
        else {
            return (
                <label className="login-error-message">
                    {errorMessage}
                </label>
            )
        }
    }

    return (
        <>
            <div className="login-container">

                <div className="login-wrapper">

                    <div className="login-input-wrapper">
                        <label>
                            Username:
                        </label>
                        <input type="text"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }
                            } />
                    </div>

                    <div className="login-input-wrapper">
                        <label>
                            Password:
                        </label>
                        <input type="password" onChange={(e) => {
                            setPassword(e.target.value)
                        }
                        } />
                    </div>




                    <div className="login-input-button" onClick={() => { HandleLogin() }}>
                        Giris yap
                    </div>



                    {errorMessage &&
                        <label className="login-error-message">
                            {errorMessage}
                        </label>
                    }






                </div>




            </div >





        </>
    )
}
export default Login;