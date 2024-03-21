import { useEffect, useState } from "react";
import InputSign from "../components/inputSign";
import { validForm } from "../utils/valid";

const initialState = {
    email: "", password: ""
}

const SignInPage = () => {
    const [state, setState] = useState(initialState)
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        validForm(state, setIsFormValid)
    }, [state.email, state.password])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }

    const handleChange = (target) => {
        setState(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
                <InputSign
                    label="Email"
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Ваша почта"
                    required={true}
                />
                <InputSign
                    label="Пароль"
                    type="password"
                    name="password"
                    value={state.password} 
                    placeholder="Ваш пароль"
                    onChange={handleChange}
                    required={true}
                />
                <button type="submit" disabled={!isFormValid} className="btn">Отправить</button>
        </form>
    );
}
 
export default SignInPage;