/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#9B59B6',
    lineColor: '#9B59B6'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});