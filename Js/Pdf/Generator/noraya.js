function mainGeneratorNR(data, yStart, pdf) {
    let yPosition = yStart;
    pdf.setFontSize(12);
    Object.keys(data).map((key, i) => {
        let extraLinesString;
        let extraLines;
        const xStart = data[key].xStart;
        const text = data[key].text;
        let inlineText = '';
        if(text.length * 2.5 + xStart > 200) {
            let inlineTextIndexCut = 0;
            let relativeSum = xStart;
            for(let h = 0; h <= text.length; h+= 1) {
                if(relativeSum < 200) {
                    relativeSum += 2.5;
                } else {
                    inlineTextIndexCut = h;
                    break;
                }
            }
            inlineText = text.substring(0, inlineTextIndexCut);
            let restText = text.substring(inlineTextIndexCut);
            extraLinesString = restText.match(/.{0,80}/g);
            extraLines = extraLinesString.filter((textLine) => textLine !== "").length;
        }
        pdf.text(key, 10 , yPosition);
        pdf.line(xStart, yPosition + 2 , 200, yPosition + 2);
        if (inlineText !== '') {
            pdf.text(inlineText, xStart , yPosition)
        } else {
            pdf.text(text, xStart , yPosition)
        }
        yPosition += 10;
        if (extraLines > 0) {
            for (let j = 0; j < extraLines; j+=1 ) {
                pdf.text(extraLinesString[j], 10 , yPosition)
                yPosition += 10;                
            }
        }
    })
    // title(pdf);
    // footer(pdf);
    // pdf.addPage(pdf);
}

function getLetterVariation(word) {
    let il = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === 'i' || word[i] === 'l') {
            il += 1;
        }
    }
    return il;
}

// reference 
// x => min 0 - 10, max => 200
// y => min 0 - 10, max => 280
// textReference => 3
// xStart -> start point lines and letter
// 67 char from x = 40 -> 107
// 80 char from x = 10 -> 90
// 75 char from x = 20 -> 95
// 70-71 char from x = 30 -> 100

// 3px for letter