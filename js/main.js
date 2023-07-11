var myArray = [
        {
           author: 'Oscar Wilde',
           quote: 'Be yourself; everyone else is already taken.'
        },
        {
           author: 'Mark Twain',
           quote: 'If you tell the truth, you don\'t have to remember anything.'
        },
        {
           author: 'Frank Zappa',
           quote: 'So many books, so little time'
        },
        {
           author: 'Marcus Cicero',
           quote: 'A room without books is like a body without a soul.'
        },
        {
           author: 'Tywin Lannister',
           quote: 'A Lion doesn\'t concern himself with the opinions of the sheep'
        },
        {
           author: 'Will Rogers',
           quote: 'Don\'t let yesterday take up too much of today.'
        },
        {
            author: 'Winston Churchill',
            quote: 'If you\'re going through hell, keep going.'
         },
         {
            author: 'William Wallace',
            quote: 'Every man dies. Not every man lives.'
         },
];


function chooseRandomly(){
    var myRandom = Math.floor(Math.random() * myArray.length);

    document.getElementById("quote").innerHTML = `"${myArray[myRandom].quote}"`;
    document.getElementById("author").innerHTML = `--${myArray[myRandom].author}`;
}



console.log(parseInt("40 pounds"));