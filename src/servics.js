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
exports.getAverageAge = exports.sortStudentsByGrade = exports.getStudentNames = exports.filterPassedStudents = exports.arrayFunction = exports.saveOrderIDs = void 0;
const pgConfig_1 = __importDefault(require("./pgConfig"));
function saveOrderIDs(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (const item of data.items) {
                for (const block of item.OrderBlocks) {
                    if (Array.isArray(block.lineNo)) {
                        continue;
                    }
                    if (block.lineNo % 3 === 0 || (Array.isArray(block.lineNo) && block.lineNo.some((num) => num % 3 === 0))) {
                        const query = 'INSERT INTO orders (orderID) VALUES ($1)';
                        yield pgConfig_1.default.query(query, [item.orderID]);
                    }
                }
            }
            console.log("Order ID saved successfully...");
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
exports.saveOrderIDs = saveOrderIDs;
function arrayFunction(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { array } = data;
            const doubleArray = array.map(num => num * 2);
            console.log("map:", doubleArray);
            const evenNumbers = array.filter(num => num % 2 === 0);
            console.log("filter:", evenNumbers);
            const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            console.log("reduce:", sum);
            console.log("forEach:");
            array.forEach(num => console.log(num));
            const anyGreaterThan = array.some(num => num > 5);
            console.log("some:", anyGreaterThan);
            const allLessThan = array.every(num => num < 10);
            console.log("every:", allLessThan);
            const firstGreaterThanThree = array.find(num => num > 3);
            console.log("find:", firstGreaterThanThree);
            const indexofThree = array.indexOf(3); //  Find the index of element 3
            console.log("indexOf:", indexofThree);
            const sortedNumbers = array.slice().sort((a, b) => a - b);
            console.log("Sorted numbers in ascending order:", sortedNumbers);
            const sortedDescending = array.slice().sort((a, b) => b - a);
            console.log("Sorted numbers in descending:", sortedDescending);
            const sliced = array.slice(2, 4);
            console.log("Sliced array:", sliced);
            const join = array.join("-");
            console.log("Joined array:", join);
        }
        catch (error) {
            console.log("Error:", error);
        }
    });
}
exports.arrayFunction = arrayFunction;
function filterPassedStudents(students) {
    return students.filter(student => student.grade >= 50);
}
exports.filterPassedStudents = filterPassedStudents;
function getStudentNames(students) {
    return students.map(student => student.name);
}
exports.getStudentNames = getStudentNames;
function sortStudentsByGrade(students) {
    return students.slice().sort((a, b) => a.grade - b.grade);
}
exports.sortStudentsByGrade = sortStudentsByGrade;
function getAverageAge(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
}
exports.getAverageAge = getAverageAge;
