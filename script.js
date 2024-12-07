let calculator = {
text: document.getElementById("text"),
firstValue: null,
operator: 0,
newOperation: true,
currentValue:[],

write: function (input)
{
if (this.text.value !== "" && this.newOperation === false)
{
    this.text.value= input.value;
    this.newOperation= true;
    return;
}

    else this.text.value= input;
},

operatorClick: function (currentOperator)
{
if(this.text.value === "")
{
    alert ("Enter the first value");
    return;
}

    this.firstValue= parseFloat(this.text.value)
    calculator.text.value="";
    this.operator= currentOperator;
},

calculation: function ()
{
    if (this.firstValue === null)
    {
        alert ("Enter the first value");
        return;
    }

    if (this.text.value === "")
    {
        alert ("Enter the second value");
        return;
    }

    let secondValue = parseFloat(this.text.value);
    let result = 0;

    switch (this.operator)
    {
        case '+':
            result = this.firstValue + secondValue;
            break;
            case '-':
            result = this.firstValue - secondValue;
            break;
            case '*':
            result = this.firstValue * secondValue;
            break;
            case '/':
            result = this.firstValue / secondValue;
            break;
        }

        this.text.value= result;
        this.currentValue.push(result);

        let show= document.getElementById("view");
        show.innerHTML="";

        for(let i =0; i < this.currentValue.length; i++)
        {
            show.innerHTML += "<li>" + this.currentValue[i] + "</li>";
        }
},

clear: function ()
{
    this.text.value= "";
    this.firstValue= null;
    this.operator = 0;
    this.newOperation= true;
},

}