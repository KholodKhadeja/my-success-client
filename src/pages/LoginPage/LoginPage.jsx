import "./LoginPageStyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
    return (
        <div>
               <span>
                 <TitleFunction text={"התחברות"}/></span>

                 <Form>
                <img className="register-img" src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/logo.png?raw=true" />
      <br/>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control className="form-controll" type="text" placeholder="דואר אלקטרוני"/>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control className="form-controll" type="password" placeholder="סיסמה" />
      </Form.Group>
      <Button variant="primary" type="submit" className="register-btn">
  התחברות
      </Button>
    </Form>
        </div>
    );
}

export default LoginPage;
