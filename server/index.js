const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");



//middleware so apps can share data with  each other and diffrent ioperating systems
app.use(cors());
app.use(express.json()); // this connect with the content header

//add post to db with a post req
app.post("/hello", async (req, res) => { // it supposed to be req and res on purpose will give an error if not d
    try {

        const { hello } = req.body // we got to deconsteict this from the req of the body on the client sifr
        const newHello = await pool.query(
            "INSERT INTO greetings (id,hello) VALUES (nextval('greetings_id_seq'),$1) RETURNING *",
            [hello]); // this is the quert array we don t have to include the id its included in the value 

        res.json(newHello
        )// the response is what get seent back to the clients browser

    } catch (error) {
        console.log("sit");
        console.error(error.message);
    }
})

app.listen("5000", () => {
    console.log("yea we good")
})