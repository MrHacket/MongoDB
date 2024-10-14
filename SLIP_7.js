
use('SLIPS');


db.createCollection('result');

db.result.insertMany([
    {
        student_id: 1,
        student_name: "Mr. Anuj Joshi",
        class: "TYBBA_CA",
        test_marks: [{ subject: "Java", marks: 78 }, { subject: "Python", marks: 80 }],
        grade: 'A'
    },
    {
        student_id: 2,
        student_name: "Ms. Priya Rane",
        class: "TYBBA_CA",
        test_marks: [{ subject: "Java", marks: 65 }, { subject: "Python", marks: 75 }],
        grade: 'B'
    },
    {
        student_id: 3,
        student_name: "Mr. Rajesh Kumar",
        class: "TYBBA_CA",
        test_marks: [{ subject: "Java", marks: 85 }, { subject: "Python", marks: 90 }],
        grade: 'A'
    },
    {
        student_id: 4,
        student_name: "Mrs. Shobha Kitsune",
        class: "TYBBA_CA",
        test_marks: [{ subject: "Java", marks: 70 }, { subject: "Python", marks: 78 }],
        grade: 'B'
    }
])

// Display all documents of ‘Result’ collection in proper format.

db.result.find().forEach(function(doc) {
    printjson(doc);
});


// B
// 1  Display details of students whose ‘grade’ is given.

 db.result.find(
    {
        grade:{$exists:true}
    },{}
 ).forEach(function(doc){
    printjson(doc);
 })


//2 Display documents where the subject is ‘Java’ and marks are greater than or equal to 70.

db.result.find(
    {
        $and:[
            {"test_marks.subject":"Java"},
            {"test_marks.marks":{$gte:70}}
        ]
    }
).forEach(function(doc){
    printjson(doc);
})

// 3 Display student details whose name ends with “ne”.

db.result.find(
    {
        student_name:{
            $regex:/ne$/
        }
    }
).forEach(function(doc){
    printjson(doc);
})

// 4 Give name and class of student who has given 4 subject tests.

db.result.find(
    {
        "test_marks.subject":{$exists:true, $size:4}
    }
)

// 5 Insert a field percentage in student document whose name is “Ms. Priya Rane”

db.result.updateOne(
    {
        student_name:"Ms. Priya Rane"
    },
    {
        $push: {Percentage:" "}
    }
)