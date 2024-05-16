"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const servics_1 = require("./servics");
const { filterPassedStudents, getStudentNames, sortStudentsByGrade, getAverageAge } = require('./servics');
const app = (0, express_1.default)();
app.use(express_1.default.json()); //Middleware
app.get('/', (req, res) => {
    res.send("Hello");
});
app.post('/process-orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    yield (0, servics_1.saveOrderIDs)(data);
    res.send("IDs  Saved successfully");
}));
app.post('/array-function', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    yield (0, servics_1.arrayFunction)(data);
}));
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
app.listen(4000, () => {
    console.log("app running");
});
