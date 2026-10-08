import { useState } from "react";

export default function Form({ addnewinfo }) {
    let [formdata, setformdata] = useState({ username: "", email: "", mob: "", tech: "", text: "" })
    let handel = (event) => {
        setformdata((data) => {
            return { ...data, [event.target.name]: event.target.value }
        })
    }

    //validation use state
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
         if (formdata.mob === "") {
            setMobValid(false);
            valid = false;
        } else if (!/^\d{10}$/.test(formdata.mob)) {
            setMobValid(false);
            valid = false;
        } else {
            setMobValid(true);
        }
        if (!/^\d{10}$/.test(formdata.mob)) {
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
    }
    return <>
        <form onSubmit={def}>
            <input type="text" placeholder="Enter your full name" name="username" value={formdata.username} onChange={handel}/>
            {!isNameValid && ( <p style={{ color: "red" }}> Name cannot be empty.</p>)}
            <br></br>
           


            <input type="email" placeholder="Enter your Email" name="email" value={formdata.email} onChange={handel} />
            {!isEmailValid && ( <p style={{ color: "red" }}> Email cannot be empty. </p>)}
            <br></br>
            
            

            <input type="tel" placeholder="Enter your Mob. No." name="mob" value={formdata.mob} onChange={handel} />

            {!isMobValid && (
                <p style={{ color: "red" }}>
                    {formdata.mob === ""
                        ? "Mobile number cannot be empty."
                        : "Mobile number must be exactly 10 digits."}
                </p>
            )}
            <br></br>
            <input id="mern" type="radio" value="MERN Stack" name="tech" checked={formdata.tech === "MERN Stack"} onChange={handel}></input>
            <label htmlFor="mern">MERN Stack</label>

            <input id="data" type="radio" value="Data Analytics" name="tech" checked={formdata.tech === "Data Analytics"} onChange={handel}></input>
            <label htmlFor="data">Data Analytics</label>

            <input id="aiml" type="radio" value="AI/ML" name="tech" checked={formdata.tech === "AI/ML"} onChange={handel}></input>
            <label htmlFor="aiml">AI/ML</label>
            <br></br>
           

            <textarea type="text" placeholder="Enter Your Text" name="text" value={formdata.text} onChange={handel}></textarea>
            <br></br>

            <button>Register</button>
        </form>
    </>
}