var getAllTodos =   function(){
  //var resultElement = document.getElementById('getResult1');
  //resultElement.innerHTML = '';
  
  axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      //resultElement.innerHTML = generateSuccessHTMLOutput(response);
      generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      //resultElement.innerHTML = generateErrorHTMLOutput(error);
      generateErrorHTMLOutput(error);
    });   
}

function generateSuccessHTMLOutput(response) {
    console.log(response)
  //return  '<h4>Result</h4>' + 
  //        '<h5>Status:</h5> ' + 
  //        '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
  //        '<h5>Headers:</h5>' + 
  //        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
  //        '<h5>Data:</h5>' + 
  //        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
}

function generateErrorHTMLOutput(error) {
    console.log(error)
  //return  '<h4>Result</h4>' + 
  //        '<h5>Message:</h5> ' + 
  //        '<pre>' + error.message + '</pre>' +
  //        '<h5>Status:</h5> ' + 
  //        '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
  //        '<h5>Headers:</h5>' + 
  //        '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
  //        '<h5>Data:</h5>' + 
  //        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

//REFERENCES:
//-- https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-setup-freecodecamp-locally.md
//-- https://codingthesmartway.com/getting-started-with-axios/