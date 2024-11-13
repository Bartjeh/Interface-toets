function check(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("adress").value;
    let phone = document.getElementById("phone").value;

    
    let albumselector = document.getElementById("albumselector").value;
    let ticket = document.getElementById("ticketamount").value;

    let album = albumselector.value;
    let tickets = parseInt(ticketamount.value);

    
    if (album == "" && ticket == ""){
        alert(`Choose an Album or Ticket`);
    }

    const albumPrice = 45;
    const ticketPrice = 110; 
    let totalPrice = 0;

    const albumNames = {
        "vélo": "Vélo plage",
        "am": "AM",
        "fav": "Favourite worst nightmares",
        "hum": "Humburg",
        "what": "Whatever people say I am, I am",
        "car": "The car"
    };

    if (name === "" || address === "" || phone === "") {
        alert("Please complete all the information fields.");
        return;
    }

    let albumName = albumNames[albumselector] || "No album selected";



    if (album === "") {
        alert("Please select an album.");
        return; 
    }
    
    if (isNaN(tickets) || tickets < 1) {
        alert("Please enter a valid number of tickets (at least 1).");
        return;
    }

    if (isNaN(tickets) || tickets < 0) {
        alert("Please enter a valid number of tickets.");
        return;
    }


     totalPrice = albumPrice + (tickets * ticketPrice);


     if (album !== "" && tickets > 0) {
         totalPrice *= 0.9; 
        }

        alert(`Buyer Information:
        Name: ${name}
        Address: ${address}
        Phone: ${phone}
        Album: ${albumName}
        Tickets: ${tickets}`);

        document.getElementById("antwoord").textContent = `€${totalPrice.toFixed(2)}`;
}
