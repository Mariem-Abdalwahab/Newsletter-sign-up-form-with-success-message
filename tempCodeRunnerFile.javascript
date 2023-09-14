let arr = [50,1,90,7,0];

let b = arr.sort((a,b)=>{
    if(a<b){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(b);