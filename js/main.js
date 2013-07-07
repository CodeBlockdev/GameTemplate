/*!
 * Game's main JS file
 */

(function( window ) {

var Game = window.Game.init( document.getElementById( "canvas" ), 30 );
var settings = Game.settings;
var canvas = settings.canvas;
var ctx = settings.ctx;

// Make button
mainFont = _.make( Game.Font ).init( 32, "Consolas" );
var newGameButton = _.make( Game.Button ).init( "New Game", mainFont, 20, 15, 20, 20, "#2DB42A", "#222" );
newGameButton.click = function() {
	Game.entities.splice( Game.entities.indexOf(newGameButton), 1 );
	Game.StateManager.change( "game" );
};
Game.entities.push( newGameButton );

// Default loading screen
var startedLoading = false;
Game.StateManager.add( "loading", {
	update: function( delta ) {
		/*
		if ( !startedLoading ) { // Don't start multiple loading processes
			startedLoading = true;
			Game.AssetManager.load( function() {
				Game.StateManager.state.update();
				window.setTimeout( function() {
					Game.StateManager.change( "main_menu" );
				}, 500 );
			}, function() {} );
		}
		*/
		Game.StateManager.change( "main_menu" );
		
		return false;
	},
	draw: function( ctx ) {
		// Draw background
		ctx.fillStyle = "#000";
		ctx.fillRect( 0, 0, canvas.width, canvas.height );
		
		/*
		// Draw loading bar
		ctx.lineWidth = "5";
		ctx.strokeStyle = "#2DB42A";
		ctx.fillStyle = "#2DB42A";
		ctx.strokeRect( canvas.width / 2 - 300 / 2 - 10, canvas.height / 2 - 50 / 2 - 10, 300 + 10, 50 + 10 );
		ctx.stroke();
		ctx.fillRect( canvas.width / 2 - 300 / 2 - 10 / 2, canvas.height / 2 - 50 / 2 - 10 / 2, 300 * Game.AssetManager.loadedCount / Game.AssetManager.assetCount, 50 );
		*/
		
		return false;
	}
}, true );

// TODO: Implement main menu
Game.StateManager.add( "main_menu", {
	update: function( delta ) {
		return true;
	},
	draw: function( ctx ) {
		// Draw background
		ctx.fillStyle = "#000";
		ctx.fillRect( 0, 0, canvas.width, canvas.height );
		
		return true;
	}
} );

// TODO: Implement game screen
Game.StateManager.add( "game", {
	update: function( delta ) {},
	draw: function( ctx ) {
		// Draw background
		ctx.fillStyle = "#000";
		ctx.fillRect( 0, 0, canvas.width, canvas.height );
		
		return true;
	}
} );

// TODO: Implement pause
Game.StateManager.add( "pause", {
	update: function( delta ) {},
	draw: function( ctx ) {}
} );

Game.start();

})( window );
