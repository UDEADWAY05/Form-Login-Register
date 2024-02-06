import { useEffect, useState } from "react";
import InputSign from "../components/inputSign";
import RadioField from "../components/radioField";

const SignUpPage = () => {
    const [state, setState] = useState({
        name: "", login: "", email: "", sex: "male",  password: "", copyPassword: ""
    })
    const [isValid, setIsValid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }

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

    const handleChange = (target) => {
        setState(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
                <InputSign
                    label="Имя"
                    type="name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required={true}
                />
                <InputSign
                    label="Ник или Login"
                    type="login"
                    name="login"
                    value={state.login} 
                    placeholder="Ваш login"
                    onChange={handleChange}
                    required={true}
                />
                <InputSign
                    label="Email"
                    type="email"
                    name="email"
                    value={state.email} 
                    placeholder="Ваша почта"
                    onChange={handleChange}
                    required={true}
                 />
                <RadioField
                    label="Пол"
                    options={[
                    { name: "male", value: "male" },
                    { name: "famale", value: "famale" },
                    { name: "Other", value: "other" }
                    ]}
                    onChange={handleChange}
                    value={state.sex}
                    name="sex"
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
                <InputSign
                    label="Повторите пароль"
                    type="password"
                    name="copyPassword"
                    value={state.copyPassword} 
                    placeholder="Ваш пароль"
                    onChange={handleChange}
                    required={true}
                />
                <button type="submit" disabled={!isValid} className="btn">Отправить</button>
        </form>
    );
}
 
export default SignUpPage;