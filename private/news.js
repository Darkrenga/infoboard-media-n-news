// newsContet: Used for fetching JSON from our URI, and sends sorted data.result (array) to sortContent.
// sortContent: Is used for sorting out the HTML tags/elements from the strings content in data. Sends sorted string and result data to our createNewsCard.
// createNewsCard: Creates DOM from data.

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Fetch content from URI ━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
const newsContent = (async function () {
    const url = 'https://api.mediehuset.net/infoboard/news';
    const response = await fetch(url);
    const data = await response.json();

    sortContent(data.result)
}())

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Sort content fetched from URI ━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
function sortContent(data) {
    for (let result of data) {
        let str = result.content
        let regEx = new RegExp(/<.+?>/, 'gi');
        let shortenString = str.replace(regEx, '').substring(0, 50);
        createNewsCard(result.title, result.datetime, shortenString)
    }
}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━ createNewsCard is our VIEW, which uses data from sortContent ━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
function createNewsCard(title, date, string) {
    console.log(title, date, string)
}