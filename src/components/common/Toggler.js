import React, { useState } from "react";

const Toggler = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState('')
  const [desc, setDesc] = useState(props.desc);

  const onSubmit=() => {
    props.onSubmit(value);
    setValue("")
  }

  const renderJSX = () => {
    if (isClicked) {
      return (
        <div>
          <input type="text" onChange={(e) => setValue(e.target.value)} autoFocus />
          <div onClick={() => setIsClicked(!isClicked)}>
            <span>
              <button onClick={() => onSubmit()}>save</button>
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
