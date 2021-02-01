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
