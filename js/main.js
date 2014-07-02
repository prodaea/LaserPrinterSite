window.onload = init;

function init() {
		printButton = document.getElementById("printButton");
		printButton.addEventListener("click", laserPrinter.print);
	}

var laserPrinter = {
    password: "cats",
  	print: function print() {
  		var self = this;
  		var userToner = document.getElementById("tonerLevel").value;
		if (!document.getElementById("onButton").checked) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because the printer is off.");
			return;
		} else if (document.getElementById("wifiPassword").value !== laserPrinter.password) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are not connected to WiFi.");
			return;
		} else if (userToner == 0) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are out of toner.");
			return;
		} else {
			document.getElementById("printerMessages").innerHTML = ("You print your document.");
			userToner--;
		    document.getElementById("printerSupplies").innerHTML = ("The printer has " + userToner + " units of toner left.");
		}
	},
};