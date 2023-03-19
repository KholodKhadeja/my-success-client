import "./RegisterPageStyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

const RegisterPage = () => {
  const [userChosenRole, setUserChosenRole] = useState(null);
  const [showClass, setShowClass] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);

  const handleRoleChosing = (ev) => {
    setUserChosenRole(ev.target.value);
  };

  useEffect(() => {
    if(userChosenRole === "teacher"){
      setShowClass(false); setShowSpecialization(true);
    }
    if(userChosenRole === "student"){
      setShowClass(true); setShowSpecialization(false);
    }
  }, [userChosenRole]);
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
            placeholder="שם פרטי"
          />
          <Form.Control
            className="form-controll short-input"
            type="text"
            placeholder="שם משפחה" id="lastname"
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="text"
            placeholder="דואר אלקטרוני" id="email"
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="text"
            placeholder="אימות דואר אלקטרוני" id="email"
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="password"
            placeholder="סיסמה" id="password"
          />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control
            className="form-controll"
            type="password"
            placeholder="אימות סיסמה" id="password"
          />
        </Form.Group>
        <Form.Group className="mb-2 names-div" >
          <Form.Select
            aria-label="Default select example"
            className="short-input form-controll"
            value={userChosenRole}
            onChange={handleRoleChosing} id="role"
          >
            <option>בחר תפקיד</option>
            <option value="teacher">מורה</option>
            <option value="student">תלמיד</option>
          </Form.Select>
          {showClass&&(
            <Form.Control
              className="form-controll short-input"
              type="text" id="class"
              placeholder="כיתה"
            /> )}
          {showSpecialization&&(
            <Form.Control
              className="form-controll short-input"
              type="text" id="specialization"
              placeholder="התמחות" /> )}
        </Form.Group>
        <Button variant="primary" type="submit" className="register-btn">
          רשום אותי!
        </Button>
      </Form>
      <br />
    </div>
  );
};

export default RegisterPage;
