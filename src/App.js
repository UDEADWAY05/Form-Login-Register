import './App.css';
import { useState } from 'react';
import SignInPage from './page/signInPage';
import SignUpPage from './page/signUpPage';

function App() {
  const type = "login";
  const [formType, setFormType] = useState(type === "register" ? type : "login");
  const toggleFormType = () => {
    setFormType(prevState => prevState === "register" ? "login" : "register");
  };
  return (
    <div className="body">
        <div className="formDiv">
            {formType === "register"
                ? <>
                    <h3 className="text">Регистрация</h3>
                    <SignUpPage />
                    <p className="text link" onClick={toggleFormType}>Войти в аккаунт</p>
                </>
                : <>
                    <h3 className="text">Вход</h3>
                    <SignInPage />
                    <p className="text link" onClick={toggleFormType}>Зарегистрироваться</p>
                </>}
        </div>
    </div>
  );
}

export default App;
