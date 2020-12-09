//mark=new Markov();

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

function create()
{
    var mark=new Markov();
    $(this).on('change paste input', function(){
      if($(this).val()>=0 || $(this).val()<=1)
      {
        $(this).val();
      }
    });
    console.log("creato");
}

function add()
{
    mark.addNode();
    $("#table").append('<tr></tr>');

    $("#table tr").each(function()
    {        
        let i=0;
        for (let nCurrent=$(this).children().length; nCurrent < mark.size; nCurrent++)
         {
            $(this).append('<td><input class="cell" type="number" step="0.01" min="0.0" max="1.0" value="0" oninvalid="invalid(this,this.value)" oninput="check(this,this.value)"></input></td>');
            $(this).on('change paste input', function(){
              if($(this).val()>=0 || $(this).val()<=1)
              {
                $(this).val();
              }
            });
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
    createNode();
    
}

function print()
{
    mark.nodes.forEach(function (value, index, matrix) {
        console.log('value:', value, 'index:', index) 
      })
      console.log('size:',mark.size)  
}

var nodeIds, shadowState, nodesArray, nodes, edgesArray, edges, network;

function startNetwork() {
  // this list is kept to remove a random node.. we do not add node 1 here because it's used for changes
  nodeIds = [2, 3, 4, 5];
  shadowState = false;

  // create an array with nodes
  nodesArray = [
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
  ];
  nodes = new vis.DataSet(nodesArray);

  // create an array with edges
  edgesArray = [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ];
  edges = new vis.DataSet(edgesArray);

  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {};
  network = new vis.Network(container, data, options);
}

function addNode() {
  var newId = (Math.random() * 1e7).toString(32);
  nodes.add({ id: newId, label: "I'm new!" });
  nodeIds.push(newId);
}

function changeNode1() {
  var newColor = "#" + Math.floor(Math.random() * 255 * 255 * 255).toString(16);
  nodes.update([{ id: 1, color: { background: newColor } }]);
}

function removeRandomNode() {
  var randomNodeId = nodeIds[Math.floor(Math.random() * nodeIds.length)];
  nodes.remove({ id: randomNodeId });

  var index = nodeIds.indexOf(randomNodeId);
  nodeIds.splice(index, 1);
}

function changeOptions() {
  shadowState = !shadowState;
  network.setOptions({
    nodes: { shadow: shadowState },
    edges: { shadow: shadowState },
  });
}

function resetAllNodes() {
  nodes.clear();
  edges.clear();
  nodes.add(nodesArray);
  edges.add(edgesArray);
}

function resetAllNodesStabilize() {
  resetAllNodes();
  network.stabilize();
}

function setTheData() {
  nodes = new vis.DataSet(nodesArray);
  edges = new vis.DataSet(edgesArray);
  network.setData({ nodes: nodes, edges: edges });
}

function resetAll() {
  if (network !== null) {
    network.destroy();
    network = null;
  }
  startNetwork();
}

window.addEventListener("load", () => {
  create();
  startNetwork();
});





/*oCanvas.domReady(function drawNode()
{
    var canvas = oCanvas.create({
        canvas: "#canvas"
    });
    
    var button = canvas.display.rectangle({
        x: canvas.width / 2,
        y: canvas.width / 5,
        origin: { x: "center", y: "center" },
        width: 300,
        height: 40,
        fill: "#079",
        stroke: "10px #079",
        join: "round"
    });
    var btn = canvas.display.rectangle({
        x: 20,
        y: 30,
        origin: { x: "center", y: "center" },
        width: 300,
        height: 40,
        fill: "#079",
        stroke: "10px #079",
        join: "round"
    });
    canvas.addChild(btn);

    //canvas.addChild(ellipse);
    
    var dragOptions = { changeZindex: true };    
    canvas.setLoop(function () {
        
    });
    
    button.bind("click tap", function () {
        if (canvas.timeline.running) {
            canvas.timeline.stop();
        } else {
            canvas.timeline.start();
        }
    })
}
);
function createNode(canvas,index)
{
    var ellipse=[];
          
            ellipse.push(canvas.display.ellipse({
                x: 177+index*30,
                y: 135,
                radius: 80,
                fill: "#0aa"
            }))
            var btnText = canvas.display.text({
                x: 0,
                y: 0,
                origin: { x: "center", y: "center" },
                align: "center",
                font: "bold 25px sans-serif",
                text: mark.nodes[index],
                fill: "#fff"
            })
            ellipse[index].addChild(btnText);            
            canvas.addChild(ellipse[index]);
            ellipse[index].dragAndDrop(dragOptions);                      
                
    
}*/




