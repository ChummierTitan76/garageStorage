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



// Global Variables
const display = document.getElementById('displayArea');
const card = document.createElement('div');

const trucky = document.getElementById('trucky');


const titleTag = document.createElement('h3');
const descriptionTag = document.createElement('h4')	;
const rule = document.createElement('hr');
	

function buildCard() {
		// Create the input object 
		const newCar = new Car(this.make, this.model, this.year, this.color);
		const div = document.createElement('div');
		// Assign the div the class of card
		div.setAttribute('class', 'card');
		// Append the div to the display area
		display.append(div);
		
		// Creates h4 element - sets text content as object values
		function setTitle() {
			const title = document.createElement('h4');
			title.textContent= `${this.make.value} ${this.model.value}`;
			// Append the title to div element
			div.append(title);
		}

		setTitle(); // Calling the function

		// Creates h3 element - sets text content as object values
		function setSpecs() {
			const specs = document.createElement('h3');
			specs.textContent= `${this.year.value} ${this.color.value}`;
			div.append(specs);
		};

		setSpecs(); // Calling the function
};

// Variable for Add Vehicle Button
const addVehicle = document.getElementById('addVehicle');

// Adding Add Vehicle Event listener
addVehicle.addEventListener('click', function() {
	// Generate new card
	buildCard();
	
});

// Reset form upon completion
function reset() {
	document.getElementById('form').reset;
	form = document.getElementById('form');
	form.preventDefault();
}

// Variable for Reset Form button
const resetForm = document.getElementById('reset');

// Variable for Clear List button
const clearList = document.getElementById('clearList');

// Add Event Listener - clear display area
clearList.addEventListener('click', function() {
	display.textContent = '';
})
