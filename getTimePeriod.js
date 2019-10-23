
function getTimePeriods(){
    clearElements()
    const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController/'
    
    fetch(url)
        .then(response => response.json())
        // .then(console.log(response))
        .then(response => showTimePeriods(response))     
}  

function showTimePeriods(response){
    console.log(response)
    for( var i =0; i< response.length; i++){
        console.log(i)

        const div = document.createElement('div')

        const p1 = document.createElement('p')
        p1.textContent = response[i].startTime
        div.appendChild(p1)

        const p2 = document.createElement('p')
        p2.textContent = response[i].activity
        div.appendChild(p2)

        const div2 = document.querySelector('#getResults')
        div2.appendChild(div)
    }
}

function getOneTimePeriod(){
    clearElements()
    let id = document.querySelector("#getId").value
    console.log("id: " + id)
    const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController/' + id
    
    fetch(url)
        .then(response => response.json())
        // .then(console.log(response))
        .then(response => showOneTimePeriod(response))     
}  

function showOneTimePeriod(response){
    console.log(response)

    const div = document.createElement('div')

    const p1 = document.createElement('p')
    p1.textContent = response.startTime
    div.appendChild(p1)

    const p2 = document.createElement('p')
    p2.textContent = response.activity
    div.appendChild(p2)

    const div2 = document.querySelector('#divForOne')
    div2.appendChild(div)
}

function clearElements() {
    const div1 = document.querySelector('#divForOne')
    const div2 = document.querySelector('#getResults')
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    while (div2.firstChild) {
        div2.removeChild(div2.firstChild);
    }
}