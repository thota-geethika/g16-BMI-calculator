function calculateBMI()
{

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height== null || height =="" || weight== null || weight == "")
    {
        document.getElementById("result").innerText = "Invalid values!!"
    }

    else
    {
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").focus();

        document.getElementById("resultMsg").classList.add("resultMessage");

        let bmi = weight/((height/100)*(height/100));

        document.getElementById("result").innerText = "BMI: "+ bmi.toFixed(3);
        let msg = document.getElementById("resultMsg");

        if(bmi < 16)
        {
            msg.innerText = "Severe Thinness";
        }
        else if(bmi>=16 && bmi<17)
        {
            msg.innerText = "Moderate Thinness";
        }
        else if(bmi>=17 && bmi<18.5)
        {
            msg.innerText = "Mild Thinness";
        }
        else if(bmi>=18.5 && bmi<25)
        {
            msg.innerText = "Normal";
        }
        else if(bmi>=25 && bmi<30)
        {
            msg.innerText = "Overweight";
        }
        else if(bmi>=30 && bmi<35)
        {
            msg.innerText = "Obese Class I";
        }
        else if(bmi>=35 && bmi<40)
        {
            msg.innerText = "Obese Class II";
        }
        else
        {
            msg.innerText  = "Obese Class III";
        }
    }

}