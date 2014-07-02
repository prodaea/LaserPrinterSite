window.onload = init;

function init() {
		printButton = document.getElementById("printButton");
		printButton.addEventListener("click", laserPrinter.print.bind(laserPrinter));
	}

//var toner = document.getElementById("tonerLevel").value;

var laserPrinter = {
    password: "cats",
    //toner: document.getElementById("tonerLevel").value,
    toner: 5,
  	print: function print() {
  		var toner = document.getElementById("tonerLevel").value;
		if (!document.getElementById("onButton").checked) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because the printer is off.");
			return;
		} else if (document.getElementById("wifiPassword").value !== laserPrinter.password) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are not connected to WiFi.");
			return;
		} else if (toner == 0) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are out of toner.");
			return;
		} else {
			document.getElementById("printerMessages").innerHTML = ("You print your document.");
			toner--;
		    document.getElementById("printerSupplies").innerHTML = ("The printer has " + toner + " units of toner left.");
		    return;
		}
	},
};
