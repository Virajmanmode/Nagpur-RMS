// Automatically set current date
const today = new Date().toISOString().substr(0, 10);
document.getElementById("date").value = today;

// Function to handle report submission (for future use)
function submitReport() {
    const date = document.getElementById("date").value;
    const shift = document.getElementById("shift").value;
    const vehicle = document.getElementById("vehicle").value;

    alert(`Report generated for date: ${date}, shift: ${shift}, vehicle: ${vehicle}`);
}



// Define the vehicle options globally to reuse across the script
const vehicleOptions = [{
        value: 'R2416',
        text: 'R2416'
    },
    {
        value: 'R1678',
        text: 'R1678'
    },
    {
        value: '2553DIP',
        text: '2553DIP'
    }
];

// Function to create a select box with vehicle options
function createVehicleSelect(nameAttribute, selectedValue = '') {
    const select = document.createElement('select');
    select.name = nameAttribute;

    vehicleOptions.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.text = optionData.text;
        if (optionData.value === selectedValue) {
            option.selected = true; // Set selected option if passed
        }
        select.appendChild(option);
    });

    return select;
}

/** VEHICLE UNLOADED SECTION **/

// Function to add a new vehicle selection box for unloaded vehicles
function addVehicle(vehicle = '') {
    const unloadedDiv = document.getElementById('vehicle-unloaded');

    // Create a new container div for the vehicle unloaded row
    const unloadedRow = document.createElement('div');
    unloadedRow.classList.add('vehicle-unloaded-row');

    const newSelect = createVehicleSelect('vehicle-unloaded', vehicle);

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);


    // Add event listener to clear button to remove the unloaded row
    clearButton.addEventListener('click', () => {
        unloadedDiv.removeChild(unloadedRow); // Remove the row from the DOM
        saveUnloadedVehicles(); // Auto-save for this section
    });

    // Append the select and clear button to the unloaded row
    unloadedRow.appendChild(newSelect);
    unloadedRow.appendChild(clearButton);

    // Append the unloaded row to the unloaded vehicles section
    unloadedDiv.appendChild(unloadedRow);
}

// Function to save unloaded vehicles to local storage
function saveUnloadedVehicles() {
    const unloadedVehicles = [];
    document.querySelectorAll('#vehicle-unloaded .vehicle-unloaded-row').forEach(row => {
        const vehicle = row.querySelector('select').value;
        unloadedVehicles.push(vehicle);
    });

    localStorage.setItem('unloadedVehicles', JSON.stringify(unloadedVehicles));
}

// Function to load saved unloaded vehicles from local storage on page load
function loadSavedVehicles() {
    const unloadedVehicles = JSON.parse(localStorage.getItem('unloadedVehicles')) || [];
    unloadedVehicles.forEach(vehicle => {
        addVehicle(vehicle);
    });
}

/** VEHICLE PENDING SECTION **/

// Function to add a new vehicle selection box with range input for pending vehicles
function addPendingVehicle(vehicle = '', count = 1) {
    const pendingDiv = document.getElementById('vehicle-pending');

    // Create a new container div for the pending vehicle row
    const pendingRow = document.createElement('div');
    pendingRow.classList.add('vehicle-pending-row');

    const newSelect = createVehicleSelect('vehicle-pending', vehicle);

    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.name = 'vehicle-count';
    newInput.min = '1';
    newInput.max = '10';
    newInput.value = count; // Set the input to the saved count

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Add event listener to clear button to remove the pending row
    clearButton.addEventListener('click', () => {
        pendingDiv.removeChild(pendingRow); // Remove the row from the DOM
        savePendingVehicles(); // Auto-save for this section
    });

    // Append the select, input, and clear button to the pending row
    pendingRow.appendChild(newSelect);
    pendingRow.appendChild(newInput);
    pendingRow.appendChild(clearButton);

    // Append the pending row to the pending vehicles section
    pendingDiv.appendChild(pendingRow);
}

// Function to save pending vehicles to local storage
function savePendingVehicles() {
    const pendingVehicles = [];
    document.querySelectorAll('#vehicle-pending .vehicle-pending-row').forEach(row => {
        const vehicle = row.querySelector('select').value;
        const count = row.querySelector('input').value;
        pendingVehicles.push({
            vehicle,
            count
        });
    });

    localStorage.setItem('pendingVehicles', JSON.stringify(pendingVehicles));
}

// Function to load saved pending vehicles from local storage on page load
function loadSavedPendingVehicles() {
    const pendingVehicles = JSON.parse(localStorage.getItem('pendingVehicles')) || [];
    pendingVehicles.forEach(pending => {
        addPendingVehicle(pending.vehicle, pending.count);
    });
}


/** GRN DONE SECTION **/

// Function to add a new GRN Done select box
function addGRNDone(grnDone = '') {
    const grnDoneDiv = document.getElementById('grn-done');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newSelect = createVehicleSelect('grn-done', grnDone);

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Add event listener to clear the row and save
    clearButton.addEventListener('click', () => {
        grnDoneDiv.removeChild(newDiv);
        saveGRNDone(); // Auto-save after removing
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(clearButton);
    grnDoneDiv.appendChild(newDiv);
}

// Function to save GRN Done select boxes
function saveGRNDone() {
    const grnDoneArray = [];
    document.querySelectorAll('#grn-done .inline select').forEach(select => {
        grnDoneArray.push(select.value);
    });

    localStorage.setItem('grnDone', JSON.stringify(grnDoneArray));
}

// Load GRN Done from local storage on page load
function loadGRNDone() {
    const grnDoneData = JSON.parse(localStorage.getItem('grnDone')) || [];
    grnDoneData.forEach(grnDone => {
        addGRNDone(grnDone);
    });
}

/** GRN PENDING SECTION **/

// Function to add a new GRN Pending row
function addGRNPending(grnPending = '', remark = '') {
    const grnPendingDiv = document.getElementById('grn-pending');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newSelect = createVehicleSelect('grn-pending', grnPending);

    const newRemarkInput = document.createElement('input');
    newRemarkInput.type = 'text';
    newRemarkInput.name = 'remark';
    newRemarkInput.placeholder = 'Enter remark';
    newRemarkInput.style.flex = '1';
    newRemarkInput.value = remark;

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Add event listener to clear the row and save
    clearButton.addEventListener('click', () => {
        grnPendingDiv.removeChild(newDiv);
        saveGRNPending(); // Auto-save after removing
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(clearButton);
    grnPendingDiv.appendChild(newDiv);
}

// Function to save GRN Pending select boxes and remarks
function saveGRNPending() {
    const grnPendingArray = [];
    document.querySelectorAll('#grn-pending .inline').forEach(row => {
        const vehicle = row.querySelector('select').value;
        const remark = row.querySelector('input[name="remark"]').value;
        grnPendingArray.push({
            vehicle,
            remark
        });
    });

    localStorage.setItem('grnPending', JSON.stringify(grnPendingArray));
}

// Load GRN Pending from local storage on page load
function loadGRNPending() {
    const grnPendingData = JSON.parse(localStorage.getItem('grnPending')) || [];
    grnPendingData.forEach(pending => {
        addGRNPending(pending.vehicle, pending.remark);
    });
}

/** MES DONE SECTION **/

// Function to add a new MES Done select box
function addMESDone(mesDone = '') {
    const mesDoneDiv = document.getElementById('mes-done');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newSelect = createVehicleSelect('mes-done', mesDone);

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Add event listener to clear the row and save
    clearButton.addEventListener('click', () => {
        mesDoneDiv.removeChild(newDiv);
        saveMESDone(); // Auto-save after removing
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(clearButton);
    mesDoneDiv.appendChild(newDiv);
}

// Function to save MES Done select boxes
function saveMESDone() {
    const mesDoneArray = [];
    document.querySelectorAll('#mes-done .inline select').forEach(select => {
        mesDoneArray.push(select.value);
    });

    localStorage.setItem('mesDone', JSON.stringify(mesDoneArray));
}

// Load MES Done from local storage on page load
function loadMESDone() {
    const mesDoneData = JSON.parse(localStorage.getItem('mesDone')) || [];
    mesDoneData.forEach(mesDone => {
        addMESDone(mesDone);
    });
}

/** MES PENDING SECTION **/

// Function to add a new MES Pending row
function addMESPending(mesPending = '', lot = 1, remark = '') {
    const mesPendingDiv = document.getElementById('mes-pending');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newSelect = createVehicleSelect('mes-pending', mesPending);

    const newLotInput = document.createElement('input');
    newLotInput.type = 'number';
    newLotInput.name = 'lot-count';
    newLotInput.min = '1';
    newLotInput.max = '10';
    newLotInput.value = lot; // Default value set to saved lot or 1

    const newRemarkInput = document.createElement('input');
    newRemarkInput.type = 'text';
    newRemarkInput.name = 'remark';
    newRemarkInput.placeholder = 'Enter remark';
    newRemarkInput.style.flex = '1';
    newRemarkInput.value = remark;

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Add event listener to clear the row and save
    clearButton.addEventListener('click', () => {
        mesPendingDiv.removeChild(newDiv);
        saveMESPending(); // Auto-save after removing
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(newLotInput);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(clearButton);
    mesPendingDiv.appendChild(newDiv);
}

// Function to save MES Pending select boxes, lot, and remarks
function saveMESPending() {
    const mesPendingArray = [];
    document.querySelectorAll('#mes-pending .inline').forEach(row => {
        const vehicle = row.querySelector('select').value;
        const lot = row.querySelector('input[name="lot-count"]').value;
        const remark = row.querySelector('input[name="remark"]').value;
        mesPendingArray.push({
            vehicle,
            lot,
            remark
        });
    });

    localStorage.setItem('mesPending', JSON.stringify(mesPendingArray));
}

// Load MES Pending from local storage on page load
function loadMESPending() {
    const mesPendingData = JSON.parse(localStorage.getItem('mesPending')) || [];
    mesPendingData.forEach(pending => {
        addMESPending(pending.vehicle, pending.lot, pending.remark);
    });
}



/** MAJOR DOWN TIME SECTION **/

// Function to add a new Major Down Time row (from time, to time, remark)
function addMajorDownTime(fromTime = '', toTime = '', remark = '') {
    const majorDownTimeDiv = document.getElementById('major-downtime');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newFromInput = document.createElement('input');
    newFromInput.type = 'time';
    newFromInput.name = 'from-time';
    newFromInput.value = fromTime; // Default to saved or blank

    const newToInput = document.createElement('input');
    newToInput.type = 'time';
    newToInput.name = 'to-time';
    newToInput.value = toTime; // Default to saved or blank

    const newRemarkInput = document.createElement('input');
    newRemarkInput.type = 'text';
    newRemarkInput.name = 'remark';
    newRemarkInput.placeholder = 'Enter remark';
    newRemarkInput.value = remark; // Default to saved or blank
    newRemarkInput.style.flex = '1';

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Clear row and auto-save
    clearButton.addEventListener('click', () => {
        majorDownTimeDiv.removeChild(newDiv);
        saveMajorDownTime(); // Auto-save after removal
    });

    newDiv.appendChild(newFromInput);
    newDiv.appendChild(newToInput);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(clearButton);
    majorDownTimeDiv.appendChild(newDiv);
}

// Function to save Major Down Time data
function saveMajorDownTime() {
    const majorDownTimeArray = [];
    document.querySelectorAll('#major-downtime .inline').forEach(row => {
        const fromTime = row.querySelector('input[name="from-time"]').value;
        const toTime = row.querySelector('input[name="to-time"]').value;
        const remark = row.querySelector('input[name="remark"]').value;
        majorDownTimeArray.push({
            fromTime,
            toTime,
            remark
        });
    });

    localStorage.setItem('majorDownTime', JSON.stringify(majorDownTimeArray));
}

// Load Major Down Time from local storage
function loadMajorDownTime() {
    const majorDownTimeData = JSON.parse(localStorage.getItem('majorDownTime')) || [];
    majorDownTimeData.forEach(data => {
        addMajorDownTime(data.fromTime, data.toTime, data.remark);
    });
}

/** DOWN TIME SECTION **/

// Function to add a new Down Time row (from time, to time, remark)
function addDownTime(fromTime = '', toTime = '', remark = '') {
    const downTimeDiv = document.getElementById('downtime');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newFromInput = document.createElement('input');
    newFromInput.type = 'time';
    newFromInput.name = 'from-time';
    newFromInput.value = fromTime; // Default to saved or blank

    const newToInput = document.createElement('input');
    newToInput.type = 'time';
    newToInput.name = 'to-time';
    newToInput.value = toTime; // Default to saved or blank

    const newRemarkInput = document.createElement('input');
    newRemarkInput.type = 'text';
    newRemarkInput.name = 'remark';
    newRemarkInput.placeholder = 'Enter remark';
    newRemarkInput.value = remark; // Default to saved or blank
    newRemarkInput.style.flex = '1';

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Clear row and auto-save
    clearButton.addEventListener('click', () => {
        downTimeDiv.removeChild(newDiv);
        saveDownTime(); // Auto-save after removal
    });

    newDiv.appendChild(newFromInput);
    newDiv.appendChild(newToInput);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(clearButton);
    downTimeDiv.appendChild(newDiv);
}

// Function to save Down Time data
function saveDownTime() {
    const downTimeArray = [];
    document.querySelectorAll('#downtime .inline').forEach(row => {
        const fromTime = row.querySelector('input[name="from-time"]').value;
        const toTime = row.querySelector('input[name="to-time"]').value;
        const remark = row.querySelector('input[name="remark"]').value;
        downTimeArray.push({
            fromTime,
            toTime,
            remark
        });
    });

    localStorage.setItem('downTime', JSON.stringify(downTimeArray));
}

// Load Down Time from local storage
function loadDownTime() {
    const downTimeData = JSON.parse(localStorage.getItem('downTime')) || [];
    downTimeData.forEach(data => {
        addDownTime(data.fromTime, data.toTime, data.remark);
    });
}

/** DISPATCH SECTION **/

// Function to add a new Dispatch row (dispatch details)
function addDispatch(dispatch = '') {
    const dispatchDiv = document.getElementById('dispatch');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'dispatch';
    newInput.placeholder = 'Enter dispatch details';
    newInput.value = dispatch; // Default to saved or blank
    newInput.style.flex = '1';

    // Create a clear button for each unloaded row
    const clearButton = document.createElement('button');
    clearButton.type = 'button'; // Prevent form submission
    clearButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Image URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '20px'; // Adjust the size as needed
    imgElement.style.height = '20px';

    // Append the image to the button
    clearButton.appendChild(imgElement);

    // Clear row and auto-save
    clearButton.addEventListener('click', () => {
        dispatchDiv.removeChild(newDiv);
        saveDispatch(); // Auto-save after removal
    });

    newDiv.appendChild(newInput);
    newDiv.appendChild(clearButton);
    dispatchDiv.appendChild(newDiv);
}

// Function to save Dispatch data
function saveDispatch() {
    const dispatchArray = [];
    document.querySelectorAll('#dispatch .inline').forEach(row => {
        const dispatchDetails = row.querySelector('input[name="dispatch"]').value;
        dispatchArray.push(dispatchDetails);
    });

    localStorage.setItem('dispatch', JSON.stringify(dispatchArray));
}

// Load Dispatch from local storage
function loadDispatch() {
    const dispatchData = JSON.parse(localStorage.getItem('dispatch')) || [];
    dispatchData.forEach(dispatch => {
        addDispatch(dispatch);
    });
}

// Function to save Reservation Data
function saveReservationData() {
    const reservationData = {
        received: document.querySelector('input[name="received"]').value,
        posted: document.querySelector('input[name="posted"]').value,
        pending: document.querySelector('input[name="pending"]').value,
    };

    localStorage.setItem('reservationData', JSON.stringify(reservationData));
}

// Function to load Reservation Data
function loadReservationData() {
    const reservationData = JSON.parse(localStorage.getItem('reservationData')) || {};
    document.querySelector('input[name="received"]').value = reservationData.received || 1;
    document.querySelector('input[name="posted"]').value = reservationData.posted || 1;
    document.querySelector('input[name="pending"]').value = reservationData.pending || 1;
}

// Function to save Manpower Data
function saveManpowerData() {
    const manpowerData = {
        required: document.querySelector('select[name="required"]').value,
        reported: document.querySelector('input[name="reported"]').value,
    };

    localStorage.setItem('manpowerData', JSON.stringify(manpowerData));
}

// Function to load Manpower Data
function loadManpowerData() {
    const manpowerData = JSON.parse(localStorage.getItem('manpowerData')) || {};
    document.querySelector('select[name="required"]').value = manpowerData.required || 11;
    document.querySelector('input[name="reported"]').value = manpowerData.reported || 1;
}

// Function to save Report Generated By Data
function saveReportGeneratedBy() {
    const reportGeneratedBy = document.querySelector('select[name="report-generated-by"]').value;
    localStorage.setItem('reportGeneratedBy', reportGeneratedBy);
}

// Function to load Report Generated By Data
function loadReportGeneratedBy() {
    const reportGeneratedBy = localStorage.getItem('reportGeneratedBy') || 'Vishal'; // Default to Vishal
    document.querySelector('select[name="report-generated-by"]').value = reportGeneratedBy;
}

/** SAVE ALL SECTIONS **/

// This function saves both unloaded and pending vehicle sections at once when the "Save" button is clicked.
function saveAllSections() {
    saveUnloadedVehicles();
    savePendingVehicles();
    saveGRNDone();
    saveGRNPending();
    saveMESDone();
    saveMESPending();
    saveMajorDownTime();
    saveDownTime();
    saveDispatch();
    saveReservationData();
    saveManpowerData();
    saveReportGeneratedBy();
    alert('All data saved successfully!');
}

// Load saved vehicles on page load
window.onload = function() {
    loadSavedVehicles(); // Load unloaded vehicles
    loadSavedPendingVehicles(); // Load pending vehicles
    loadGRNDone();
    loadGRNPending();
    loadMESDone();
    loadMESPending();
    loadMajorDownTime();
    loadDownTime();
    loadDispatch();
    loadReservationData();
    loadManpowerData();
    loadReportGeneratedBy();
};




// Export as TXT
function exportAsTXT() {
    const date = document.getElementById('date').value;
    const shift = document.getElementById('shift').value;

    let txtData = `RAW MATERIAL STORAGE (Shift Report) 📊\n\nDate: ${date}\nShift: ${shift}\n\n`;

    // Vehicle Unloaded
    const vehiclesUnloaded = document.querySelectorAll('#vehicle-unloaded select');
    txtData += "🚛 Vehicles Unloaded:\n";
    vehiclesUnloaded.forEach(vehicle => {
        txtData += `- ${vehicle.value}\n`;
    });

    // Vehicle Unloading Pending
    const vehiclesPending = document.querySelectorAll('#vehicle-pending select');
    txtData += "\n⏳ Vehicles Unloading Pending:\n";
    vehiclesPending.forEach((vehicle, index) => {
        const count = vehicle.nextElementSibling.value;
        txtData += `- ${vehicle.value} (Count: ${count})\n`;
    });

    // GRN Done
    const grnDone = document.querySelectorAll('#grn-done select');
    txtData += "\n✅ GRN Done:\n";
    grnDone.forEach(grn => {
        txtData += `- ${grn.value}\n`;
    });

    // GRN Pending
    const grnPending = document.querySelectorAll('#grn-pending select');
    txtData += "\n❌ GRN Pending:\n";
    grnPending.forEach(grn => {
        const remark = grn.nextElementSibling.value;
        txtData += `- ${grn.value} (Remark: ${remark})\n`;
    });

    // MES Done
    const mesDone = document.querySelectorAll('#mes-done select');
    txtData += "\n✅ MES Done:\n";
    mesDone.forEach(mes => {
        txtData += `- ${mes.value}\n`;
    });

    // MES Pending
    const mesPending = document.querySelectorAll('#mes-pending select');
    txtData += "\n⏳ MES Pending:\n";
    mesPending.forEach(mes => {
        const count = mes.nextElementSibling.value;
        const remark = mes.nextElementSibling.nextElementSibling.value;
        txtData += `- ${mes.value} (Lot Count: ${count}, Remark: ${remark})\n`;
    });

    // Major Down Time
    const majorDownTimes = document.querySelectorAll('#major-downtime .inline');
    txtData += "\n⏸️ Major Down Time:\n";
    majorDownTimes.forEach(downtime => {
        const fromTime = downtime.children[0].value;
        const toTime = downtime.children[1].value;
        const remark = downtime.children[2].value;
        txtData += `- From: ${fromTime}, To: ${toTime} (Remark: ${remark})\n`;
    });

    // Down Time
    const downTimes = document.querySelectorAll('#downtime .inline');
    txtData += "\n⏲️ Down Time:\n";
    downTimes.forEach(downtime => {
        const fromTime = downtime.children[0].value;
        const toTime = downtime.children[1].value;
        const remark = downtime.children[2].value;
        txtData += `- From: ${fromTime}, To: ${toTime} (Remark: ${remark})\n`;
    });

    // Dispatch
    const dispatchDetails = document.querySelectorAll('#dispatch input[name="dispatch"]');
    txtData += "\n📦 Dispatch:\n";
    dispatchDetails.forEach(dispatch => {
        txtData += `- ${dispatch.value}\n`;
    });

    // Reservation Data
    const received = document.querySelector('#reservation-data input[name="received"]').value;
    const posted = document.querySelector('#reservation-data input[name="posted"]').value;
    const pending = document.querySelector('#reservation-data input[name="pending"]').value;

    txtData += `\n🗂️ Reservation Data:\n`;
    txtData += `- Received: ${received}\n`;
    txtData += `- Posted: ${posted}\n`;
    txtData += `- Pending: ${pending}\n`;

    // Manpower Data
    const required = document.querySelector('#manpower-data select[name="required"]').value;
    const reported = document.querySelector('#manpower-data input[name="reported"]').value;

    txtData += `\n👥 Manpower Data:\n`;
    txtData += `- Required: ${required}\n`;
    txtData += `- Reported: ${reported}\n`;

    // Report Generated By
    const reportGeneratedBy = document.querySelector('#report-generated-by select[name="report-generated-by"]').value;
    txtData += `\nReport Generated By: ${reportGeneratedBy}\n`;

    // Copy to Clipboard
    navigator.clipboard.writeText(txtData).then(() => {
        alert('Data copied to clipboard! 📋');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });

    // Download as .txt file
    const blob = new Blob([txtData], {
        type: 'text/plain'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'shift_report.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Data downloaded as shift_report.txt! 📥');
}

function exportAsPDF() {
    const {
        jsPDF
    } = window.jspdf;
    const pdf = new jsPDF();

    const date = document.getElementById('date').value;
    const shift = document.getElementById('shift').value;

    // Add document title
    pdf.text('RAW MATERIAL STORAGE (Shift Report)', 10, 10);
    pdf.text(`Date: ${date}`, 10, 20);
    pdf.text(`Shift: ${shift}`, 10, 30);

    let yOffset = 40; // Initialize Y offset for text placement
    const sectionMargin = 10; // Vertical margin between sections

    // Function to handle multi-page logic
    function addPageIfNeeded() {
        if (yOffset > 270) { // Check if yOffset is nearing the bottom of the page
            pdf.addPage();
            yOffset = 10; // Reset yOffset for new page
        }
    }

    // Vehicle Unloaded
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('Vehicles Unloaded:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const vehiclesUnloaded = document.querySelectorAll('#vehicle-unloaded select');
    vehiclesUnloaded.forEach((vehicle) => {
        addPageIfNeeded();
        pdf.text(`- ${vehicle.value}`, 10, yOffset += 10);
    });

    // Vehicle Unloading Pending
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('Vehicles Unloading Pending:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const vehiclesPending = document.querySelectorAll('#vehicle-pending select');
    vehiclesPending.forEach((vehicle) => {
        addPageIfNeeded();
        const count = vehicle.nextElementSibling.value;
        pdf.text(`- ${vehicle.value} (Count: ${count})`, 10, yOffset += 10);
    });

    // GRN Done
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('GRN Done:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const grnDone = document.querySelectorAll('#grn-done select');
    grnDone.forEach((grn) => {
        addPageIfNeeded();
        pdf.text(`- ${grn.value}`, 10, yOffset += 10);
    });

    // GRN Pending
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('GRN Pending:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const grnPending = document.querySelectorAll('#grn-pending select');
    grnPending.forEach((grn) => {
        addPageIfNeeded();
        const remark = grn.nextElementSibling.value;
        pdf.text(`- ${grn.value} (Remark: ${remark})`, 10, yOffset += 10);
    });

    // MES Done
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('MES Done:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const mesDone = document.querySelectorAll('#mes-done select');
    mesDone.forEach((mes) => {
        addPageIfNeeded();
        pdf.text(`- ${mes.value}`, 10, yOffset += 10);
    });

    // MES Pending
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('MES Pending:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const mesPending = document.querySelectorAll('#mes-pending select');
    mesPending.forEach((mes) => {
        addPageIfNeeded();
        const count = mes.nextElementSibling.value;
        const remark = mes.nextElementSibling.nextElementSibling.value;
        pdf.text(`- ${mes.value} (Lot Count: ${count}, Remark: ${remark})`, 10, yOffset += 10);
    });

    // Major Down Time
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('Major Down Time:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const majorDownTimes = document.querySelectorAll('#major-downtime .inline');
    majorDownTimes.forEach((downtime) => {
        addPageIfNeeded();
        const fromTime = downtime.children[0].value;
        const toTime = downtime.children[1].value;
        const remark = downtime.children[2].value;
        pdf.text(`- From: ${fromTime}, To: ${toTime} (Remark: ${remark})`, 10, yOffset += 10);
    });

    // Down Time
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('Down Time:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const downTimes = document.querySelectorAll('#downtime .inline');
    downTimes.forEach((downtime) => {
        addPageIfNeeded();
        const fromTime = downtime.children[0].value;
        const toTime = downtime.children[1].value;
        const remark = downtime.children[2].value;
        pdf.text(`- From: ${fromTime}, To: ${toTime} (Remark: ${remark})`, 10, yOffset += 10);
    });

    // Dispatch
    yOffset += sectionMargin; // Add margin above section title
    pdf.text('Dispatch:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    const dispatchDetails = document.querySelectorAll('#dispatch input[name="dispatch"]');
    dispatchDetails.forEach((dispatch) => {
        addPageIfNeeded();
        pdf.text(`- ${dispatch.value}`, 10, yOffset += 10);
    });

    // Reservation Data
    const received = document.querySelector('#reservation-data input[name="received"]').value;
    const posted = document.querySelector('#reservation-data input[name="posted"]').value;
    const pending = document.querySelector('#reservation-data input[name="pending"]').value;

    yOffset += sectionMargin; // Add margin above section title
    pdf.text('Reservation Data:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    pdf.text(`- Received: ${received}`, 10, yOffset += 10);
    pdf.text(`- Posted: ${posted}`, 10, yOffset += 10);
    pdf.text(`- Pending: ${pending}`, 10, yOffset += 10);

    // Manpower Data
    const required = document.querySelector('#manpower-data select[name="required"]').value;
    const reported = document.querySelector('#manpower-data input[name="reported"]').value;

    yOffset += sectionMargin; // Add margin above section title
    pdf.text('Manpower Data:', 10, yOffset + 10);
    yOffset += sectionMargin; // Add margin after section title
    pdf.text(`- Required: ${required}`, 10, yOffset += 10);
    pdf.text(`- Reported: ${reported}`, 10, yOffset += 10);

    // Report Generated By
    yOffset += sectionMargin; // Add margin above section title
    const reportGeneratedBy = document.querySelector('#report-generated-by select[name="report-generated-by"]').value;
    pdf.text(`Report Generated By: ${reportGeneratedBy}`, 10, yOffset + 10);

    // Save the PDF
    pdf.save('raw_material_store_report.pdf');
    alert('PDF downloaded successfully!');
}


function exportAsExcel() {
    // Get the data from the form inputs
    const date = document.getElementById('date').value;
    const shift = document.getElementById('shift').value;

    // Prepare the data for Excel
    const data = [
        ['RAW MATERIAL STORAGE (Shift Report)'],
        [`Date: ${date}`],
        [`Shift: ${shift}`],
        [],
        ['Vehicles Unloaded:']
    ];

    // Vehicle Unloaded
    const vehiclesUnloaded = document.querySelectorAll('#vehicle-unloaded select');
    vehiclesUnloaded.forEach((vehicle) => {
        data.push([`- ${vehicle.value}`]);
    });

    data.push([]);
    data.push(['Vehicles Unloading Pending:']);
    const vehiclesPending = document.querySelectorAll('#vehicle-pending select');
    vehiclesPending.forEach((vehicle) => {
        const count = vehicle.nextElementSibling.value;
        data.push([`- ${vehicle.value} (Count: ${count})`]);
    });

    data.push([]);
    data.push(['GRN Done:']);
    const grnDone = document.querySelectorAll('#grn-done select');
    grnDone.forEach((grn) => {
        data.push([`- ${grn.value}`]);
    });

    data.push([]);
    data.push(['GRN Pending:']);
    const grnPending = document.querySelectorAll('#grn-pending select');
    grnPending.forEach((grn) => {
        const remark = grn.nextElementSibling.value;
        data.push([`- ${grn.value} (Remark: ${remark})`]);
    });

    data.push([]);
    data.push(['MES Done:']);
    const mesDone = document.querySelectorAll('#mes-done select');
    mesDone.forEach((mes) => {
        data.push([`- ${mes.value}`]);
    });

    data.push([]);
    data.push(['MES Pending:']);
    const mesPending = document.querySelectorAll('#mes-pending select');
    mesPending.forEach((mes) => {
        const count = mes.nextElementSibling.value;
        const remark = mes.nextElementSibling.nextElementSibling.value;
        data.push([`- ${mes.value} (Lot Count: ${count}, Remark: ${remark})`]);
    });

    data.push([]);
    data.push(['Major Down Time:']);
    const majorDownTimes = document.querySelectorAll('#major-downtime .inline');
    majorDownTimes.forEach((downtime) => {
        const fromTime = downtime.children[0].value;
        const toTime = downtime.children[1].value;
        const remark = downtime.children[2].value;
        data.push([`- From: ${fromTime}, To: ${toTime} (Remark: ${remark})`]);
    });

    data.push([]);
    data.push(['Down Time:']);
    const downTimes = document.querySelectorAll('#downtime .inline');
    downTimes.forEach((downtime) => {
        const fromTime = downtime.children[0].value;
        const toTime = downtime.children[1].value;
        const remark = downtime.children[2].value;
        data.push([`- From: ${fromTime}, To: ${toTime} (Remark: ${remark})`]);
    });

    data.push([]);
    data.push(['Dispatch:']);
    const dispatchDetails = document.querySelectorAll('#dispatch input[name="dispatch"]');
    dispatchDetails.forEach((dispatch) => {
        data.push([`- ${dispatch.value}`]);
    });

    data.push([]);
    data.push(['Reservation Data:']);
    const received = document.querySelector('#reservation-data input[name="received"]').value;
    const posted = document.querySelector('#reservation-data input[name="posted"]').value;
    const pending = document.querySelector('#reservation-data input[name="pending"]').value;
    data.push([`- Received: ${received}`]);
    data.push([`- Posted: ${posted}`]);
    data.push([`- Pending: ${pending}`]);

    data.push([]);
    data.push(['Manpower Data:']);
    const required = document.querySelector('#manpower-data select[name="required"]').value;
    const reported = document.querySelector('#manpower-data input[name="reported"]').value;
    data.push([`- Required: ${required}`]);
    data.push([`- Reported: ${reported}`]);

    data.push([]);
    data.push(['Report Generated By:']);
    const reportGeneratedBy = document.querySelector('#report-generated-by select[name="report-generated-by"]').value;
    data.push([reportGeneratedBy]);

    // Create a new workbook and add the data
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Shift Report');

    // Export the Excel file
    XLSX.writeFile(workbook, 'raw_material_store_report.xlsx');
    alert('Excel file downloaded successfully!');
}