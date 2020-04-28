import React, { useState } from "react";

const Toggler = (props) => {
  const newValue = props.setNew ? "" : props.desc;
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState(newValue);
  const [desc, setDesc] = useState(props.desc);

  const onSubmit = () => {
    props.onSubmit(value);
    setValue("");
  };

  const renderJSX = () => {
    if (isClicked) {
      return (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
          <div onClick={() => setIsClicked(!isClicked)}>
            <span>
              <button onClick={() => onSubmit()}>save</button>
            </span>
            <span>
              <button>X</button>
            </span>
          </div>
        </>
      );
    } else {
      return <span onClick={() => setIsClicked(!isClicked)}>{desc}</span>;
    }
  };

  return <>{renderJSX()}</>;
};

export default Toggler;
