const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: '1z2x3c',
    database: 'movies'
});

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const director = req.body.director;
    const descripcion = req.body.descripcion;
    const anio = req.body.anio;

    db.query('INSERT INTO peliculas (nombre, director, descripcion, anio) VALUES (?,?,?,?)', [nombre, director, descripcion, anio], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.get("/peliculas", (req, res) => {
    db.query('SELECT * FROM peliculas',
    (err, result) => {
        if(err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const director = req.body.director;
    const descripcion = req.body.descripcion;
    const anio = req.body.anio;

    db.query('UPDATE peliculas SET nombre=?, director=?, descripcion=?, anio=? WHERE id=?', [nombre, director, descripcion, anio,id], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});


app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM peliculas WHERE id=?',id, 
    (err, result) => {
        if(err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})