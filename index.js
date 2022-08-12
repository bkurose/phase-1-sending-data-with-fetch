// submitData Function takes two arguments: name and email
function submitData(userName, userEmail){
    //fetch method, connecting to the /users server and providing data in object form
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            //using a JSON.stringify method to turn the follow object in the a JSON string
            name: `${userName}`,
            email: `${userEmail}`,
            }
        ),
    })
    .then(res => res.json())
    //takes the returned JSON and converts it back to a JS Object
    .then(res => {
        const DOMtarget = document.querySelector('body')
        //selecting the body part of the DOM
        DOMtarget.textContent = `${res.id}`
        //logging the ID of newly created nested object on server, onto the body of the DOM
    })
    .catch(error => document.querySelector('body').textContent = `${error.message}`);
}

submitData();
