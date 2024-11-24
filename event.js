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
  deleteButton.className = "delete-button";
  // deleteButton.textContent = "Delete";

  //***************Delete BTN SVG IMPLEM********************************** */
    // Create the SVG element
    const svgDeleteNS = "http://www.w3.org/2000/svg";
    const svgDelete = document.createElementNS(svgDeleteNS, "svg");
    svgDelete.setAttribute("focusable", "false");
    svgDelete.setAttribute("aria-hidden", "true");
    svgDelete.setAttribute("viewBox", "0 0 24 24");
    svgDelete.setAttribute("aria-label", "fontSize small");

    // Create the path element
    const pathDelete = document.createElementNS(svgDeleteNS, "path");
    pathDelete.setAttribute("d", "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z");

    // Append the path to the SVG
    svgDelete.appendChild(pathDelete);

    // Append the SVG to the button
    deleteButton.appendChild(svgDelete);
    //***************************************************************** */


  deleteButton.addEventListener("click", async () => {
    const deletedEventId = await EventAPI.deleteEventItem(event.id);
    eventItemElem.remove();
  });


  // edit button
  const editButton = document.createElement("button");
  editButton.className = "edit-button";
  // editButton.textContent = "Edit";

  //***************EDIT BTN SVG IMPLEM********************************** */
  // Create the SVG element
  const svgEditNS = "http://www.w3.org/2000/svg";
  const svgEdit = document.createElementNS(svgEditNS, "svg");
  svgEdit.setAttribute("focusable", "false");
  svgEdit.setAttribute("aria-hidden", "true");
  svgEdit.setAttribute("viewBox", "0 0 24 24");
  svgEdit.setAttribute("data-testid", "EditIcon");
  svgEdit.setAttribute("aria-label", "fontSize small");

  // Create the path element
  const pathEdit = document.createElementNS(svgEditNS, "path");
  pathEdit.setAttribute("d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z");

  // Append the path to the SVG
  svgEdit.appendChild(pathEdit);

  // Append the SVG to the button
  editButton.appendChild(svgEdit);

  //***************************************************************** */


  // input for editing event
  const inputElem = document.createElement("input");
  const eventInputNameElem = document.createElement("td");
  inputElem.value = event.eventName;
  eventInputNameElem.append(inputElem);

  const inputStartDateElem = document.createElement("input");
  inputStartDateElem.type = "date";
  const eventInputStartDateElem = document.createElement("td");
  inputStartDateElem.value = event.startDate;
  eventInputStartDateElem.append(inputStartDateElem);

  const inputEndDateElem = document.createElement("input");
  inputEndDateElem.type = "date";
  const eventInputEndDateElem = document.createElement("td");
  inputEndDateElem.value = event.endDate;
  eventInputEndDateElem.append(inputEndDateElem);


  // save button
  const saveButton = document.createElement("button");
  saveButton.className = "save-button";
  // saveButton.textContent = "Save";

  //***************SAVE BTN SVG IMPLEM********************************** */

  // Create the SVG element
  const svgSaveNS = "http://www.w3.org/2000/svg";
  const svgSave = document.createElementNS(svgSaveNS, "svg");
  svgSave.setAttribute("focusable", "false");
  svgSave.setAttribute("aria-hidden", "true");
  svgSave.setAttribute("viewBox", "0 0 24 24");
  svgSave.setAttribute("aria-label", "fontSize small");

  // Create the path element
  const pathSave = document.createElementNS(svgSaveNS, "path");
  pathSave.setAttribute("d", "M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z");

  // Append the path to the SVG
  svgSave.appendChild(pathSave);

  // Append the SVG to the button
  saveButton.appendChild(svgSave);

  //***************************************************************** */


  // cancel button
  const cancelButton = document.createElement("button");
  cancelButton.className = "cancel-button";
  // cancelButton.textContent = "Cancel";

  //***************Cancel BTN SVG IMPLEM********************************** */
  // Create the SVG element
  const svgCancelNS = "http://www.w3.org/2000/svg";
  const svgCancel = document.createElementNS(svgCancelNS, "svg");
  svgCancel.setAttribute("focusable", "false");
  svgCancel.setAttribute("aria-hidden", "true");
  svgCancel.setAttribute("viewBox", "0 0 24 24");
  svgCancel.setAttribute("aria-label", "fontSize small");

  // Create the path element
  const pathCancel = document.createElementNS(svgCancelNS, "path");
  pathCancel.setAttribute("d", "M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z");

  // Append the path to the SVG
  svgCancel.appendChild(pathCancel);

  // Append the SVG to the button
  cancelButton.appendChild(svgCancel);

  //***************************************************************** */



  // add event listeners for the edit, save, and cancel buttons
  editButton.addEventListener("click", () => {

    // Replace event details with editable fields
    eventNameElem.remove();
    startTimeElem.remove();
    endTimeElem.remove();
    deleteButton.remove();
    editButton.remove();
    actionsElem.remove();

    actionsElem.append(saveButton, cancelButton);
    eventItemElem.append(eventInputNameElem, eventInputStartDateElem, eventInputEndDateElem, actionsElem);

  });

  saveButton.addEventListener("click", async () => {
    const updatedEvent = await EventAPI.editEventItem(event.id, {
      eventName: inputElem.value,
      startDate: inputStartDateElem.value,
      endDate: inputEndDateElem.value,
    });

    eventNameElem.textContent = updatedEvent.eventName;
    startTimeElem.textContent = updatedEvent.startDate;
    endTimeElem.textContent = updatedEvent.endDate;

    eventInputNameElem.remove();
    eventInputStartDateElem.remove();
    eventInputEndDateElem.remove();
    saveButton.remove();
    cancelButton.remove();
    actionsElem.remove();
    actionsElem.append(editButton, deleteButton);

    eventItemElem.append(eventNameElem, startTimeElem, endTimeElem, actionsElem);

  });


  cancelButton.addEventListener("click", () => {
    eventInputNameElem.remove();
    eventInputStartDateElem.remove();
    eventInputEndDateElem.remove();
    saveButton.remove();
    cancelButton.remove();
    actionsElem.remove();
    actionsElem.append(editButton, deleteButton);
    eventItemElem.append(eventNameElem, startTimeElem, endTimeElem, actionsElem);
  });

  actionsElem.append(editButton, deleteButton);
  eventItemElem.append(eventNameElem, startTimeElem, endTimeElem, actionsElem);
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

    // Add Button
    const addButton = document.createElement("button");
    addButton.className = "add-button";
    // addButton.textContent = "Add";

    //***************Add BTN SVG IMPLEM********************************** */

    // Create the SVG element
    const svgAddNS = "http://www.w3.org/2000/svg";
    const svgAdd = document.createElementNS(svgAddNS, "svg");
    svgAdd.setAttribute("focusable", "false");
    svgAdd.setAttribute("viewBox", "0 0 24 24");
    svgAdd.setAttribute("aria-hidden", "true");
    svgAdd.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    // Create the path element
    const pathAdd = document.createElementNS(svgAddNS, "path");
    pathAdd.setAttribute("d", "M12 6V18M18 12H6");
    pathAdd.setAttribute("stroke", "#FFFFFF");
    pathAdd.setAttribute("stroke-width", "4");
    pathAdd.setAttribute("stroke-linecap", "round");
    pathAdd.setAttribute("stroke-linejoin", "round");

    // Append the path to the SVG
    svgAdd.appendChild(pathAdd);

    // Append the SVG to the button
    addButton.appendChild(svgAdd);

    //***************************************************************** */



    addButton.addEventListener("click", async () => {
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
    cancelButton.className = "cancel-button";
    // cancelButton.textContent = "Cancel";

    //***************Cancel BTN SVG IMPLEM********************************** */
    // Create the SVG element
    const svgCancelNS = "http://www.w3.org/2000/svg";
    const svgCancel = document.createElementNS(svgCancelNS, "svg");
    svgCancel.setAttribute("focusable", "false");
    svgCancel.setAttribute("aria-hidden", "true");
    svgCancel.setAttribute("viewBox", "0 0 24 24");
    svgCancel.setAttribute("aria-label", "fontSize small");

    // Create the path element
    const pathCancel = document.createElementNS(svgCancelNS, "path");
    pathCancel.setAttribute("d", "M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z");

    // Append the path to the SVG
    svgCancel.appendChild(pathCancel);

    // Append the SVG to the button
    cancelButton.appendChild(svgCancel);
    //***************************************************************** */

    cancelButton.addEventListener("click", () => {
      newEventRow.remove();  // if canceled remove
    });

    actionCell.appendChild(addButton);
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
