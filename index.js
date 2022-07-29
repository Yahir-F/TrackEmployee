const mysql = require('mysql12')


const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"password",
    database: "employeeData_db"
});

connection.connect(function(err) {
    if(err){
    console.error("There was an errr connecting to " + err.stack);
    return
}
});
