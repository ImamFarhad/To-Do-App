let allPost = document.querySelector(".allPost")
let inputTitle = document.querySelector(".inputTitle")
let inputCaption = document.querySelector(".inputCaption")
let postBtn = document.querySelector(".postBtn")
let upadte = document.querySelector(".upadte")
let error = document.querySelector(".error")


let indexStore;
let arr = []

postBtn.addEventListener("click", function () {
  if (!inputTitle.value) {
    error.innerHTML = "Please Enter Your Goal"
  } else if (!inputCaption.value) {
    error.innerHTML = "Describe your goal"
  } else {
    arr.push({
      inputTitle: inputTitle.value,
      inputCaption: inputCaption.value
    })

    inputTitle.value = ""
    inputCaption.value = ""
    allPost.innerHTML = ""

    toDoCard()
  }

})

upadte.addEventListener("click", function(){

  arr[indexStore].inputTitle=inputTitle.value
  arr[indexStore].inputCaption=inputCaption.value


  allPost.innerHTML=""

  toDoCard()
  
  inputTitle.value=""
  inputCaption.value=""


  upadte.style.display = "none"
  postBtn.style.display = "inline-block"


})



function toDoCard() {

  arr.map(item => {

    allPost.innerHTML += `<div class="card mt-5" style="width: 70%;">
          <div class="card-body">
            <h5 class="card-title">${item.inputTitle}</h5>
            <p class="card-text">${item.inputCaption}</p>
           <button  class="btn btn-success editBtn">  Edit </button>
           <button class="btn btn-danger dltBtn"> Delet </button>
          </div>
        </div>`
  })


  let dltBtn = document.querySelectorAll(".dltBtn")
  let dltConvert = Array.from(dltBtn)


  dltConvert.map((item, index) => {
    item.addEventListener("click", function () {
      arr.splice(index, 1)
      allPost.innerHTML = ""

      toDoCard()

    })

  })



let editBtn = document.querySelectorAll(".editBtn")
let editBtnConvert= Array.from(editBtn)


  editBtnConvert.map((item2, index)=>{
    item2.addEventListener("click", function(){

      inputTitle.value=arr[index].inputTitle
      inputCaption.value=arr[index].inputCaption


      upadte.style.display="inline-block"
      postBtn.style.display="none"
      
      indexStore=index


      
    })
  })


}
