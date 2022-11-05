const { Logic } = require('./logic');
const models = require('../model/model');

class Endpoint {

    constructor() {
        this.dataPathrandom = models.dataPathrandomModel;
    }
    PathrandomEndpoint = (req, res) => {   
        this.dataPathrandom.Path_id = req.body.path_id;
        this.dataPathrandom.Mypath = req.body.Mypath;
        this.dataPathrandom.Rearch = req.body.Rearch;
        this.dataPathrandom.Liked = req.body.Liked;
        this.dataPathrandom.Share = req.body.Share;
        this.dataPathrandom.comment = req.body.comment;
        new Logic().PathrandomLogic(this.dataPathrandom, res);
    }

}
module.exports = {
    Endpoint
}