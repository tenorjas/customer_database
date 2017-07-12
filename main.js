let parent = document.querySelector("#customers_profiles");

for (var i = 0; i < customers.results.length; i++) {
  let cust = customers.results[i];

  let customer = document.createElement("div");
  customer.className = "each_customer";
  customer.innerHTML = `
    <img src="${cust.picture.large}">
    <div class="name"><span>${cust.name.first} ${cust.name.last}</span></div>
    <div class="email">${cust.email}</div>
    <br>
    <div class="address_phone">${cust.location.street}</div>
    <div class="address_phone">${cust.location.city}, ${cust.location
    .state} ${cust.location.postcode}</div>
    <div class="address_phone">${cust.phone}</div>
    <br>
    <div class="ssn">${cust.id.value}</div>
  `;

  parent.appendChild(customer);
  console.log(`iteration ${i}`);
}
