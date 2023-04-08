import "./LoginPageStyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef, useEffect } from "react";
import loginSchema from "../../validation/login.validation";
import validate from "../../validation/validation";
import axios from "axios";
import { toast } from "react-toastify";
import useAutoLogin from "../../hooks/useAutoLogin";
import { useHistory } from "react-router-dom";


const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  }); 
  const emailRef = useRef();
  const history = useHistory();
  const autoLoginFunction = useAutoLogin();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleUserInputChange = (ev) => {
    ev.preventDefault();
    let newUserInput = JSON.parse(JSON.stringify(userInput)); 
    newUserInput[ev.target.id] = ev.target.value;
    setUserInput(newUserInput); 
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { error } = validate(userInput, loginSchema);

    axios.post("/auth/login", userInput).then(async (res) => {
      toast.success('ההתחברות הסתיימה בהצלחה', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        localStorage.setItem("token", res.data.token);
        autoLoginFunction(res.data.token);
        history.push("/home");
      })
      .catch((err) => {
        toast.error(`${err}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
      if (error) {
        let errorMsgs = "";
        for (let errorItem of error.details) {
          switch (errorItem.type) {
            case "string.min":
              errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
              break;
            case "string.max":
              errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
              break;
            default:
              errorMsgs += "something went wrong,";
              break;
          }
        }
        toast.error(errorMsgs, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
  };

  const handleEmailInputInvalid = (ev) => {
    // ev.preventDefault();
  };
    return (
     <div>
       <span><TitleFunction text={"התחברות"}/></span>
<Form>
<img className="register-img" src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/logo.png?raw=true" />
      <br/>
      <Form.Group className="mb-2">
        <Form.Control className="form-controll" type="text" placeholder="דואר אלקטרוני" id="email" value={userInput.email}
          onChange={handleUserInputChange}
          onInvalid={handleEmailInputInvalid}
          ref={emailRef} />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control className="form-controll" type="password" placeholder="סיסמה" id="password" value={userInput.password} 
        onChange={handleUserInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" className="register-btn" onClick={handleSubmit}>
  התחברות
      </Button>
    </Form>
        </div>
    );
}

export default LoginPage;
