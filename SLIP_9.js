use('SLIPS');


db.createCollection('Contributor');

db.Contributor.insertMany([
    {
        Contributor_name: "Rohit Sawant",
        Branch: "CSE",
        Join_year: 2019,
        Language: ["C++", "Java"],
        Articles: [{ Language: "C++", tArticles: 20, pArticles: 30 }, {
            Language: "Java", tArticles: 50, pArticles: 30
        }],
        Personal_Info: { age: 24, Sem_Marks: [70, 80, 77, 81] }
    },
    {
        Contributor_name: "Raghu Kishore",
        Branch: "IT",
        Join_year: 2020,
        Language: ["Python", "JavaScript"],
        Articles: [{ Language: "Python", tArticles: 15, pArticles: 25 }, {
            Language: "JavaScript", tArticles: 40, pArticles: 20
        }],
        Personal_Info: { age: 25, Sem_Marks: [75, 85, 82, 87] }
    },
    {
        Contributor_name: "Ramesh Raj",
        Branch: "ME",
        Join_year: 2018,
        Language: ["C", "C#"],
        Articles: [{ Language: "C", tArticles: 30, pArticles: 20 }, {
            Language: "C#", tArticles: 45, pArticles: 30
        }],
        Personal_Info: { age: 23, Sem_Marks: [72, 83, 78, 84] }
    },
    {
        Contributor_name: "Suresh Kumar",
        Branch: "CE",
        Join_year: 2017,
        Language: ["Java", "C++"],
        Articles: [{ Language: "Java", tArticles: 25, pArticles: 15 }, {
            Language: "C++", tArticles: 35, pArticles: 25
        }],
        Personal_Info: { age: 22, Sem_Marks: [71, 82, 79, 85] }
    }
])


// 2 Display all documents of ‘Contributor’ collection in proper format.

db.Contributor.find().pretty();

//B 

// 1 Append two languages named “Python” and “C” to contributor “Rohit Sawant”.

db.Contributor.updateOne(
    {
        Contributor_name:"Rohit Sawant"
    },
    {
        $push:{Language:{Language:"C",Language:"Python"}}
    }
)

// 2 Delete the first matched document having Branch “CSE” or Join_Year less than 
//2020.

db.Contributor.deleteOne(
    {
        $or:[
            {Branch:"CSE"},
            {Join_year:{$lt:2020}}
        ]
    }
)

//3 Display the latest five Contributors joined in easy-to-read format.

db.Contributor.find().sort(
    {
        Join_year:-1
    }
).pretty()

// 4 Display documents having “CSE” branch. (Use cursor) 

db.Contributor.find(
    {
        Branch:"CSE"
    }
)

// 5 Give the name and branch of contributor whose age is greater than or equal to 20.

db.Contributor.find(
    {
        "Personal_Info.age":{$gte:20}
    }
)