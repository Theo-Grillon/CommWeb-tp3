function ajaxRequest(type, url){
    request=open(type,url);
    return request;
}

console.log(ajaxRequest("get","http://localhost/timestamp.php"));