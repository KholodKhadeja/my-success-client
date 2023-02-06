import "./RegisterPageStyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterPage = () => {
    return (
        <div>
            <span>
                 <TitleFunction text={"הירשם למערכת"}/></span>
              <Form>
                <img className="register-img" src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/logo.png?raw=true" />
      <br/>
      <Form.Group className="mb-2 names-div" controlId="formBasicName">
        <Form.Control className="form-controll short-input" type="text" placeholder="שם פרטי" />     
        <Form.Control className="form-controll short-input" type="text" placeholder="שם משפחה" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control className="form-controll" type="text" placeholder="דואר אלקטרוני"/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control className="form-controll" type="text" placeholder="אימות דואר אלקטרוני"/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control className="form-controll" type="password" placeholder="סיסמה" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPasswordVer">
        <Form.Control className="form-controll" type="password" placeholder="אימות סיסמה" />
      </Form.Group>
      <Form.Group className="mb-2 names-div" controlId="formBasicName">
      <Form.Select aria-label="Default select example" className="short-input form-controll">
      <option>בחר תפקיד</option>
      <option value="1">מורה</option>
      <option value="2">תלמיד</option>
    </Form.Select>
    <Form.Control id="class-input" className="form-controll short-input" type="text" placeholder="כיתה" />
    <Form.Control id="specialization-input" className="hidden form-controll short-input" type="text" placeholder="התמחות" />
    </Form.Group>
      <Button variant="primary" type="submit" className="register-btn">
       רשום אותי!
      </Button>
    </Form>
</div>
    );
}

export default RegisterPage;
