use('SLIPS');

// db.createCollection("hospital")

db.hospital.insertMany([
    {
        hospital_name: "Birla Hospital",
        city: "Chinchwad",
    specialties: ["Pediatric", "Orthopedic"],
    doctors: [{ doctor_name: "Dr. Kadam", visit_day: "Monday" }, {
        doctor_name: "Dr. Mane", visit_day: "Tuesday"
    }],
    services: ["laboratory", "surgical", "diagnostic", "ambulance"],
    rating: 5
    }
    , {
        hospital_name: "Niramay Hospital",
        city: "Pune",
        specialties: ["Cardiology", "Gastroenterology"],
        doctors: [{ doctor_name: "Dr. More", visit_day: "Wednesday" }, {
            doctor_name: "Dr. Suman", visit_day: "Thursday"
        }],
        services: ["emergency", "oncology", "radiology", "pharmacy"],
        rating: 4
    }
    , {
        hospital_name: "Karnataka Hospital",
        city: "Bangalore",
        specialties: ["Dermatology", "Psychiatry"],
        doctors: [{ doctor_name: "Dr. Lakshmi", visit_day: "Friday" }, {
            doctor_name: "Dr. Raghu", visit_day: "Saturday"
        }],
        services: ["gynecology", "neurology", "endocrinology", "pulmonology"],
        rating: 3
    }, {
        hospital_name: "Apollo Hospital",
        city: "Hyderabad",
        specialties: ["Neurology", "Orthopedic"],
        doctors: [{ doctor_name: "Dr. Ganesh", visit_day: "Sunday" }, {
            doctor_name: "Dr. Rajesh", visit_day: "Monday"
        }],
        services: ["orthopedic", "neurosurgery", "cardiology", "surgical"],
        rating: 2
    }, {
        hospital_name: "Pure Hospital",
        city: "Mumbai",
        specialties: ["Oncology", "Pediatric"],
        doctors: [{ doctor_name: "Dr. Prakash", visit_day: "Tuesday" }, {
            doctor_name: "Dr. Ramesh", visit_day: "Wednesday"
        }],
        services: ["radiology", "ambulance", "laboratory", "surgical"],
        rating: 1
    }
])

// Display all documents of ‘Hospital’ collection in proper format.
db.hospital.find().pretty();

//B 

// 1 Display details of hospital where Dr. More is visiting. 

db.hospital.find(
    {
        "doctors.doctor_name":{
            $eq:"Dr. More"
        }
    }
)

//2 Display all hospital names along with their specialties from ‘Pune’ city.

db.hospital.find(
    {
        city:{
            $eq:"Pune"
        }
    },{
        hospital_name:1,
        specialties:1
    }
)

// 3  Count the number of hospitals which are providing ‘ambulance’ service.

db.hospital.countDocuments(
    {
        services:{
            $in:["ambulance"]
        }
    }
)

// 4  Display details of hospital whose ‘rating’ is specified.

db.hospital.find(
    {
        rating:{
            $exists:true
        }
    }
)

//5 Delete those documents whose hospital name starts with letter ‘P’. 

db.hospital.deleteMany(
    {
        hospital_name:{
            $regex:/^P/i
        }
    }
)