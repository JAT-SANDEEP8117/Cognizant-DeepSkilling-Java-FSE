// Task 1 - JavaScript Basics

console.log("Welcome to the Community Portal");

window.addEventListener("load", () => {
    alert("Community Portal Loaded Successfully");
});

// Task 2 - Data Types and Operators

const eventName = "Music Festival";
const eventDate = "2026-07-15";
let seats = 50;

console.log(`Event: ${eventName} | Date: ${eventDate} | Seats: ${seats}`);

function reserveSeat() {
    seats--;
    console.log(`Remaining Seats: ${seats}`);
}

// Task 5 - Objects and Prototypes

class Event {

    constructor(name, category, date, seats) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// Task 6 - Arrays and Methods

let events = [

    new Event("Music Festival", "Music", "2026-07-15", 50),

    new Event("Baking Workshop", "Workshop", "2026-08-10", 30),

    new Event("Sports Meet", "Sports", "2026-07-25", 0),

    new Event("Community Seminar", "Seminar", "2026-09-01", 20)
];

events.push(
    new Event("Art Exhibition", "Art", "2026-10-05", 25)
);

const musicEvents =
    events.filter(event => event.category === "Music");

console.log("Music Events", musicEvents);

const formattedEvents =
    events.map(event => `Event: ${event.name}`);

console.log(formattedEvents);

// Task 3 - Conditionals and Loops

function displayValidEvents() {

    const today = new Date();

    events.forEach(event => {

        const eventDate = new Date(event.date);

        if (eventDate > today && event.seats > 0) {

            console.log(
                `${event.name} is available`
            );
        }
        else {

            console.log(
                `${event.name} is unavailable`
            );
        }
    });
}

displayValidEvents();

// Task 4 - Functions and Closures

function addEvent(name, category, date, seats) {

    events.push(
        new Event(name, category, date, seats)
    );
}

function registerUser(eventName) {

    try {

        const event =
            events.find(e => e.name === eventName);

        if (!event)
            throw new Error("Event not found");

        if (event.seats <= 0)
            throw new Error("No seats available");

        event.seats--;

        renderEvents();

        alert("Registration Successful");

    }
    catch (error) {

        alert(error.message);
    }
}

function filterEventsByCategory(category, callback) {

    const result =
        events.filter(
            event => event.category === category
        );

    callback(result);
}

function registrationTracker() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}

const trackMusicRegistrations =
    registrationTracker();

console.log(
    trackMusicRegistrations()
);

console.log(
    trackMusicRegistrations()
);

// Task 5 - Object Entries

events.forEach(event => {

    console.log(
        Object.entries(event)
    );
});

// Task 7 - DOM Manipulation

function renderEvents() {

    const container =
        document.querySelector("#eventContainer");

    if (!container)
        return;

    container.innerHTML = "";

    events.forEach(event => {

        const card =
            document.createElement("div");

        card.className = "eventCard";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Date: ${event.date}</p>
            <p>Seats: ${event.seats}</p>
            <button onclick="registerUser('${event.name}')">
                Register
            </button>
        `;

        container.appendChild(card);
    });
}

window.addEventListener(
    "DOMContentLoaded",
    renderEvents
);

// Task 8 - Event Handling

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const categoryFilter =
            document.querySelector("#categoryFilter");

        if (categoryFilter) {

            categoryFilter.onchange = function () {

                const value = this.value;

                if (value === "All") {

                    renderEvents();
                }
                else {

                    filterEventsByCategory(
                        value,
                        result => {

                            const container =
                                document.querySelector("#eventContainer");

                            container.innerHTML = "";

                            result.forEach(event => {

                                const card =
                                    document.createElement("div");

                                card.className = "eventCard";

                                card.innerHTML = `
                                    <h3>${event.name}</h3>
                                    <p>${event.category}</p>
                                `;

                                container.appendChild(card);
                            });
                        }
                    );
                }
            };
        }

        const search =
            document.querySelector("#searchBox");

        if (search) {

            search.addEventListener(
                "keydown",
                () => {

                    console.log(
                        "Searching:",
                        search.value
                    );
                }
            );
        }
    }
);

// Task 9 - Promises

function fetchEventsPromise() {

    fetch(
        "https://jsonplaceholder.typicode.com/posts"
    )
        .then(response => response.json())
        .then(data => {

            console.log(
                "Data Loaded",
                data.slice(0, 5)
            );
        })
        .catch(error => {

            console.log(error);
        });
}

fetchEventsPromise();

// Task 9 - Async Await

async function fetchEventsAsync() {

    try {

        console.log("Loading Events...");

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

        const data =
            await response.json();

        console.log(
            "Async Data",
            data.slice(0, 5)
        );
    }
    catch (error) {

        console.log(error);
    }
}

fetchEventsAsync();

// Task 10 - Modern JavaScript

function createEvent(
    name = "New Event",
    category = "General"
) {

    return {
        name,
        category
    };
}

const sample =
    createEvent();

console.log(sample);

const firstEvent =
    events[0];

const {
    name,
    category,
    date
} = firstEvent;

console.log(
    name,
    category,
    date
);

const clonedEvents =
    [...events];

console.log(clonedEvents);

// Task 11 - Forms

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.querySelector("#registrationForm");

        if (!form)
            return;

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const userName =
                    form.elements["name"].value;

                const email =
                    form.elements["email"].value;

                const selectedEvent =
                    form.elements["event"].value;

                const errorBox =
                    document.querySelector("#errorBox");

                if (
                    userName === "" ||
                    email === ""
                ) {

                    errorBox.innerHTML =
                        "Please fill all fields";

                    return;
                }

                errorBox.innerHTML = "";

                console.log(
                    userName,
                    email,
                    selectedEvent
                );

                submitRegistration({
                    userName,
                    email,
                    selectedEvent
                });
            }
        );
    }
);

// Task 12 - AJAX and Fetch API

function submitRegistration(user) {

    console.log(
        "Sending Registration..."
    );

    setTimeout(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(user)
            }
        )
            .then(response => response.json())
            .then(data => {

                alert(
                    "Registration Successful"
                );

                console.log(data);
            })
            .catch(error => {

                alert(
                    "Registration Failed"
                );

                console.log(error);
            });

    }, 2000);
}

// Task 13 - Debugging

console.log(
    "Debugging Started"
);

console.log(
    "Current Events:",
    events
);

// Task 14 - jQuery Example

$(document).ready(function () {

    $("#registerBtn").click(function () {

        $(".eventCard").fadeOut(1000);

        $(".eventCard").fadeIn(1000);
    });
});

// Framework Benefit

console.log(
    "Frameworks like React or Vue provide reusable components, better state management and easier UI updates."
);