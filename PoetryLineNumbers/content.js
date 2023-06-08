var poemDivs = document.querySelectorAll('.o-poem div');
var lineNumber = 1;
var previousLineEmpty = true;

poemDivs.forEach(function(div) {
    var text = div.innerText.trim();
    var isEpigraph = div.querySelector('.c-epigraph') !== null;
    var hasDivChild = div.querySelector('div') !== null || div.closest('.c-epigraph') !== null;
    var isSmallCaps = div.querySelector('[style*="font-variant:small-caps;"]') !== null && div.querySelector('[style*="font-variant:small-caps;"]').innerText.trim() === text;
    var isStrongLine = div.querySelector('strong') !== null && div.querySelector('strong').innerText.trim() === text;
    var isHeading = isSmallCaps || isStrongLine;
    var isSeparator = text.length === 1 && !text.match(/[A-Za-z]/);

    if (!hasDivChild && !isEpigraph) {
        if (text.length > 0 && !isSeparator) {
            if (!(isHeading && previousLineEmpty)) {
                var lineContent = div.innerHTML;
                div.innerHTML = '<span class="line-number">' + lineNumber + ' </span><span class="line-content">' + lineContent + '</span>';
                lineNumber++;
            }
            previousLineEmpty = false;
        } else {
            previousLineEmpty = true;
        }
    }
});
