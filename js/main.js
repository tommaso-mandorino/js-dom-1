// get switch button element
const switchButtonElement = document.getElementById('switch-button');

// get light bulb image element
const lightBulbImageElement = document.getElementById('light-bulb-image');

// Add click event on switch button
switchButtonElement.addEventListener('click', () => {

    // IF switch button text is 'Accendi'
    if (switchButtonElement.innerText === 'Accendi') {

        // Change light bulb image
        lightBulbImageElement.src = './img/yellow_lamp.png';

        // Change light bulb image alt text
        lightBulbImageElement.alt = 'Lampadina accesa';

        // Change switch button text
        switchButtonElement.innerText = 'Spegni';

    }
    // ELSE (it will be 'Spegni')
    else {
      
        // Change light bulb image
        lightBulbImageElement.src = './img/white_lamp.png';

        // Change light bulb image alt text
        lightBulbImageElement.alt = 'Lampadina spenta';

        // Change switch button text
        switchButtonElement.innerText = 'Accendi';

    }

});