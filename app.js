const EventAPI = (() => {
    const API_URL = "http://localhost:3000/events";

    async function getEventList() {

        // GET
        const response = await fetch(API_URL);
        const eventItem = await response.json();
        return eventItem;
    }

    async function postEventItem(newEventItem) {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEventItem),
        });

        const ev = await response.json();
        return ev;
    }

    async function deleteEventItem(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        await response.json();
        return id;
    }

    async function updateEventItem(id, updatedEventItem) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEventItem),
        });

        const updEv = await response.json();
        return updEv;
    }


    async function editEventItem(id, newEventItem) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEventItem),
        });

        const updatedEventItem = await response.json();
        return updatedEventItem;
    }

    return {
        getEventList,
        postEventItem,
        deleteEventItem,
        updateEventItem,
        editEventItem,
    };
})();

