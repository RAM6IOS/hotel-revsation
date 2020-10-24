import React, { useContext } from "react";
import Heroroms from "../Compnent/heroroms";
import UserContext from "./UesrContext";

function Romse() {
    const value = useContext(UserContext);
    return (
        <div>
            <Heroroms />
            {value.map((val, index) => (
                <div>
                    <h3>{val.icon}</h3>
                    <p>{val.names}</p>
                </div>
            ))}
        </div>
    );
}

export default Romse;
