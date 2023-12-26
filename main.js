const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenum = document.getElementById("phonenum");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// Add Event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
})
// send data
const sendData = (fullnameVal, sRate, count) => {
    if (sRate === count) {
        alert("Registration Successful")
        Swal.fire({
            title: "Congratulations! " + "\n" + fullnameVal,
            text: "Registration Successful!",
            icon: "success",
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'custom-confirm-button-class',
            }
        });
    }
}

// Final Validation
const successMsg = (fullnameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            let sRate = 0 + i;
            sendData(fullnameVal, sRate, count);
        } else {
            return false;
        }

    }
}

// Email Validation
const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

// validiate Function
const validate = () => {
    const fullnameVal = fullname.value.trim();
    const emailVal = email.value.trim();
    const phonenumVal = phonenum.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // validation fullname
    if (fullnameVal === "") {
        setErrorMsg(fullname, 'Please Enter Your Full Name');
    } else if (fullnameVal.length <= 5) {
        setErrorMsg(fullname, 'Full Name must be at least 6 characters long');
    } else {
        setSuccessMsg(fullname);
    }
    // validation email
    if (emailVal === "") {
        setErrorMsg(email, 'Please Enter Your Email');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Please Enter Your Valid Email');
    } else {
        setSuccessMsg(email);
    }
    // validation Phone Number
    if (phonenumVal === "") {
        setErrorMsg(phonenum, 'Please Enter Your Phone Number');
    } else if (phonenumVal.length != 11) {
        setErrorMsg(phonenum, 'Please Enter Your Valid Phone Number');
    } else {
        setSuccessMsg(phonenum);
    }
    // validation password
    if (passwordVal === "") {
        setErrorMsg(password, 'Please Enter Your Password');
    } else if (passwordVal.length <= 6) {
        setErrorMsg(password, 'Password must be at least 8 characters long');
    } else {
        setSuccessMsg(password);
    }
    // validation Confirm Password
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'Please Confirm Your Password');
    } else if (passwordVal !== cpasswordVal) {
        setErrorMsg(cpassword, 'Please double-check and try again');
    } else {
        setSuccessMsg(cpassword);
    }
    successMsg(fullnameVal);
}
// Error , Success Msgs
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
};