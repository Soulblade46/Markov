function check(object,value)
{
    if (value<0) value=0;
    if (value>1) value=1;
    if (object.value.length>4)
        object.value=object.value.slice(0,4);     
}
function invalid(object,value)
{
    alert(2);
    if(object.validity.typeMismatch) alert("a");
    if (isNaN(value)) object.value=0;
    else if (value<0) value=0;
    else if (value>1) value=1;
}

function add()
{
    $("#table").append('<input class="cell" type="number" step="0.01" min="0.0" max="1.0" value="0" oninvalid="invalid(this,this.value)" oninput="check(this,this.value)"></input>');
}