$(document).ready(() => {
    let param = new URLSearchParams(window.location.search)
    if ( param.has('search') ) {
        let searchName = param.get('search')
        let heading = "Резултати от търсенето за '".concat(String(searchName) , "'");

        if (searchName === '') {
            heading = "Резултати от търсенето за '".concat( " ", "'");
        }
        console.log(heading)
        $('.target-heading').text(heading);
    }
})
