// Given a square matrix print both the diagonals

let arr = [
    [1,2,3,4],
    [6,7,8,9],
    [0,9,8,7],
    [5,4,3,2]
  ]
  
    Bag = ""
    Bag1 = ""
  for(i=0; i<arr.length; i++){
    for(j=0; j<arr[0].length; j++){
      if(i==j){
        Bag = Bag + (arr[i][j]);
        
      }
      if(i+j==arr.length-1){
        Bag1 = Bag1 + (arr[i][j]);
      }
    }
  }
     console.log(Bag); 
     console.log(Bag1); 
    