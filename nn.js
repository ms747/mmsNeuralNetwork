function sigmoid(x)
{
    return (1/(1+Math.exp(-x)));
}
class NeuralNetwork {
    constructor(input_nodes, hidden_layer_nodes, output_nodes) {
        this.input_nodes = input_nodes;
        this.hidden_layer_nodes = hidden_layer_nodes;
        this.output_nodes = output_nodes;
        this.weights_ih = new Matrix(this.hidden_layer_nodes,this.input_nodes).randomize();
        this.weights_ho = new Matrix(this.output_nodes,this.hidden_layer_nodes).randomize();
        this.bias_ih = new Matrix(this.hidden_layer_nodes,1).randomize();
        this.bias_ho = new Matrix(this.output_nodes,1).randomize();
    }

    feedforward(input_data) {
        // For hidden layer
        let inputs = Matrix.fromArray(input_data)
        let input_h = Matrix.multiply(this.weights_ih,inputs);
        input_h.add(this.bias_ih);
        let output_h = input_h.map(sigmoid);
 

        // For Output Layer
        let input_o = Matrix.multiply(this.weights_ho,output_h)
        input_o.add(this.bias_ho);
        let output_o = input_o.map(sigmoid).printMatrix()
    }
}