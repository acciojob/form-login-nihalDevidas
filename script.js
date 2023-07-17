function getFormvalue() {
    //Write your code here
     const inputs = document.getElementsByTagName("input");
     const inputArr = Array.from(inputs);
	
   alert(`${inputArr[0].value} ${inputArr[1].value}`);

	
	return false;
	
}
