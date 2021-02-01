sap.ui.define([
	"kpmg/home/MasteringUI5/controller/BaseController"
], function (BaseController) {
	"use strict";
	var oRouter;
	var canvas, signaturePad;
	return BaseController.extend("kpmg.home.MasteringUI5.controller.SignaturePad", {
		onInit: function () {

			// oRouter = this.getRouter();

			debugger;
			this.getView().byId("html").setContent("<canvas id='signature-pad' width='500' height='300' class='signature-pad'></canvas>");
		},

		onSign: function (oEvent) {
			debugger;
			canvas = document.getElementById("signature-pad");
			    signaturePad = new SignaturePad(canvas, { //todo
			      backgroundColor: 'rgb(255, 255, 255)'
				});
		},

		onSave: function (oEvent) {

			debugger;
			var canvas = document.getElementById("signature-pad");
			var link = document.createElement('a');
			link.href = canvas.toDataURL('image/jpeg');
			link.download = 'sign.jpeg';
			link.click();
			signaturePad = new SignaturePad(document.getElementById('signature-pad'), { //todo
				backgroundColor: '#ffffff',
				penColor: 'rgb(0, 0, 0)'
			});
		},

		onClear: function (oEvent) {
			debugger;
			var canvas = document.getElementById("signature-pad");
			var context = canvas.getContext("2d");
			context.clearRect(0, 0, canvas.width, canvas.height);

			signaturePad = new SignaturePad(document.getElementById('signature-pad'), { //todo
				backgroundColor: '#ffffff',
				penColor: 'rgb(0, 0, 0)',
				penWidth: '1'
			});
		}

	});
});