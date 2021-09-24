const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM book', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO book set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);
        
            res.send('Book Has Been Added Succesfully! :)');
        });
    });
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM book WHERE idbook = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);
        
            res.send('Book Has Been Deleted Succesfully! :)');
        });
    });
});

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE book set ? WHERE idbook = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);
        
            res.send('Book Has Been Updated Succesfully! :)');
        });
    });
});

module.exports = routes;