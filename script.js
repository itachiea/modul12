$(function(){

    var url = 'http://api.icndb.com/jokes/random';
    var button = document.getElementById('get-joke');
    var paragraph = document.getElementById('joke');

    function getJoke() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function(){
            var response = JSON.parse(xhr.response);
            paragraph.innerHTML = response.value.joke;
        });
        xhr.send();
    }

    button.addEventListener('click', function() {
        getJoke();
    });
    getJoke();      // <-- "dla chętnych"
                    //  Zastanów się, jak zmodyfikować skrypt, aby przy pierwszym wejściu na stronę nie trzeba 
                    //  było wciskać przycisku pobierania dowcipu. Innymi słowy: zastajemy stronę z już 
                    //  wygenerowanym dowcipem. Podpowiem, że można to zrobić, dopisując jedną linijkę kodu.

});