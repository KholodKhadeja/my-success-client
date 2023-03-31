import "./RegisterPageStyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const history = useHistory();
  // const [userChosenRole, setUserChosenRole] = useState(null);
  const [showClass, setShowClass] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);
  const [userInput, setUserInput] = useState({
    email:"",
    emailver:"",
    firstname:"",
    lastname:"",
    password:"",
    passwordver:"",
    role:"teacher",
    studentclass:"",
    specialization:"",
    userstatus:true,
    mylessons:[],
    favlessons:[],
    profileImg:"https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/profile-img.png?raw=true"
  });
  const handleUserInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    if (newUserInput.hasOwnProperty(ev.target.id)) {
      newUserInput[ev.target.id] = ev.target.value;
      setUserInput(newUserInput);
    }
  };

  const submitRegisterForm = (ev) =>{
    ev.preventDefault();
    axios.post("/auth/register", {
        email:userInput.email,
        firstname:userInput.firstname,
        lastname:userInput.lastname,
        password:userInput.password,
        role:userInput.role,
        studentclass: userInput.studentclass,
        specialization:userInput.specialization,
        userstatus:userInput.userstatus,
        mylessons:userInput.mylessons,
        favlessons:userInput.favlessons,
        profileImg:userInput.profileImg
      })
      .then((res) => {
        console.log(res);
        toast.success('Registered Successfully', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          });
        history.push("/login");
      })
      .catch((err) => {
        console.log(err)
      });
  }

  // const handleRoleChosing = (ev) => {
  //   setUserChosenRole(ev.target.value);
  // };

  useEffect(() => {
    if(userInput.role === "teacher"){
      setShowClass(false); setShowSpecialization(true);
    }
    if(userInput.role === "student"){
      setShowClass(true); setShowSpecialization(false);
    }
  }, [userInput.role]);
  return (
    <div>
      <span>
        <TitleFunction text={"הירשם למערכת"} />
      </span>
      <Form>
        <img
          className="register-img"
          src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/logo.png?raw=true"
        />
        <br />
        <Form.Group className="mb-2 names-div" id="firstname">
          <Form.Control
            className="form-controll short-input"
            type="text"
            placeholder="שם פרטי" id="firstname" value={userInput.firstname} onChange={handleUserInputChange}
          />
          <Form.Control
            className="form-controll short-input"
            type="text"
            placeholder="שם משפחה" id="lastname" value={userInput.lastname} onChange={handleUserInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="text"
            placeholder="דואר אלקטרוני" id="email" value={userInput.email} onChange={handleUserInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="text"
            placeholder="אימות דואר אלקטרוני" id="emailver" value={userInput.emailver} onChange={handleUserInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="password"
            placeholder="סיסמה" id="password" value={userInput.password} onChange={handleUserInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="password"
            placeholder="אימות סיסמה" id="passwordver" value={userInput.passwordver} onChange={handleUserInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2 names-div" >

          <Form.Select
            aria-label="Default select example"
            className="short-input form-controll"
            value={userInput.role}
            onChange={handleUserInputChange} id="role" >
            <option>בחר תפקיד</option>
            <option value="teacher">מורה</option>
            <option value="student">תלמיד</option>
          </Form.Select>

          {showClass&&(
            <Form.Control
              className="form-controll short-input"
              type="text" id="studentclass" value={userInput.studentclass} onChange={handleUserInputChange}
              placeholder="כיתה"
            /> )}
          {showSpecialization&&(    
            <Form.Control
              className="form-controll short-input"
              type="text" id="specialization"
              placeholder="התמחות" value={userInput.specialization} onChange={handleUserInputChange} /> )}
        </Form.Group>

        <Button variant="primary" type="submit" className="register-btn" onClick={submitRegisterForm}>
          רשום אותי!
        </Button>

      </Form>
      <br />
    </div>
  );
};

export default RegisterPage;
