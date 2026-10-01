let students=[];
let form=document.getElementById("studentForm");
form.addEventListener("submit", function(event)
{
    event.preventDefault()
    addStudents();
});

function addStudents()
{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    let course=document.getElementById("course").value;
    if(name===""||email===""||age===""||course==="")
        {
            document.getElementById("message").textContent="All fields are required";
            return;
        }
        if(age<18)
        {
            document.getElementById("message").textContent="Age should be greater than 18";
            return;
        }

        //creatinh student object
        let student=
        {
            name:name,
            age:age,
            email:email,
            course:course,
        };

        students.push(student);
        displayStudent();
        form.reset()
        document.getElementById("message").textContent="Form Submitted Successfully"
}

//to display students
function displayStudent()
{
  let table=document.getElementById("studentTable")
  table.innerHTML=`
  <tr>
  <th>Name</th>
  <th>Email</th>
  <th>Age</th>
  <th>Course</th>
  </tr>
  `;

  for(let i=0;i<students.length;i++)
  {
    let row=`
    <tr>
    <td>${students[i].name}</td>
    <td>${students[i].age}</td>
    <td>${students[i].email}</td>
    <td>${students[i].course}</td>
    </tr>`;
    table.innerHTML+=row;
  };
}