const API_URL = "http://localhost:3000/events";

//Fetch
(async function fetchEventList(){

    try {

        const response = await fetch(API_URL);
        const events = await response.json();
        console.log(events);
    }
    catch(error) {
        console.log(error);
    }    
})();