const carsContainer = document.querySelector('#cars-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/cars`


const carsCallback = ({ data: cars }) => displayCars(cars)
const errCallback = err => console.log(err.response.data)

const getAllCars = () => axios.get(baseURL).then(carsCallback).catch(errCallback)
const createCar = body => axios.post(baseURL, body).then(carsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let car = document.querySelector('#make')
    let bodyObj = {
        car: car.value,
    }

    createCar(bodyObj)

    car.value = ''
}

function createCarsCard(car) {
    const carCard = document.createElement('div')
    carCard.classList.add('car-card')

    carCard.innerHTML = `
    <div
    <p class="car-make">${car.make}</p>
        <input type="checkbox" id= carss>
        <label for="carss"> Still Owned </label>
    </div>
    `
    
    carsContainer.appendChild(carCard)
}

function displayCars(arr) {
    carsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCarsCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllCars()