/*
Treehouse Techdegree: Data Pagination and Filtering
*/
const itemsPerPage = 9;
const ulLinkList = document.querySelector('.link-list');
const header = document.querySelector('.header');

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
/**
 * function showPage - this functions have 9 students on the page and shows students as per page number we mention.
 * This function shows the students on the Web page, as we append the students inside the UL list using inserAdjacentHTML.
 * @param {*} list - this represents the array of object
 * @param {*} page - this represents the page number and which further helps to display the Students on that specific page.
 */
function showPage (list, page){
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex){
          let student = list[i];
          const studentItem =  ` <li class="student-item cf">
                                    <div class="student-details">
                                       <img class="avatar" src= ${student.picture.large} alt="Profile Picture">
                                       <h3>${student.name.first} ${student.name.last}</h3>
                                       <span class="email">${student.email}</span>
                                    </div>
                                    <div class="joined-details">
                                       <span class="date">Joined ${student.registered.date}</span>
                                    </div>
                                </li>`;
         studentList.insertAdjacentHTML('beforeend', studentItem);
   }

}
}
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
/**
 * function addPagination- this functions brings out the Numering for the page.
 * With further functioning for responsive buttons, Data of the students will be presented upon the number clicked.
 * There are 5 Pages, holding the variable numOfPages(Calculated with some mathematical functions).
 * After appending the Page Numbered Buttons, showPage functions is called.
 * @param {*} list - takes in the array of objects, which represents the students.
 */
function addPagination(list) {
  const numOfPages = Math.ceil((list.length) / itemsPerPage);
  ulLinkList.innerHTML = '';
  for (let i = 1; i <= numOfPages; i++){
     const button = `<li>
     <button type="button">${i}</button>
   </li>`;

      ulLinkList.insertAdjacentHTML('beforeend', button);
  }
  ulLinkList.firstElementChild.firstElementChild.className = 'active';
}

// Call functions
addPagination(data);

ulLinkList.addEventListener('click', e => {
   const pageButton = e.target;
   const pageNumber = pageButton.textContent;
   const pageButtonLi = ulLinkList.children;
   if (pageButton.tagName === 'BUTTON' ){
      // ulLinkList.firstElementChild.firstElementChild.className = '';
      for (const btn of pageButtonLi){
            btn.firstElementChild.className = '';
      }
      pageButton.className = 'active';
      showPage(data, pageNumber);
   }
});

{/* <label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label> */}
/**
 * createEl function is just for code readability.
 * This functions Creates Elements as per the parameter passed into them.
 * @param {*} name - Name Parameter is the name of the Element that, will hold the name of the element for search to be created
 * @returns - createEl function returns the created elemented to append in the DOM
 */
function createEl (name){
   const element =  document.createElement(name);
   return element;
}
/* creating label for search bar */
const label = createEl('label');
label.htmlFor = 'search';
label.className = 'student-search';

// Creating <span>, <input>, <button> for search bar and appending into Label.
const span = createEl('span');
const input = createEl('input');
const button = createEl('button');

span.textContent = 'Search by name';
label.appendChild(span);

input.type = 'search';
input.id = 'search';
input.placeholder = 'Search by name...';
label.appendChild(input);

button.type = 'button';
const img = createEl('img');
img.src = "img/icn-search.svg";
img.alt = "Search icon";
button.appendChild(img);
label.appendChild(button);
const form = createEl('form');
form.action = '#';
form.method = 'get';
form.appendChild(label);
header.appendChild(form);

input.addEventListener('keyup', e =>{
   let value = e.taregt.value;
   for (let i = 0; i < data.length; i++){
      const firstName = data[i].name.first.split('');
      const lastName = data[i].name.last.split('');
      const fullName = `${firstName}${lastName}`;
      
   }
});