"use strict";

// 1) click Mark As Read button ...
//      1A) .dot ADD "hidden"
//      1B) .notification REMOVE "unread"
//      1C) .notificationNumber text = 0

// 2) click any notification w/ class "unread"...
//      2A) .dot ADD "hidden"
//      2B) .notification REMOVE "unread"
//      2C) .notificationNumber text = number of .notifications with class "unread"

let number = document.querySelector(".notification-number");
const unreadDots = document.querySelectorAll(".dot");
const notifications = document.querySelectorAll(".notification");
const markAsRead = document.querySelector(".mark-read");

markAsRead.addEventListener("click", function () {
  for (const notification of notifications) {
    notification.classList.remove("unread");
    number.textContent = document.querySelectorAll(".unread").length;
    for (const unreadDot of unreadDots) {
      unreadDot.classList.add("hidden");
    }
  }
});
