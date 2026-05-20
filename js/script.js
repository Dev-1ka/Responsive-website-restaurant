let grandTotal = 0;

function addToBill() {

    let quantity = document.getElementById("qty").value;

    if (quantity === "" || quantity <= 0 ) {
        alert("Enter a valid positive integer quantity!");
        return;
    }

    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    if (checkboxes.length === 0) {
        alert("Select at least one item!");
        return;
    }

    checkboxes.forEach(item => {

        let name = item.value;
        let price = Number(item.dataset.price);
        let total = price * quantity;

        let table = document.getElementById("billTable");
        let row = table.insertRow();

        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = quantity;
        row.insertCell(2).innerText = total.toFixed(2);

        grandTotal += total;
    });

    document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);

    document.querySelectorAll("input[type='checkbox']").forEach(c => c.checked = false);
    document.getElementById("qty").value = "";
}

function applyEffect() {
  let action = $("#action").val();

  if (action === "hide") {
    $(".img-control").hide();
  }
  else if (action === "show") {
    $(".img-control").show();
  }
  else if (action === "fadeIn") {
    $(".img-control").fadeIn();
  }
  else if (action === "fadeOut") {
    $(".img-control").fadeOut();
  }
}

$(function () {
  $("#menuAccordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
});