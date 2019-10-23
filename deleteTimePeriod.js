function deleteTP() {
  // e.preventDefault()

  let id = document.querySelector("#deleteId").value

  document.querySelector("#deleteId").addEventListener("click", function(event){
    event.preventDefault()
  });

  console.log(id)
  let data = {
      timePeriodId: id
  }
  const url = 'http://localhost:8080/TimeTrackerWServlets/TimePeriodController'

  const otherPram = {
    headers: {
        "content-type" : "application/json;",
    },
    // body : Data,  
    body : JSON.stringify(data),
    method: "DELETE",
  };

  fetch(url, otherPram)
  .then(data=>{return data.json})
  .then(console.log("fetch performed"))
  // .then(console.log(data))
  .catch(error=>console.log(error))

  // console.log("data: " + JSON.stringify(data))
}