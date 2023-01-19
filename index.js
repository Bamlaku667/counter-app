console.log("hellow world" )
num = 2 + 2
console.log(num)

countEl = document.getElementById('count-el')
saveEl = document.getElementById('save-el')

let count = 0
function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    entries = count + " - "
    saveEl.textContent += entries
}