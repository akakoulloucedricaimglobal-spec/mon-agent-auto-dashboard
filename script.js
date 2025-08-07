let revenus = [];

function ajouterRevenu() {
  const description = document.getElementById('description').value.trim();
  const montant = parseFloat(document.getElementById('montant').value.trim());

  if (description === '' || isNaN(montant)) {
    alert('Veuillez remplir tous les champs correctement.');
    return;
  }

  const date = new Date().toLocaleDateString('fr-FR');
  revenus.push({ date, description, montant });

  afficherRevenus();
  calculerTotal();

  // Nettoyage des champs
  document.getElementById('description').value = '';
  document.getElementById('montant').value = '';
}

function afficherRevenus() {
  const tbody = document.getElementById('revenu-table-body');
  tbody.innerHTML = '';

  revenus.forEach(revenu => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${revenu.date}</td>
      <td>${revenu.description}</td>
      <td>${revenu.montant.toLocaleString()} FCFA</td>
    `;
    tbody.appendChild(row);
  });
}

function calculerTotal() {
  const total = revenus.reduce((sum, revenu) => sum + revenu.montant, 0);
  document.getElementById('total').textContent = `${total.toLocaleString()} FCFA`;
}

