import { useState } from "react";
import Form from "./Form.jsx"
import "./Form.css"

export default function FormRender() {
  const [info, setInfo] = useState([]);

  function addnewinfo(data) {
    setInfo((prev) => [...prev, data]);
  }

  return (
    <>
      <h1>Registration Form</h1>

      <div className="container">
        <div className="left">
          <Form addnewinfo={addnewinfo} />
        </div>

        <div className="right">
          {info.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.username}</h3>

              <p><strong>Email:</strong> {item.email}</p>

              <p><strong>Mobile:</strong> {item.mob}</p>

              <p><strong>Technology:</strong> {item.tech}</p>

              <p><strong>Message:</strong></p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}