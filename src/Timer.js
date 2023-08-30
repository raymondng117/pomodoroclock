import TimerControl from "./Timer-control";
import { useEffect } from "react";

const Timer = ({ timerType, timeLeft, resetTimer, toggleTimer, timerRunning}) => {

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const playAudio = () => {
        const audioElement = document.getElementById("beep");
        audioElement.currentTime = 0;
        audioElement.load();
        audioElement.play()

    };

    useEffect(() => {
        if (timeLeft === 0) {
            playAudio();
        }
    }, [timeLeft]);


    return (
        <div className="timer mt-5">
            <div className="timer-wrapper text-center">
                <div className="display-4" id="timer-label">{timerType}</div>
                <div className="display-1" id="time-left">{formatTime(timeLeft)}</div>
                <audio src={process.env.PUBLIC_URL + "/beep.mp3"} id="beep"></audio>

            </div>

            <TimerControl resetTimer={resetTimer} toggleTimer={toggleTimer} timerRunning={timerRunning}/>

        </div>
    );
}

export default Timer;