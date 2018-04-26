function random(x){
    let rand = Math.floor(Math.random() * (x.length))
    return x[rand];
}

let trainingdata = [
    {
        input : [255,0,0],
        target: [1,0,0]
    },
    {
        input : [0,255,0],
        target: [0,1,0]
    },
    {
        input : [0,0,255],
        target: [0,0,1]
    },
    {
        input : [0,0,0],
        target: [0,0,0]
    }
]
let brain = new NeuralNetwork(3,3,3);

for(let i = 0 ; i < 10000 ; i++){
    let tdata = random(trainingdata);
    brain.train(tdata.input,tdata.target);  
}

