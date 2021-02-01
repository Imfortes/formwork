function validateForm() {
    let allOk = true;
    let validVacancy,
        validSalaryFrom,
        validSalaryTo,
        validPhone,
        validEmail


    let vacancyPattern = new RegExp("^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$")
    let phonePattern = new RegExp("(?:\\+|\\d)[\\d\\-\\(\\) ]{9,}\\d")
    let emailPattern = new RegExp("/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ")
    let salaryOfPattern = new RegExp("#^[0-9]+$#")

    let salaryPattern = new RegExp()

    validVacancy = vacancyPattern.test(document.querySelector('#edit-title').value)
    validPhone = phonePattern.test(document.querySelector('#edit-user-phone').value)
    validEmail = emailPattern.test(document.querySelector('#edit-user-email').value)
    validSalaryFrom = salaryOfPattern.test(document.querySelector('#edit-money').value.toNumber())


    if (!validVacancy || validVacancy.length < 1) {
        alert('vacansy wrong')
        allOk = false;
    }
    if (!validPhone) {
        validPhone.text.replace(phonePattern)
        alert('phone')
        allOk = false
    }
    if (!validEmail) {
        alert('email error')
        allOk = false
    }
    if (!validSalaryFrom || validSalaryFrom !== Number) {
        alert('Неч исло')
        allOk = false;
    }
    else {
        submit()
    }
}
