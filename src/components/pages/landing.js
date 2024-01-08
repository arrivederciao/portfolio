import React, { useState, useEffect } from 'react';
import '../../assets/landing.css';
const Landing = () => {

    const [elifinSevgiKatsayisi, setElifinSevgiKatsayisi] = useState(0);
    const [degisken, setDegisken] = useState([]);

    const buttonmethodu = () => {
        setElifinSevgiKatsayisi(elifinSevgiKatsayisi + 1)
    }

    const randomCumleOlustur = () => {
        const cumleler = [
            "elifin sevgi katsayisi degisti",
            "elifi cok seviyorum",
            "elif merte vermeyi hic sevmiyo sevse merte girerdi",
            "Bu bir random cumle",
            "React harika bir kütüphanedir",
            "JavaScript öğrenmek eğlencelidir",
        ];

        const randomIndex = Math.floor(Math.random() * cumleler.length); //random methodu bunu siktiret
        return cumleler[randomIndex];
    }

    useEffect(() => {
        setDegisken(prevDegisken => [...prevDegisken, randomCumleOlustur()]);
    }, [elifinSevgiKatsayisi]);



    return (
        <div className="landing-container">

            <button onClick={() => {

                buttonmethodu();


            }}>elifin sevgi katsayisi : {elifinSevgiKatsayisi}</button>

            <div>
                <h2>Değişkenler:</h2>
                <ul>
                    {degisken && degisken.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default Landing;