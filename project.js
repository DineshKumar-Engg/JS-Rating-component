const mainContainer = document.querySelector(".main")
const finalContainer = document.querySelector(".final")
const submitButton = document.getElementById("submit1")
const newRating = document.getElementById("submit2")
const ratings = document.querySelectorAll(".btn")
const finalRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  finalContainer.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      finalRating.innerHTML = rating.innerHTML
    })
  })
})

newRating.addEventListener("click", () => {
  mainContainer.style.display = "block"
  finalContainer.classList.add("hidden")
})
