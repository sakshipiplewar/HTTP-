const cl = console.log;

// GET  // to get data from database
// POST  // to create/send new data in database
// DELETE  // to delete/remove data from database
// PATCH/PUT  // to update data in database

let baseUrl = 'https://jsonplaceholder.typicode.com/posts'
const postContainer = document.getElementById('postContainer')

const templating = (arr) => {
    let result = ' ';
    arr.forEach(post => {
        result +=
            `<div class="card-header mb-4">
                         <h3>${post.title}</h3>
                    </div>
                    <div class="card-body">
                         <p>${post.body}</P>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>`
    });
    postContainer.innerHTML = result;
}

// let xhr = new XMLHttpRequest();

// xhr.open(methodName, apiUrl) isAsync >> true

// xhr.open('GET', baseUrl)
// xhr.onload = function () {
//     let data = JSON.parse(xhr.response)
//     templating(data)
// }
// xhr.send();

const makeApiCall = (methodName, apiUrl) => {
    let xhr = new XMLHttpRequest();
    xhr.open(methodName, apiUrl);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.response);
            templating(data)
        }
    }
    xhr.send();
}
makeApiCall('GET', baseUrl)

// xhr.status >> 200 or 201 >> API success
// 200 while using GET method
// 201 POST method

// 404 >> URL not found
// 403 >> forbidden
// 503 >> service not available

// xhr.readyStatus
// 0 >>  UNset  >> open method not call yet
// 1 >>  OPENED >> open method called
// 2 >>  send method is called
// 3 >>  server is working on your request
// 4 >>  DONE  >> operation is completed

