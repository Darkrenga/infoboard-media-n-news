const newsSlider = document.querySelector('.newsSlider')

const newsContent = (async function () {
    const url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=PgarRRswJ13m0Wn8kjUyvC7cBp2SfSyh';
    const response = await fetch(url);
    const data = await response.json();
    await resetSlider(data.results)
}());

let oldArray = Array();
function resetSlider(data) {
    oldArray.push(data.map(item => item.title));

    createSlider(oldArray)
}

// function isOverflown(element) {
//     const bounds = newsSlider.getBoundingClientRect().left;
//     const elementBounds = element.getBoundingClientRect().left;
//     return bounds > elementBounds;
// }

async function createSlider(oldArray) {

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'checkOverflow');
    newsSlider.appendChild(ul);
    reWrite(oldArray[0])

    oldArray[0].map(item => {
        ul.innerHTML += `<li class="news-list__item">${item}</li>`
        setInterval(() => { animateChildren(ul) }, 3000)
    });
}

let length = 0;
function animateChildren(ul) {
    for (let children of ul.children) {
        length--
        children.style.transform = `translateX(${length + 'px'})`
        children.style.transition = '20s linear';
    }
}

function reWrite(oldArray) {
    const ul = document.querySelector('.checkOverflow');
    console.log(ul)
    // const filter = oldArray.filter((item, index) => oldArray.indexOf(ul.children[0].innerHTML) == index)
    // oldArray.push(filter[0])
    // console.log(oldArray)
}