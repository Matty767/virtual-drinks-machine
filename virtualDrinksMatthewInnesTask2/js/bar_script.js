// Define the image paths for the various drinks.
let outputImageTea = "images/tea.png";
let outputImageCoffee = "images/coffee.png";
let outputImageHotChocolate = "images/hot_chocolate.png";
let outputImageLatte = "images/latte.png";
let outputImageEspresso = "images/espresso.png";

// Function to handle the selection of a drink and display relevant details.
function selectDrink() {
    // Get the value of the selected drink from the dropdown menu.
    let drink = document.getElementById('selection').value;

    // Get the number of sugars entered by the user.
    let sugar = document.getElementById('sugar').value;

    // Get the percentage of milk entered by the user.
    let milk = document.getElementById('milk').value;

    // Get the value of sit-in or takeaway option from the dropdown menu.
    let option = document.getElementById('option').value;

    // Reference to the paragraph element where drink details will be displayed.
    let drinkDetails = document.getElementById("drinkDetails");

    // Reference to the paragraph element where the drink image will be displayed.
    let imgDisplay = document.getElementById("imgDisplay");

    // Use a switch statement to handle the drink selection and display corresponding details and image.
    switch (drink) {
        case "Tea":
            drinkDetails.innerText = `You have selected: Tea with ${sugar} sugar(s) and ${milk}% milk. ${option}.`;
            imgDisplay.innerHTML = `<img src="${outputImageTea}" alt="Tea Image" style="width:200px;height:auto;">`;
            break;

        case "Coffee":
            drinkDetails.innerText = `You have selected: Coffee with ${sugar} sugar(s) and ${milk}% milk. ${option}.`;
            imgDisplay.innerHTML = `<img src="${outputImageCoffee}" alt="Coffee Image" style="width:200px;height:auto;">`;
            break;

        case "Hot Chocolate":
            drinkDetails.innerText = `You have selected: Hot Chocolate with ${sugar} sugar(s) and ${milk}% milk. ${option}.`;
            imgDisplay.innerHTML = `<img src="${outputImageHotChocolate}" alt="Hot Chocolate Image" style="width:200px;height:auto;">`;
            break;

        case "Latte":
            drinkDetails.innerText = `You have selected: Latte with ${sugar} sugar(s) and ${milk}% milk. ${option}.`;
            imgDisplay.innerHTML = `<img src="${outputImageLatte}" alt="Latte Image" style="width:200px;height:auto;">`;
            break;

        case "Espresso":
            drinkDetails.innerText = `You have selected: Espresso with ${sugar} sugar(s). ${option}.`;
            imgDisplay.innerHTML = `<img src="${outputImageEspresso}" alt="Espresso Image" style="width:200px;height:auto;">`;
            break;

        default:
            drinkDetails.innerText = "Please select a drink.";
            imgDisplay.innerHTML = "images/tea.png";
            break;
    }
}
