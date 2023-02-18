let serial= 0;
// first card
//we can not use common function beacuse its an input type , we need to use dot value
document.getElementById("first-btn").addEventListener("click", function () {
    serial += 1;
    const titleName = document.getElementById("first-title").innerText;
    const inputData1 = document.getElementById("first-input").value;
    const inputData2 = document.getElementById("second-input").value;
    const ph =0.5;
    if (
      inputData1 == "" ||
      inputData2 == "" ||
      inputData1 <= 0 ||
      inputData2 <= 0
    ) {
      return alert("please enter any valid number");
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
      return alert("please enter any valid number");
    }
    const total = parseInt(inputData1) * parseInt(inputData2);
    //   show the data using function
    
    displayData(titleName, total);
    //   disabled button using function
    disabledButton("2nd-btn");
  });











// common function to display data
function displayData(titleName, total ) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${titleName}</td>
      <td>${total}</td>
      <td>
      <p >cm<sub>2</sub></p>
      </td>
      <td>
      <button class="btn btn-sm btn-red-500">Covert to m<sub>2</sub></button>
      </td>
      
    `;
    container.appendChild(tr);
    document.getElementById("total-product").innerText = serial;
  }


// common function to disable button
function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  }
















































// var colorChange = $('.container .card .face.face1');
// var original = colorChange.css('background');
// var colors = ['#AC4EC6', ' #A4C64E', '#C6704E', '#C6AC4E', '#C64E68','#C64EA4','#4B99C2'];

// colorChange.hover(function () {
// // defines location of new color in the colors array
//     var hexLocation = Math.floor(Math.random() * colors.length);
//     var newcolor = colors[hexLocation];
  
// //replaces background property with new color when hovering
//     $(this).css('background', newcolor);
// }, function() {
//  //replaces background property with original color when NOT hovering
//     $(this).css('background', original);
// });





