PeatFrontend = wrench.appify({
	init: function () {
		// this will run after in the boot up process initiated by app.run();
		$("#peat").html("Peat frontend initialized");
	},
}).run();