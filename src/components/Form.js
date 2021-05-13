import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [data, setData] = useState("");
  const [input, setInput] = useState(false);
  let show;
  if (input) {
    show = alert(`Thanks for Giving your valuable time ${data}`);
  }
  return (
    <div className="form">
      {show}
      <form action="">
        <label>Enter Your Name</label>
        <input
          onChange={(e) => setData(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <label>Enter Your Email</label>
        <input type="email" placeholder="Email" />
        <label>Share your experience</label>
        <textarea cols="30" rows="10" placeholder="Share your experience" />
        <input
          id="submit"
          type="submit"
          onClick={() => {
            setInput(true);
          }}
        />
      </form>
    </div>
  );
}

export default Form;
