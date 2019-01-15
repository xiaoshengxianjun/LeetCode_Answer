/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (numRows === 1) return s;
	let solution = new Array(numRows).fill("");
	let index = 0;
	let turnFlag = 1;

	for (let i = 0; i < s.length; i++) {
		solution[index] += s[i];
		index += turnFlag;
		if (!index || index === numRows - 1) turnFlag *= -1;
		console.log(solution)
	}
	return solution.join('');
};

// solution 2
// var convert = function(s, numRows) {
//     const zigzag = [];
//     const str = s.split('');
//     let row, output = '';
//     
//     /*arr zigzag has numRows elements, each of which is an array that represents a row*/
//     //initializing... allocate spaces
//     for(let i = 0; i < numRows; i++) {
//         zigzag.push([]);
//     }
//     
//     //populate the zigzag array
//     while(str[0]) {
//         //1.zig
//         for(row = 0; row < numRows && str[0]; row++) {
//             zigzag[row].push(str.shift());
//         }
//         //2.zag
//         for(row -= 2;row > 0 && str[0]; row--) {
//             zigzag[row].push(str.shift());
//         }
//     }
//     
//     //simply concatenate each row's elements one by one to generate the output
//     for(let i = 0; i < numRows; i++) {
//         while(zigzag[i][0]) {
//             output += zigzag[i].shift();
//         }
//     }
//     
//     return output;
// };


var str = 'PAYPALISHIRING'
console.log(convert(str, 3))
