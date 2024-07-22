import React from "react";
import Typewriter from "typewriter-effect";

function Typewrite() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Engineer",
                    "Developer",
                    "Frontend Developer",
                    "React Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typewrite;
