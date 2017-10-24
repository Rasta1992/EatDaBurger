var connection = require("./connection.js");

// ORM //

var orm = {
	all: function(tableInput, colToSearch, valOfCol) {
		var queryString = "SELECT * FROM ?? WHERE ?? = ?";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
			console.log(result);
		});
	},	

	insert: function(tableInput, colToSearch, valOfCol) {
		var queryString = "INSERT * INTO ?? WHERE ?? = ?";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
			console.log(result);
		});
	},	
	update: function(tableInput, colToSearch, valOfCol) {
		var queryString = "PUT * INTO ?? WHERE ?? = ?";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
			console.log(result);
		});
	}




}

module.exports = orm;