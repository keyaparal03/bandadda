import  Helpers from '@Utils/Helpers';

 const BASE_URL = 'http://beta.bandadda.com/wp-json/api';


function get(endpoint, params) {
    return request(endpoint, params);    
}

function post(endpoint, params) {
    return request(endpoint, params, "POST");
}

function put(endpoint, params) {
    return request(endpoint, params, "PUT");
}

// function delete(endpoint, params) {
//     return fetch(endpoint, params, "DELETE");
// }

async function request(endpoint, params = null, method = 'GET') {
    let token = "647ac4ed7e82829132705af7ff02a8e1"; // Helpers.getApiToken();
    let url = BASE_URL + endpoint;
    const config = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    };
    if(method != 'GET') {
        config['body'] = JSON.stringify(params);
        // console.log('send data', config);
    }
    console.log('url', url);
  
    return fetch(url, config ).then((response) => response.json());
}

async function upload(endpoint, params, method = 'POST') {
    try {
        let token = "647ac4ed7e82829132705af7ff02a8e1";
        let url = BASE_URL + endpoint;
        const config = {
            method: method, //'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token,
            },
            body: params,
        };
        console.log('url', url);
        return fetch(url, config ).then((response) => response.json());   
    } catch (error) {
        console.log('error', error);
    }
}


export default {
    get,
    post,
    put,
    // delete,
    upload,    
}