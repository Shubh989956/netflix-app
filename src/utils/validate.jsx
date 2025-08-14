export const validatedata = (email, password) => {
    const emailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    //const nameValid = /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(name);

    if(!emailValid) return "Email Id is not valid";
    if(!passwordValid) return "Password is not valid";
    //if(!nameValid) return "Name is not valid";

    return null;
}