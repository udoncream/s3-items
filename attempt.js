
// const userAction = async () => {
//     const response = await fetch('https://sbf6r47lld.execute-api.us-west-1.amazonaws.com/Test/');
//     const myJson = await response.json(); //extract JSON from the http response
//     const guest = document.getElementById("visitorCount")
//     guest.innerText = JSON.stringify(myJson);
// }

fetch ('https://sbf6r47lld.execute-api.us-west-1.amazonaws.com/Test/')  
    .then(res => {
        return res.json();
    })
    .then(data => {
        const guestCount= document.getElementById('visitorCount');
        guestCount.innerHTML = data
    });
