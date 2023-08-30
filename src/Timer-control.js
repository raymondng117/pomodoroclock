const TimerControl = ({ resetTimer, toggleTimer, timerRunning }) => {

    return (
        <div className="timer-control mt-2 text-center">
            <button id="start_stop" onClick={toggleTimer}>
                {timerRunning ? <i class="fa-regular fa-circle-pause fa-2xl"></i> : <i class="fa-regular fa-circle-play fa-2xl"></i>}
            </button>
            <button id="reset" onClick={resetTimer}>
                <i class="fa-solid fa-rotate fa-2xl"></i>
            </button>
        </div>
    );
}

export default TimerControl;