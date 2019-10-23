Object.onload = getTimePeriods()

function getTimePeriods(){
    clearElements()
    const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController/'
    
    fetch(url)
        .then(response => response.json())
        // .then(console.log(response))
        .then(response => functionCaller(response))     
}  

function functionCaller(response){
    createTPs(response)
    sumActivityTypes(response)
}

function createTPs(response){
    for(i = 0; i < response.length; i++){

        const tabsHere = document.querySelector("#buttonsHere")

        const tP = document.createElement('div')
        tP.setAttribute("id", "tPStyle")
        const activityP = document.createElement('p')
        let startTimeP = document.createElement('p')
        startTimeP.textContent = "Start time: " + response[i].startTime
        activityP.textContent = "Activity Type: " + response[i].activity
        let activityTextContent = activityP.textContent
        tP.appendChild(startTimeP)
        tP.appendChild(activityP)

        const undefined = document.createElement('button')
        undefined.textContent = "Undefined"
        undefined.setAttribute("data-activityType", "UNDEFINED")
        tP.appendChild(undefined)

        const sleeping = document.createElement('button')
        sleeping.textContent = "Sleeping"
        sleeping.setAttribute("data-activityType", "SLEEPING")
        tP.appendChild(sleeping)

        const mornNightPrepBath = document.createElement('button')
        mornNightPrepBath.textContent = "Prep/Bath"
        mornNightPrepBath.setAttribute("data-activityType", "MORNING_NIGHT_PREP_BATHING")
        tP.appendChild(mornNightPrepBath)

        const cookEat = document.createElement('button')
        cookEat.textContent = "Cook/Eat"
        cookEat.setAttribute("data-activityType", "COOKING_EATING")
        tP.appendChild(cookEat)

        const transit = document.createElement('button')
        transit.textContent = "Transit"
        transit.setAttribute("data-activityType", "IN_TRANSIT")
        tP.appendChild(transit)

        const working = document.createElement('button')
        working.textContent = "Working"
        working.setAttribute("data-activityType", "WORKING")
        tP.appendChild(working)

        const exercise = document.createElement('button')
        exercise.textContent = "Exercise"
        exercise.setAttribute("data-activityType", "EXERCISING")
        tP.appendChild(exercise)

        const socialize = document.createElement('button')
        socialize.textContent = "Socialize"
        socialize.setAttribute("data-activityType", "SOCIALIZING")
        tP.appendChild(socialize)

        const cleanLaundry = document.createElement('button')
        cleanLaundry.textContent = "Clean/Laundry"
        cleanLaundry.setAttribute("data-activityType", "CLEANING_LAUNDRY")        
        tP.appendChild(cleanLaundry)

        const leisureEntertain = document.createElement('button')
        leisureEntertain.textContent = "Leisure/Entertainment"
        leisureEntertain.setAttribute("data-activityType", "LEISURE_ENTERTAINMENT")        
        tP.appendChild(leisureEntertain)

        const youtube = document.createElement('button')
        youtube.textContent = "Youtube"
        youtube.setAttribute("data-activityType", "YOUTUBE") 
        tP.appendChild(youtube)

        const anime = document.createElement('button')
        anime.textContent = "Anime"
        anime.setAttribute("data-activityType", "ANIME") 
        tP.appendChild(anime)

        const phone = document.createElement('button')
        phone.textContent = "Phone"
        phone.setAttribute("data-activityType", "PHONE_BROWSING") 
        tP.appendChild(phone)

        undefined.setAttribute("class", "activityButton")
        sleeping.setAttribute("class", "activityButton")
        mornNightPrepBath.setAttribute("class", "activityButton")
        cookEat.setAttribute("class", "activityButton")
        transit.setAttribute("class", "activityButton")
        working.setAttribute("class", "activityButton")
        exercise.setAttribute("class", "activityButton")
        socialize.setAttribute("class", "activityButton")
        cleanLaundry.setAttribute("class", "activityButton")
        leisureEntertain.setAttribute("class", "activityButton")
        youtube.setAttribute("class", "activityButton")
        anime.setAttribute("class", "activityButton")
        phone.setAttribute("class", "activityButton")

        let startTimeIndex = response[i].startTime

        undefined.onclick = function(){ putButtonFunctionality(startTimeIndex, i, undefined, activityTextContent) }
        sleeping.onclick = function(){ putButtonFunctionality(startTimeIndex, i, sleeping, activityTextContent) }
        mornNightPrepBath.onclick = function(){ putButtonFunctionality(startTimeIndex, i, mornNightPrepBath, activityTextContent) }
        cookEat.onclick = function(){ putButtonFunctionality(startTimeIndex, i, cookEat) }
        transit.onclick = function(){ putButtonFunctionality(startTimeIndex, i, transit) }
        working.onclick = function(){ putButtonFunctionality(startTimeIndex, i, working) }
        exercise.onclick = function(){ putButtonFunctionality(startTimeIndex, i, exercise) }
        socialize.onclick = function(){ putButtonFunctionality(startTimeIndex, i, socialize) }
        cleanLaundry.onclick = function(){ putButtonFunctionality(startTimeIndex, i, cleanLaundry) }
        leisureEntertain.onclick = function(){ putButtonFunctionality(startTimeIndex, i, leisureEntertain) }
        youtube.onclick = function(){ putButtonFunctionality(startTimeIndex, i, youtube) }
        anime.onclick = function(){ putButtonFunctionality(startTimeIndex, i, anime) }
        phone.onclick = function(){ putButtonFunctionality(startTimeIndex, i, phone) }

        let activityIndex = response[i].activity

        tabsHere.appendChild(tP)
    }
}

function putButtonFunctionality(startTimeIndex, i, button, activityTextContent){
    console.log("putButtonFunctionality")
    let putTPId = startTimeIndex
    let putTPActivityType = button.getAttribute("data-activityType")
    // console.log(putTPId)
    // console.log(putTPActivityType)

    const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController/'
    const Data = {
        timePeriodId: putTPId,
        activityType: putTPActivityType
    };

    const otherPram = {
        headers: {
            "content-type" : "application/json;",
        },
        body : JSON.stringify(Data),
        
        method: "PUT",
    };

    fetch(url, otherPram)
    .then(data=>{return data.json})
    // .then(reload())
    .catch(error=>console.log(error))

    // getActivityTypeOnClick(startTimeIndex, activityTextContent)
    // location.reload();
    // getTimePeriods()
    // reload()
    // setTimeout(function() { reload() }, 100);
}

function reload(){
    // location.reload();
    
    // setTimeout(location.reload(), 3000);
    // setTimeout(alert("I am an alert box!"), 1000);
    setTimeout(function() { 
        // window.history.back();
        // location.reload(); 
        window.location = document.referrer
    }, 100);
    // setTimeout(function() { getTimePeriods() }, 3000)
    // getTimePeriods()

}

function getActivityTypeOnClick(startTimeIndex, activityTextContent){
    // console.log("startTimeIndex: " + startTimeIndex)
    // console.log("activityIndex: " + activityIndex)

    let id = startTimeIndex
    const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController/' + id
    
    fetch(url)
        .then(response => response.json())
        .then(response => replaceOneActivity(response, activityTextContent))
        // .then(let xresponse = response)

}

function replaceOneActivity(response, activityTextContent){
    console.log("replaceOneActivity response: " + JSON.stringify(response))
    activityTextContent = "Activity Type: " + response.activity
    console.log("activityTextContent: " + activityTextContent)
}



function sumActivityTypes(response){
    let undefined = 0
    let sleeping = 0
    let mornNightPrepBathtPrepBath = 0
    let cookEat = 0
    let transit = 0
    let working = 0
    let exercise = 0
    let socialize = 0
    let cleanLaundryndry = 0
    let leisureEntertainntertain = 0
    let youtube = 0
    let anime = 0
    let phone = 0
    for(i = 0; i < response.length; i++){  
        switch(response[i].activity){
            case "UNDEFINED":
                undefined += 15 
                break;
            case "SLEEPING":
                sleeping += 15 
                break;
            case "MORNING_NIGHT_PREP_BATHING":
                mornNightPrepBathtPrepBath += 15 
                break;
            case "COOKING_EATING":
                cookEat += 15 
                break;
            case "IN_TRANSIT":
                transit += 15 
                break;
            case "WORKING":
                working += 15 
                break;
            case "EXERCISING":
                exercise += 15 
                break;
            case "SOCIALIZING":
                socialize += 15 
                break;
            case "CLEANING_LAUNDRY":
                cleanLaundryndry += 15 
                break;
            case "LEISURE_ENTERTAINMENT":
                leisureEntertainntertain += 15 
                break;
            case "YOUTUBE":
                youtube += 15 
                break;
            case "ANIME":
                anime += 15 
                break;
            case "PHONE_BROWSING":
                phone += 15 
                break;
        }
        
    }  
    let activityArray = [undefined, sleeping, mornNightPrepBathtPrepBath, cookEat, transit, working, exercise,
        socialize, cleanLaundryndry, leisureEntertainntertain, youtube, anime, phone]

    displayActivitySums(activityArray) 
}

function displayActivitySums(activityArray){

    const activityDisplayNames = ["UNDEFINED","SLEEPING","MORNING_NIGHT_PREP_BATHING",
    "COOKING_EATING","IN_TRANSIT","WORKING","EXERCISING","SOCIALIZING",
    "CLEANING_LAUNDRY","LEISURE_ENTERTAINMENT","YOUTUBE","ANIME","PHONE_BROWSING"]

    const activitySumDiv = document.querySelector("#activitySumDiv")

    for(i = 0; i < activityArray.length; i++){
        const activitySumCreator = document.createElement('div')
        activitySumCreator.setAttribute("class", "border")
        const activityName = document.createElement('p')
        const activitySumNumber = document.createElement('p')
        activityName.textContent = activityDisplayNames[i]
        activitySumNumber.textContent = activityArray[i]
        activitySumCreator.appendChild(activityName)
        activitySumCreator.appendChild(activitySumNumber)

        activitySumDiv.appendChild(activitySumCreator)
    }
}

function changeActivityTextColor(i, response){
    console.log("changeActivityTextColor funcion reached.")
    let activity = response[i].activity
    // const activityTypes = [
    //     UNDEFINED,
    //     SLEEPING,
    //     MORNING_NIGHT_PREP_BATHING,
    //     COOKING_EATING,
    //     IN_TRANSIT,
    //     WORKING,
    //     EXERCISING,
    //     SOCIALIZING,
    //     CLEANING_LAUNDRY,
    //     LEISURE_ENTERTAINMENT,
    //     YOUTUBE,
    //     ANIME,
    //     PHONE_BROWSING
    // ]
    // for(j = 0; j < activityTypes; j++){
    //     if (activity == activityTypes[j]){
    //         button = document.querySelector()
    //     }
    // }

    undefined.setAttribute("id", "")
    sleeping.setAttribute("id", "")
    mornNightPrepBath.setAttribute("id", "")
    cookEat.setAttribute("id", "")
    transit.setAttribute("id", "")
    working.setAttribute("id", "")
    exercising.setAttribute("id", "")
    socialize.setAttribute("id", "")
    undefined.setAttribute("id", "")
    leisureEntertain.setAttribute("id", "")
    youtube.setAttribute("id", "")
    anime.setAttribute("id", "")
    phone.setAttribute("id", "")

    switch(activity){
        case "UNDEFINED":
            undefined.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Undefined"
            break;
        case "SLEEPING":
            sleeping.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Sleeping"
            break;
        case "MORNING_NIGHT_PREP_BATHING":
            mornNightPrepBath.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Morning/Night Prep Bath"
            break;
        case "COOKING_EATING":
            cookEat.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Cooking/Eating"
            break;
        case "IN_TRANSIT":
            transit.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: In Transit"
            break;
        case "WORKING":
            working.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Working"
            break;
        case "EXERCISING":
            exercising.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Exercising"
            break;  
        case "SOCIALIZING":
            socialize.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Socializing"
            break;
        case "CLEANING_LAUNDRY":
            undefined.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Cleaning/Laundry"
            break;
        case "LEISURE_ENTERTAINMENT":
            leisureEntertain.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Leisure/Entertainment"
            break;
        case "YOUTUBE":
            youtube.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Watching Youtube"
            break;
        case "ANIME":
            anime.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Watching Anime"
            break;
        case "PHONE_BROWSING":
            phone.setAttribute("id", "blue")
            activityP.textContent = "Activity Type: Phone Browsing"
            break;             
    }
}