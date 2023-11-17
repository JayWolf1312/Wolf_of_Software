const Namen = ["Jakob", "Armend", "Daniel", "Phil"];
for (let i = 0; i < 100000; i++){
    const index = i % Namen.length;
    console.log(Namen[index]);
}
