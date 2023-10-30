import React from "react";
import "./scoreboard.css"
 
export const ScoreBoard = ({scores,xPlaying})=>{
    const {xScores,oScores} = scores;
    return (
        <div className="scoreboard">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>x - {xScores}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>o - {oScores}</span>


        </div>
    )
}