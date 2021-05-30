function TryLetter(letter) {
    var response = document.cookie;
    var lifes;
    var selectedWord;

    response = response.split(';');
    lifes = response[0].split('=');
    lifes = lifes[1];
    selectedWord = response[1].split('=');
    selectedWord = selectedWord[1];
    var errors = sessionStorage.getItem('errors');
    var vitoria = "";

    if (!selectedWord.toLowerCase().includes(letter.textContent.toLowerCase())) {

        addError(errors);
        $('#life' + sessionStorage.getItem('errors')).removeClass("glyphicon-heart");
        $('#life' + sessionStorage.getItem('errors')).addClass("glyphicon-remove");

        if (sessionStorage.getItem('errors') > 9)
        {
            var pos = selectedWord.length;
            for (var i = 0; i < pos; i++)
            {
                $('#' + i).css("background-color", "red");
                
            }
            alert('LOSE');
            setTimeout(function () {
                console.log("5 seconds to say goodbye");
            }, 5000);
            location.reload();
        }
    }
    else {
        var pos = indexOfAll(selectedWord, letter.textContent.toLowerCase())

        for (var i = 0; i < pos.length; i++)
        {
            $('#' + pos[i]).html(letter.textContent);
        }

        for (var i = 0; i < selectedWord.length; i++) {
            vitoria += $('#' + i).html();
        }

        if (vitoria.toLowerCase() === selectedWord) {
            for (var i = 0; i < selectedWord.length; i++) {
                $('#' + i).css("background-color", "green");
            }
            alert('WIN');
            setTimeout(function () {
                console.log("5 seconds to say goodbye");
            }, 5000);
            location.reload();
        } else {
            vitoria = "";
        }
    }
}

function indexOfAll(array, searchItem) {
    var i = array.indexOf(searchItem),
        indexes = [];
    while (i !== -1) {
        indexes.push(i);
        i = array.indexOf(searchItem, ++i);
    }
    return indexes;
}

function addError(errors)
{
    var errorNumber = parseInt(errors);
    sessionStorage.setItem('errors', errorNumber + 1);
}

window.onload = function () {
    sessionStorage.setItem('errors', '0');
};