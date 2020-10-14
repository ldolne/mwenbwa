import React from "react";
import Logentry from "./logentry";

function Gamelog(props) {
    return (
        <div className="gamelog center-modal flex-col pad-med border bgc-prim">
            <h1>Game Log</h1>
            <ul className="gamelogFlex">
                {props.state.gamelog.map(entry => (
                    // <li>It works</li>
                    <Logentry key={entry.user_id._id} entry={entry} />
                ))}
            </ul>
        </div>
    );
}

export default Gamelog;
