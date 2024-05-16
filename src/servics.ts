import pool from './pgConfig'

export async function saveOrderIDs(data: any): Promise<any> {
    try {
        for (const item of data.items) {
            for (const block of item.OrderBlocks) {
                if (Array.isArray(block.lineNo)) {
                    continue;
                }
                if (block.lineNo % 3 === 0 || (Array.isArray(block.lineNo) && block.lineNo.some((num: number) => num % 3 === 0))) {
                    const query = 'INSERT INTO orders (orderID) VALUES ($1)';
                    await pool.query(query, [item.orderID])
                }
            }
        }
        console.log("Order ID saved successfully...");
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function arrayFunction(data: { array: number[] }): Promise<any> {
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

        const indexofThree = array.indexOf(3);      //  Find the index of element 3
        console.log("indexOf:", indexofThree);

        const sortedNumbers = array.slice().sort((a, b) => a - b);
        console.log("Sorted numbers in ascending order:", sortedNumbers);

        const sortedDescending = array.slice().sort((a, b) => b - a);
        console.log("Sorted numbers in descending:", sortedDescending);

        const sliced = array.slice(2, 4);
        console.log("Sliced array:", sliced);

        const join = array.join("-");
        console.log("Joined array:", join);

    } catch (error) {
        console.log("Error:", error);
    }
}

export function filterPassedStudents(students: { name: string, age: number, grade: number }[]): { name: string, age: number, grade: number }[] {
    return students.filter(student => student.grade >= 50);
}

export function getStudentNames(students: { name: string, age: number, grade: number }[]): string[] {
    return students.map(student => student.name);
}

export function sortStudentsByGrade(students: { name: string, age: number, grade: number }[]): { name: string, age: number, grade: number }[] {
    return students.slice().sort((a, b) => a.grade - b.grade);
}

export function getAverageAge(students: { name: string, age: number, grade: number }[]): number {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
}

