var student = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishita', 95]];

var Avgmarks = 0;

for (var i =0; i< students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks/students.lenght)
}

console.log("Averegr grade: " + (Avgmarks)/ students.length);


            if (avg < 60) {
                console.log("Grade: f");
                }
            else if ( avg < 70 ) {
                console.log("Garde : D");
            }
            else if (avg < 80) {
                console.log("Grade: C");
            } else if (avg < 90) {
                console.log("Grade: B");
            } else if (avg < 100) {
                console.log("Grade : A");
            }