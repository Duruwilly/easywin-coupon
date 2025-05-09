document.addEventListener("DOMContentLoaded", function () {
  let currentTopTab = "sport"; // default selected top tab
  let currentBottomTab = "discountTab"; // default selected bottom tab

  // bottom tabs selection
  const bottomTabOptions = {
    sport: [
      { id: "discountTab", text: "Discount" },
      { id: "freebetTab", text: "Freebet" },
      { id: "bonusTab", text: "Bonus" },
    ],
    casino: [
      { id: "bonusTab", text: "Bonus" },
      // { id: "freebetTab", text: "Freebet" },
    ],
  };

  function setupTabs() {
    const bottomTabs = document.querySelectorAll(
      ".coupon_tab_2j .coupon_tab_item"
    );

    bottomTabs.forEach((item) => {
      item.addEventListener("click", function () {
        bottomTabs.forEach((tab) => tab.classList.remove("sel"));
        this.classList.add("sel");

        // update current bottom tab
        currentBottomTab = this.id;
        checkDropdownVisibility(); // check dropdown visibility
      });
    });
  }

  function updateBottomTabs(selection) {
    const bottomTabsContainer = document.getElementById("bottomTabsContainer");
    bottomTabsContainer.innerHTML = ""; // clear existing tabs

    // get bottom tab options based on selected top tab
    const tabs = bottomTabOptions[selection] || [];

    tabs.forEach((tab, index) => {
      const tabElement = document.createElement("div");
      tabElement.className = `boxflex coupon_tab_item ${
        index === 0 ? "sel" : ""
      }`;
      tabElement.id = tab.id;
      tabElement.textContent = tab.text;

      // set default selected bottom tab
      if (index === 0) {
        currentBottomTab = tab.id;
      }

      bottomTabsContainer.appendChild(tabElement);
    });

    setupTabs(); // reinitialize event listeners for new tabs
    checkDropdownVisibility(); // check dropdown visibility
  }

  function toggleSportCouponDropdown(show) {
    const dropdown = document.getElementById("sportBonusContent");
    dropdown.style.display = show ? "block" : "none";
  }

  function toggleFreebetCouponDropdown(show) {
    const dropdown = document.getElementById("sportFreebetContent");
    dropdown.style.display = show ? "block" : "none";
  }

  function toggleSportGiftDropdown(show) {
    const dropdown = document.getElementById("casinoGiftContent");
    dropdown.style.display = show ? "block" : "none";
  }

  function toggleSportDiscountDropdown(show) {
    const dropdown = document.getElementById("sportDiscountContent");
    dropdown.style.display = show ? "block" : "none";
  }

  function checkDropdownVisibility() {
    // show dropdown only if sport bonus is selected and coupon is active
    if (currentTopTab === "sport" && currentBottomTab === "discountTab") {
      toggleSportDiscountDropdown(true);
      toggleSportCouponDropdown(false);
      toggleFreebetCouponDropdown(false);
      toggleSportGiftDropdown(false);
    } else if (currentTopTab === "sport" && currentBottomTab === "bonusTab") {
      toggleSportCouponDropdown(true);
      toggleSportDiscountDropdown(false);
      toggleFreebetCouponDropdown(false);
      toggleSportGiftDropdown(false);
    } else if (currentTopTab === "sport" && currentBottomTab === "freebetTab") {
      toggleFreebetCouponDropdown(true);
      toggleSportCouponDropdown(false);
      toggleSportGiftDropdown(false);
      toggleSportDiscountDropdown(false);
    } else if (currentTopTab === "casino" && currentBottomTab === "bonusTab") {
      toggleSportGiftDropdown(true);
      toggleFreebetCouponDropdown(false);
      toggleSportCouponDropdown(false);
      toggleSportDiscountDropdown(false);
    } else {
      toggleSportGiftDropdown(false);
      toggleFreebetCouponDropdown(false);
      toggleSportCouponDropdown(false);
      toggleSportDiscountDropdown(false);
    }
  }

  // initialize top tab switching
  const topTabs = document.querySelectorAll(".coupon_tab .coupon_tab_item");
  topTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      topTabs.forEach((tab) => tab.classList.remove("sel"));
      currentTopTab = this.dataset.tab;
      this.classList.add("sel");
      updateBottomTabs(currentTopTab);
    });
  });

  // initialize bottom tabs dynamically based on default top tab
  updateBottomTabs(currentTopTab);
});

function toggleExplanation(element) {
  let ticketContainer = element.closest(".ticket");
  let explanationContent = ticketContainer.querySelector(
    ".explanation-content"
  );

  if (
    explanationContent.style.display === "none" ||
    explanationContent.style.display === ""
  ) {
    explanationContent.style.display = "block";
  } else {
    explanationContent.style.display = "none";
  }
}
