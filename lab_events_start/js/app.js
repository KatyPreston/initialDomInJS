document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-item-form');
    console.log(form);
    const handleFormSubmit = function (event) {
        event.preventDefault();

        console.log("form logged");
        const form = event.target;

        const title = form.title.value;
        const author = form.author.value;
        const cat = form.category.value;

        const result =  document.querySelector( '#reading-list')
        result.textContent = `${title}, ${author}, ${cat}`

        form.reset()
    }
    
    form.addEventListener('submit', handleFormSubmit);



});
