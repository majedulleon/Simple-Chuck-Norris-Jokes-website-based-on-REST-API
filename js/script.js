//http://www.icndb.com/api/
//Using AJAX to get Data

document.getElementById('get_data').addEventListener('click', loadJokes);
function loadJokes(e) {
    let cata = document.getElementById('catagory').value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.chucknorris.io/jokes/random?category=${cata}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let joke = data.value;
            console.log(joke);
            document.getElementById("joke_view").innerHTML = joke;

        }
    }
    xhr.send();
}
