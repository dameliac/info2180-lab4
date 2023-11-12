window.onload = function Search(){
    let searchbtn = document.querySelector(".search").querySelector(".btn");
    let httpRequest;


    searchbtn.addEventListener('click', function(){
        httpRequest = new XMLHttpRequest(); //creating an XMLHttpRequest object.
        //GET Request
        let supes = "superheroes.php";
        httpRequest.onreadystatechange = loadQuote;
        httpRequest.open('GET', supes);
        httpRequest.send();
    });

    function loadQuote() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            let response = httpRequest.responseText;
            //var quote = document.querySelector(".search").querySelector(".avengers");
            //quote.innerHTML = response;
            alert(response);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }

}