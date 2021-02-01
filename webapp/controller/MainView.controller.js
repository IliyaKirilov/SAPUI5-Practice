sap.ui.define([
	"kpmg/home/MasteringUI5/controller/BaseController"
], function (BaseController) {
	"use strict";
	var oRouter;
	return BaseController.extend("kpmg.home.MasteringUI5.controller.MainView", {
		onInit: function () {

			 oRouter = this.getRouter();
		},

		onResume: function () {

			this.showMessage("Hello User, you will get navigated to Iliya`s Resume");
			window.open("https://docs.google.com/document/d/1KKwSmXcCKXxVZWsf0BTTRziGC6pTuBImS339AHFMxbA/edit");
		},
		onComponents: function () {

			alert("msg");

		},

		onBussAdmin: function () {
			alert("msg");
		},

		onScanner: function () {
			alert("msg");
		},

		onSignature: function () {
			
			debugger;
			oRouter.navTo("SignaturePad");
		},

		onMessenger: function () {
			alert("msg");
		},

		onFile: function () {
			alert("msg");
		}

	});
});