const incNumber = (num) => {
    return {
        type: "Increament",
        payload: num
    }
}

const decNumber = () => {
    return {
        type: "Decreament"
    }
}

export {incNumber,decNumber}