const { Plugin } = require('../controller/plugin');
const axios = require('axios');
class Logic {

  
    PathrandomLogic = (Pathrandom, res) => {
        new Plugin().PathrandomPlugin(Pathrandom, res);
    }

}
module.exports = {
    Logic
}