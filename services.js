const axios = require('./axios');

axios.get(placeholder)
.then((response)=>{
    //do something with response
    // response is a json file
    let theinfoIamlookingfor = response['user'];
    let myregister = $('#regist').value
    if(theinfoIamlookingfor === myregister){
        alert('you are already registered')
    }
})