fetch("./borders.json")
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
  let mainContainer = document.getElementById("newpost");
  for (let page in data) {
    for (let element of data[page]) {
      console.log(element);
      let div2 = document.createElement("div");
      div2.innerHTML = `
        <h2 class="blog-post-title">${element["title"]}</h2>
        <p class="blog-post-meta">${element["date"]}</p>
        <p>${element["article"]}</p>
        <img src="${element["image"]}" style="width: 200px; height: 200px;"></img>
        `;
      mainContainer.appendChild(div2);
    }
  } // end of for
} // end of function appendData
