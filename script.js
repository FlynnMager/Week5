function prime_position(x){
    if(x==1){
        return 2
    }else if(x==2){
        return 3
    }
    var y=4;
    var count=2;
    while(true){
        for(var i=2;i<y-1;i++){
           if(y%i==0){
               break;
           }
           if(i==y-2){
               count++;
               break;
           }
        }
        if(count==x){
            return y;
        }
        y++;
    }
}

function sort_subtract(x){
    var a=x.toString()
    var arr=[];
    for(var i=0;i<a.length;i++){
        arr[i]= parseInt(a.substring(i,i+1));
    }
    var y="";
    var z="";
    var big=arr.sort(function(a, b){return b-a});
    for(var i=0;i<big.length;i++){
        y += big[i].toString();
    }
    var small=arr.sort();

    for(var i=0;i<small.length;i++){
        z += small[i].toString();
    }
    return parseInt(y)-parseInt(z);
}
