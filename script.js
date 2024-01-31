// GESTION DES INPUT

const departure = document.querySelector("#inputDeparture");
const arrival = document.querySelector("#inputArrival");
const date = document.querySelector("#inputDate");

//GESTION DU BOUTON
const button = document.querySelector("#search_btn");

button.addEventListener("click", () => {
  fetch("http://localhost:3000/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      departure: departure.value,
      arrival: arrival.value,
      date: date.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.result) {
        document.querySelector(".card-box-right").innerHTML = `
                <img id="train_img" src="./img/notfound.png" alt="train" />
                <p id ="p_img">No trip found</p>
                `;
      } else {
        document.querySelector(".card-box-right").innerHTML = "";
        for (let i = 0; i < data.allTrips.length; i++) {
          const departure = data.allTrips[i].departure;
          const arrival = data.allTrips[i].arrival;
          const price = data.allTrips[i].price;
          const hours = data.allTrips[i].date;
          const id = data.allTrips[i]._id;

          document.querySelector(".card-box-right").innerHTML += `
                    <div class="trip_container">
                        <div>${departure}>${arrival}</div>
                        <div>${`16:23`}</div>
                        <div>${price}€</div>
                        <button data-maory="${id}" class="btn_book">BOOK</button>
                    </div>
                    `;
        }
        const buttons = document.querySelectorAll(".btn_book");
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", function () {
            fetch("http://localhost:3000/trips/store", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: this.dataset.maory,
              }),
            })
              .then((response) => response.json())
              .then(() => {
                console.log("test")
                window.location.href = 'cart.html'
              });
          });
        }
      }
    });
});
