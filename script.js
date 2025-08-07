let revenus = [];

function ajouterRevenu() {
  const descriptionInput = document.getElementById("description");
  const montantInput = document.getElementById("montant");

  const description = descriptionInput.value.trim();
  const montant = parseFloat(montantInput.value);

  if (!description || isNaN(montant)) {
    alert("Veuillez remplir les deux champs correctement.");
    return;
  }

  const date = new Date().toLocaleDateString("fr-FR");
  revenus.push({ date, description, montant });

  afficherRevenus();
  calculerTotal();

  descriptionInput.value = "";
  montantInput.value = "";
}

function afficherRevenus() {
  const tableBody = document.getElementById("revenu-table-body");
  tableBody.innerHTML = "";

  revenus.forEach((revenu) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${revenu.date}</td>
      <td>${revenu.description}</td>
      <td>${revenu.montant.toLocaleString()} FCFA</td>
    `;
    tableBody.appendChild(row);
  });
}

function calculerTotal() {
  const total = revenus.reduce((acc, r) => acc + r.montant, 0);
  document.getElementById("total").textContent = `${total.toLocaleString()} FCFA`;
}

  const total = revenus.reduce((sum, revenu) => sum + revenu.montant, 0);
  document.getElementById('total').textContent = `${total.toLocaleString()} FCFA`;
}

