// dropdown related code here
// below is the dropdown for members

const listofmembers = `
<a class="dropbtn">Members
  <i class="fa fa-caret-down"></i>
</a>
<div class="dropdown-content">
  <a href="#" class='afeef'>Afeef</a>
  <a href="#" class='atheek'>Atheek</a>
  <a href="#" class='bhanuka'>Bhanuka</a>
  <a href="#" class='nanthushan'>Nanthushan</a>
  <a href="#" class='oshada'>Oshada</a>
  <a href="#" class='savi'>Savi</a>
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