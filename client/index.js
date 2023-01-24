

const button = document.querySelector(".but");
const hello = document.getElementById("hello");
const name = document.getElementById("name");




button.addEventListener("click", async () => {

    try {
        const body = { hello: hello.value } // we had to do it like this as an object so this hello is a propety to deconstructed as the req.body the request from yhe client to the database 
        const response = await fetch("http://localhost:5000/hello", {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)

        });// this response object has the one thats says method header and body content and it goed eith fetch
        // the response object comes from the client the clients repsonse it waits to fetch the loclurl and takes the reponse obkecy with the method of the responde the headers and the body
        console.log(body) // the body of the client is a hash with all the data like {hello:"hello"}

    } catch (error) {
        console.log(error.message)
    }
})

