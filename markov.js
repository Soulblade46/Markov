class Markov
{
    constructor()
    {
        this.nodes=["a"];
        this.trans=math.matrix([1.0]);
        this.size=1;
        //this.trans=[1.0];
    }
    addNode()
    {
        this.size=this.nodes.push(String.fromCharCode(this.nodes[this.nodes.length-1].charCodeAt(0)+1));
        this.trans.resize([this.size,this.size]);
    }
    removeNode()
    {
        if(this.size>1)
        {
            this.nodes.pop();
            this.trans.resize([this.nodes.length,this.nodes.length]);
            this.size--;
        }
    }
    changeState()
    {
        
    }
    nodeNumber()
    {
        return this.nodes.length;
    }
}

    