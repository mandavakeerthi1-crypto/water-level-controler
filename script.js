// ==========================
// SMART WATER CONTROL SYSTEM
// ==========================

// Water level starts at 53%

let waterLevel = 53;
let autoMode = true;

// Elements

const water = document.getElementById("water");
const levelText = document.getElementById("levelText");
const motorText = document.getElementById("motorText");

// ==========================
// INITIAL LOAD
// ==========================

updateWater();

// ==========================
// START MOTOR
// ==========================

function startMotor() {

    motorText.innerHTML = "ON";
    motorText.style.color = "#00ff66";
}

// ==========================
// STOP MOTOR
// ==========================

function stopMotor() {

    motorText.innerHTML = "OFF";
    motorText.style.color = "red";
}

// ==========================
// AUTO MODE
// ==========================

function setAuto() {

    autoMode = true;

    document.getElementById("modeText").innerHTML =
        "Current Mode : AUTO";

    let control = document.getElementById("controlMode");

    if (control) {
        control.innerHTML =
            "Current Mode : AUTO";
    }
}

// ==========================
// MANUAL MODE
// ==========================

function setManual() {

    autoMode = false;

    document.getElementById("modeText").innerHTML =
        "Current Mode : MANUAL";

    let control = document.getElementById("controlMode");

    if (control) {
        control.innerHTML =
            "Current Mode : MANUAL";
    }
}

// ==========================
// WATER DISPLAY
// ==========================

function updateWater() {

    water.style.height = waterLevel + "%";

    levelText.innerHTML =
        waterLevel + "%";
}

// ==========================
// AUTO FILL
// ==========================

setInterval(function () {

    if (motorText.innerHTML === "ON") {

        if (waterLevel < 100) {

            waterLevel++;

            updateWater();
        }
    }

}, 1000);

// ==========================
// WATER USAGE
// ==========================

setInterval(function () {

    if (motorText.innerHTML === "OFF") {

        if (waterLevel > 10) {

            waterLevel--;

            updateWater();
        }
    }

}, 5000);

// ==========================
// LOW WATER ALERT
// ==========================

setInterval(function () {

    if (waterLevel <= 20) {

        alert(
        "Low Water Level! Please Start Motor.");
    }

}, 30000);

// ==========================
// TANK FULL ALERT
// ==========================

setInterval(function () {

    if (waterLevel >= 100) {

        alert(
        "Tank Full! Motor Stopped.");

        stopMotor();
    }

}, 5000);

// ==========================
// CLOCK
// ==========================

function updateClock() {

    let now = new Date();

    document.getElementById("time")
        .innerHTML =
        now.toLocaleTimeString();

    document.getElementById("clock")
        .innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date")
        .innerHTML =
        now.toDateString();
}

setInterval(updateClock, 1000);

updateClock();

// ==========================
// SIDEBAR PAGES
// ==========================

function showPage(pageId) {

    let pages =
        document.querySelectorAll(".page");

    pages.forEach(function (page) {

        page.classList.add("hidden");

    });

    document
        .getElementById(pageId)
        .classList.remove("hidden");
}

// ==========================
// AUTO MODE CONTROL
// ==========================

setInterval(function () {

    if (autoMode) {

        if (waterLevel <= 20) {

            startMotor();
        }

        if (waterLevel >= 95) {

            stopMotor();
        }
    }

}, 2000);

// ==========================
// STATUS UPDATE
// ==========================

setInterval(function () {

    let health =
        document.querySelector(".health-fill");

    let power =
        document.querySelector(".power-fill");

    if (health) {

        health.style.width = "95%";
    }

    if (power) {

        power.style.width = "88%";
    }

}, 1000);