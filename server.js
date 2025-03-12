const express = require('express');
const app = express();
const port = 3000;

//middlewere for static files
app.use(express.static('Public'));

//this turns on the server and starts to listen
app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
})

//  main route
app.get('/', (req, res) => {

    res.send('<h1> Server del mio Blog</h1>');

})

//post list + its route
const blogPosts = [
    {
        id: 1,
        title: "Title 1",
        body: "This is the post content with some text",
        img: `/images/ciambellone.jpeg`,
        tags: ["tag-1", "tag-2", "tag-3"]
    },
    {
        id: 2,
        title: "Title 2",
        body: "This is the post content with some text",
        img: `/images/cracker_barbabietola.jpeg`,
        tags: ["tag-1", "tag-2", "tag-3"]
    },
    {
        id: 3,
        title: "Title 3",
        body: "This is the post content with some text",
        img: `/images/pane_fritto_dolce.jpeg`,
        tags: ["tag-1", "tag-2", "tag-3"]
    },
    {
        id: 4,
        title: "Title 4",
        body: "This is the post content with some text",
        img: `/images/pasta_barbabietola.jpeg`,
        tags: ["tag-1", "tag-2", "tag-3"]
    },
    {
        id: 5,
        title: "Title 5",
        body: "This is the post content with some text",
        img: `/images/torta_paesana.jpeg`,
        tags: ["tag-1", "tag-2", "tag-3"]
    },
]


app.get ('/bacheca', (req, res) => {
    res.json(blogPosts);
})