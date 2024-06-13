// Side Nav

var sideNav = document.querySelector("#sideNav")
var menuIcon = document.querySelector("#menuIcon")
var closeNav = document.querySelector("#closeNav")

menuIcon.addEventListener("click",()=>{
    sideNav.style.right =  0
})

closeNav.addEventListener("click",()=>{
    sideNav.style.right =  "-50%"
})

// Search 
var search = document.querySelector("#search")

var productcontainer = document.querySelector("#productcontainer")
var productList =productcontainer.querySelectorAll("div")
console.log(productList)


search.addEventListener("keyup",()=>{
    var enteredValue = event.target.value.toUpperCase()
    for(count=0; count<productList.length;count++) {
        if(productList[count].textContent.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
})
