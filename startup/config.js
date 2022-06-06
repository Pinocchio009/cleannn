const config = require('config');


module.exports = function () {
    module.exports = function(){
        if (!config.has(jwtPrivateKey)){
            throw new Error('FATAL ERROR: jtPrivateKey is not defined..');
            
    }
}
}