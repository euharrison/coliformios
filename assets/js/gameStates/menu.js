var menuState = {

  create: function() {
    game.add.image(0, 0, 'start-screen');

    game.input.onTap.add(this.start, this);
  },

  start: function() {
    game.state.start('play');
  }
};