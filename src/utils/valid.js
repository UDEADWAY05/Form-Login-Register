export function validForm(state, setIsValid) {
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
}