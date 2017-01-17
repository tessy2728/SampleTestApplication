beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    },
    toBeBetween: function (lower, higher) {
      return {
        compare: function (actual, lower, higher) {
          if (lower > higher) {
                var temp = lower;
                lower = higher;
                higher = temp;
            }
            return {
                pass: ( actual>= lower   && actual <= higher),
                message: actual + ' is not between ' + lower + ' and ' + higher
            }
        }
      };  
    }
  });
});
