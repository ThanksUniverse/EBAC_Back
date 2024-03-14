function postData() {
    let _data = {
        title: document.getElementById('postTitle').value,
        body: document.getElementById('postBody').value,
        userId: document.getElementById('userId').value
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        document.getElementById('postResult').textContent = JSON.stringify(json, null, 2);
    })
    .catch(error => console.error('Erro: ', error.message || error));
}

document.getElementById('submitPost').addEventListener('click', function(event) {
    event.preventDefault();
    postData();
});
