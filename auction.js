document.addEventListener("DOMContentLoaded", () => {
  const bidForm = document.getElementById("bidForm");
  const bidList = document.getElementById("bidList");

  bidForm.addEventListener("submit", e => {
    e.preventDefault();
    const item = document.getElementById("item").value;
    const bid = document.getElementById("bid").value;
    const li = document.createElement("li");
    li.textContent = `${item} - ${bid} BTC`;
    bidList.appendChild(li);
    bidForm.reset();
  });
});
