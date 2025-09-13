const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

fetch(url)
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})