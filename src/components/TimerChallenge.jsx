import { useRef, useState } from "react";
let timer;

export default function TimerChallenge({ tittle, targetTime }) {
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  if (isTimerStarted) {
    timer = setTimeout(() => {
      console.log("hello");
      setIsTimerStarted(false);
    }, targetTime * 1000);
  } else if (!isTimerStarted) {
    clearTimeout(timer);
  }

  function handleStartTimer() {
    setIsTimerStarted(true);
  }

  function handleStopTimer() {
    setIsTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{tittle}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={isTimerStarted ? handleStopTimer : handleStartTimer}>
        {isTimerStarted ? "Stop Timer" : "Start Challenge"}
      </button>
      <p className={isTimerStarted ? "active" : undefined}>
        {isTimerStarted ? "Time is Running..." : "Timer Inactive"}
      </p>
    </section>
  );
}
