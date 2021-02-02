function switchFieldset (blockHide, blockShow) {
    $('fieldset.' + blockHide).css('display', 'none');
    $('.nav .active').toggleClass('active');
    $('.nav #' + blockShow).add('active');
    $('fieldset.' + blockShow).css('display', 'flex !important');

    console.log('fieldset.' + blockHide)
    console.log('fieldset.' + blockShow)
    console.log('.nav #' + blockShow)
    console.log('.nav-link')
    console.log('.nav .active')
    console.log('fieldset.' + blockShow)

}

$('.nav-item').click( function () {

    let blockHide = $('.nav .active').attr('id');
    console.log(blockHide)


    switchFieldset(blockHide, this.id);
});

$('button.next').click(function() {


    let blockHide = $(this).parent().parent().attr('data-fieldName');

    let blockShow = $(this).parent().parent().next().attr('data-fieldName');

    switchFieldset(blockHide, blockShow);
});
