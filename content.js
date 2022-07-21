const commentDisplay = document.querySelector('.comments')


let localcomments = [

    {
        name: "phenry",
        PComment: "This a very touching situation and the situation is getting quite alarming. keep up the good job."
    }
];
let comment = JSON.parse(localStorage.getItem('comment'))
if (!comment) {
    comment = localcomments
    localStorage.setItem('comment', JSON.stringify(localcomments))
}
let count = 0
    // read on json and event
function generateRandomNumber() {
    const el = comment[count];
    commentDisplay.innerHTML = `<h3>${el.name}</h3>
                            <p>${el.PComment}</p>
                            <p><strong>3hrs ago </strong> </p>
                            `

    count = count < quotes.length - 1 ? count + 1 : 0
}
generateRandomNumber()


// let quotes = JSON.parse(localStorage.getItem('quotes')) || [];

// function addQuote() {
//     let quoteInput = document.querySelector('#new-quote')
//     let authorInput = document.querySelector('#new-author')
//     let priceInput = document.querySelector('#p-price')
//     let linkInput = document.querySelector('#p-link')
//     let quote = quoteInput.value
//     let author = authorInput.value
//     let price = priceInput.value
//     let link = linkInput.value
//     quotes.push({ quote, author, price, link })
//     quoteInput.value = ''
//     authorInput.value = ''
//     priceInput.value = ''
//     linkInput.value = ''

//     localStorage.setItem('quotes', JSON.stringify(quotes))
//     console.log(quotes);
// }