import React from "react";
import "./Pin.css";

function Pin(props) {
  let sizePin = "medium";

  let { urls } = props;

  console.log("what's in props of pin =>", props);
  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container ${sizePin}`}>
          <img src={urls?.regular} alt="pin" />
        </div>
      </div>
    </div>
  );
}

export default Pin;
