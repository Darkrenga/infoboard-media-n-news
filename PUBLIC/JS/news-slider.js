const newsContent = (async function () {
    const url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=PgarRRswJ13m0Wn8kjUyvC7cBp2SfSyh';
    const response = await fetch(url);
    const data = await response.json();
    testing(data.results)
}())