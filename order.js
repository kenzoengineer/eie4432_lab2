const PRICES = {
    "Bubble Milktea": {
        "small": 15,
        "medium": 20,
        "large": 22
    },
    "Iced Latte": {
        "small": 12,
        "medium": 18,
        "large": 20
    },
    "Pocari Sweat": {
        "small": 6,
        "medium": 11,
        "large": 18
    }
}

const calculatePrice = (radioElement) => {
    let price = 0;
    
    const drinkSelectionElement = document.getElementById("drink");
    if (!drinkSelectionElement || !drinkSelectionElement.value) {
        alert("Please select a drink before choosing a size.");
        radioElement.checked = false;
        return;
    }

    price = PRICES[drinkSelectionElement.value][radioElement.value]
    const priceElement = document.getElementById("price");
    priceElement.innerText = price;
}

const validateForm = () => {

    let size = "";
    let ice = "";
    let sweetness = "";

    const nameElement = document.getElementById("name");
    const drinkSelectionElement = document.getElementById("drink");
    const sizeRadios = document.getElementsByName("size");
    const iceRadios = document.getElementsByName("ice");
    const sweetnessRadios = document.getElementsByName("sweetness");

    sizeRadios.forEach(x => {
        if (x.checked) {
            size = x.value;
        }
    });
    iceRadios.forEach(x => {
        if (x.checked) {
            ice = x.value;
        }
    });
    sweetnessRadios.forEach(x => {
        if (x.checked) {
            sweetness = x.value;
        }
    });

    if (!nameElement || !(nameElement.value.trim())) {
        alert("Please enter your name.");
        return false;
    }

    if (!drinkSelectionElement || !drinkSelectionElement.value) {
        alert("Please select a drink first.");
        return false;
    }

    if (!size) {
        alert("Please select a size.");
        return false;
    }

    if (!ice) {
        alert("Please select an ice preference.");
        return false;
    }

    if (!sweetness) {
        alert("Please select a sweetness level.");
        return false;
    }

    return true;
}

const placeOrder = (event) => {
    event.preventDefault();
    if (!validateForm()) {
        return;
    }

    const orderData = new Array(5);

    const nameElement = document.getElementById("name");
    const drinkSelectionElement = document.getElementById("drink");
    const sizeRadios = document.getElementsByName("size");
    const iceRadios = document.getElementsByName("ice");
    const sweetnessRadios = document.getElementsByName("sweetness");

    sizeRadios.forEach(x => {
        if (x.checked) {
            orderData[2] = x.value;
        }
    });
    iceRadios.forEach(x => {
        if (x.checked) {
            orderData[3] = x.value;
        }
    });
    sweetnessRadios.forEach(x => {
        if (x.checked) {
            orderData[4] = x.value;
        }
    });

    orderData[0] = nameElement.value;
    orderData[1] = drinkSelectionElement.value; 

    localStorage.setItem("orders", orderData);
    alert("Order placed successfully! Thank you for your order.");

    document.getElementById("orderform").reset();
    document.getElementById("price").innerText = 0;
} 