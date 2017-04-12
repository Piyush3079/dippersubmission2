'use strict';

var util = require('util');
var database = require('../db/database');

module.exports = {
	index: index,
	get_pup_by_id: get_pup_by_id,
	create: create,
	update: update,
	deletepup: deletepup
};

function index(req, res){
	var query = "SELECT * FROM pups";
	database.select(query, true, function(result){
		res.json(result);
	});
};

function get_pup_by_id(req, res){
	var id = req.swagger.params.id.value;
	var query = "SELECT * FROM pups WHERE id=${id}";
	var data = { id: id };
	database.select(query, data, function(result){
		res.json(result);
	});
};

function create(req, res){
	var name = req.swagger.params.name.value;
	var data = {
		name: name.name,
		breed: name.breed,
		age: name.age,
		sex: name.sex
	};
	var query = "INSERT INTO pups (name, breed, age, sex) VALUES (${name}, ${breed}, ${age}, ${sex});";
	database.insert(query, data, function(status){
		if(status){
			res.json(status);
		}
		else{
			res.json(0);
		}
	});
};

function update(req, res){
	var id = req.swagger.params.id.value;
	var name = req.swagger.params.name.value;
	var data = {
		id: id,
		name: name.name,
		breed: name.breed,
		age: name.age,
		sex: name.sex
	};
	var query = "UPDATE pups SET name=${name}, breed=${breed}, age=${age}, sex=${sex} WHERE id=${id}";
	database.update(query, data, function(status){
		if(status){
			res.json(status);
		}
		else{
			res.json(0);
		}
	});
};

function deletepup(req, res){
	var id = req.swagger.params.id.value;
	var query = "DELETE FROM pups WHERE id=${id}";
	var data = {
		id: id
	};
	database.delete(query, data, function(status){
		if(status){
			res.json(status);
		}
		else{
			res.json(0);
		}
	});
};