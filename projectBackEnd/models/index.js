var sequelize = require('sequelize');
var connection = new sequelize('shippingprocess','root','root',{
    host :'localhost',
    dialect:'mysql'
});
connection
    .authenticate()
    .then(function(err) {
        console.log('connected');
    })
    .catch(function (err) {
        console.log(err);
    });

module.exports = connection
