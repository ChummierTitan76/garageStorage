class Car {
	constructor(make, model, year, color) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color; 		 
	};
	
	admire() {
		return `I really love the looks of this ${this.make}.`;
	}
	
	clean() {
		return `The ${this.make} really needs a good cleaning. Let's give the ${this.model} a good wash.`
	}
	
	drive() {
		return `Take the ${this.model} out for a drive!`;
	}
	
	park() {
		return `Parked the ${this.make} in what seemed to be a good spot.`;
	}
	
	parkAtHome() {
	
		return `Pulled the ${this.model} into the garage.`;
	}

	crash() {
		return `Ended up crashing the ${this.make}.`;
	}
};

const myFirstCar = new Car('Honda', 'Accord', 2004, 'tan');


const trucky = document.getElementById('trucky');


function setTitle() {
	// create the h4 element
	const title = document.createElement('h2');
	// set h4 content to vehicle make input value
	title.textContent = (`${vehicleMake.value} ${vehicleModel.value}`);
	// Append the title to the card
	card.append(title);
}

function setSpec() {
	// Create the hr element
	const rule = document.createElement('hr');
	// Append the hr Element  to the card
	card.append(rule);
	// Create the detail elements
	const specYear = document.createElement('h3');
	// set the h3 element to vehicle year and color values
	specYear.textContent = (`${vehicleYear.value} ${vehicleColor.value}`);
	// Append the specs to the card
	card.append(specYear);
}


const display = document.getElementById('displayArea');

const card = document.createElement('p');

function buildCard() {
	// Set the attributes for the card
	card.setAttribute('class', 'card');
	// Append the Card to the Display Area
	if (display) {
		display.append(card);
		setTitle();
		setSpec();
	};
}

const vehicleMake = document.getElementById('make');
const vehicleModel = document.getElementById('model');
const vehicleYear = document.getElementById('year');
const vehicleColor = document.getElementById('color');


// Variable for Add Vehicle Button
const addVehicle = document.getElementById('addVehicle');

// Adding Add Vehicle Event listener
addVehicle.addEventListener('click', function() {
	buildCard();
	const addition = new Car(this.make, this.model, this.year, this.color)
	addition.make = vehicleMake.value;
	addition.model = vehicleModel.value;
	addition.year = vehicleYear.value;
	addition.color = vehicleColor.value;
	// card.append(addition)
	console.log(addition);
});


// Variable for Reset Form button
const resetForm = document.getElementById('reset');


// Variable for Clear List button
const clearList = document.getElementById('clearList');

// Add Event Listener - clear display area
clearList.addEventListener('click', function() {
	display.textContent = '';
})
