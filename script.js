// document.addEventListener("DOMContentLoaded", function () {
//   function setupTabs(tabContainer) {
//     const tabItems = tabContainer.querySelectorAll(".coupon_tab_item");

//     tabItems.forEach((item) => {
//       item.addEventListener("click", function () {
//         // Remove 'sel' class from all tabs in the same container
//         tabItems.forEach((tab) => tab.classList.remove("sel"));
//         // Add 'sel' class to clicked tab
//         this.classList.add("sel");
//       });
//     });
//   }

//   function updateBottomTabs(selection) {
//     const bottomTabs = document.querySelectorAll(
//       ".coupon_tab_2j .coupon_tab_item"
//     );

//     if (selection === "sport") {
//       bottomTabs[0].textContent = "Coupon";
//       bottomTabs[0].id = "couponTab";
//       bottomTabs[1].textContent = "Freebet";
//       bottomTabs[1].id = "freebetTab";
//     } else if (selection === "casino") {
//       bottomTabs[0].textContent = "Coupon";
//       bottomTabs[0].id = "couponTab";
//       bottomTabs[1].textContent = "Freebet";
//       bottomTabs[1].id = "freebetTab";
//     }
//   }

//   function toggleDropdown() {
//     const dropdown = document.getElementById("dropdownContent");
//     dropdown.style.display =
//       dropdown.style.display === "none" ? "block" : "none";
//   }

//   // Initialize top tab switching
//   const topTabs = document.querySelectorAll(".coupon_tab .coupon_tab_item");
//   topTabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       updateBottomTabs(this.dataset.tab);
//   const dropdown = document.getElementById("dropdownContent");
//   dropdown.style.display = "none";
//     });
//   });

//   // Initialize bottom tab switching
//   setupTabs(document.querySelector(".coupon_tab"));
//   setupTabs(document.querySelector(".coupon_tab_2j"));

//   // Handle bottom tab clicks (dynamic)
//   document
//     .querySelector(".coupon_tab_2j")
//     .addEventListener("click", function (event) {
//       if (event.target.id === "couponTab") {
//         const dropdown = document.getElementById("dropdownContent");
//         dropdown.style.display = "block";
//         // window.location.href = "your-link-here";  // Uncomment for navigation
//       }
//       if (event.target.id === "freebetTab") {
//         // toggleDropdown();
//         const dropdown = document.getElementById("dropdownContent");
//         dropdown.style.display = "none";
//       }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let currentTopTab = "sport"; // Default selected top tab
//   let currentBottomTab = "couponTab"; // Default selected bottom tab

//   async function fetchDropdownData() {
//     try {
//       const response = await fetch("https://api.example.com/coupons"); // Replace with actual API URL
//       if (!response.ok) throw new Error("Failed to fetch data");

//       const data = await response.json();
//       populateDropdown(data);
//     } catch (error) {
//       console.error("Error fetching dropdown data:", error);
//     }
//   }

//   function populateDropdown(data) {
//     const dropdown = document.getElementById("dropdownContent");
//     dropdown.innerHTML = ""; // Clear existing content

//     data.forEach((item) => {
//       const couponItem = `
//             <div class="ticket-container">
//                 <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
//                     <div class="ticket-section">
//                         <span class="ticket-label">${item.name} ₦${item.amount}</span>
//                     </div>
//                     <div class="ticket-section">
//                         <span class="ticket-tier">${item.status}</span>
//                     </div>
//                 </div>
//                 <div class="ticket-details">
//                     <div class="ticket-section">
//                         <span class="ticket-label" style="font-weight: 600;">Coupon Balance: ₦${item.balance}
//                             <i class="fa-regular fa-circle-question">
//                                 <span class="tooltip">${item.tooltip}</span>
//                             </i>
//                         </span>
//                     </div>
//                     <div class="ticket-section">
//                         <span class="ticket-label" style="font-weight: 600;">Staking Requirement: ₦${item.requirement}
//                             <i class="fa-regular fa-circle-question">
//                                 <span class="tooltip">${item.tooltip}</span>
//                             </i>
//                         </span>
//                     </div>
//                     <div class="ticket-section"
//                         style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
//                         <span class="ticket-label" style="font-weight: 600;">Total Amount Staked: ₦${item.staked}
//                             <i class="fa-regular fa-circle-question">
//                                 <span class="tooltip">${item.tooltip}</span>
//                             </i>
//                         </span>
//                         <p class="percentage">${item.percentage}%</p>
//                     </div>
//                     <div class="ticket-section">
//                         <div class="track">
//                             <div class="progress" style="width: ${item.percentage}%;"></div>
//                         </div>
//                         <div class="button-container">
//                             <a href="staking-history.html" style="background: #007aff;">
//                                 <button>Staking history</button>
//                             </a>
//                             <a href="" style="background-color: #82370b;">
//                                 <button>Play Now</button>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//       dropdown.innerHTML += couponItem;
//     });

//     toggleDropdown(true);
//   }

//   function setupTabs(tabContainer) {
//     const tabItems = tabContainer.querySelectorAll(".coupon_tab_item");

//     tabItems.forEach((item) => {
//       item.addEventListener("click", function () {
//         // Remove 'sel' class from all tabs in the same container
//         tabItems.forEach((tab) => tab.classList.remove("sel"));
//         // Add 'sel' class to clicked tab
//         this.classList.add("sel");

//         // Update the current bottom tab selection
//         if (tabContainer.classList.contains("coupon_tab_2j")) {
//           currentBottomTab = this.id;
//           checkDropdownVisibility(); // Check if dropdown should be shown
//         }
//       });
//     });
//   }

//   function updateBottomTabs(selection) {
//     const bottomTabs = document.querySelectorAll(
//       ".coupon_tab_2j .coupon_tab_item"
//     );

//     if (selection === "sport") {
//       bottomTabs[0].textContent = "Coupon";
//       bottomTabs[0].id = "couponTab";
//       bottomTabs[1].textContent = "Freebet";
//       bottomTabs[1].id = "freebetTab";
//     } else if (selection === "casino") {
//       bottomTabs[0].textContent = "Coupon";
//       bottomTabs[0].id = "couponTab";
//       bottomTabs[1].textContent = "Freebet";
//       bottomTabs[1].id = "freebetTab";
//     }

//     // Update the current selected top tab
//     currentTopTab = selection;
//     checkDropdownVisibility(); // Check if dropdown should be shown after switching top tab
//   }

//   function toggleDropdown(show) {
//     const dropdown = document.getElementById("dropdownContent");
//     dropdown.style.display = show ? "block" : "none";
//   }

//   function checkDropdownVisibility() {
//     // Show dropdown only if Sport Bonus is selected and Coupon1 is active
//     if (currentTopTab === "sport" && currentBottomTab === "couponTab") {
//       //   toggleDropdown(true);
//       fetchDropdownData();
//     } else {
//       toggleDropdown(false);
//     }
//   }

//   // Initialize top tab switching
//   const topTabs = document.querySelectorAll(".coupon_tab .coupon_tab_item");
//   topTabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       updateBottomTabs(this.dataset.tab);
//     });
//   });

//   // Initialize bottom tab switching
//   setupTabs(document.querySelector(".coupon_tab"));
//   setupTabs(document.querySelector(".coupon_tab_2j"));
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let currentTopTab = "sport"; // default top tab
//   let currentBottomTab = "couponTab"; // default bottom tab

//   async function fetchDropdownData(topTab, bottomTab) {
//     try {
//       const response = await fetch(
//         `https://api.example.com/coupons?topTab=${topTab}&bottomTab=${bottomTab}`
//       );
//       if (!response.ok) throw new Error("Failed to fetch data");

//       const data = await response.json();
//       // populateDropdown(data);
//     } catch (error) {
//       // populateDropdown([])
//       console.error("Error fetching dropdown data:", error);
//     }
//     // populateDropdown([
//     //   {
//     //     name: "Casino Bonus",
//     //     amount: "200",
//     //     status: "Pending",
//     //     balance: "200",
//     //     requirement: "23920",
//     //     staked: "80",
//     //   },
//     //   {
//     //     name: "Casino Bonus",
//     //     amount: "200",
//     //     status: "Pending",
//     //     balance: "200",
//     //     requirement: "200",
//     //     staked: "200",
//     //   },
//     // ]);
//   }

//   function populateDropdown(data) {
//     const dropdown = document.getElementById("dropdownContent");
//     dropdown.innerHTML = ""; // clear existing content
//     console.log(data.length, "here");

//     if (data.length === 0) {
//       toggleDropdown(true);
//       dropdown.innerHTML = `
//                         <div class="no_data">
//                             <img src="/assets/images/empty-data.png" >
//                             <p>There are currently no events.</p>
//                         </div>
//                     `;
//       return;
//     }

//     data.forEach((item) => {
//       const couponItem = `
//                    <div class="ticket-container">
//                     <div
//                         style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
//                         <div class="ticket-section">
//                             <div class="ticket-section">
//                                 <span class="ticket-label"><span style="font-size: 30px; font-weight: 500">₦${
//                                   item?.amount
//                                 }
//                                 </span></span>
//                             </div>
//                         </div>
//                         <div class="ticket-section">
//                             <span class="ticket-tier">${item?.status}</span>
//                         </div>
//                     </div>

//                     <div class="ticket-details">
//                         <div class="ticket-section">
//                             <span class="ticket-label" style="font-weight: 600;">Coupon Balance: ₦${
//                               item?.balance
//                             }
//                                 <i class="fa-regular fa-circle-question">
//                                     <span class="tooltip">The total amount you must stake to unlock your bonus</span>
//                                 </i>
//                             </span>
//                         </div>
//                         <div class="ticket-section">
//                             <span class="ticket-label" style="font-weight: 600;">Staking Requirement: ₦${
//                               item?.requirement
//                             }
//                                 <i class="fa-regular fa-circle-question">
//                                     <span class="tooltip">The total amount you must stake to unlock your bonus</span>
//                                 </i>
//                             </span>
//                         </div>
//                         <div class="ticket-section"
//                             style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
//                             <span class="ticket-label" style="font-weight: 600;">Total Amount Staked: ₦${
//                               item?.staked
//                             }
//                                 <i class="fa-regular fa-circle-question">
//                                     <span class="tooltip">The total amount you must stake to unlock your bonus</span>
//                                 </i>
//                             </span>
//                             <p class="percentage">${
//                               Math.round(
//                                 (Number(item?.staked) /
//                                   Number(item?.requirement)) *
//                                   100 *
//                                   100
//                               ) / 100
//                             }%</p>
//                         </div>
//                         <div class="ticket-section">
//                             <div class="track">
//                                 <div class="progress" style="width: ${
//                                   (Number(item?.staked) /
//                                     Number(item?.requirement)) *
//                                   100
//                                 }%;"></div>
//                             </div>
//                             <div class="button-container">
//                                 <a href="staking-history.html" style="background: #007aff;">
//                                     <button>Staking history</button>
//                                 </a>
//                                 <a href="" style="background-color: #82370b;">
//                                     <button>Play Now</button>
//                                 </a>
//                             </div>
//                         </div>

//                         <div class="separator"></div>
//                         <div class="rounded-shape"></div>
//                         <div class="rounded-shape2"></div>
//                     </div>
//                 </div>
//             `;
//       dropdown.innerHTML += couponItem;
//     });

//     toggleDropdown(true);
//   }

//   function toggleDropdown(show) {
//     const dropdown = document.getElementById("dropdownContent");
//     dropdown.style.display = show ? "block" : "none";
//   }

//   function updateTabs(topTab, bottomTab) {
//     currentTopTab = topTab;
//     currentBottomTab = bottomTab;
//     fetchDropdownData(currentTopTab, currentBottomTab);
//   }

//   function handleTopTabClick(event) {
//     const selectedTab = event.target.dataset.tab;
//     updateBottomTabs(selectedTab);
//   }

//   function handleBottomTabClick(event) {
//     const selectedTab = event.target.id;
//     updateTabs(currentTopTab, selectedTab);
//   }
//   console.log(currentBottomTab);

//   function updateBottomTabs(selection) {
//     console.log(selection);

//     const bottomTabs = document.querySelectorAll(
//       ".coupon_tab_2j .coupon_tab_item"
//     );
//     console.log(bottomTabs, "hee");

//     if (selection === "sport") {
//       bottomTabs[0].textContent = "Coupon";
//       bottomTabs[0].id = "couponTab";
//       bottomTabs[1].textContent = "Freebet";
//       bottomTabs[1].id = "freebetTab";
//       bottomTabs[2].textContent = "Tab 3";
//       bottomTabs[2].id = "tab3";
//     } else if (selection === "casino") {
//       bottomTabs[0].textContent = "Coupon";
//       bottomTabs[0].id = "couponTab";
//       bottomTabs[1].textContent = "Freebet";
//       bottomTabs[1].id = "freebetTab";
//     }

//     updateTabs(selection, "couponTab");
//   }

//   function setupTabs(tabContainer, clickHandler) {
//     const tabItems = tabContainer.querySelectorAll(".coupon_tab_item");

//     tabItems.forEach((item) => {
//       item.addEventListener("click", function () {
//         tabItems.forEach((tab) => tab.classList.remove("sel"));
//         this.classList.add("sel");
//         clickHandler(event);
//       });
//     });
//   }

//   setupTabs(document.querySelector(".coupon_tab"), handleTopTabClick);
//   setupTabs(document.querySelector(".coupon_tab_2j"), handleBottomTabClick);

//   // Fetch data on initial page load with default tabs
//   fetchDropdownData(currentTopTab, currentBottomTab);
// });

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
