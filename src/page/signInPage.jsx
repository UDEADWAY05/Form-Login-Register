import { useEffect, useState } from "react";
import InputSign from "../components/inputSign";

const SignInPage = () => {
    const [state, setState] = useState({
        email: "", password: ""
    })
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const arr = []
        Object.keys(state).map((el) => {
            if (state[el].length > 0) {
                arr.push(el)
            }
        })
        if (arr.length === Object.keys(state).length) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [state])


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
                <button type="submit" disabled={!isValid} className="btn">Отправить</button>
        </form>
    );
}
 
export default SignInPage;