let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score-text")
let guestScoreEl = document.getElementById("guest-score-text")

function incrementHomeScoreBy1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    updateHighlight()
}

function incrementHomeScoreBy2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    updateHighlight()
}

function incrementHomeScoreBy3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    updateHighlight()
}

function incrementGuestScoreBy1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    updateHighlight()
}

function incrementGuestScoreBy2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    updateHighlight()
}

function incrementGuestScoreBy3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    updateHighlight()
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
    updateHighlight()
}

function updateHighlight() {
    if (homeScore == guestScore) {
        homeScoreEl.classList.remove("highlight")
        guestScoreEl.classList.remove("highlight")
    } 
    else if (homeScore > guestScore) {
        homeScoreEl.classList.add("highlight")
        guestScoreEl.classList.remove("highlight")
    }
    else {
        guestScoreEl.classList.add("highlight")
        homeScoreEl.classList.remove("highlight")
    }
}