window.onload = function Search(){
    let searchbtn = document.querySelector(".search").querySelector(".btn");
    let httpRequest;
    let form = document.forms[0];
    //const santizer = new Sanitizer();
    


    searchbtn.addEventListener('click', function(){
        console.log('form submitted');
        let input = form.elements['name'];
        let data = input.value;
        //const cleanval = santizer.sanitize(input);
        httpRequest = new XMLHttpRequest(); //creating an XMLHttpRequest object.
        //GET Request
        httpRequest.onreadystatechange = loadData;
        httpRequest.open('GET', 'superheroes.php?query='+data,true);
        httpRequest.send();

      
    });

    function loadData() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            let response = httpRequest.responseText;
            let result = document.getElementById("result");
            result.innerHTML = response;
          } else {
            alert('There was a problem with the request.');
          }
        }
      }

}