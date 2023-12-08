const fs = require('fs');
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = 3001;

const db_data = fs.readFileSync('./server/databases.json');
const _db = JSON.parse(db_data);
const db=_db.local;
console.log(db);


const conn = mysql.createConnection({
    host : db.host,
    user : db.user,
    password : db.password,
    database : db.database
});
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/a', (req, res ) => {
    console.log('11111111111');

});
app.get('/users', ( req, res ) => {
    conn.query(' select * from user', ( err, rows, fields )=>{
        if( err ){
            console.log( err );
        }else{
            res.send( rows );
        }
    });
});


app.get('/', ( req, res ) => {
    console.log( `${port} server root` );
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}..`);
});