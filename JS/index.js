let serial = 0;
// first card
document.getElementById("first-btn").addEventListener("click", function () {
  serial += 1;
  const titleName = document.getElementById("first-title").innerText;
  const inputData1 = document.getElementById("first-input").value;
  const inputData2 = document.getElementById("second-input").value;
  const ph = 0.5;
  
  if (
    inputData1 == "" ||
    inputData2 == "" ||
    inputData1 <= 0 ||
    inputData2 <= 0
  ) {
    
    return alert("Please enter any valid number");
  }
  const total = parseInt(inputData1) * parseInt(inputData2) * ph;
  //   show the data using function

  displayData(titleName, total);
  //   disabled button using function
  disabledButton("first-btn");
});

// 2nd card
document.getElementById("2nd-btn").addEventListener("click", function () {
  serial += 1;
  const titleName = document.getElementById("2nd-title").innerText;
  const inputData1 = document.getElementById("2nd-input").value;
  const inputData2 = document.getElementById("2nd-input").value;
  if (
    inputData1 == "" ||
    inputData2 == "" ||
    inputData1 <= 0 ||
    inputData2 <= 0
  ) {
    return alert("Please enter any valid number");
  }
  const total = parseInt(inputData1) * parseInt(inputData2);
  //   show the data using function

  displayData(titleName, total);
  //   disabled button using function
  disabledButton("2nd-btn");
});

// tree no card operation
document.getElementById("3rd-btn").addEventListener("click", function () {
  serial += 1;
  const titleName = document.getElementById("3rd-title").innerText;
  const inputData1 = document.getElementById("3b").innerText;
  const inputData2 = document.getElementById("3h").innerText;
  const total = parseInt(inputData1) * parseInt(inputData2);
  //   show the data using function

  displayData(titleName, total);
  //   disabled button using function
  disabledButton("3rd-btn");
});

// 4th no card operation
document.getElementById("4th-btn").addEventListener("click", function () {
  serial += 1;
  const titleName = document.getElementById("4th-title").innerText;
  const questions = 0.5;
  const inputData1 = document.getElementById("4d1-number").innerText;
  const inputData2 = document.getElementById("4d2-number").innerText;
  const total = questions * parseInt(inputData1) * parseInt(inputData2);
  //   show the data using function

  displayData(titleName, total);
  //   disabled button using function
  disabledButton("4th-btn");
});

// 5th no card operation
document.getElementById("5th-btn").addEventListener("click", function () {
  serial += 1;
  const titleName = document.getElementById("5th-title").innerText;
  const inputData1 = document.getElementById("5th-p").innerText;
  const inputData2 = document.getElementById("5th-b").innerText;
  const questions5 = 0.5;
  const total = questions5 * parseInt(inputData1) * parseInt(inputData2);
  //   show the data using function

  displayData(titleName, total);
  //   disabled button using function
  disabledButton("5th-btn");
});

// last  card operation
document.getElementById("last-btn").addEventListener("click", function () {
  serial += 1;
  const titleName = document.getElementById("last-title").innerText;
  const inputData1 = document.getElementById("last-b").innerText;
  const inputData2 = document.getElementById("last-h").innerText;
  const pieNumber = 3.14;
  const total = pieNumber * parseInt(inputData1) * parseInt(inputData2);
  //   show the data using function

  displayData(titleName, total);
  //   disabled button using function
  disabledButton("last-btn");
});

// common function to display data
function displayData(titleName, total) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial}</td>
      <td>${titleName}</td>
      <td>${total}</td>
      <td>
      <p >cm<sup>2</sup></p>
      </td>
      <td>
      <button class="btn btn-sm btn-red-200">Covert to m<sup>2</sup></button>
      </td>
    `;
  container.appendChild(tr);
}

// common function to disable button
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}


// // common function to get data using getElementById method
// function getData(id1, id2, id3) {
//   // get the data from htm using id
//   const titleName = document.getElementById(id1).innerText;
//   const inputData1 = document.getElementById(id2).innerText;
//   const inputData2 = document.getElementById(id3).innerText;

//   const pd = {
//     titleName: titleName,
//     inputData1: inputData1,
//     inputData2: inputData2,
//   };
//   return pd;
// }