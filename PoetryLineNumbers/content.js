var poemDivs = document.querySelectorAll('.o-poem div');
var lineNumber = 1;
var previousLineEmpty = true;

poemDivs.forEach(function(div) {
  var text = div.innerText.trim();
  var isStrongLine = div.querySelector('strong') !== null && div.querySelector('strong').innerText.trim() === text;

  if (text.length > 0) {
    if (!(isStrongLine && previousLineEmpty)) {
      var lineContent = div.innerHTML;
      div.innerHTML = '<span class="line-number">' + lineNumber + '</span><span class="line-content">' + lineContent + '</span>';
      lineNumber++;
    }
    previousLineEmpty = false;
  } else {
    previousLineEmpty = true;
  }
});
