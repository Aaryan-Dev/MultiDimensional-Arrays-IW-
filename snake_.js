// Given a matrix print it in the form of a snake


let arr = [
    [1,2,3,4],
    [6,7,8,9],
    [0,9,8,7],
    [5,4,3,2]
  ]
  
  
  for(i=0; i<arr.length; i++){
  
    bag = "";
    if(i%2==0){
  for(j=0; j<arr[0].length; j++){
    bag = bag + arr[i][j];
    }
    }else {
       for(j=arr[0].length-1; j>=0; j--){
    bag = bag + arr[i][j];
    }
  }
   console.log(bag);   
      
  }
  