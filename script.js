let button = document.getElementById('btn');
let button2 = document.getElementById('rst')
button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'You are Under weight : ' + `<h1>${bmi}</h1>` ;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'You are Normal : ' + bmi;
        }else{
            result.innerHTML = 'You are Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});

button2.addEventListener('click' , ()=>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    if(result,height,weight){
        result.innerHTML = '' ;
        height.innerHTML = '0' ;
        weight.innerHTML = '0' ;




    }

})