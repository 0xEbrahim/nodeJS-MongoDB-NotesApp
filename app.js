const express = require("express");
const {printRequests} = require('./middlewares/requests');
const notesRouter = require('./routes/notes')

const app = express();
const PORT = 5050;

// connection to DB
require('./database/db')

//middlewares
app.use(printRequests);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// routers
app.use('/api/v1/notes',notesRouter)


// listening PORT
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));