let iconPluses = document.querySelectorAll('.icon-plus');
let iconMinuses = document.querySelectorAll('.icon-minus');

iconPluses.forEach((iconPlus) => {
    iconPlus.addEventListener('click', (event) => {
        let plusClass = event.target.className;
        let num_string = plusClass[plusClass.length - 1];
        let pElement = document.querySelector('.descript-' + num_string);
        let iconMinus = document.querySelector('.minus-' + num_string);
        iconMinus.style.display = "block";
        pElement.style.display = "block";
        iconPlus.style.display = "none";
    })
});

iconMinuses.forEach((iconMinus) => {
    iconMinus.addEventListener('click', (event) => {
        let minusClass = event.target.className;
        let num_string = minusClass[minusClass.length - 1];
        let pElement = document.querySelector('.descript-' + num_string);
        let iconPlus = document.querySelector('.plus-' + num_string);
        iconMinus.style.display = "none";
        iconPlus.style.display = "block";
        pElement.style.display = "none";

    })
});