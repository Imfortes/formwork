let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};


ready(() => {
    tabs()
    validateForm()
    isCheck('reg')
    isCheck('payType')
});

function nextStep(n) {

    let currentTab = 0;
    var headerTabsArray = document.getElementsByClassName('#myTab a')
    var headerTabContentArray = document.getElementsByClassName('#myTab a')
    var tabsArray = document.getElementsByClassName('pane-for-step')
    var tabContentArray = document.getElementsByClassName('pane-for-step > div')

    for (let i = 0; i < tabsArray.length; i++) {
        console.log(tabsArray[currentTab + n])

    }

    let htmlColtoArr = [].slice.call(tabsArray)

    console.log([].slice.call(tabsArray))
    console.log([].slice.call(tabContentArray))

    htmlColtoArr.map((item, index) => {
        let currentTab = index

        if (item.classList.contains('active')) {
            console.log('item', item)
            item += 1
        }

        const btn = document.querySelector('#nextStepRegister')

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            validateForm()
            currentTab += 1
            console.log('currentTab', currentTab)
        })
    })


    currentTab += n


}

// function phone(name) {
//     "use strict";
//     var r = /([0-9])+/g, arr = name.match(r), res, str = arr.join('');
//     if (name.substr(0, 1) === '+') {
//         res = "+" + str;
//     } else if (str.substr(0, 1) === '8') {
//         res = "+7" + str.substr(1);
//     } else {
//         res = str;
//     }
//     return res;
// }



function tabs() {
    var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))

    triggerTabList.forEach(function (triggerEl) {
        var tabTrigger = new bootstrap.Tab(triggerEl)
        triggerTabList[0].style.backgroundColor = '#6db744'
        triggerTabList[0].style.color = '#ffffff'

        triggerEl.addEventListener('click', function (event) {
            event.preventDefault()
            tabTrigger.show()
        })
    })
}

function isCheck(name) {
    return document.querySelector('input[name="' + name + '"]:checked')
}
