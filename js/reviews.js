$('a[href="#"]').on('click', event => {
    event.preventDefault();
}) 

$('.report').on('click', event => {
    let reportButton = event.currentTarget
    $(reportButton).addClass('true')
    $(reportButton).find('a').text('Успешно докладвахте това ревю')

})

$('.add').on('click', event => {
    event.preventDefault();
    let reviewLength = $('textarea').val().length;
    let firstCriteria = $('#first').val();
    let secondCriteria = $('#second').val();
    let thirdCriteria = $('#third').val();
    let fourthCriteria = $('#fourth').val();
    let notAllCriteria = firstCriteria == 0 || secondCriteria == 0 || thirdCriteria == 0 || fourthCriteria == 0;
    console.log($('textarea').val())
    if (reviewLength < 100 && notAllCriteria) {
        alert('Не са попълнени всички критерии на рейтинга. Текстът трябва да съдържа поне 100 символа.')
    }
    else if (reviewLength < 100 && !notAllCriteria) {
        alert('Текстът трябва да съдържа поне 100 символа.')
    }
    else if (reviewLength > 100 && notAllCriteria) {
        alert('Не са попълнени всички критерии на рейтинга.')
    }
    else {
        alert('Успешно добавено ревю.')
        $('textarea').val('')
        $('#first').val(0);
        $('#second').val(0);
        $('#third').val(0);
        $('#fourth').val(0);
        $('.add-review-section').css('display', 'none');
    }
})