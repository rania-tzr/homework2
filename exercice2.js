const arr1=[2,35,6,89];
const arr2=[3,1,2,5,35,7];
function  difference(arr1,arr2){
var l1 = arr1.length;
var l2 = arr2.length;
const arrresult=[];
var k=0;
for (var i = 0; i < l1 ; i++) {
    for (var j = 0; j < l2; j++) {
        if (arr1[i]==arr2[j]){
           arrresult.push(arr1[i]);
           k++;
        }

    }
}
return arrresult;
}

console.log( difference(arr1,arr2));