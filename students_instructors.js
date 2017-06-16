var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

for (var i = 0; i <students.length; i++) {
  console.log(students[i].first_name + " " + students[i].last_name);
}

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

console.log("Students");
  for (var j = 0; j < (users.Students.length); j++) {
    console.log((j+1) + ". - " + users.Students[j].first_name + " " + users.Students[j].last_name + " - " + (users.Students[j].first_name.length + users.Students[j].last_name.length));
  }

  console.log("Instructors");

  for (var b = 0; b < (users.Instructors.length); b++) {
    console.log((b+1) + ". - " + users.Instructors[b].first_name + " " + users.Instructors[b].last_name + " - " + (users.Instructors[b].first_name.length + users.Instructors[b].last_name.length));
  }
