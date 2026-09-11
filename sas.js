const prompt = require("prompt-sync")();
// =====================================
// DATA
// =====================================
const trips = [

    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },

    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },

    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },

    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },

    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },

    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },

    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },

    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },

    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },

    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },

    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },

    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },

    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },

    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },

    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },

    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },

    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },

    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },

    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },

    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }

];

const tickets = []
let choice = null



// 1. AFFICHER LES TRAJETS

function showtrips(arr) {

for (let i = 0; i < arr.length; i++) {
    console.log("============");
    console.log("id :", arr[i].id)
    console.log( arr[i].departure +" => " +arr[i].destination)
    console.log("depart :", arr[i].departureTime)
    console.log("arrivée :", arr[i].arrivalTime)
    console.log("prix :", arr[i].price, "DH")
    console.log("places :", arr[i].availableSeats)
}
}



// 2. ACHETER UN TICKET


function ticketss(arr) {
    let name = prompt("nom du passager : ")
    let id = Number(
        prompt("Id du trajet : ")
    );
    let foundTrip = null
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
    foundTrip = arr[i]
    break;
    }
}

    if (foundTrip === null) {
    console.log("trajet introuvable")

    return;
    }

    if (foundTrip.availableSeats === 0) {
    console.log("train complet")

    return;
    }

let seat = 1;
while (seat <= 50) {

let occupied = false

for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].tripId === id && tickets[i].seatNumber === seat) 
    occupied = true
}

if (occupied === false) {
    break;
}
    seat++
}

let ticket = {
    id: tickets.length + 1,passengerName: name,
    tripId: id,
    seatNumber: seat,
    price: foundTrip.price
    };

    tickets.push(ticket)
    foundTrip.availableSeats--
    console.log("ticket acheté avec succès")
}



// 3. AFFICHER LES TICKETS

function showTickets(tickets) {

    if (tickets.length === 0) {
        console.log("aucun ticket enregistré")
        return;
    }

for (let tick of tickets) {
    console.log("============");
    console.log("Ticket ID :", tick.id)
    console.log("Passager :", tick.passengerName)
    console.log("Trajet ID :", tick.tripId)
    console.log("Seat :", tick.seatNumber)
    console.log("Prix :", tick.price, "DH")
    }
}



// 4. ANNULER UN TICKET


function cancelTicket() {

    let id = Number(prompt("identifiant du ticket : ")
    )
    let foundTicket = null
    let ticketIndex = -1
    for (let i = 0; i < tickets.length; i++) {

    if (tickets[i].id === id) {
    foundTicket = tickets[i]
    ticketIndex = i
    break;
    }
}

if (foundTicket === null)
     {
    console.log("ticket introuvable")

    return;
    }

for (let i = 0; i < trips.length; i++) {
    if (trips[i].id === foundTicket.tripId) {
    trips[i].availableSeats++
    break;
    }
}
tickets.splice(ticketIndex, 1)
console.log("ticket annulé avec succès")
}



// 5. RECHERCHER UN TICKET


function searchTicket() {

    let name = prompt("Nom du passager : ")
    let found = false;
for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].passengerName.toLowerCase().trim() ===name.toLowerCase().trim())
    {
    console.log("============")
    console.log("Ticket ID :", tickets[i].id)
    console.log("Passager :", tickets[i].passengerName)
    console.log("Trajet ID :", tickets[i].tripId)
    console.log("Seat :", tickets[i].seatNumber)
    console.log("Prix :", tickets[i].price, "DH")
    found = true;
    }
}
    if (found === false) {
    console.log("aucun ticket trouvé")
    }
}



// 6. FILTRER LES TRAJETS


function filterTrips(arr) {

    let departure = prompt("ville de départ : ")
    let result = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].departure.toLowerCase().trim() ===departure.toLowerCase().trim()) {
        result.push(arr[i])
    }
}
return result;
}


// 7. TRIER LES TRAJETS


function sortTrips(arr) {
    let result = [...arr];
    result.sort(function(A, B) {return A.price - B.price;})
    return result;
}




while (choice !== 0) {

    console.log("============================")
    console.log("       RAILWAY MANAGER")
    console.log("============================")
    console.log("1. Afficher les trajets")
    console.log("2. Acheter un ticket")
    console.log("3. Afficher les tickets")
    console.log("4. Annuler un ticket")
    console.log("5. Rechercher un ticket")
    console.log("6. Filtrer les trajets")
    console.log("7. Trier les trajets")
    console.log("0. Quitter")

    choice = Number(
        prompt("votre choix : ")
    );
    switch (choice) {

    case 0:
        console.log("au revoir")

            break;
    case 1:
        showtrips(trips)

            break;
    case 2:
        ticketss(trips)

            break;
    case 3:
        showTickets(tickets)

        break;
    case 4:
        cancelTicket()

        break;
    case 5:
        searchTicket()

        break;
    case 6: {
        let filteredTrips = filterTrips(trips)

        if (filteredTrips.length === 0) {

            console.log("aucun trajet trouvé")

        } else {

            showtrips(filteredTrips);
        }

        break;
        }
    case 7: {
        let sortedTrips = sortTrips(trips)
        showtrips(sortedTrips)

        break;
        }
        default:
        console.log("choix invalide")

        break;
}
}