import express, { Request, Response } from 'express';

import { saveOrderIDs, arrayFunction } from './servics'

const { filterPassedStudents, getStudentNames, sortStudentsByGrade, getAverageAge } = require('./servics');

const app = express();

app.use(express.json());//Middleware

app.get('/', (req, res) => {
    res.send("Hello");
})

app.post('/process-orders', async (req, res) => {
    const data = req.body;
    await saveOrderIDs(data);
    res.send("IDs  Saved successfully")
})

app.post('/array-function', async (req, res) => {
    const data = req.body;
    await arrayFunction(data);
})

const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
];

console.log("filterPassedStudents", filterPassedStudents(students));
console.log("getStudentNames", getStudentNames(students));
console.log("sortStudentsByGrade", sortStudentsByGrade(students));
console.log("Average Age:", getAverageAge(students));

app.listen(4000, () => {   //listen on PORT-->4000
    console.log("app running");
})