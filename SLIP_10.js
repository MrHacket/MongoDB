
use('SLIPS');

db.createCollection('Person');

var bulk = db.Person.initializeUnorderedBulkOp();

bulk.insert({
    pname: "Rahul Sharma",
    contact_no: "9876543210",
    city: "Mumbai",
    profession: ["Engineer", "Artist"],
    cars: [
        { model: "Honda City", year: 2021, price: 1500000 },
        { model: "Maruti Swift", year: 2019, price: 600000 }
    ]
});
bulk.insert({
    pname: "Neha Kapoor",
    contact_no: "8765432109",
    city: "Delhi",
    profession: ["Doctor", "Teacher"],
    cars: [
        { model: "Toyota Corolla", year: 2020, price: 1800000 }
    ]
});

bulk.insert({
    pname: "Amit Singh",
    contact_no: "7654321098",
    city: "Pune",
    profession: ["Software Developer"],
    cars: [
        { model: "Ford F-150", year: 2018, price: 2500000 },
        { model: "Hyundai Tucson", year: 2022, price: 2200000 },
        { model: "Tata Nano", year: 2019, price: 1200000 }
    ]
});
bulk.execute();

// 2 Display all documents of ‘Person’ collection in proper format.

db.Person.find().pretty();

//B 

// 1 Display the name and contact number of person having 3 cars.

db.Person.find(
    {
        cars:{$size:3}
    }
)

// 2 Display different cities from which persons belong.

// db.Person.distinct("city");

db.Person.find(
    {},{
        city:1
    }
)

// 3 Create an index using the ‘pname’ field and name it as ‘Person Name Index’.

db.Person.createIndex(
    {
        pname:1
    },{
        name:"Person Name Index"
    }
)

// 4 Delete the first person document whose city is ‘Chinchwad’.

db.Person.findOneAndDelete(
    {
        city:"Chinchwad"
    }
)

// 5 Update Person document whose name is “Mrs. Mahajan” while updating add only those
// professions which are not already exists in her profession field.

db.Person.updateOne(
    {
        pname:"Amit Singh"
    },
    {
        $addToSet:{
            profession:{
                $each:["Writer", "Musician"]
            }
        }
    }
)