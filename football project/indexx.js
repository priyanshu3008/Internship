 let homeScoreBtnOne = document.getElementById("home-score-btn-1")
 let homeStoreEl =document.getElementById("home-score")
 let homeScore = 0

 function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore

 }
 
let ScoreBtnTwo = document.getElementById("score-btn2")
 function increseHomescoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
 }

 let ScoreBtnThree = document.getElementById("score-btn3")
 function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
 }

 let ZeRo = document.getElementById("zero")
 function zero(){
    homeScore = 0
    homeStoreEl.textContent = homeScore
 }

 let GuestScoreBtnOne = document.getElementById("guest-score-btn-1")
 let homeStoreEls = document.getElementById("guest-score")
 let guestScore = 0

 function increaseGuestScoreOne(){
    guestScore += 1
    homeStoreEls.textContent = guestScore

 }

 let GuestscoreBtnTwo = document.getElementById("guest-score-btn-2")
   function increaseGuestScoretwo(){
    guestScore += 2
    homeStoreEls.textContent = guestScore
   }

   let GuestscoreBtnThree = document.getElementById("guest-score-btn-3")
   function increaseGuestScoreThree(){
    guestScore +=3
    homeStoreEls.textContent = guestScore
   }
   
    let GuestZero = document.getElementById("guest-zero")
    function guestzero(){
        guestScore = 0
        homeStoreEls.textContent = guestScore
    }