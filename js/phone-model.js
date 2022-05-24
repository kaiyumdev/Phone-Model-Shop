const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  searchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearch(data.data.slice(0, 20)));
//   console.log(url);
};
const displaySearch = (phones) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = '';
  phones.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="col">
    <div onclick="loadPhoneDetail(${phone.brand})" class="card h-100 w-75 mx-auto">
  <img height="500" width="200" src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <p class="card-text">${phone.slug}</p>
  </div>
</div>
</div>
        
        `;
    searchResult.appendChild(div);
  });
};


const loadPhoneDetail = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then( data =>console.log(data.data))
}