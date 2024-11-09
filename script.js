// Automatically set current date
const today = new Date().toISOString().substr(0, 10);
document.getElementById("date").value = today;


// Define the vehicle options globally, grouped by their categories
const vehicleOptions = [
    {
        label: 'Default',
        options: [
            { value: 'NA', text: 'NA' },
        ]
    },
    {
        label: 'Chemicals',
        options: [
            { value: 'R224', text: 'R224' },
            { value: 'R280', text: 'R280' },
            { value: 'R727', text: 'R727' },
            { value: 'R6340', text: 'R6340' },
            { value: 'R732', text: 'R732' },
            { value: 'R619', text: 'R619' },
            { value: 'R235', text: 'R235' },
            { value: 'R327', text: 'R327' },
            { value: 'R146', text: 'R146' },
            { value: 'R626', text: 'R626' },
            { value: '764R', text: '764R' },
            { value: 'R5299', text: 'R5299' },
            { value: 'R5280', text: 'R5280' },
            { value: 'R6352', text: 'R6352' },
            { value: 'R774', text: 'R774' },
            { value: 'R6214', text: 'R6214' },
            { value: 'R6376', text: 'R6376' },
            { value: 'R5130', text: 'R5130' },
            { value: 'R6208', text: 'R6208' },
            { value: 'R6200', text: 'R6200' },
            { value: 'R5001', text: 'R5001' },
            { value: 'R580', text: 'R580' },
            { value: 'R135', text: 'R135' },
            { value: 'R729', text: 'R729' },
            { value: 'I3370', text: 'I3370' },
            { value: 'I2004', text: 'I2004' },
            { value: 'R3029', text: 'R3029' },
            { value: 'R3007', text: 'R3007' },
            { value: 'R327/R280', text: 'R327/R280' }
        ]
    },
    {
        label: 'Rubber',
        options: [
            { value: 'R2322E', text: 'R2322E' },
            { value: 'R680', text: 'R680' },
            { value: 'R2350', text: 'R2350' },
            { value: 'R2416', text: 'R2416' },
            { value: 'R1502', text: 'R1502' },
            { value: 'MB330', text: 'MB330' },
            { value: 'TSR20', text: 'TSR20' },
            { value: 'R2555', text: 'R2555' },
            { value: 'R2512', text: 'R2512' },
            { value: 'R1739', text: 'R1739' },
            { value: 'R1678', text: 'R1678' },
            { value: 'R1723', text: 'R1723' },
            { value: 'R2401', text: 'R2401' },
            { value: 'R2401P', text: 'R2401P' },
            { value: 'RSS4', text: 'RSS4' }
        ]
    },
    {
        label: 'Carbons',
        options: [
            { value: 'N220', text: 'N220' },
            { value: 'N234', text: 'N234' },
            { value: 'N330', text: 'N330' },
            { value: 'N339', text: 'N339' },
            { value: 'N375', text: 'N375' },
            { value: 'N660', text: 'N660' }
        ]
    },
    {
        label: 'Dipp roll',
        options: [
            { value: '2444DIP', text: '2444DIP' },
            { value: '2553DIP', text: '2553DIP' },
            { value: 'ST151DIP', text: 'ST151DIP' },
            { value: '2490DIP', text: '2490DIP' },
            { value: '2440DIP', text: '2440DIP' },
            { value: '1960DIP', text: '1960DIP' },
            { value: '2444DIP/1960DIP', text: '2444DIP/1960DIP' },
            { value: '2444DIP/2553DIP', text: '2444DIP/2553DIP' }
        ]
    },
    {
        label: 'Bead wire',
        options: [
            { value: 'R503', text: 'R503' }
        ]
    },
    {
        label: 'Spacers',
        options: [
            { value: 'R08382', text: 'R08382' },
            { value: 'R08343', text: 'R08343' },
            { value: 'P08344', text: 'P08344' },
            { value: 'P08345', text: 'P08345' },
            { value: 'P09358', text: 'P09358' },
            { value: 'P09954', text: 'P09954' },
            { value: 'P12629', text: 'P12629' },
            { value: 'R08343/P08344', text: 'R08343/P08344' },
            { value: 'R08343/P08345', text: 'R08343/P08345' },
            { value: 'R08344/P08345', text: 'R08344/P08345' },
            { value: 'R08343/P08344/P08345', text: 'R08343/P08344/P08345' },
            { value: 'R08343/P09358', text: 'R08343/P09358' },
        ]
    },
    {
        label: 'Lubricants',
        options: [
            { value: 'R6928', text: 'R6928' },
            { value: 'R6180', text: 'R6180' },
            { value: 'R6108', text: 'R6108' },
            { value: 'R6180C', text: 'R6180C' }
        ]
    },
    {
        label: 'Paints',
        options: [
            { value: 'R6158Y', text: 'R6158Y' },
            { value: 'R6158O', text: 'R6158O' },
            { value: 'R6158P', text: 'R6158P' },
            { value: 'R6158R', text: 'R6158R' },
            { value: 'R6158B', text: 'R6158B' },
            { value: 'R6158W', text: 'R6158W' },
            { value: 'R6158G', text: 'R6158G' },
            { value: 'R6158Y/R6158O', text: 'R6158Y/R6158O' },
            { value: 'R6158Y/R6158P', text: 'R6158Y/R6158P' },
            { value: 'R6158Y/R6158R', text: 'R6158Y/R6158R' },
            { value: 'R6158Y/R6158B', text: 'R6158Y/R6158B' },
            { value: 'R6158Y/R6158W', text: 'R6158Y/R6158W' },
            { value: 'R6158Y/R6158G', text: 'R6158Y/R6158G' },
            { value: 'R6158O/R6158Y', text: 'R6158O/R6158Y' },
            { value: 'R6158O/R6158P', text: 'R6158O/R6158P' },
            { value: 'R6158O/R6158R', text: 'R6158O/R6158R' },
            { value: 'R6158O/R6158B', text: 'R6158O/R6158B' },
            { value: 'R6158O/R6158W', text: 'R6158O/R6158W' },
            { value: 'R6158O/R6158G', text: 'R6158O/R6158G' },
            { value: 'R6158P/R6158O', text: 'R6158P/R6158O' },
            { value: 'R6158P/R6158Y', text: 'R6158P/R6158Y' },
            { value: 'R6158P/R6158R', text: 'R6158P/R6158R' },
            { value: 'R6158P/R6158B', text: 'R6158P/R6158B' },
            { value: 'R6158P/R6158W', text: 'R6158P/R6158W' },
            { value: 'R6158P/R6158G', text: 'R6158P/R6158G' },
            { value: 'R6158R/R6158O', text: 'R6158R/R6158O' },
            { value: 'R6158R/R6158P', text: 'R6158R/R6158P' },
            { value: 'R6158R/R6158Y', text: 'R6158R/R6158Y' },
            { value: 'R6158R/R6158B', text: 'R6158R/R6158B' },
            { value: 'R6158R/R6158W', text: 'R6158R/R6158W' },
            { value: 'R6158R/R6158G', text: 'R6158R/R6158G' },
            { value: 'R6161', text: 'R6161' }
        ]
    },
    {
        label: 'Bags',
        options: [
            { value: 'R6003', text: 'R6003' },
            { value: 'R6009', text: 'R6009' }
        ]
    },
    {
        label: 'Tapes & wrapping rolls',
        options: [
            { value: 'P12921', text: 'P12921' },
            { value: 'P12920', text: 'P12920' },
            { value: 'P08082', text: 'P08082' },
            { value: 'P08322', text: 'P08322' },
            { value: 'P12919', text: 'P12919' },
            { value: 'P08301', text: 'P08301' }
        ]
    },
    {
        label: 'Oil',
        options: [
            { value: '388B', text: '388B' },
            { value: 'R6347', text: 'R6347' }
        ]
    },
    {
        label: 'Trial',
        options: [
            { value: 'I3541', text: 'I3541' },
            { value: 'R6267', text: 'R6267' },
            { value: 'RPCYARN', text: 'RPCYARN' },
            { value: 'WPCYARN', text: 'WPCYARN' },
            { value: 'GPCYARN', text: 'GPCYARN' },
            { value: 'R6296', text: 'R6296' },
            { value: 'R729G', text: 'R729G' },
            { value: 'YPGYARN', text: 'YPGYARN' },
            { value: 'R5528', text: 'R5528' },
            { value: 'R60', text: 'R60' },
            { value: 'R6157B', text: 'R6157B' },
            { value: 'R6032', text: 'R6032' },
            { value: 'R6142', text: 'R6142' },
            { value: 'R6340', text: 'R6340' },
            { value: 'ISNR20', text: 'ISNR20' },
            { value: 'R1522', text: 'R1522' },
            { value: 'R6142', text: 'R6142' },
            { value: 'R2019', text: 'R2019' },
            { value: '400SEY', text: '400SEY' }
        ]
    },
    {
        label: 'Other',
        options: [
            { value: 'LW776', text: 'LW776' }
        ]
    },
];

// Function to create a select box with grouped vehicle options
function createVehicleSelect(nameAttribute, selectedValue = '') {
    const select = document.createElement('select');
    select.name = nameAttribute;

    vehicleOptions.forEach(group => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = group.label;

        group.options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.text = optionData.text;
            if (optionData.value === selectedValue) {
                option.selected = true; // Set selected option if passed
            }
            optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
    });

    return select;
}



// Define the dispatch options globally
const dispatchOptions = [
    {
        label: 'Default',
        options: [
            { value: 'NA', text: 'NA' },
        ]
    },
    {
        label: 'Other',
        options: [
            { value: 'Empty spool/Empty Stand', text: 'Empty spool/Empty Stand' },
            { value: 'Empty spool', text: 'Empty spool' },
            { value: 'Empty Stand', text: 'Empty Stand' }
        ]
    },
    {
        label: 'Yes Industries 59030473',
        options: [
            { value: 'SCPNE06 Scrap PVC can 50Lts', text: 'SCPNE06 Scrap PVC can 50Lts' },
            { value: 'SCPNE07 Scrap PVC can 50Lts', text: 'SCPNE07 Scrap PVC can 50Lts' },
            { value: 'SCPNE08 Scrap PVC can 50Lts', text: 'SCPNE08 Scrap PVC can 50Lts' },
            { value: 'SCPNE09 Scrap PVC Drums 100 Lts', text: 'SCPNE09 Scrap PVC Drums 100 Lts' },
            { value: 'SCPNE10 Scrap PVC Drums 200 Lts', text: 'SCPNE10 Scrap PVC Drums 200 Lts' }
        ]
    },
    {
        label: 'SS Tyre Shop 59030025',
        options: [
            { value: 'SCPE001 Scrap CutTyre W/O Bead', text: 'SCPE001 Scrap CutTyre W/O Bead' },
            { value: 'SCPE016 Scrap Cured Compound', text: 'SCPE016 Scrap Cured Compound' },
            { value: 'SCPE021 Scrap Rubberised Bead Wire', text: 'SCPE021 Scrap Rubberised Bead Wire' },
            { value: 'SCPE022 Scrap Cut Bead', text: 'SCPE022 Scrap Cut Bead' },
            { value: 'SCPE046 Scrap Multi Cut Tyre', text: 'SCPE046 Scrap Multi Cut Tyre' },
            { value: 'SCPE071 Scrap Bladders Non Truck', text: 'SCPE071 Scrap Bladders Non Truck' }
        ]
    },
    {
        label: 'Nihal Enterprise 59030188',
        options: [
            { value: 'SCPE009 Scrap Tubes', text: 'SCPE009 Scrap Tubes' },
            { value: 'SCPE017 Scrap Rubberised Fabric', text: 'SCPE017 Scrap Rubberised Fabric' },
            { value: 'SCPE018 Scrap Carcass Of Rubberised Fabric', text: 'SCPE018 Scrap Carcass Of Rubberised Fabric' },
            { value: 'SCPED20 Scrap Dipped Fabric', text: 'SCPED20 Scrap Dipped Fabric' },
            { value: 'SCPE054 Scrap Multiple Cut Tyres Other', text: 'SCPE054 Scrap Multiple Cut Tyres Other' },
            { value: 'SCPNE04 Scrap Hdpe Bags', text: 'SCPNE04 Scrap Hdpe Bags' }
        ]
    },
    {
        label: 'MAP Trading Company 59030142',
        options: [
            { value: 'SCPE027 Scrap LDPE Film', text: 'SCPE027 Scrap LDPE Film' },
            { value: 'SCPE029 Scrap ELECRICAL Items', text: 'SCPE029 Scrap ELECRICAL Items' },
            { value: 'SCPE030 Scrap Ferrous Metal', text: 'SCPE030 Scrap Ferrous Metal' },
            { value: 'SCPE052 SHELL ROLL', text: 'SCPE052 SHELL ROLL' },
            { value: 'SCPE101 SCRAP ELEC. MOTER', text: 'SCPE101 SCRAP ELEC. MOTER' },
            { value: 'SCPNE11 Scrap Pvc', text: 'SCPNE11 Scrap Pvc' },
            { value: 'SCPNE16 Scrap Corrugated Boards', text: 'SCPNE16 Scrap Corrugated Boards' },
            { value: 'SCPNE20 Scrap Packing Wood/Wooden Shell', text: 'SCPNE20 Scrap Packing Wood/Wooden Shell' },
            { value: 'SCPNE21 Scrap Plywoods', text: 'SCPNE21 Scrap Plywoods' }
        ]
    },
    {
        label: 'AKC Enterprise 59030037',
        options: [
            { value: 'SCPE014 Scrap Scorched Compound', text: 'SCPE014 Scrap Scorched Compound' },
            { value: 'SCPEQ15 Scrap Refined Sheet', text: 'SCPEQ15 Scrap Refined Sheet' },
            { value: 'SOPNED1 Scrap Carton Black Jumbo Bags', text: 'SOPNED1 Scrap Carton Black Jumbo Bags' }
        ]
    },
    {
        label: 'Vikas Trades 59030435',
        options: [
            { value: 'SCPE023 Scrap Mixed Carbon Black', text: 'SCPE023 Scrap Mixed Carbon Black' },
            { value: 'SCPNE22 Scrap Sweeping Waste Garbage', text: 'SCPNE22 Scrap Sweeping Waste Garbage' },
            { value: 'SCPNE05 Scrap Hdpe Chemical Bags', text: 'SCPNE05 Scrap Hdpe Chemical Bags' },
            { value: 'SCPNE58 SCRAP AIUMINIUM', text: 'SCPNE58 SCRAP AIUMINIUM' }
        ]
    },
    {
        label: 'Radiant Lube 59030034',
        options: [
            { value: 'SCPNE12 SCRAP USED MIXED OIL', text: 'SCPNE12 SCRAP USED MIXED OIL' }
        ]
    }
];

// Function to create a select box with grouped dispatch options
function createDispatchSelect(nameAttribute, selectedValue = '') {
    const select = document.createElement('select');
    select.name = nameAttribute;

    dispatchOptions.forEach(group => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = group.label;

        group.options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.text = optionData.text;
            if (optionData.value === selectedValue) {
                option.selected = true; // Set selected option if passed
            }
            optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
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
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            unloadedDiv.removeChild(unloadedRow); // Remove the row from the DOM
            saveUnloadedVehicles(); // Auto-save for this section
        }
    });

    // Append the select and action button to the unloaded row
    unloadedRow.appendChild(newSelect);
    unloadedRow.appendChild(actionButton);

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
   const actionButton = document.createElement('button');
   actionButton.type = 'button'; // Prevent form submission
   actionButton.classList.add('clear'); // Add the 'clear' class

   // Create an image element for the button (initially Clear button)
   const imgElement = document.createElement('img');
   imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
   imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
   imgElement.style.width = '15px'; // Adjust the size as needed
   imgElement.style.height = '15px';

   // Append the image to the button
   actionButton.appendChild(imgElement);

   // Add event listener to the button
   actionButton.addEventListener('click', () => {
       // On first click, change to verify mode
       if (actionButton.classList.contains('clear')) {
           actionButton.classList.remove('clear');
           actionButton.classList.add('verify');

           // Change the icon to a "right tick" for verification
           imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
           imgElement.alt = 'Verify';
       } 
       // On second click (verification), remove the row
       else if (actionButton.classList.contains('verify')) {
           pendingDiv.removeChild(pendingRow); // Remove the row from the DOM
           savePendingVehicles(); // Auto-save for this section
       }
   });

    // Append the select, input, and clear button to the pending row
    pendingRow.appendChild(newSelect);
    pendingRow.appendChild(newInput);
    pendingRow.appendChild(actionButton);

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
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            grnDoneDiv.removeChild(newDiv); // Remove the row from the DOM
            saveGRNDone(); // Auto-save for this section
        }
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(actionButton);
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
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            grnPendingDiv.removeChild(newDiv); // Remove the row from the DOM
            saveGRNPending(); // Auto-save for this section
        }
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(actionButton);
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
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            mesDoneDiv.removeChild(newDiv); // Remove the row from the DOM
            saveMESDone(); // Auto-save for this section
        }
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(actionButton);
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
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            mesPendingDiv.removeChild(newDiv); // Remove the row from the DOM
            saveMESPending(); // Auto-save for this section
        }
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(newLotInput);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(actionButton);
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

// Function to add a new Major Down Time row (minutes, remark)
function addMajorDownTime(minutes = '', remark = '') {
    const majorDownTimeDiv = document.getElementById('major-downtime');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    // Create minutes input box
    const newMinutesInput = document.createElement('input');
    newMinutesInput.type = 'number';
    newMinutesInput.name = 'minutes';
    newMinutesInput.placeholder = 'Minutes';
    newMinutesInput.value = minutes; // Default to saved or blank
    newMinutesInput.min = '0'; // Ensure no negative values
    newMinutesInput.style.width = '100px'; // Adjust the width as needed

    // Create remark input box
    const newRemarkInput = document.createElement('input');
    newRemarkInput.type = 'text';
    newRemarkInput.name = 'remark';
    newRemarkInput.placeholder = 'Enter remark';
    newRemarkInput.value = remark; // Default to saved or blank
    newRemarkInput.style.flex = '1';

    // Create a clear button for each row
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            majorDownTimeDiv.removeChild(newDiv); // Remove the row from the DOM
            saveMajorDownTime(); // Auto-save for this section
        }
    });

    // Append the input fields and button to the new row
    newDiv.appendChild(newMinutesInput);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(actionButton);
    majorDownTimeDiv.appendChild(newDiv);
}

// Function to save Major Down Time data
function saveMajorDownTime() {
    const majorDownTimeArray = [];
    document.querySelectorAll('#major-downtime .inline').forEach(row => {
        const minutes = row.querySelector('input[name="minutes"]').value;
        const remark = row.querySelector('input[name="remark"]').value;
        majorDownTimeArray.push({
            minutes,
            remark
        });
    });

    localStorage.setItem('majorDownTime', JSON.stringify(majorDownTimeArray));
}

// Load Major Down Time from local storage
function loadMajorDownTime() {
    const majorDownTimeData = JSON.parse(localStorage.getItem('majorDownTime')) || [];
    majorDownTimeData.forEach(data => {
        addMajorDownTime(data.minutes, data.remark);
    });
}


/** DOWN TIME SECTION **/

// Function to add a new Down Time row (minutes, remark)
function addDownTime(minutes = '', remark = '') {
    const downTimeDiv = document.getElementById('downtime');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    // Create the input for minutes
    const newMinutesInput = document.createElement('input');
    newMinutesInput.type = 'number';
    newMinutesInput.name = 'minutes';
    newMinutesInput.value = minutes; // Default to saved or blank
    newMinutesInput.min = '0'; // Ensure no negative values
    newMinutesInput.style.width = '100px'; // Adjust the width as needed
    newMinutesInput.placeholder = 'Minutes';

    // Create the input for remark
    const newRemarkInput = document.createElement('input');
    newRemarkInput.type = 'text';
    newRemarkInput.name = 'remark';
    newRemarkInput.placeholder = 'Enter remark';
    newRemarkInput.value = remark; // Default to saved or blank
    newRemarkInput.style.flex = '1';

    // Create a clear button for each row
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            downTimeDiv.removeChild(newDiv); // Remove the row from the DOM
            saveDownTime(); // Auto-save for this section
        }
    });

    // Append inputs and button to the new row div
    newDiv.appendChild(newMinutesInput);
    newDiv.appendChild(newRemarkInput);
    newDiv.appendChild(actionButton);
    downTimeDiv.appendChild(newDiv);
}

// Function to save Down Time data
function saveDownTime() {
    const downTimeArray = [];
    document.querySelectorAll('#downtime .inline').forEach(row => {
        const minutes = row.querySelector('input[name="minutes"]').value;
        const remark = row.querySelector('input[name="remark"]').value;
        downTimeArray.push({
            minutes,
            remark
        });
    });

    localStorage.setItem('downTime', JSON.stringify(downTimeArray));
}

// Load Down Time from local storage
function loadDownTime() {
    const downTimeData = JSON.parse(localStorage.getItem('downTime')) || [];
    downTimeData.forEach(data => {
        addDownTime(data.minutes, data.remark);
    });
}


/** DISPATCH SECTION **/

// Function to add a new Dispatch row (with select box)
function addDispatch(dispatch = '') {
    const dispatchDiv = document.getElementById('dispatch');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    // Create the select box using createDispatchSelect
    const newSelect = createDispatchSelect('dispatch', dispatch);

    // Create a clear button for each dispatch row
    const actionButton = document.createElement('button');
    actionButton.type = 'button'; // Prevent form submission
    actionButton.classList.add('clear'); // Add the 'clear' class

    // Create an image element for the button (initially Clear button)
    const imgElement = document.createElement('img');
    imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
    imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
    imgElement.style.width = '15px'; // Adjust the size as needed
    imgElement.style.height = '15px';

    // Append the image to the button
    actionButton.appendChild(imgElement);

    // Add event listener to the button
    actionButton.addEventListener('click', () => {
        // On first click, change to verify mode
        if (actionButton.classList.contains('clear')) {
            actionButton.classList.remove('clear');
            actionButton.classList.add('verify');

            // Change the icon to a "right tick" for verification
            imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
            imgElement.alt = 'Verify';
        } 
        // On second click (verification), remove the row
        else if (actionButton.classList.contains('verify')) {
            dispatchDiv.removeChild(newDiv); // Remove the row from the DOM
            saveDispatch(); // Auto-save for this section
        }
    });

    newDiv.appendChild(newSelect);
    newDiv.appendChild(actionButton);
    dispatchDiv.appendChild(newDiv);
}

// Function to save Dispatch data (saving selected option)
function saveDispatch() {
    const dispatchArray = [];
    document.querySelectorAll('#dispatch .inline').forEach(row => {
        const dispatchDetails = row.querySelector('select[name="dispatch"]').value;
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

/** REMARK SECTION **/

// Function to add a new Remark row (remark details)
function addRemark(remark = '') {
    const remarkDiv = document.getElementById('remark');
    const newDiv = document.createElement('div');
    newDiv.classList.add('inline');

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'remark';
    newInput.placeholder = 'Enter remark details';
    newInput.value = remark; // Default to saved or blank
    newInput.style.flex = '1';

   // Create a clear button for each unloaded row
   const actionButton = document.createElement('button');
   actionButton.type = 'button'; // Prevent form submission
   actionButton.classList.add('clear'); // Add the 'clear' class

   // Create an image element for the button (initially Clear button)
   const imgElement = document.createElement('img');
   imgElement.src = 'https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000'; // Clear icon URL
   imgElement.alt = 'Clear'; // Alternative text in case image doesn't load
   imgElement.style.width = '15px'; // Adjust the size as needed
   imgElement.style.height = '15px';

   // Append the image to the button
   actionButton.appendChild(imgElement);

   // Add event listener to the button
   actionButton.addEventListener('click', () => {
       // On first click, change to verify mode
       if (actionButton.classList.contains('clear')) {
           actionButton.classList.remove('clear');
           actionButton.classList.add('verify');

           // Change the icon to a "right tick" for verification
           imgElement.src = 'https://img.icons8.com/?size=100&id=82769&format=png&color=000000'; // Verify tick icon URL
           imgElement.alt = 'Verify';
       } 
       // On second click (verification), remove the row
       else if (actionButton.classList.contains('verify')) {
           remarkDiv.removeChild(newDiv); // Remove the row from the DOM
           saveRemark(); // Auto-save for this section
       }
   });

    newDiv.appendChild(newInput);
    newDiv.appendChild(actionButton);
    remarkDiv.appendChild(newDiv);
}

// Function to save Remark data
function saveRemark() {
    const remarkArray = [];
    document.querySelectorAll('#remark .inline').forEach(row => {
        const remarkDetails = row.querySelector('input[name="remark"]').value;
        remarkArray.push(remarkDetails);
    });

    localStorage.setItem('remark', JSON.stringify(remarkArray));
}

// Load Remark from local storage
function loadRemark() {
    const remarkData = JSON.parse(localStorage.getItem('remark')) || [];
    remarkData.forEach(remark => {
        addRemark(remark);
    });
}


// Function to update the pending field automatically
function updatePending() {
    const received = parseFloat(document.querySelector('input[name="received"]').value) || 0;
    const posted = parseFloat(document.querySelector('input[name="posted"]').value) || 0;
    const pending = received - posted;
    document.querySelector('input[name="pending"]').value = pending >= 0 ? pending : 0; // Ensure pending is not negative
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
    
    // Call updatePending() to automatically calculate pending on page load
    updatePending();
}

// Attach event listeners to update pending when received or posted changes
document.querySelector('input[name="received"]').addEventListener('input', () => {
    updatePending();
    saveReservationData(); // Auto-save the data when received changes
});

document.querySelector('input[name="posted"]').addEventListener('input', () => {
    updatePending();
    saveReservationData(); // Auto-save the data when posted changes
});


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
    saveRemark();
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
    loadRemark();
    loadReservationData();
    loadManpowerData();
    loadReportGeneratedBy();
};




// Export as TXT
function exportAsTXT() {
    const date = document.getElementById('date').value;
    const shift = document.getElementById('shift').value;

    let txtData = `*📊 RAW MATERIAL STORE (Shift Report)*\n*📅 Date:* ${date}\n*🕒 Shift:* ${shift}\n\n`;

    // Vehicle Unloaded
    const vehiclesUnloaded = document.querySelectorAll('#vehicle-unloaded select');
    txtData += "*🚛 Vehicles Unloaded:*\n";
    vehiclesUnloaded.forEach(vehicle => {
        txtData += `- ${vehicle.value}\n`;
    });

    // Vehicle Unloading Pending
    const vehiclesPending = document.querySelectorAll('#vehicle-pending select');
    txtData += "\n*⏳ Vehicles Unloading Pending:*\n";
    vehiclesPending.forEach((vehicle, index) => {
        const count = vehicle.nextElementSibling.value;
        txtData += `- ${vehicle.value} (Count: ${count})\n`;
    });

    // GRN Done
    const grnDone = document.querySelectorAll('#grn-done select');
    txtData += "\n*✅ GRN Done:*\n";
    grnDone.forEach(grn => {
        txtData += `- ${grn.value}\n`;
    });

    // GRN Pending
    const grnPending = document.querySelectorAll('#grn-pending select');
    txtData += "\n*❌ GRN Pending:*\n";
    grnPending.forEach(grn => {
        const remark = grn.nextElementSibling.value;
        txtData += `- ${grn.value} (Remark: ${remark})\n`;
    });

    // MES Done
    const mesDone = document.querySelectorAll('#mes-done select');
    txtData += "\n*✅ MES Done:*\n";
    mesDone.forEach(mes => {
        txtData += `- ${mes.value}\n`;
    });

    // MES Pending
    const mesPending = document.querySelectorAll('#mes-pending select');
    txtData += "\n*⏳ MES Pending:*\n";
    mesPending.forEach(mes => {
        const count = mes.nextElementSibling.value;
        const remark = mes.nextElementSibling.nextElementSibling.value;
        txtData += `- ${mes.value} (Lot Count: ${count}, Remark: ${remark})\n`;
    });

    // Major Down Time
const majorDownTimes = document.querySelectorAll('#major-downtime .inline');
txtData += "\n*⏸️ Major Down Time:*\n";
majorDownTimes.forEach(downtime => {
    const minutes = downtime.children[0].value; // Now it's the minutes input
    const remark = downtime.children[1].value;  // Remark input
    txtData += `- Duration: ${minutes} minutes (Remark: ${remark})\n`;
});


// Down Time
const downTimes = document.querySelectorAll('#downtime .inline');
txtData += "\n*⏲️ Down Time:*\n";
downTimes.forEach(downtime => {
    const minutes = downtime.children[0].value; // Minutes input
    const remark = downtime.children[1].value;  // Remark input
    txtData += `- Duration: ${minutes} minutes (Remark: ${remark})\n`;
});


    // Dispatch
const dispatchDetails = document.querySelectorAll('#dispatch select[name="dispatch"]');
txtData += "\n*📦 Dispatch:*\n";
dispatchDetails.forEach(dispatch => {
    txtData += `- ${dispatch.options[dispatch.selectedIndex].text}\n`; // Get the selected option's text
});


// Remark
const remarkDetails = document.querySelectorAll('#remark input[name="remark"]');
txtData += "\n*📝 Remark:*\n"; // Adds a Remark section in the output
remarkDetails.forEach(remark => {
    txtData += `- ${remark.value}\n`;
});


    // Reservation Data
    const received = document.querySelector('#reservation-data input[name="received"]').value;
    const posted = document.querySelector('#reservation-data input[name="posted"]').value;
    const pending = document.querySelector('#reservation-data input[name="pending"]').value;

    txtData += `\n*🗂️ Reservation Data:*\n`;
    txtData += `- Received: ${received}\n`;
    txtData += `- Posted: ${posted}\n`;
    txtData += `- Pending: ${pending}\n`;

    // Manpower Data
    const required = document.querySelector('#manpower-data select[name="required"]').value;
    const reported = document.querySelector('#manpower-data input[name="reported"]').value;

    txtData += `\n*👥 Manpower Data:*\n`;
    txtData += `- Required: ${required}\n`;
    txtData += `- Reported: ${reported}\n`;

    // Report Generated By
    const reportGeneratedBy = document.querySelector('#report-generated-by select[name="report-generated-by"]').value;
    txtData += `\n*Report Generated By:* ${reportGeneratedBy}\n`;


    // Get the current date in the desired format (YYMMDD)
const currentDate = new Date();
const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
const formattedDate = currentDate.toLocaleDateString('en-GB', options).replace(/\//g, '');

// Create the filename with the current date
const filename = `RMS_ShiftReport_${formattedDate}.txt`;

// Download as .txt file
const blob = new Blob([txtData], {
    type: 'text/plain'
});
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = filename; // Use the new filename
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

// Update alert message to include filename
alert(`Data downloaded as ${filename}!`);

}


function copyToClipboard() {
    const date = document.getElementById('date').value;
    const shift = document.getElementById('shift').value;

    let txtData = `*📊 RAW MATERIAL STORE (Shift Report)*\n*📅 Date:* ${date}\n*🕒 Shift:* ${shift}\n\n`;

    // Vehicle Unloaded
    const vehiclesUnloaded = document.querySelectorAll('#vehicle-unloaded select');
    txtData += "*🚛 Vehicles Unloaded:*\n";
    vehiclesUnloaded.forEach(vehicle => {
        txtData += `- ${vehicle.value}\n`;
    });

    // Vehicle Unloading Pending
    const vehiclesPending = document.querySelectorAll('#vehicle-pending select');
    txtData += "\n*⏳ Vehicles Unloading Pending:*\n";
    vehiclesPending.forEach((vehicle, index) => {
        const count = vehicle.nextElementSibling.value;
        txtData += `- ${vehicle.value} (Count: ${count})\n`;
    });

    // GRN Done
    const grnDone = document.querySelectorAll('#grn-done select');
    txtData += "\n*✅ GRN Done:*\n";
    grnDone.forEach(grn => {
        txtData += `- ${grn.value}\n`;
    });

    // GRN Pending
    const grnPending = document.querySelectorAll('#grn-pending select');
    txtData += "\n*❌ GRN Pending:*\n";
    grnPending.forEach(grn => {
        const remark = grn.nextElementSibling.value;
        txtData += `- ${grn.value} (Remark: ${remark})\n`;
    });

    // MES Done
    const mesDone = document.querySelectorAll('#mes-done select');
    txtData += "\n*✅ MES Done:*\n";
    mesDone.forEach(mes => {
        txtData += `- ${mes.value}\n`;
    });

    // MES Pending
    const mesPending = document.querySelectorAll('#mes-pending select');
    txtData += "\n*⏳ MES Pending:*\n";
    mesPending.forEach(mes => {
        const count = mes.nextElementSibling.value;
        const remark = mes.nextElementSibling.nextElementSibling.value;
        txtData += `- ${mes.value} (Lot Count: ${count}, Remark: ${remark})\n`;
    });

    // Major Down Time
    const majorDownTimes = document.querySelectorAll('#major-downtime .inline');
    txtData += "\n*⏸️ Major Down Time:*\n";
    majorDownTimes.forEach(downtime => {
        const minutes = downtime.children[0].value; // Minutes input
        const remark = downtime.children[1].value;  // Remark input
        txtData += `- Duration: ${minutes} minutes (Remark: ${remark})\n`;
    });

    // Down Time
    const downTimes = document.querySelectorAll('#downtime .inline');
    txtData += "\n*⏲️ Down Time:*\n";
    downTimes.forEach(downtime => {
        const minutes = downtime.children[0].value; // Minutes input
        const remark = downtime.children[1].value;  // Remark input
        txtData += `- Duration: ${minutes} minutes (Remark: ${remark})\n`;
    });

    // Dispatch
    const dispatchDetails = document.querySelectorAll('#dispatch select[name="dispatch"]');
    txtData += "\n*📦 Dispatch:*\n";
    dispatchDetails.forEach(dispatch => {
        txtData += `- ${dispatch.options[dispatch.selectedIndex].text}\n`; // Get the selected option's text
    });

    // Remark
    const remarkDetails = document.querySelectorAll('#remark input[name="remark"]');
    txtData += "\n*📝 Remark:*\n";
    remarkDetails.forEach(remark => {
        txtData += `- ${remark.value}\n`;
    });

    // Reservation Data
    const received = document.querySelector('#reservation-data input[name="received"]').value;
    const posted = document.querySelector('#reservation-data input[name="posted"]').value;
    const pending = document.querySelector('#reservation-data input[name="pending"]').value;

    txtData += `\n*🗂️ Reservation Data:*\n`;
    txtData += `- Received: ${received}\n`;
    txtData += `- Posted: ${posted}\n`;
    txtData += `- Pending: ${pending}\n`;

    // Manpower Data
    const required = document.querySelector('#manpower-data select[name="required"]').value;
    const reported = document.querySelector('#manpower-data input[name="reported"]').value;

    txtData += `\n*👥 Manpower Data:*\n`;
    txtData += `- Required: ${required}\n`;
    txtData += `- Reported: ${reported}\n`;

    // Report Generated By
    const reportGeneratedBy = document.querySelector('#report-generated-by select[name="report-generated-by"]').value;
    txtData += `\n*Report Generated By:* ${reportGeneratedBy}\n`;

    // Copy to Clipboard
    navigator.clipboard.writeText(txtData).then(() => {
        alert('Data copied to clipboard!');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
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
    const minutes = downtime.children[0].value; // Minutes input
    const remark = downtime.children[1].value;  // Remark input
    pdf.text(`- Duration: ${minutes} minutes (Remark: ${remark})`, 10, yOffset += 10);
});

// Down Time
yOffset += sectionMargin; // Add margin above section title
pdf.text('Down Time:', 10, yOffset + 10);
yOffset += sectionMargin; // Add margin after section title
const downTimes = document.querySelectorAll('#downtime .inline');
downTimes.forEach((downtime) => {
    addPageIfNeeded();
    const minutes = downtime.children[0].value; // Minutes input
    const remark = downtime.children[1].value;  // Remark input
    pdf.text(`- Duration: ${minutes} minutes (Remark: ${remark})`, 10, yOffset += 10);
});

// Dispatch Section in PDF
yOffset += sectionMargin; // Add margin above section title
pdf.text('Dispatch:', 10, yOffset + 10);
yOffset += sectionMargin; // Add margin after section title
const dispatchDetails = document.querySelectorAll('#dispatch .inline');
dispatchDetails.forEach((dispatch) => {
    addPageIfNeeded();
    const selectedDispatch = dispatch.children[0].value; // Get the selected value from the select box
    pdf.text(`- ${selectedDispatch}`, 10, yOffset += 10);
});


// Remark Section in PDF
yOffset += sectionMargin; // Add margin above section title
pdf.text('Remark:', 10, yOffset + 10);
yOffset += sectionMargin; // Add margin after section title
const remarkDetails = document.querySelectorAll('#remark input[name="remark"]');
remarkDetails.forEach((remark) => {
    addPageIfNeeded();
    pdf.text(`- ${remark.value}`, 10, yOffset += 10);
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

    // Get the current date in the desired format (YYMMDD)
const currentDate = new Date();
const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
const formattedDate = currentDate.toLocaleDateString('en-GB', options).replace(/\//g, '');

// Create the filename with the current date
const pdfFilename = `RMS_ShiftReport_${formattedDate}.pdf`;

// Save the PDF
pdf.save(pdfFilename);
alert(`PDF downloaded successfully: ${pdfFilename}`);

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

    // Major Down Time
data.push([]); // Add an empty row for spacing
data.push(['Major Down Time:']);
const majorDownTimes = document.querySelectorAll('#major-downtime .inline');
majorDownTimes.forEach((downtime) => {
    const minutes = downtime.children[0].value; // Get the minutes value
    const remark = downtime.children[1].value; // Get the remark value
    data.push([`- Minutes: ${minutes} (Remark: ${remark})`]);
});

// Down Time
data.push([]); // Add an empty row for spacing
data.push(['Down Time:']);
const downTimes = document.querySelectorAll('#downtime .inline');
downTimes.forEach((downtime) => {
    const minutes = downtime.children[0].value; // Get the minutes value
    const remark = downtime.children[1].value; // Get the remark value
    data.push([`- Minutes: ${minutes} (Remark: ${remark})`]);
});

// Dispatch Section
data.push([]); // Add an empty row for spacing
data.push(['Dispatch:']); // Add a heading for Dispatch
const dispatchDetails = document.querySelectorAll('#dispatch .inline');
dispatchDetails.forEach((dispatch) => {
    const selectedDispatch = dispatch.children[0].value; // Get the selected value from the select box
    data.push([`- ${selectedDispatch}`]); // Add each dispatch detail
});


// Remark Section
data.push([]); // Add an empty array for spacing
data.push(['Remark:']); // Add a heading for Remark
const remarkDetails = document.querySelectorAll('#remark input[name="remark"]');
remarkDetails.forEach((remark) => {
    data.push([`- ${remark.value}`]); // Add each remark detail
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

// Get the current date in the desired format (YYMMDD)
const currentDate = new Date();
const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
const formattedDate = currentDate.toLocaleDateString('en-GB', options).replace(/\//g, '');

// Create the filename with the current date
const filename = `RMS_ShiftReport_${formattedDate}.xlsx`;

// Export the Excel file
XLSX.writeFile(workbook, filename);
alert(`Excel file downloaded successfully: ${filename}`);

}





async function submitData() {
    const data = {
        date: document.getElementById('date').value,
        shift: document.getElementById('shift').value,
        vehiclesUnloaded: Array.from(document.querySelectorAll('#vehicle-unloaded select')).map(vehicle => vehicle.value).join(', '),
        vehiclesPending: Array.from(document.querySelectorAll('#vehicle-pending select')).map(vehicle => `${vehicle.value} (Count: ${vehicle.nextElementSibling.value})`).join(', '),
        grnDone: Array.from(document.querySelectorAll('#grn-done select')).map(grn => grn.value).join(', '),
        grnPending: Array.from(document.querySelectorAll('#grn-pending select')).map(grn => `${grn.value} (Remark: ${grn.nextElementSibling.value})`).join(', '),
        mesDone: Array.from(document.querySelectorAll('#mes-done select')).map(mes => mes.value).join(', '),
        mesPending: Array.from(document.querySelectorAll('#mes-pending select')).map(mes => `${mes.value} (Lot Count: ${mes.nextElementSibling.value}, Remark: ${mes.nextElementSibling.nextElementSibling.value})`).join(', '),
        majorDownTimes: Array.from(document.querySelectorAll('#major-downtime .inline')).map(downtime => `Duration: ${downtime.children[0].value} minutes (Remark: ${downtime.children[1].value})`).join(', '),
        downTimes: Array.from(document.querySelectorAll('#downtime .inline')).map(downtime => `Duration: ${downtime.children[0].value} minutes (Remark: ${downtime.children[1].value})`).join(', '),
        dispatchDetails: Array.from(document.querySelectorAll('#dispatch select[name="dispatch"]')).map(dispatch => dispatch.options[dispatch.selectedIndex].text).join(', '),
        remarkDetails: Array.from(document.querySelectorAll('#remark input[name="remark"]')).map(remark => remark.value).join(', '),
        reservationData: {
            received: document.querySelector('#reservation-data input[name="received"]').value,
            posted: document.querySelector('#reservation-data input[name="posted"]').value,
            pending: document.querySelector('#reservation-data input[name="pending"]').value
        },
        manpowerData: {
            required: document.querySelector('#manpower-data select[name="required"]').value,
            reported: document.querySelector('#manpower-data input[name="reported"]').value
        },
        reportGeneratedBy: document.querySelector('#report-generated-by select[name="report-generated-by"]').value
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxtZ8p-hntfZCS06tCskv3_PbSl-S04213k8d73yRlPW8G9M7pBmq6t5JX_ccYYP4Lt/exec', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert('Error saving data: ' + error);
    }
}
