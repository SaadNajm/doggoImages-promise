let doggo_url="https://dog.ceo/api/breeds/image/random"
let div=document.getElementById("dog-target")


let showDoggo=()=>{
   let promise=fetch(doggo_url)
   promise.then((back)=>{
    let response=back.text()
    return response

   }).then((reponse)=>{
    let lastreponse=JSON.parse(reponse)
    let image=document.createElement("img")
    image.src=lastreponse.message
    div.appendChild(image)

   })


}

document.getElementById("dog-btn").addEventListener('click',showDoggo)