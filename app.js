// OBJECTS

var student1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  city: "New York",
  country: "USA",
  id: Math.round(Math.random() * 999999),
};

var student2 = {
  firstName: "Yousuf",
  lastName: "Soomro",
  age: 27,
  city: "Karachi",
  country: "Pakistan",
  id: Math.round(Math.random() * 999999),
};

var student3 = {
  firstName: "Tariq",
  lastName: "Razzaq",
  age: 35,
  city: "San Francisco",
  country: "United States",
  id: Math.round(Math.random() * 999999),
};

var student4 = {
  firstName: "Soban",
  lastName: "Ayyan",
  age: 13,
  city: "Dhaka",
  country: "Bangladesh",
  id: Math.round(Math.random() * 999999),
};

var student5 = {
  firstName: "Rizwan",
  lastName: "Ul Mustafa",
  age: 20,
  city: "Mumbai",
  country: "India",
  id: Math.round(Math.random() * 999999),
};

var tbodyData = document.getElementById("tbodyData");
var stdCount = document.getElementById("stdCount");
var tableDiv = document.getElementById("tableDiv");
var editForm = document.getElementById("editForm");
var stdUpdateBtn = document.getElementById("stdUpdateBtn");

var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var age = document.getElementById("age");
var city = document.getElementById("city");
var country = document.getElementById("country");

var studentList = [student1, student2, student3, student4, student5];

function student() {
  stdCount.innerHTML = studentList.length;
  tbodyData.innerHTML = "";
  for (var i = 0; i < studentList.length; i++) {
    tbodyData.innerHTML += `
            <tr>
              <td>${i + 1}</td>

              <td>
                <p class="fw-bold mb-1">${studentList[i].firstName}</p>
              </td>

              <td>
                <p class="fw-normal mb-1">${studentList[i].lastName}</p>
              </td>

              <td>${studentList[i].age}</td>

              <td>${studentList[i].city}</td>

              <td>${studentList[i].country}</td>

              <td>
                <span class="badge badge-success rounded-pill d-inline"
                  >${studentList[i].id}</span>
              </td>

              <td>
                <button
                onclick="editStudent(${i})"
                  type="button"
                  class="btn btn-primary btn-sm btn-rounded"
                >
                  <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
              </td>

              <td>
                <button onclick="deleteStudent(${i})" type="button" class="btn btn-danger btn-sm btn-rounded">
                  <i class="fa-solid fa-trash-can"></i> Delete
                </button>
              </td>

            </tr>
  `;
  }

  if (studentList.length !== 0) {
    tableDiv.style.display = "block";
  } else {
    tableDiv.style.display = "none";
  }
}

student();

function editStudent(index) {
  editForm.style.display = "block";
  tableDiv.style.display = "none";

  fName.value = studentList[index].firstName;
  lName.value = studentList[index].lastName;
  age.value = studentList[index].age;
  city.value = studentList[index].city;
  country.value = studentList[index].country;
  stdUpdateBtn.setAttribute("onclick", `updateStudent(${index})`);
}

function updateStudent(i) {
  studentList[i].firstName = fName.value;
  studentList[i].lastName = lName.value;
  studentList[i].age = age.value;
  studentList[i].city = city.value;
  studentList[i].country = country.value;

  editForm.style.display = "none";
  tableDiv.style.display = "block";

  student();
}

function deleteStudent(index) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  })
    .then((result) => {
      if (result.isConfirmed) {
        studentList.splice(index, 1);
        Swal.fire("Deleted!", "Student data has been deleted.", "success");
      }
    })
    .then(() => {
      student();
    });
}
