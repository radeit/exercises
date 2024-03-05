const allElements = document.querySelectorAll('*');

allElements.forEach(element => {
    const classes = Array.from(element.classList).join(' ,');

    console.log(element.tagName, ',', classes);
});

