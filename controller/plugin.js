const express = require("express");
const connection = require('../model/database.connect/connector')
class Plugin {

    PathrandomPlugin = (Pathrandom, res) => {
        let sql = `INSERT INTO Pathrandom
        (
            path_id,
            Mypath,
            Rearch,
            Liked,
            Share,
            comment
        )
        VALUES
        (
            ?, ?, ?, ?, ?, ?
        )`
        connection.query(
            sql, [
                Pathrandom.path_id,
                Pathrandom.Mypath,
                Pathrandom.Rearch,
                Pathrandom.Liked,
                Pathrandom.Share,
                Pathrandom.comment,
            ],
            function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("insert finish");
                    //return res.status(200).send({ response: result });
                    //return res.render("homepage",{ title : "result" })
                    res.redirect('/');
                }
            }
        )
    }

   

}
module.exports = {
    Plugin
}