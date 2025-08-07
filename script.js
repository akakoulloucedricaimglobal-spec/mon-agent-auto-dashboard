function addRevenue() {
  const descInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");
  const tableBody = document.querySelector("#revenue-table tbody");
  const totalSpan = document.getElementById("total");

  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (desc === "" || isNaN(amount)) {
    alert("Please enter a valid description and amount.");
    return;
  }

  const date = new Date().toLocaleDateString("fr-FR");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${date}</td>
    <td>${desc}</td>
    <td>${amount.toLocaleString()} FCFA</td>
  `;

  tableBody.appendChild(row);

  // Update total
  const currentTotal = parseFloat(totalSpan.textContent.replace(/\s/g, '')) || 0;
  const newTotal = currentTotal + amount;
  totalSpan.textContent = newTotal.toLocaleString();

  // Clear inputs
  descInput.value = "";
  amountInput.value = "";
}
