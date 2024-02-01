fetch('http://localhost:3000/trips/getcarts')
.then(response => response.json())
.then(data => {
    document.querySelector("#box_cart").innerHTML =""
    for (let i = 0 ; i < data.trips.length; i++) {
        console.log(data.trips[0])
        document.querySelector("#box_cart").innerHTML += `
        <div id="box_cart">
            <div class="box_trips">
                <p>Paris > Lyon</p>
                <p>20:09</p>
                <p>103€</p>
                <button class="btn_delete">X</button>
            </div>
        </div>
        `
    }
    document.querySelectorAll(".btn_delete").addEventListener("click", function() {
        alert("CLIQUE")
    })
})



