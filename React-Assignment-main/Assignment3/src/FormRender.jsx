import { useState } from "react";
import Form from "./Form.jsx";
import "./Form.css";

export default function FormRender() {
  const [info, setInfo] = useState([
    {
      username: "Tejaswi Sen",
      email: "tejaswi@example.com",
      mob: "9876543210",
      tech: "MERN Stack",
      text: "Enrolled in Full Stack Development batch."
    }
  ]);

  function addnewinfo(data) {
    setInfo((prev) => [data, ...prev]);
  }

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <h1>Registration Portal</h1>
        <p>Assignment 3 - Dynamic Form & Submissions</p>
      </header>

      <div className="container">
        <div className="left">
          <Form addnewinfo={addnewinfo} />
        </div>

        <div className="right">
          <div className="submissions-header">
            <h2>Submitted Records ({info.length})</h2>
          </div>

          {info.length === 0 ? (
            <div className="empty-state">
              <p>No registrations submitted yet. Fill the form to add one!</p>
            </div>
          ) : (
            <div className="cards-list">
              {info.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <h3>{item.username}</h3>
                    {item.tech && <span className="tech-badge">{item.tech}</span>}
                  </div>

                  <div className="card-body">
                    <div className="info-row">
                      <span className="info-label">Email</span>
                      <span className="info-val">{item.email}</span>
                    </div>

                    <div className="info-row">
                      <span className="info-label">Mobile</span>
                      <span className="info-val">{item.mob}</span>
                    </div>

                    {item.text && (
                      <div className="info-row message-row">
                        <span className="info-label">Message</span>
                        <p className="message-val">{item.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}