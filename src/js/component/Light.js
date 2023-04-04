import React from "react";

function Light({ color, activeLight, handleChange }) {
    const handleClick = () => {
        handleChange(color);
    }
    return (
        <div className="light"
            style={{ backgroundColor: activeLight === color ? color : "grey" }}
            onClick={() => handleClick(color)}
        />
    );
}

export default Light;