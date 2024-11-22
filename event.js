function createEventElem(event) {
  const eventItemElem = document.createElement("tr");

  const eventNameElem = document.createElement("td");
  eventNameElem.textContent = event.eventName;

  const startTimeElem = document.createElement("td");
  startTimeElem.textContent = event.startDate;

  const endTimeElem = document.createElement("td");
  endTimeElem.textContent = event.endDate;

  const actionsElem = document.createElement("td");

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", async () => {
    const deletedEventId = await EventAPI.deleteEventItem(event.id);
    eventItemElem.remove();
  });

  // edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  // input for editing event
  const inputElem = document.createElement("input");
  inputElem.value = event.eventName;

  // save button
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";

  // cancel button
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";

  // add event listeners for the edit, save, and cancel buttons
  editButton.addEventListener("click", () => {

    // Replace event details with editable fields
    eventNameElem.remove();
    startTimeElem.remove();
    endTimeElem.remove();
    deleteButton.remove();
    editButton.remove();

    eventItemElem.append(inputElem, saveButton, cancelButton);
  });

  saveButton.addEventListener("click", async () => {
    const updatedEvent = await EventAPI.editEventItem(event.id, {
      eventName: inputElem.value,
    });

    eventNameElem.textContent = updatedEvent.eventName;
    eventItemElem.append(eventNameElem, startTimeElem, endTimeElem, deleteButton, editButton);

    inputElem.remove();
    saveButton.remove();
    cancelButton.remove();
  });

  cancelButton.addEventListener("click", () => {
    inputElem.remove();
    saveButton.remove();
    cancelButton.remove();
    eventItemElem.append(eventNameElem, startTimeElem, endTimeElem, deleteButton, editButton);
  });

  eventItemElem.append(eventNameElem, startTimeElem, endTimeElem, deleteButton, editButton);
  return eventItemElem;
}


function renderEvents(events) {
  const eventListElem = document.getElementById("event-list");

  // clear list first
  eventListElem.innerHTML = '';

  for (const event of events) {
    const eventElem = createEventElem(event);
    eventListElem.appendChild(eventElem);
  }
}

function setUpFormEvent() {
  const addEventButton = document.querySelector(".add-event");
  const eventListElem = document.getElementById("event-list");

  addEventButton.addEventListener("click", () => {

    // For New ROw
    const newEventRow = document.createElement("tr");

    // Event Name input
    const eventNameCell = document.createElement("td");
    const eventNameInput = document.createElement("input");
    eventNameInput.placeholder = "Event Name";
    eventNameCell.appendChild(eventNameInput);
    newEventRow.appendChild(eventNameCell);

    // Start Time input
    const startTimeCell = document.createElement("td");
    const startTimeInput = document.createElement("input");
    startTimeInput.type = "date";
    startTimeInput.placeholder = "Start Time";
    startTimeCell.appendChild(startTimeInput);
    newEventRow.appendChild(startTimeCell);

    // End Time input
    const endTimeCell = document.createElement("td");
    const endTimeInput = document.createElement("input");
    endTimeInput.type = "date";
    endTimeInput.placeholder = "End Time";
    endTimeCell.appendChild(endTimeInput);
    newEventRow.appendChild(endTimeCell);

    // Action Buttons
    const actionCell = document.createElement("td");

    // Save Button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", async () => {
      const eventName = eventNameInput.value;
      const startTime = startTimeInput.value;
      const endTime = endTimeInput.value;

      if (eventName && startTime && endTime) {
        // new event
        const newEvent = await EventAPI.postEventItem({
          eventName: eventName,
          startDate: startTime,
          endDate: endTime,
        });

        // Create event and add to list.
        const eventElem = createEventElem(newEvent);
        eventListElem.appendChild(eventElem);
        newEventRow.remove();  // once saved, remove.
      } else {
        alert("Please fill in all fields.");
      }
    });

    // Cancel Button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
      newEventRow.remove();  // if canceled remove
    });

    actionCell.appendChild(saveButton);
    actionCell.appendChild(cancelButton);
    newEventRow.appendChild(actionCell);

    // Append the new row to the table
    eventListElem.appendChild(newEventRow);
  });
}


// App initialize
(function initApp() {
  setUpFormEvent();
  EventAPI.getEventList().then((events) => {
    renderEvents(events);
  }).catch((error) => {
    console.error('Error loading events:', error);
  });
})();
