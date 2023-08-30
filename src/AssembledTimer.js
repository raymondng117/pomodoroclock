import { useState, useEffect } from "react"
import Timer from "./Timer"

const AssembledTimer = () => {

    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
    const [timerRunning, setTimerRunning] = useState(false);
    const [timerType, setTimerType] = useState('Session');

    const stopAudio = () => {
        const audioElement = document.getElementById("beep");
        audioElement.currentTime = 0;
        audioElement.pause();
        audioElement.load();
    }

    const toggleTimer = () => {
        setTimerRunning(!timerRunning);
    };

    const resetTimer = () => {
        setTimerRunning(false);
        setTimerType('Session');
        setSessionLength(25);
        setBreakLength(5);
        setTimeLeft(25 * 60);
        stopAudio()
    };


    useEffect(() => {
        setTimeLeft(sessionLength * 60)
    }, [sessionLength])

    useEffect(() => {
        let interval;
        if (timerRunning) {
            interval = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft > 0) {
                        return prevTimeLeft - 1;
                    } else {
                        if (timerType === 'Session') {
                            setTimerType('Break');
                            setTimeLeft(breakLength * 60);
                        } else {
                            setTimerType('Session');
                            setTimeLeft(sessionLength * 60);
                        }
                    }
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerRunning, timerType, sessionLength, breakLength]);


    const handleBreakIncrement = () => {
        if (breakLength < 59) {
            setBreakLength(preBreakLength => preBreakLength + 1);
        } else {
            setBreakLength(60);
        }
    };

    const handleBreakDecrement = () => {
        if (breakLength > 1) {
            setBreakLength(preBreakLength => preBreakLength - 1);
        } else {
            setBreakLength(1);
        }
    };

    const handleSessionIncrement = () => {
        if (sessionLength < 59) {
            setSessionLength(preSessionLength => preSessionLength + 1);
        } else {
            setSessionLength(60);
        }
    };

    const handleSessionDecrement = () => {
        if (sessionLength > 1) {
            setSessionLength(preSessionLength => preSessionLength - 1);
        } else {
            setSessionLength(1);
        }
    };


    return (
        <div className="row mt-5">
            {/* Break Length */}
            <div className="col-6 Length-control text-center">
                <div className="display-6" id="break-label">Break Length</div>
                <div className="d-flex justify-content-center">
                    <button className="btn-level m-3" id="break-decrement" onClick={() => handleBreakDecrement()}>
                    <i class="fa-regular fa-circle-up fa-rotate-180 fa-2xl"></i>
                    </button>
                    <div className="btn-level display-4" id="break-length">{breakLength}</div>
                    <button className="btn-level m-3" id="break-increment" onClick={() => handleBreakIncrement()}>
                        <i class="fa-regular fa-circle-up fa-2xl"></i>


                    </button>
                </div>


            </div>

            {/* Session Length */}
            <div className="col-6 Length-control text-center">
                <div className="display-6" id="session-label">Session Length</div>
                <div className="d-flex justify-content-center">
                    <button className="btn-level m-3" id="session-decrement" onClick={() => handleSessionDecrement()}>
                    <i class="fa-regular fa-circle-up fa-rotate-180 fa-2xl"></i>
                    </button>
                    <div className="btn-level display-4" id="session-length">{sessionLength}</div>
                    <button className="btn-level m-3" id="session-increment" onClick={() => handleSessionIncrement()}>
                        <i class="fa-regular fa-circle-up fa-2xl"></i>
                    </button>
                </div>

            </div>

            <Timer timerType={timerType} timeLeft={timeLeft} length={timeLeft} resetTimer={resetTimer} toggleTimer={toggleTimer} timerRunning={timerRunning} />
        </div>


    );
}

export default AssembledTimer;