import { useState } from "react";

export default function Form({ addnewinfo }) {
    let [formdata, setformdata] = useState({ username: "", email: "", mob: "", tech: "", text: "" });
    
    let handel = (event) => {
        setformdata((data) => {
            return { ...data, [event.target.name]: event.target.value };
        });
    };

    // Validation state
    let [isNameValid, setNameValid] = useState(true);
    let [isEmailValid, setEmailValid] = useState(true);
    let [isMobValid, setMobValid] = useState(true);

    let def = (event) => {
        event.preventDefault();

        let valid = true;

        // Name Validation
        if (formdata.username.trim() === "") {
            setNameValid(false);
            valid = false;
        } else {
            setNameValid(true);
        }

        // Email Validation
        if (formdata.email.trim() === "") {
            setEmailValid(false);
            valid = false;
        } else {
            setEmailValid(true);
        }

        // Mobile Validation
        if (!/^\d{10}$/.test(formdata.mob.trim())) {
            setMobValid(false);
            valid = false;
        } else {
            setMobValid(true);
        }

        if (!valid) return;

        addnewinfo(formdata);

        setformdata({
            username: "",
            email: "",
            mob: "",
            tech: "",
            text: ""
        });
    };

    return (
        <form onSubmit={def} className="registration-form">
            <h2 className="form-title">Student Registration</h2>
            
            <div className="form-group">
                <label className="input-label">Full Name</label>
                <input 
                    type="text" 
                    placeholder="e.g. Tejaswi Sen" 
                    name="username" 
                    value={formdata.username} 
                    onChange={handel}
                    className={!isNameValid ? "input-error" : ""}
                />
                {!isNameValid && <span className="error-msg">Name cannot be empty</span>}
            </div>

            <div className="form-group">
                <label className="input-label">Email Address</label>
                <input 
                    type="email" 
                    placeholder="e.g. tejaswi@example.com" 
                    name="email" 
                    value={formdata.email} 
                    onChange={handel} 
                    className={!isEmailValid ? "input-error" : ""}
                />
                {!isEmailValid && <span className="error-msg">Email cannot be empty</span>}
            </div>

            <div className="form-group">
                <label className="input-label">Mobile Number</label>
                <input 
                    type="tel" 
                    placeholder="10 digit number" 
                    name="mob" 
                    maxLength="10"
                    value={formdata.mob} 
                    onChange={handel} 
                    className={!isMobValid ? "input-error" : ""}
                />
                {!isMobValid && (
                    <span className="error-msg">
                        {formdata.mob.trim() === "" ? "Mobile number cannot be empty" : "Must be exactly 10 digits"}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label className="input-label">Select Technology</label>
                <div className="radio-group">
                    <label className="radio-label">
                        <input id="mern" type="radio" value="MERN Stack" name="tech" checked={formdata.tech === "MERN Stack"} onChange={handel} />
                        <span>MERN Stack</span>
                    </label>

                    <label className="radio-label">
                        <input id="data" type="radio" value="Data Analytics" name="tech" checked={formdata.tech === "Data Analytics"} onChange={handel} />
                        <span>Data Analytics</span>
                    </label>

                    <label className="radio-label">
                        <input id="aiml" type="radio" value="AI/ML" name="tech" checked={formdata.tech === "AI/ML"} onChange={handel} />
                        <span>AI/ML</span>
                    </label>
                </div>
            </div>

            <div className="form-group">
                <label className="input-label">Message / Notes</label>
                <textarea 
                    placeholder="Write your query or message..." 
                    name="text" 
                    value={formdata.text} 
                    onChange={handel}
                ></textarea>
            </div>

            <button type="submit" className="submit-btn">Register</button>
        </form>
    );
}