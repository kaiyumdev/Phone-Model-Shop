// Phone Search Field
const searchPhone = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  if(searchText == '') {
    alert("Please enter a search by phone name");
  }
  searchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearch(data.data.slice(0, 20)));
};
// search show image
const displaySearch = (phones) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="col">
    <div class="card h-100 w-75 mx-auto">
  <img  src="${phone.image}" class="card-img-top main-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.brand}</h5>
    <p class="card-text">${phone.phone_name}</p>
    <button onclick="loadPhoneDetail('${phone.slug}')" class="card mx-auto btn btn-outline-warning">Details</button>
  </div>
</div>
</div>
        `;
    searchResult.appendChild(div);
  });
};

// show phone image
const loadPhoneDetail = (phoneId) => {
  console.log(phoneId);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data.data));
};

// show phone details
const displayPhoneDetails = (phone) => {
  console.log(phone);
  const phoneDetails = document.getElementById("phone-details");
  phoneDetails.textContent = "";
  console.log(phoneDetails);
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <div class="card-details mx-auto">
  <img class="image-details" src="${phone.image}">
  <div class="card-body">
  <h5 class="card-title">Release Date: ${phone.releaseDate ? phone.releaseDate : 'not found releaseDate'}</h5>
  <p class="card-text">ChipSet: ${phone.mainFeatures.chipSet}</p>
  <p class="card-text">Display: ${phone.mainFeatures.displaySize}</p>
  <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
  <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
  <p class="card-text">Sensors: ${phone.mainFeatures.sensors[0]}</p>
  <p class="card-text">Sensors: ${phone.mainFeatures.sensors[1]}</p>
  <p class="card-text">Sensors: ${phone.mainFeatures.sensors[2]}</p>
  <p class="card-text">Sensors: ${phone.mainFeatures.sensors[3]}</p>
  <p class="card-text">Sensors: ${phone.mainFeatures.sensors[4]}</p>
  <p class="card-text">Wlan: ${phone.others.WLAN}</p>
  <p class="card-text"> Bluetooth: ${phone.others.Bluetooth}</p>
  <p class="card-text">GPS: ${phone.others.GPS}</p>
  <p class="card-text">NFC: ${phone.others.NFC}</p>
  <p class="card-text">Radio: ${phone.others.Radio}</p>
  <p class="card-text">USB: ${phone.others.USB}</p>
  </div>
  </div>
  
  `;
  phoneDetails.appendChild(div);
};
