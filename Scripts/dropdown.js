// dropdown related code here
// below is the dropdown for members

const listofmembers = `
<button class="dropbtn">Members
  <i class="fa fa-caret-down"></i>
</button>
<div class="dropdown-content">
  <a href="#">Afeef</a>
  <a href="#">Atheek</a>
  <a href="#">Bhanuka</a>
  <a href="#">Nanthushan</a>
  <a href="#">Oshada</a>
  <a href="#">Savi</a>
</div>
`
const members = document.querySelector('#members')
members.innerHTML = listofmembers


// below is the dropdown for projects

// const listofprojects = `
// <button class="dropbtn">Projects
//   <i class="fa fa-caret-down"></i>
// </button>
// <div class="dropdown-content">
//   <a href="#">we</a>
//   <a href="#">have</a>
//   <a href="#">no</a>
//   <a href="#">projects</a>
//   <a href="#">currently</a>
// </div>
// `
// const projects = document.querySelector('#projects')
// projects.innerHTML = listofprojects