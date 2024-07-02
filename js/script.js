/*

<span class="spinner_b6db20 spinner_dd4f85" role="img" aria-label="Loading"><span class="inner_b6db20 pulsingEllipsis_b6db20"><span class="item_b6db20 spinnerItem_dd4f85"></span><span class="item_b6db20 spinnerItem_dd4f85"></span><span class="item_b6db20 spinnerItem_dd4f85"></span></span></span>
*/

const loginButton = document.querySelector("button");

function removeEllipsisAnimation() {
  loginButton.innerHTML = "";
  loginButton.textContent = "Log In";
  loginButton.removeAttribute("disabled");
}

function animateEllipsis() {
  loginButton.innerHTML = "";
  loginButton.innerHTML = `<span class="spinner" role="img" aria-label="Loading">
                                    <span class="inner pulsingEllipsis">
                                        <span class="item spinnerItem"></span>
                                        <span class="item spinnerItem"></span>
                                        <span class="item spinnerItem"></span>
                                    </span>
                           </span>`;
  const spinnerItems = document.querySelectorAll(".spinnerItem");
  spinnerItems.forEach((item, index) => {
    item.style.animation = `spinner-pulsing-ellipsis 1.4s infinite ease-in-out ${
      index * 0.2
    }s`;
  });
  loginButton.setAttribute("disabled", "true");

  setTimeout(removeEllipsisAnimation, 3000);
}

loginButton.addEventListener("click", animateEllipsis);

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
