/*global QUnit*/

sap.ui.define([
	"com/test/sample/controller/SampView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SampView Controller");

	QUnit.test("I should test the SampView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});