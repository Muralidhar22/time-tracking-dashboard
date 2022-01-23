const daily = document.getElementById("daily-btn")
const weekly = document.getElementById("weekly-btn")
const monthly = document.getElementById("monthly-btn")

const hours = document.getElementsByClassName("hrs")
const lastTime = document.getElementsByClassName("previous")

Array.from(hours).forEach((e,i) => {
        console.log(`${e}${i}`)
    })



daily.addEventListener('click', ()=> {
    daily.classList.remove('text-muted')
    weekly.classList.add('text-muted')
    monthly.classList.add('text-muted')
    dailyData()
})

weekly.addEventListener('click', () => {
    weekly.classList.remove('text-muted')
    monthly.classList.add('text-muted')
    daily.classList.add('text-muted')
    weeklyData()
})

monthly.addEventListener('click', () => {
    monthly.classList.remove('text-muted')
    weekly.classList.add('text-muted')
    daily.classList.add('text-muted')
    monthlyData()
})