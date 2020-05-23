const dieRolls = []
const Roll = document.querySelector(".roll")
const user_dice = document.querySelector("#dice")
const showAllRolls = document.querySelector(".show_all_rolls")
const reset = document.querySelector(".resetButton")

Roll.addEventListener("click", function() {
    let userDice = user_dice.value
    let counter = 1
    while (counter <= userDice) {
        let userResult = Math.floor( Math.random() * 6 ) +1
        dieRolls.push(userResult)
        document.getElementById("total").innerHTML = dieRolls.reduce(sum)
        function sum(a, b) {
            return a + b
        }
        counter += 1
    }
})
showAllRolls.addEventListener("click", function() {
    let yourRoll = document.createElement("li")
    let theNumber = dieRolls
    let yourNumber = document.createTextNode(theNumber)
    let counter = 0
    while (counter <= dieRolls.length) {
        yourRoll.appendChild(yourNumber)
    document.getElementById("all_rolls").appendChild(yourRoll)
        counter +=1
    }
})
// reset.addEventListener("click", function () {
//     dieRolls.length = 0
// })