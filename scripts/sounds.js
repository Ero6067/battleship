function gameSounds() {
	this.ambientSound = new buzz.sound("Audio/AMB_Space Battle_01", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: true,
		volume: 40
	});

	this.hitShip = new buzz.sound("Audio/SFX_Ship Impact_1", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: false,
		volume: 80
	});

	this.missShip = new buzz.sound("Audio/SFX_Miss", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: false,
		volume: 80
	});

	this.BGMus = new buzz.sound("Audio/MUS_Loop_BS", {
		formats: ["wav"],
		preload: false,
		autoplay: true,
		loop: true,
		volume: 40
	});

	this.menuMus = new buzz.sound("Audio/MUS_Menu_1_02", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: true,
		volume: 40
	});

	this.fireLaser = new buzz.sound("Audio/SFX_PlayerShot_01", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: false,
		volume: 60
	});

	this.destroyShip = new buzz.sound("Audio/SFX_Ship Destruction_01", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: false,
		volume: 70
	});

	this.winGame = new buzz.sound("Audio/MUS_Win", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: true,
		volume: 40
	});

	this.loseGame = new buzz.sound("Audio/MUS_loseGame", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: true,
		volume: 40
	});

	this.menusClick = new buzz.sound("Audio/UI_ButtonClick", {
		formats: ["wav"],
		preload: true,
		autoplay: false,
		loop: false,
		volume: 60
	});
}
