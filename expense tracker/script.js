const amountInput = document.getElementById("trans-amount");
const descInput = document.getElementById("input-desc");
const addBtn = document.getElementById("add-btn");
const historyBox = document.getElementById("history-box");
const totalbalance=document.getElementById("total-balance")
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateDisplay() {
    let total = 0;
    let html = `
      <table style="width:100%;">
        <tr style="background-color:#f8f8f8;">  
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    `;
  
    transactions.forEach((entry, index) => {
      total += entry.amount;
      const type = entry.amount >= 0 ? "Income" : "Expense";
      const color = entry.amount >= 0 ? "green" : "red";
  
      html += `
        <tr style="color:${color};">
          <td>${type}</td>
          <td>${Math.abs(entry.amount).toFixed(2)}</td>
          <td>${entry.description}</td>
          <td>
            <button onclick="deleteTransaction(${index})"
                    style="background:none; border:none; color:red; cursor:pointer;">
              delete
            </button>
          </td>
        </tr>
      `;
    });

  
  
    totalbalance.innerHTML = `Total Balance: ₹${total.toFixed(2)}`;
    historyBox.innerHTML = html;
  }

function deleteTransaction(index) {
  transactions.splice(index, 1);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  updateDisplay();
}

addBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const description = descInput.value;
  if (!amount || !description) {
    alert("Please enter valid amount and description");
    return;
  }
  const transaction = {
    amount,
    description
  };
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  amountInput.value = "";
  descInput.value = "";
  updateDisplay();
});

updateDisplay();
