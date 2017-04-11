var pgp = require('pg-promise')();
var dotenv = require('dotenv');
dotenv.load();
var db = pgp(process.env.DATABASE_URL);

exports.url = process.env.DATABASE_URL;

exports.select = function(query,data,callback){
	db.any(query,data)
	.then(function (result) {
		callback(result);
	})
	.catch(function (error) {
		console.log('ERROR:', error)
	})
}

exports.select_one = function(query,data,callback){
	db.oneOrNone(query,data)
	.then(function (result) {
		callback(result);
	})
	.catch(function (error) {
		console.log('ERROR:', error)
	})
}

exports.insert = function(query,data,callback){
	var status = false;
	db.none(query,data)
	.then(function () {
		status = true;
		callback(status);
	})
	.catch(function (error) {
		console.log('ERROR:', error)
	})
}

exports.update = function(query,data,callback){
	var status = false;
	db.none(query,data)
	.then(function () {
		status = true;
		callback(status);
	})
	.catch(function (error) {
		console.log('ERROR:', error)
	})
}

exports.delete = function(query,data){
	var status = false;
	db.none(query,data)
	.then(function () {
	})
	.catch(function (error) {
		console.log('ERROR:', error)
	})
}
