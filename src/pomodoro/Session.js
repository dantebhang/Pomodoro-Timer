import React from "react";
import { secondsToDuration } from "../utils/duration";

function Session({ session, focusDuration, isTimerRunning, breakDuration }){

    return (
        <>
        { session && (
            <div>
              {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
              <div className="row mb-2">
                <div className="col">
                  {/* TODO: Update message below to include current session (Focusing or On Break) total duration
                  conditional to show/hide display */}
                  <h2 data-testid="session-title">
                    {session.label} for {session.label === "Focusing" ? secondsToDuration(focusDuration*60): secondsToDuration(breakDuration*60)} minutes
                  </h2>
      
                  {/* TIMER~!~TODO: Update message below correctly format the time remaining in the current session */}
                  <p className="lead" data-testid="session-sub-title">
                    {secondsToDuration(session.timeRemaining)} remaining
                  </p>
                    {!isTimerRunning && <h3>PAUSED</h3>}
                </div>
              </div>
      
              <div className="row mb-2">
                <div className="col">
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      // TODO: Increase aria-valuenow as elapsed time increases {variable}
                      aria-valuenow={       
                          100-                   
                          (session.timeRemaining) /
                          (session.label === "Focusing" ? focusDuration * 60 : breakDuration * 60) *100
                      }
                      // TODO: Increase width % as elapsed time increases {variable}
                      style={{ 
                          width: `${
                              100-                                                          
                              (session.timeRemaining) /
                              (session.label === "Focusing" ? focusDuration * 60 : breakDuration * 60) *100
                          }%`
                           }} 
                    />
                  </div>
                </div>
              </div>
            </div>
            
        )}
        </>
    )

}

export default Session;