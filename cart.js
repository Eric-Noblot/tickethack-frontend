fetch('http://localhost:3000/trips/getcarts')
.then(response => response.json())
.then(data => {
    data.trips.forEach(trip => {
        console.log(trip);
    })
})