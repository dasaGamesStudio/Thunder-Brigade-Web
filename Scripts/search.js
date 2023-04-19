// possible improvement is to use html.innertext to find element instead of class name 
// have to change from class to id

// gets all elements into an HTMLCollection
const allelements = document.getElementsByTagName("*")
for (var allelementsarray=[], i=allelements.length; i;) allelementsarray[--i] = allelements[i]

// takes the html collection and turns it into array in which only elements with classes are there
const allelementswithclass = []
allelementsarray.forEach((element) => {
  if (element.classList.length!=0) {
    allelementswithclass.push(element)
  }
})

// makes form with searchbar
const html = `
<!-- input tag -->
<input class="searchbar" type="text"
    name="search" placeholder="Search">

`
const form = document.createElement('form')
form.classList.add("search")

// add event listener---when form is submitted with a input value equal to a class name. then the page either;
// --- navigates to the link if on a different webpage within the website
// --- scrolls to the element if on the webpage
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  let inputsearch = form.querySelector("input").value.toLowerCase();
  
  allelementswithclass.forEach((element)=> {
    if (element.classList.value===inputsearch){
      if (element.hasAttribute("href")) {
        window.location.href = `${element.getAttribute("href")}`
      }
    else {  
      window.scrollTo(0, element.offsetTop);
    }
    }
  })
})

// appends to nav in html document
const nav = document.querySelector('nav')
form.innerHTML=html
nav.append(form)

