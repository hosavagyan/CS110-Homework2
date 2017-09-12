const num1=52;
const num2=36;
const sum=num1+num2;

console.log("the sum is")
alert(sum);
console.log(num1/num2);

const arr=[5,6,9,8,4,2,6,55];
var max = arr[0];


for (var i = 0; i < arr.length; i++){
	if(arr[i]>max){
		max = arr[i];
	}
}

alert(max);
