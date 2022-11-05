const express = require("express");
const connection = require('../../model/database.connect/connector');
const router = express.Router();
const { Endpoint } = require("../endpoint.js");


router.post("/Pathrandom", new Endpoint().PathrandomEndpoint);

router.get('/delete', (req, res) => {
      
    
    connection.query('DELETE FROM pathrandom WHERE path_id > 0 ', (err, result) => {
        if (err) {
            console.log(err)
            //res.redirect('/ ');
        } else {
            console.log("delete All finish")
            res.redirect('/');
            //res.redirect('/router');
            //return res.status(200).send({ response: result });
        }
    })
})

router.get("/", function(req, res) {
    
        connection.query('SELECT * FROM pathrandom', (err, rows) => {
       
            if(!err){ 
                
                obj = { pathrandom : rows, Error : err}

                //-----------Controller--------------//
                res.render('homepage', obj)
              
            } else {
                console.log(err)
            }
        })
    });


    router.get('/delete/(:id)', (req, res, next) => {
        let id = req.params.id;
    
        connection.query('DELETE FROM pathrandom WHERE path_id = ' + id, (err, result) => {
            if (err) {
                console.log(err)
                //res.redirect('/ ');
            } else {
                console.log("delete finish")
                res.redirect('/');
                //res.redirect('/router');
            }
        })
    })


    router.get("/AvgLiked", function(req, res) {
    
        connection.query('SELECT AVG(Liked) as avg FROM pathrandom ', (err, result) => {
       
            if(!err){ 
          
                //console.log(result[0]);
                res.render('index1',{ pop1 : result[0] });
                //return res.status(200).send({ response: result });
              
            } else {
                console.log(err)
            }
        })
    });

    router.get("/AvgShare", function(req, res) {
        connection.query('SELECT AVG(Share) as avg2 FROM pathrandom ', (err, result) => {
       
            if(!err){      

                //console.log(result[0]);
                res.render('index2',{ pop2 : result[0] });
                //return res.status(200).send({ response: result });
              
            } else {
                console.log(err)
            }
        })
    });

    router.get("/Avgcomment", function(req, res) {
        connection.query('SELECT AVG(comment) as avg3 FROM pathrandom ', (err, result) => {
       
            if(!err){             

                //console.log(result[0]);
                res.render('index3',{ pop3 : result[0]});
                //return res.status(200).send({ response: result });
              
            } else {
                console.log(err)
            }
        })
    });




//
module.exports = router;