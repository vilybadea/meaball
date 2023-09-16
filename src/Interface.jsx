import { useKeyboardControls } from "@react-three/drei";
import useGame from "./stores/useGame.jsx";
import { addEffect } from "@react-three/fiber";
import { useRef, useEffect } from "react";


export default function Interface() {
  const time = useRef()
  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase)

  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  useEffect(() => {
    addEffect(()=>{
      console.log('tick')
    })
  }, [])

  return (
    <div ref={time} className="interface">
      {/* Time */}
      <div className="time">0.00</div>
      {/* Restart */}
      {phase === 'ended' ? <div className="restart" onClick={restart}>Click to Restart</div> : null}
      {/* Controls */}
      <div className="controls">
        <div className="raw">
          <div className={`key ${forward ? "active" : ""}`}>W</div>
        </div>
        <div className="raw">
          <div className={`key ${backward ? "active" : ""}`}>A</div>
          <div className={`key ${leftward ? "active" : ""}`}>S</div>
          <div className={`key ${rightward ? "active" : ""}`}>D</div>
        </div>
        <div className="raw">
          <div className={`key large ${jump ? "active" : ""}`}>Space - Jump</div>
        </div>
      </div>
    </div>
  );
}
