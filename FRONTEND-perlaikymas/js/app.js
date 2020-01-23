const url = 'https://postit.lt/data/v2/?key=VF4aK6IgYitAzSpQpDrl&address=';
const buttonElement = document.querySelector('#search-btn');
const inputElement = document.querySelector('#inputaddress');
const showElement = document.querySelector('#showData');
const showElement2 = document.querySelector('#showData2');

let ajax = new XMLHttpRequest();

ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
        if (ajax.status === 200) {
            
            showElement.innerHTML = ajax.responseText;
            if (ajax.responseText === '{"Response":"False"}') {
                alert('Pašto kodas nerastas!')
            }
        }
        else {
            alert (ajax.statusText);
        }
    }
};

buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;
    const newUrl = url + value;
    console.log('Value: ', value);

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) =>
            console.log('Data: ', data))
         .catch((error) => {
            console.log('Error: ', error )
            });

    ajax.open('GET', newUrl);
    ajax.send();
};


