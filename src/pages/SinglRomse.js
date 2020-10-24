import React, { useState } from "react";

function SinglRomse() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [styl, setStyl] = useState(false);
    const pushname = () => {
        list.push(name);
        setName(" ");
    };
    const sname = () => {

        setList([])
    };
    const mystyle = {
        color: styl === true ? "red" : "black",

        fontSize: styl === true? "50px":"30px"
    };

    const shang = () => {
        setStyl(()=> !styl)
    };

    return (
        <div>
            <h1>SinglRomse pige</h1>
            <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={pushname}>clik</button>
            <button onClick={sname}>Dlits</button>
            <ul>
                {list.map((lis) => (
                    <li key={lis}>
                        <button onClick={shang} key={lis}>
                            clik
                        </button>
                        <p style={mystyle}>{lis}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SinglRomse;
