function validVacancyTitle() {
    let titlePattern = new RegExp('/^[a-zA-Zа-яА-Я\'][a-zA-Zа-яА-Я-\' ]+[a-zA-Zа-яА-Я\']?$/u')
    let myVacancyInput = document.querySelector('#edit-title')
    let valid = titlePattern.test(myVacancyInput)
    myVacancyInput.addEventListener('oninput', () => {
        if (valid) {
            myVacancyInput.classList.remove('is-invalid')
        }
        else {
            myVacancyInput.classList.add('is-invalid')
        }
    })
}
