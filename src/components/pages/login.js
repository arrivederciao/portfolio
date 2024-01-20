import React, { useState } from 'react';
import '../../assets/login.css';
import Tilt from 'react-parallax-tilt';
const Login = () => {


    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState(undefined);



    const trueUsername = "elifosso";
    const truePassword = "123";



    const HandleLogin = () => {
        let message = "";
    
        switch (true) {
            case username === undefined || username === "":
                message = "Lütfen kullanıcı adı giriniz";
                break;
            case password === undefined || password === "":
                message = "Lütfen şifre giriniz";
                break;
            case password !== truePassword:
                message = "Şifre yanlış. Lütfen tekrar deneyin";
                break;
            case username !== trueUsername:
                message = "Kullanıcı adına ait bir hesap bulunamadı";
                break;
            default:
                message = "Hoş geldiniz";
        }
    
        setErrorMessage(message);
    };
    


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

                <Tilt className='login-tilt' tiltEnable={true} glareEnable={true} glareMaxOpacity={0.4} glareColor="gray" glarePosition="all" tiltMaxAngleX="1" tiltMaxAngleY="1">
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
                </Tilt>





            </div >





        </>
    )
}
export default Login;