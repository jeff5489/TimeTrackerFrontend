function put(){
    console.log("put function reached")

    let putTPId = document.querySelector("#putTPId").value
    let putTPActivityType = document.querySelector("#putTPActivityType").value
    console.log(putTPId)
    console.log(putTPActivityType)

    const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController/'
    const Data = {
        timePeriodId: putTPId,
        activityType: putTPActivityType
    };

    const otherPram = {
        headers: {
            "content-type" : "application/json;",
        },
        // body : Data,  
        body : JSON.stringify(Data),
        
        method: "PUT",
    };

    fetch(url, otherPram)
    .then(data=>{return data.json})
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
}