fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error:" + err);
  });
function appendData(data) {
  let mainContainer = document.getElementById("newcard");
  for (let card in data) {
    for (let element of data[card]) {
      console.log(element);
      let div2 = document.createElement("div");
      div2.innerHTML = `

      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">${element["topic"]}</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">${element["title"]}</a>
          </h3>
          <div class="mb-1 text-muted">${element["date"]}</div>
          <p class="card-text mb-auto">${element["article"]}</p>
          <a href="./travel.html">Continue reading</a>
        </div>
        
        <img class="card-img-right flex-auto d-none d-md-block" src="${element["image"]}" alt="Card2 image cap">
        
      </div>

        `;

      mainContainer.appendChild(div2);
    }
  } // end of for
} // end of function appendData
