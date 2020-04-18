import React, { useState } from "react";

const Toggler = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [desc, setDesc] = useState(props.desc);

  const renderJSX = () => {
    if (isClicked) {
      return (
        <div>
          <input type="text" onChange={(e) => setDesc(e.target.value)} />
          <div onClick={() => setIsClicked(!isClicked)}>
            <span>
              <button>save</button>
            </span>
            <span>
              <button>X</button>
            </span>
          </div>
        </div>
      );
    } else {
      return <div onClick={() => setIsClicked(!isClicked)}>{desc}</div>;
    }
  };

  return <>{renderJSX()}</>;
};

export default Toggler;
