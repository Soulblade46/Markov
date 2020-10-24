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

mark=new Markov();
function create()
{
    mark=new Markov();
    console.log("creato");
}

function add()
{
    mark.addNode();
    $("#table").append('<tr></tr>');

    $("#table tr").each(function()
    {        
        for (let nCurrent=$(this).children().length; nCurrent < mark.size; nCurrent++)
         {
            $(this).append('<td><input class="cell" type="number" step="0.01" min="0.0" max="1.0" value="0" oninvalid="invalid(this,this.value)" oninput="check(this,this.value)"></input></td>');            
        }
    });
}

function remove()
{
    if (mark.size>1)
    {
    mark.removeNode();
    $("#table tr").last().remove();

    $("#table tr").each(function()
    {        
        $(this).children().last().remove();
    });
    }

    
}

function print()
{
    mark.nodes.forEach(function (value, index, matrix) {
        console.log('value:', value, 'index:', index) 
      })
      console.log('size:',mark.size)  
}
function drawNode()
{

    // Store the canvas object into a variable
    var $myCanvas = $('#canvas');
    
    // rectangle shape 
    $myCanvas.drawRect({
      fillStyle: 'steelblue',
      strokeStyle: 'blue',
      strokeWidth: 4,
      x: 150, y: 100,
      fromCenter: false,
      width: 200,
      height: 100
    });
}
