//reverse order
var input=7526;
var sum=0;
while(input>0){
	var rem=input%10;
	//console.log(rem);
	input=(input-rem)/10;
	sum=(sum*10)+rem;
}
document.getElementById("res1").innerText=sum;



//add 
var n=567,rem,sum=0;
while(n>0)
{
	rem=n%10;
	sum=sum+rem;
	n=Math.floor(n/10);
}
document.getElementById("res2").innerText=sum;


//add even number
var input=2345;
var sum=0;
while(input>0){
	var rem=input%10;
	//console.log(rem);
	input=(input-rem)/10;
	if(rem%2==0){
		var sum=sum+rem;
	}
}
document.getElementById("res3").innerText=sum;


