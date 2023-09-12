const poemDivs = document.querySelectorAll('.o-poem div');
let lineNumber = 1;
let previousLineEmpty = true;

poemDivs.forEach(function (div) {
    const text = div.textContent.trim();
    const isEpigraph = div.querySelector('.c-epigraph') !== null;
    const hasDivChild = div.querySelector('div') !== null || isEpigraph;

    if (!hasDivChild && !isEpigraph) {
        const isOneCharSeparator = text.length === 1 && !text.match(/[A-Za-z]/);
        const multiCharSeparator = text.match(/_+|-+/)
        const isMultiCharSeparator = multiCharSeparator !== null && multiCharSeparator[0].length === text.length;
        const isSeparator = isOneCharSeparator || isMultiCharSeparator;

        if (text.length > 0 && !isSeparator) {
            const smallCapsElement = div.querySelector('[style*="font-variant:small-caps;"]');
            const isSmallCaps = smallCapsElement !== null && smallCapsElement.innerText.trim() === text;

            const strongElement = div.querySelector('strong');
            const isStrongLine = strongElement !== null && strongElement.innerText.trim() === text;

            const isHeading = isSmallCaps || isStrongLine;

            if (!(isHeading && previousLineEmpty)) {
                const lineContent = div.innerHTML;
                div.innerHTML = '<span class="line-number">' + lineNumber + ' &nbsp; </span><span class="line-content">' + lineContent + '</span>';
                lineNumber++;
            }
            previousLineEmpty = false;
        } else {
            previousLineEmpty = true;
        }
    }
});
