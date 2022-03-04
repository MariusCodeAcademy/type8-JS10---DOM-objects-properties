// susikurti 2 objektus stud1 ir sud2
// name, ir marks savybes
// marks yra studento pazymiu masyvas is 5 nariu
// sukurti metoda kuris paskaiciuoja ir grazina  pazymiu vidurki
// myAvg
// const stud = ['Mike', [8, 9, 7, 6, 10]];
const stud1 = {
  name: 'Mike',
  //      0  1  2
  marks: [8, 9, 7, 6, 10],
  myAvg: function () {
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    // console.log('total ===', total);
    const avg = total / this.marks.length;
    console.log(`${this.name}'s avg is ${avg}`);
    return avg;
  },
};
console.log('stud1.marks[2] ===', stud1.marks[2]);
const stud2 = {
  name: 'Jill',
  marks: [5, 10, 9, 8, 7],
  myAvg: function () {
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    // console.log('total ===', total);
    const avg = total / this.marks.length;
    console.log(`${this.name}'s avg is ${avg}`);
    return avg;
  },
};

stud1.myAvg();
stud2.myAvg();

const students = [stud1, stud2];
console.log('students ===', students);

const studAverages = [];
for (let i = 0; i < students.length; i++) {
  const currentStudAvg = students[i].myAvg();
  studAverages.push(currentStudAvg);
}
console.log('studAverages ===', studAverages);

console.log(document);
