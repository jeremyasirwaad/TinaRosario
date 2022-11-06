import React from "react";
import Typewriter from "typewriter-effect";
export const PreNav = () => {
  return (
    <div className="prenavcontainer">
      <span>
        <Typewriter
          options={{
            strings: [
              "10% OFF ON FIRST ORDER"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};
