import { useState, useRef } from "react";
// import "./styles.css";

export default function StopWatchDemo() {
  const [time, setTime] = useState(0);
  const [isrunning, setIsRunning] = useState(false);
  const currentRef = useRef(null);

  const handleStart = () => {
    if (!isrunning) {
      currentRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    clearInterval(currentRef.current);
    setIsRunning(false);
  };

  const handleResume = () => {
    handleStart();
  };

  const handleReset = () => {
    clearInterval(currentRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>Count Down {time}</h1>
      <button onClick={handleStart} disabled={isrunning}>
        start
      </button>
      <button onClick={handleStop} disabled={!isrunning}>
        stop
      </button>
      <button onClick={handleResume} disabled={isrunning}>
        resume
      </button>
      <button onClick={handleReset} disabled={isrunning}>
        reset
      </button>
    </>
  );
}
