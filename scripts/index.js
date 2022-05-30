// // Add the coffee to local storage with key "coffee"

//  //src="scripts/index.js"
//  document.querySelector("#but").addEventListener("click", myf)
//  async function myf()
// {
//   let url="https://masai-mock-api.herokuapp.com/coffee/menu"
//   console.log(url)
//   let res=await fetch(url)
//   let coffee=await res.json()
//  // append(coffee)
//   localStorage.setItem("mydata",JSON.stringify(coffee))
//   console.log(coffee.menu.data[0])
//   let c=document.querySelector("#menu")
//   for(var i=0;i<coffee.menu.data.length;i++)
//   {
//     let p1=document.createElement("p")
//      p1.innerText=coffee.menu.data[i].title
//      let p2=document.createElement("img")
//      p2.src=coffee.menu.data[i].image
//      let p3=document.createElement("p")
//      p3.innerText=coffee.menu.data[i].price
//      let p4=document.createElement("button")
//      p4.innerText="Add to Bucket"
// let lowerdiv=document.createElement("div")

//      lowerdiv.append(p1,p2,p3,p4)
//      c.append(lowerdiv)
//   }
//  return coffee.menu.data
// }