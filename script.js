const dataset1 = ['Butterflies in my', 'Finding a needle in a', 'Fish out of', 'Go the extra', 'In the nick of', 'Let the cat out of the'];
const dataset2 = ['stomach', 'haystack', 'water', 'mile', 'time', 'bag'];
const dataset3 = ['Ghandhi', 'Donald Trump', 'Genghis Khan', 'Jeff', 'Albert Einstein', 'Julius Ceasar'];
const dataset4 = ['1922', '1513-16', '3th century B.C.', 'Around 500 A.D.', 'Friday', 'Neolithic age'];

const quoteGen = (set1, set2, set3, set4) => {
    let aNum = Math.floor(Math.random() * set1.length);
    let bNum = Math.floor(Math.random() * set2.length);
    let cNum = Math.floor(Math.random() * set3.length);
    let dNum = Math.floor(Math.random() * set4.length);

    let partA = set1[aNum];
    let partB = set2[bNum];
    let partC = set3[cNum];
    let partD = set4[dNum];

    let quote = `${partA} ${partB}. \n - ${partC}, ${partD}.`;

    return quote;
}

console.log(quoteGen(dataset1, dataset2, dataset3, dataset4));