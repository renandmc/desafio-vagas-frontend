/*global QUnit*/

sap.ui.define([
	"com/l4e/vagas/controller/PaginaInicial.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PaginaInicial Controller");

	QUnit.test("I should test the PaginaInicial controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});