var laserPrinter = {
	toner: 5,
  	//toner: document.getElementById("tonerLevel").value,
  	//I would like to be able to have the user enter a value, but I could not get it
  	//to work here in my object.
    password: "cats",

  print: function() {
		if (!document.getElementById("onButton").checked) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because the printer is off.");
			return;
		} else if (document.getElementById("wifiPassword").value !== this.password) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are not connected to WiFi.");
			return;
		} else if (this.toner == 0) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are out of toner.");
			return;
		} else {
			document.getElementById("printerMessages").innerHTML = ("You print your document.");
			this.toner--;
        document.getElementById("printerSupplies").innerHTML = ("The printer has " + this.toner + " units of toner left.");
			return;
		}
	},
};
