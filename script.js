//Copyright (c) 2015 Александр Смит (https://github.com/DarkScorpion)
$(document).ready(function() {
  $('#btnEncrypt').click(function() {
    
    var temp;
    var text = $('#eText').val();
    var eResult = $('#eResult');
    
    eResult.html(''); //reset html in div
    for(var i in text) {

      var letter = text[i].toLowerCase();

      if (letter.match('[a-z]')) {
        temp = $('<img/>', {
          src:  'img/' + letter + '.png'
        });
      } else {
        temp = filterLatter(letter);
      }
    
      eResult.append(temp);
    }
  });
});

function filterLatter(letter)
{
  var result;

  switch(letter) {
    case ('\n'): result = '<br>'; break;

    default: result = letter.toLowerCase();

  }
  return result;
}
