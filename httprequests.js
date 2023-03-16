//get 
export function getBtn() {
    fetch("https://httpbin.org/get", {
    method : "GET",
    })
    
    .then(response => response.json())
    
    .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,4));

    document.querySelector("#form > input[value='TBD']").value = new Date();

}

export function postBtn() {
    fetch("https://httpbin.org/post", {
    method : "POST",
    body: new FormData(document.getElementById("form")),})
    
    .then(response => response.json())
    
    .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,4));

    document.querySelector("#form > input[value='TBD']").value = new Date();
    
}

export function putBtn() {
        fetch("https://httpbin.org/put", {
        method : "PUT",
        body: new FormData(document.getElementById("form")),})
    
        .then(response => response.json())
    
        .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,4));

        document.querySelector("#form > input[value='TBD']").value = new Date();

}

export function deleteBtn(){
        fetch("https://httpbin.org/delete", {
        method : "DELETE",})
    
        .then(response => response.json())
    
        .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,4));

        document.querySelector("#form > input[value='TBD']").value = new Date();

}