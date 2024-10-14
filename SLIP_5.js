use('SLIPS');

db.createCollection("institute");

// Imported 

db.institute.find().pretty();

// B

// 1 Give all institute names whose establishment year is before2010. 

db.institute.find(
    {
        Est_Year:{
            $lt:2010
        }
    }
)

// 2 Display Institute details having Course ‘Java’.

db.institute.find(
    {
        "Courses.Course_Name":{
            $eq:"Java"
        }
    }
)

// 3 Update No_of_faculties of ‘Disha’ Institute to 10. 

db.institute.updateOne(
    {
        Name:"Disha Institute"
    },
    {
        $set:{
            No_of_Faculties:10
        }
    }
)

// 4 Display the latest three Institutes established in easy-to-read format

db.institute.find().sort({
    Est_Year:-1
}).limit(3)

// 5 Count the number of Institutes in ‘Pune’ city, established after 2019

db.institute.count(
    {
        City:"Pune",
        Est_Year:{
            $gt:2019
        }
    }
) 