require('pebblejs');

var ajax = require('pebblejs/dist/js/lib/ajax');
var UI = require('pebblejs/ui');

var card = new UI.Card({
  title: 'Now Playing',
  body: 'Loading...',
  scrollable: true
});

card.show();

card.on('click', function(e) {
  loadData();
});

loadData();

function loadData() {
  ajax({ url: 'https://uabmagic-api.now.sh/api/songs/now-playing/mini', type: 'json' },
    function(data) {
      card.subtitle(data.attractionAndSong);
      card.body(data.themeParkAndLand);
    }
  );
}
