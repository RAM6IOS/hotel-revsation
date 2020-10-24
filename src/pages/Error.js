import React from "react";
import Heroerror from "../Compnent/heroerror";
import "../Compnent/Navber.css";
function Error() {
    return (
        <>
            <header className="imageovar">
                <Heroerror
                    titel={404}
                    texst={"Page Not Found"}
                    butons={"RETURN HOME"}
                    tos={"/"}
                ></Heroerror>
            </header>
        </>
    );
}

export default Error;
