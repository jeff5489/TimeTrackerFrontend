
function post(){
    console.log("post file reached")

    let postTPId = document.querySelector("#postTPId").value
    let postTPActivityType = document.querySelector("#postTPActivityType").value

    const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController/'
    const Data = {
        // timePeriodId: "999",
        // activityType: "ANIME"
        timePeriodId: postTPId,
        activityType: postTPActivityType
    };

    const otherPram = {
        headers: {
            "content-type" : "application/json;",
        },
        // body : Data,  
        body : JSON.stringify(Data),
        
        method: "POST",
    };

    console.log("JSON.stringify(Data): " + JSON.stringify(Data))

    fetch(url, otherPram)
    .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
    .then(data=>{return data.json})
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
}