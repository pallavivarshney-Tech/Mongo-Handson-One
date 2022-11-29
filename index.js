//1.Create a database , give it name like "Human_Resource". 

// use Human_Resource
// 'switched to db Human_Resource'

//Create a collection inside this named "employee"
// 2.Query the collection "employee" and list all the documents.

// db.employee.insertMany([{
 
//   "firstName": "John",
//   "lastName": "Doe",
//   "salary": "25000",
//   "department": "HR",
//   "lastCompany": "X",
//   "lastSalary": "10000",
//   "overallExp": "2",
//   "contactInfo": "1234567890",
//   "yearGrad": "2016",
//   "gradStream": "CSE"
// },{
 
//   "firstName": "Rohan",
//   "lastName": "Jame",
//   "salary": "30000",
//   "department": "Technical",
//   "lastCompany": "Y",
//   "lastSalary": "15000",
//   "overallExp": "1",
//   "contactInfo": "1234567860",
//   "yearGrad": "2015",
//   "gradStream": "CSE"
// },{

//   "firstName": "Jame",
//   "lastName": "Doe",
//   "salary": "35000",
//   "department": "Accounts",
//   "lastCompany": "Z",
//   "lastSalary": "20000",
//   "overallExp": "1",
//   "contactInfo": "123567890",
//   "yearGrad": "2019",
//   "gradStream": "ECE"
// },{

//   "firstName": "Sao",
//   "lastName": "Avika",
//   "salary": "30000",
//   "department": "Sales",
//   "lastCompany": "Y",
//   "lastSalary": "15000",
//   "overallExp": "2",
//   "contactInfo": "1234567860",
//   "yearGrad": "2015",
//   "gradStream": "CSE"
// },{

//   "firstName": "Jame",
//   "lastName": "roh",
//   "salary": "35000",
//   "department": "Accounts",
//   "lastCompany": "Z",
//   "lastSalary": "15000",
//   "overallExp": "2",
//   "contactInfo": "123567890",
//   "yearGrad": "2019",
//   "gradStream": "EEE"
// },{
 
//   "firstName": "Rohan",
//   "lastName": "Jame",
//   "salary": "30000",
//   "department": "Technical",
//   "lastCompany": "Y",
//   "lastSalary": "15000",
//   "overallExp": "1",
//   "contactInfo": "1234567860",
//   "yearGrad": "2015",
//   "gradStream": "CSE"
// },{

//   "firstName": "Jame",
//   "lastName": "Doe",
//   "salary": "35000",
//   "department": "Accounts",
//   "lastCompany": "Z",
//   "lastSalary": "20000",
//   "overallExp": "1",
//   "contactInfo": "123567890",
//   "yearGrad": "2019",
//   "gradStream": "ECE"
// },{
 
//   "firstName": "Sao",
//   "lastName": "Avika",
//   "salary": "30000",
//   "department": "Sales",
//   "lastCompany": "Y",
//   "lastSalary": "15000",
//   "overallExp": "2",
//   "contactInfo": "1234567860",
//   "yearGrad": "2015",
//   "gradStream": "CSE"
// },{
 
//   "firstName": "Jame",
//   "lastName": "Doe",
//   "salary": "35000",
//   "department": "Accounts",
//   "lastCompany": "Z",
//   "lastSalary": "15000",
//   "overallExp": "2",
//   "contactInfo": "123567890",
//   "yearGrad": "2019",
//   "gradStream": "EEE"
// },{
 
//   "firstName": "Rohan",
//   "lastName": "Jame",
//   "salary": "30000",
//   "department": "Technical",
//   "lastCompany": "Y",
//   "lastSalary": "15000",
//   "overallExp": "1",
//   "contactInfo": "1234567860",
//   "yearGrad": "2015",
//   "gradStream": "CSE"
// },{
 
//   "firstName": "Jame",
//   "lastName": "Doe",
//   "salary": "35000",
//   "department": "Accounts",
//   "lastCompany": "Z",
//   "lastSalary": "20000",
//   "overallExp": "1",
//   "contactInfo": "123567890",
//   "yearGrad": "2019",
//   "gradStream": "ECE"
// },{
 
//   "firstName": "Sao",
//   "lastName": "Avika",
//   "salary": "30000",
//   "department": "Sales",
//   "lastCompany": "Y",
//   "lastSalary": "15000",
//   "overallExp": "2",
//   "contactInfo": "1234567860",
//   "yearGrad": "2015",
//   "gradStream": "CSE"
// },{
 
//   "firstName": "Jame",
//   "lastName": "Doe",
//   "salary": "35000",
//   "department": "Accounts",
//   "lastCompany": "Z",
//   "lastSalary": "15000",
//   "overallExp": "2",
//   "contactInfo": "123567890",
//   "yearGrad": "2019",
//   "gradStream": "EEE"
// }])
// { acknowledged: true,
//   insertedIds: 
//    { '0': ObjectId("6382f70aaba822c113a2f9a8"),
//      '1': ObjectId("6382f70aaba822c113a2f9a9"),
    //  '2': ObjectId("6382f70aaba822c113a2f9aa"),
//      '3': ObjectId("6382f70aaba822c113a2f9ab"),
//      '4': ObjectId("6382f70aaba822c113a2f9ac"),
//      '5': ObjectId("6382f70aaba822c113a2f9ad"),
//      '6': ObjectId("6382f70aaba822c113a2f9ae"),
//      '7': ObjectId("6382f70aaba822c113a2f9af"),
//      '8': ObjectId("6382f70aaba822c113a2f9b0"),
//      '9': ObjectId("6382f70aaba822c113a2f9b1"),
//      '10': ObjectId("6382f70aaba822c113a2f9b2"),
//      '11': ObjectId("6382f70aaba822c113a2f9b3"),
//      '12': ObjectId("6382f70aaba822c113a2f9b4") } }

//3.Query the collection "employee" and list the employees who are having salary more than 30000.

// db.employee.find({salary:{$gt:"30000"}})
// { _id: ObjectId("6382f70aaba822c113a2f9aa"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '20000',
//   overallExp: '1',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'ECE' }
// { _id: ObjectId("6382f70aaba822c113a2f9ac"),
//   firstName: 'Jame',
//   lastName: 'roh',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '15000',
//   overallExp: '2',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'EEE' }
// { _id: ObjectId("6382f70aaba822c113a2f9ae"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '20000',
//   overallExp: '1',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'ECE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b0"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '15000',
//   overallExp: '2',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'EEE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b2"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '20000',
//   overallExp: '1',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'ECE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b4"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '15000',
//   overallExp: '2',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'EEE' }

// 4.Query the collection "employee" and list the employees who are having experience more than 2 years.

// db.employee.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
// { _id: ObjectId("6382f70aaba822c113a2f9a8"),
// firstName: 'John',
// lastName: 'Doe',
// salary: '25000',
// department: 'HR',
// lastCompany: 'X',
// lastSalary: '10000',
// overallExp: '2',
// contactInfo: '1234567890',
// yearGrad: '2016',
// gradStream: 'CSE' }
// { _id: ObjectId("6382f70aaba822c113a2f9ac"),
// firstName: 'Jame',
// lastName: 'roh',
// salary: '35000',
// department: 'Accounts',
// lastCompany: 'Z',
// lastSalary: '15000',
// overallExp: '2',
// contactInfo: '123567890',
// yearGrad: '2019',
// gradStream: 'EEE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b0"),
// firstName: 'Jame',
// lastName: 'Doe',
// salary: '35000',
// department: 'Accounts',
// lastCompany: 'Z',
// lastSalary: '15000',
// overallExp: '2',
// contactInfo: '123567890',
// yearGrad: '2019',
// gradStream: 'EEE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b4"),
// firstName: 'Jame',
// lastName: 'Doe',
// salary: '35000',
// department: 'Accounts',
// lastCompany: 'Z',
// lastSalary: '15000',
// overallExp: '2',
// contactInfo: '123567890',
// yearGrad: '2019',
// gradStream: 'EEE' }
// 5.Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year.

// db.employee.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0 }
// 6.Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.

// db.employee.deleteMany({lastCompany:"Y"})
// { acknowledged: true, deletedCount: 6 }
// true
// true
// db.employee.find()
// { _id: ObjectId("6382f70aaba822c113a2f9a8"),
//   firstName: 'John',
//   lastName: 'Doe',
//   salary: '25000',
//   department: 'HR',
//   lastCompany: 'X',
//   lastSalary: '10000',
//   overallExp: '2',
//   contactInfo: '1234567890',
//   yearGrad: '2016',
//   gradStream: 'CSE' }
// { _id: ObjectId("6382f70aaba822c113a2f9aa"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '20000',
//   overallExp: '1',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'ECE' }
// { _id: ObjectId("6382f70aaba822c113a2f9ac"),
//   firstName: 'Jame',
//   lastName: 'roh',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '15000',
//   overallExp: '2',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'EEE' }
// { _id: ObjectId("6382f70aaba822c113a2f9ae"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '20000',
//   overallExp: '1',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'ECE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b0"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '15000',
//   overallExp: '2',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'EEE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b2"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '20000',
//   overallExp: '1',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'ECE' }
// { _id: ObjectId("6382f70aaba822c113a2f9b4"),
//   firstName: 'Jame',
//   lastName: 'Doe',
//   salary: '35000',
//   department: 'Accounts',
//   lastCompany: 'Z',
//   lastSalary: '15000',
//   overallExp: '2',
//   contactInfo: '123567890',
//   yearGrad: '2019',
//   gradStream: 'EEE' }

// 7.Delete all the documents from "employee" where last company is Y.

// db.employee.deleteMany({'lastCompany':'Y'})
// { acknowledged: true, deletedCount: 0 }
// true
// true