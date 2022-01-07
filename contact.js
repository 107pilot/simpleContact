// Contact Page - Contact Form JS
let theForm = document.querySelector(".cf");
theForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let action = this.action;
    let contactForm = new FormData(theForm);
    let formObject = Object.fromEntries(contactForm);
    //console.log(JSON.stringify(formObject));
    /*   let formPairs = [];
      for (let pair of contactForm.entries()) {
        formPairs.push(pair);
      } 
      console.log(formPairs); */
    fetch(action, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});