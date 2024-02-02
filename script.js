let totalCredit = 0;
let totalDebit = 0;

function addTransaction() {
  const transactionAmount = parseFloat(document.getElementById('transaction').value);
  
  if (isNaN(transactionAmount)) {
    alert('Please enter a valid number.');
    return;
  }

  if (transactionAmount >= 0) {
    totalCredit += transactionAmount;
  } else {
    totalDebit += Math.abs(transactionAmount);
  }

  updateSummaryTable();
}

function updateSummaryTable() {
  document.getElementById('totalCredit').innerText = totalCredit.toFixed(2);
  document.getElementById('totalDebit').innerText = totalDebit.toFixed(2);
  document.getElementById('closingBalance').innerText = (totalCredit - totalDebit).toFixed(2);
}
