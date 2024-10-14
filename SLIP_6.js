
use('SLIPS')

db.createCollection("doctor");

db.doctor.insertMany([
    {
        Doctor_name: "Dr. Patil",
        Contact_No: 9876543210,
        City: "Pune",
        Qualification: "MBBS",
        specialization: ["ENT", "General Surgery"],
        hospitals: [{ hospital_name: "Niramay Hospital", visit_day: "Monday" },
        { hospital_name: "Birla Hospital", visit_day: "Tuesday" }]
    },
    {
        Doctor_name: "Dr. Patel",
        Contact_No: 9876543211,
        City: "Mumbai",
        Qualification: "MBBS",
        specialization: ["Cardiology", "General Surgery"],
        hospitals: [{ hospital_name: "Mumbai Hospital", visit_day: "Monday" },
        { hospital_name: "Shanti Hospital", visit_day: "Wednesday" }]
    }
    , {
        Doctor_name: "Dr. Gopal",
        Contact_No: 9876543212,
        City: "Delhi",
        Qualification: "MBBS",
        specialization: ["Dermatology", "General Surgery"],
        hospitals: [{ hospital_name: "Delhi Hospital", visit_day: "Thursday" },
        { hospital_name: "Shiv Nagar Hospital", visit_day: "Friday" }]
    }
    , {
        Doctor_name: "Dr. Ravi",
        Contact_No: 9876543213,
        City: "Bangalore",
        Qualification: "MBBS",
        specialization: ["Orthopedics", "General Surgery"],
        hospitals: [{ hospital_name: "Karnataka Hospital", visit_day: "Saturday" },
        { hospital_name: "Bengaluru Hospital", visit_day: "Sunday" }]
    }
]);


var bulk = db.doctor.initializeUnorderedBulkOp();


bulk.insert(
    {
        Doctor_name: "Dr. Patil",
        Contact_No: 9876543210,
        City: "Pune",
        Qualification: "MBBS",
        specialization: ["ENT", "General Surgery"],
        hospitals: [{ hospital_name: "Niramay Hospital", visit_day: "Monday" },
        { hospital_name: "Birla Hospital", visit_day: "Tuesday" }]
    }
)

bulk.execute();


// 2 Display all documents of ‘Doctor’ collection in proper format.

db.doctor.find().pretty();

//B

//1 Count number of doctors having qualification ‘MBBS’.

db.doctor.count(
    {
        Qualification: "MBBS"
    }
)


//2 Display qualification and specialization of all doctors from ‘Mumbai’ city.

db.doctor.find(
    {
        City:{
            $eq:"Mumbai"
        }
    },
    {
        Qualification: 1,
        specialization: 1,
        _id: 0
    }
)

//3  Display details of two doctors having specialization in ‘ENT’.

db.doctor.find(
    {
        specialization:{
            $eq:"ENT"
        }
    }
).limit(2)


//4 Change qualification of “Dr. Patil” to MD.

db.doctor.updateOne(
    {
        Doctor_name:{
            $eq:"Dr. Patil"
        }
    },
    {
        $set:{
            Qualification:"MD"
        }
    }
)

// 5 Delete all Doctor Documents not having city ‘Pimpri’.
db.doctor.deleteMany(
    {
        City:{
            $ne:"Pimpri"
        }
    }
)