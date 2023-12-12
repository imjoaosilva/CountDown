import { motion } from "framer-motion";
import {ClipLoader} from 'react-spinners';
import { useState, useEffect } from 'react'
import './App.css'

import TopImage from './images/top-image.svg'
import RocketImage from './images/rocket.svg'
import Bottom from './images/bottom-image.svg'


function App() {

    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = new Date("January 10, 2024 17:52:00").getTime() - now;
            let seconds = Math.floor(difference / 1000 % 60)
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setCountdown({ days, hours, minutes, seconds });
            setLoading(false);
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    if (loading) {
        return (
            <div className='app2'>
                <motion.div 
                    className="loading"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ClipLoader color={'#6C63FF'} size={50} />
                </motion.div>
            </div>
        )
    }
    return (
        <motion.div
        className='app'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
            <img src={TopImage} alt="" style={{width:'100%'}}/>
            <main className="container">
                <div className="timercontent">
                    <h1>Preparing to launch in...</h1>
                    <div className="timers">
                        <div className="timer">
                            <div className="type">Dias</div>
                            <div className="content">{countdown.days < 10? `0${countdown.days}`: countdown.days}</div>
                        </div>
                        <div className="separator">:</div>
                        <div className="timer">
                            <div className="type">Horas</div>
                            <div className="content">{countdown.hours < 10? `0${countdown.hours}`: countdown.hours}</div>
                        </div>
                        <div className="separator">:</div>
                        <div className="timer">
                            <div className="type">Minutos</div>
                            <div className="content">{countdown.minutes < 10? `0${countdown.minutes}`: countdown.minutes}</div>
                        </div>
                        <div className="separator">:</div>
                        <div className="timer">
                            <div className="type">Segundos</div>
                            <div className="content">{countdown.seconds < 10? `0${countdown.seconds}`: countdown.seconds}</div>
                        </div>
                    </div>
                    <div className="subscribe">Inscreva-se para saber mais sobre o lançamento</div>
                    <button>Inscreva-se</button>
                </div>
                <div className="image">
                    <img src={RocketImage} alt=""/>
                </div>
            </main>
            <div className="bottomimage">    
                <img src={Bottom} alt=""/>
            </div>
        </motion.div>
    )
}

export default App
