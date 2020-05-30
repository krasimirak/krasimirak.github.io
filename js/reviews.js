$('a[href="#"]').on('click', event => {
    event.preventDefault();
}) 

$('.report').on('click', event => {
    let reportButton = event.currentTarget
    $(reportButton).addClass('true')
    $(reportButton).find('a').text('Успешно докладвахте това ревю')

})