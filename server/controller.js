const cars = require('./db.json')
let globalId = 0

module.exports = {
    getAllCars: (req,res) => {
        res.status(200).send(cars)
    },

    createCar: (req,res) => {
        let {make} = req.body
        let newCar = {
            id: globalId,
            make
        }
        cars.push(newCar)
        res.status(200).send(cars)
        globalId ++ 
    }
}