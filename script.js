window.onload=()=>{
	const button=document.querySelector('#btn');
	button.addEventListener('click',calculateBmi)	
}

function calculateBmi() {
	let height_status =false, weight_status =false;
	const height =document.querySelector('#height').value;
	const weight=document.querySelector('#weight').value;
	const result=document.querySelector('#result');

	if(height === '' || isNaN(height) || (height <=0)){
		result.innerHTML = "Please provide a valid height";
	}
	else{
		document.getElementById('height_err').innerHTML = '';
		height_status=true;
	}

	if(weight === '' || isNaN(weight) || (weight <=0)){
		document.getElementById('weight_err').innerHTML = "Please provide a valid height";
	}
	else{
		document.getElementById('weight_err').innerHTML = '';
		weight_status=true;
	}

	if(height_status && weight_status){
		const bmi= (weight / ((height*height)/10000)).toFixed(2);

		if(bmi<18.6){
			result.innerHTML='Under weight :' + bmi;
		}
		else if(bmi>=18.6 && bmi<24.9){
			result.innerHTML = "Normal :" +bmi;
		}
		else{
			result.innerHTML ="Over weight :" +bmi;
		}
	}
	else{
		alert('The form has error');
		result.innerHTML='';
	}
}




	