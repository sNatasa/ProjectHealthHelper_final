function BMI()
{
    let height = document.getElementById('height-value').value;
    let weight = document.getElementById('weight-value').value;
    let bmi = weight/(height/100*height/100);
    let bmiFixed = (bmi.toFixed(2));
    document.getElementById("result").innerHTML="Your BMI is " + bmiFixed;
}