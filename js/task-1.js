const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elements}`);
});
