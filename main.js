// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

//Global currentCatTax variable

let currentCatTax = 0;
const ui = {
  calc_btn: document.querySelector("[data-calc-btn]"),
  pay_btn: document.querySelector("[data-pay-btn]"),
  amount_owed: document.querySelector("[data-amount-owed"),
  data_img: document.querySelector("[data-img-container"),
};

let randNum = Math.floor(Math.random(currentCatTax) * 20 + 1);

ui.calc_btn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(randNum);
  if (randNum !== 0) {
    ui.amount_owed.textContent = `You owe ${randNum} cat tax! Pay up!`;
    ui.pay_btn.textContent = "Pay Cat Tax";
    ui.pay_btn.style.display = "block";
  } else if (randNum === 0) {
    ui.amount_owed.textContent = `You owe ${randNum} cat tax! You've escaped this time!`;
    ui.pay_btn.style.display = "none";
  }
});

// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat tax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

ui.pay_btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let res = await fetch("https://api.thecatapi.com/v1/images/search");
  res = await res.json();
  console.log(res);
  //   const value = res;

  randNum--;
  if (randNum > 0) {
    img = document.createElement("img");
    img.src = res[0].url;

    ui.data_img.appendChild(img);

    ui.amount_owed.textContent = `You still owe ${randNum} cat tax! Pay up!`;
  }
  //   console.log("https://gfycat.com/snivelingbeautifuljoey-cat");
  else if (randNum === 0) {
    ui.amount_owed.textContent = "Your debts are paid!";
    // fetch("https://gfycat.com/snivelingbeautifuljoey-cat").then((res) =>
    //   res.json()
    // );
    // console.log(res);
    not_paid = document.createElement("img");
    not_paid.src = "https://gfycat.com/snivelingbeautifuljoey-cat";
    ui.data_img.replaceChildren(not_paid);
    // ui.data_img.appendChild(not_paid);
  }
});
