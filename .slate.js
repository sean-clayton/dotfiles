(function() {
  /* File: slate.example.js
   * Author: lunixbochs (Ryan Hileman)
   * Project: http://github.com/lunixbochs/reslate
   */

  S.src('.reslate.js');
  // enable to see debug messages in Console.app
  $.debug = true;

  slate.alias('hyper', 'ctrl;alt;cmd;shift');

  // begin config
  slate.configAll({
    defaultToCurrentScreen: true,
    nudgePercentOf: 'screenSize',
    resizePercentOf: 'screenSize',
    undoOps: [
      'active-snapshot',
      'chain',
      'grid',
      'layout',
      'move',
      'resize',
      'sequence',
      'shell',
      'push'
    ]
  });

  // bindings
  slate.bindAll({
    hyper: {

      shift: {
        esc: 'relaunch',
        1: $.focus('iTerm2'),
        2: [$.focus('Google Chrome')],
        3: $.focus('Atom'),
        4: $.focus('Airmail'),
        5: $.focus('Finder'),
        6: $.focus('Spotify')
      },

      // bars
      a: [$('barResize', 'left'), $('barResize', 'left', 1.5, 1), $('barResize', 'left', 2, 1), $('barResize', 'left', 2.5, 1), $('barResize', 'left', 3, 1)],
      f: $('barResize', 'bottom', 2),
      r: $('barResize', 'top', 2),
      d: [$('barResize', 'right'), $('barResize', 'right', 1.5, 1), $('barResize', 'right', 2, 1), $('barResize', 'right', 2.5, 1), $('barResize', 'right', 3, 1)],

      // corners
      q: [$('corner', 'top-left'), $('corner', 'top-left', 3, 3), $('corner', 'top-left', 2, 3), $('corner', 'top-left', 2, 2)],
      e: [$('corner', 'top-right'), $('corner', 'top-right', 3, 3), $('corner', 'top-right', 2, 3), $('corner', 'top-right', 2, 2)],
      z: [$('corner', 'bottom-left'), $('corner', 'bottom-left', 3, 3), $('corner', 'bottom-left', 2, 3), $('corner', 'bottom-left', 2, 2)],
      c: [$('corner', 'bottom-right'), $('corner', 'bottom-right', 3, 3), $('corner', 'bottom-right', 2, 3), $('corner', 'bottom-right', 2, 2)],

      // centers
      w: [$('center', 'top'), $('center', 'top', 3, 3), $('center', 'top', 2, 3), $('center', 'top', 2, 2)],
      x: [$('center', 'bottom'), $('center', 'bottom', 3, 3), $('center', 'bottom', 2, 3), $('center', 'bottom', 2, 2)],
      s: [$('center', 'center'), $('center', 'center', 1.8, 1.8), $('center', 'center', 1.5, 1.5), $('center', 'center', 1.2, 1.2)],

      // throw to monitor
      '`': ['throw 0 resize', 'throw 1 resize'],
      1: [$('throw', '0'), $('throw', '0', 'resize')],
      2: [$('throw', '1'), $('throw', '1', 'resize')],
      3: [$('throw', '2'), $('throw', '2', 'resize')],

      // utility functions
      // z: 'undo',
      tab: 'hint'

    }
  });
}).call(this);
