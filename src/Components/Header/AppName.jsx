import React from "react";
import ReactCurvedText from "react-curved-text";

const MyComponent = () => {
    return (
      <ReactCurvedText
        width={40}
        height={30}
        cx={190}
        cy={120}
        rx={100}
        ry={100}
        startOffset={100}
        reversed={true}
        text="ChopOklok"
      />
    );
  };
  
  export default MyComponent;