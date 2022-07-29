
window.onload = function(){ 
    // your code 



var listNumber=[];
var listNumber2=[];

//Them so
document.getElementById("addNum").onclick = function (){
var number1 = document.getElementById("number1").value*1;

listNumber.push(number1);
console.log(listNumber);
}
//Xuat day so
document.getElementById("calc").onclick = function(){
    var content="";
    var count='';
    for(var i=0;i<listNumber.length;i++){
        content+="["+listNumber[i]+"] ";
        count+=" -"+i+"- ";
    }
    document.getElementById('showList').innerHTML = "Dãy số:  "+content;
    document.getElementById('showList1').innerHTML ="Vị trí số:" +count;
}
//Xoa mang
document.getElementById("removeList").onclick = function(){
   
   clearArray(listNumber);
  
    document.getElementById('showList').innerHTML = listNumber;
}
function clearArray(a) {
    a.splice(0, a.length);
    return a;
  }
//1.Tong so duong trong mang
document.getElementById("sumPst").onclick = function(){
    var count=sumPst(listNumber);
    
document.getElementById('showCalc').innerHTML ="Tổng số dương: "+ count;
}
function sumPst(num){
    var sum=0;
    if(listNumber.length===0){
        alert("vui long nhap so");
        return;
    }
    for(var i=0;i<num.length;i++){
if(num[i]>0){
    sum+=num[i];
}
    }
    return sum;
}
//2.Dem so duong
document.getElementById("countPst").onclick = function(){
    var count=countPst(listNumber);
    
document.getElementById('showCalc').innerHTML = "Có: "+count+" số dương";
}
function countPst(num){
    var count =0;
    for(var i=0;i<num.length;i++){
        if(num[i]>0){
            count+=1;
        }
    }
    return count;
}
//3.Tim so nho nhat
document.getElementById("smallest").onclick = function(){
    var count=smallest(listNumber);
    
document.getElementById('showCalc').innerHTML = "Số nhỏ nhất là: "+count;
}
function smallest(num){
var count =num[0];
for(var i=0;i<num.length;i++){
    if(count>num[i]){
        count=num[i];
    }
}
return count;
}
//4.Tim so duong nho nhat
document.getElementById("smallestPst").onclick = function(){
    var listNumber1=listNumber;
    var count=smallestPst(listNumber1);
    
document.getElementById('showCalc').innerHTML = "Số dương nhỏ nhất là: "+count;
}
function smallestPst(num){
    var count =num[0];
    for(var i=0;i<num.length;i++){
        if(count>num[i]&&num[i]>0){
            count=num[i];
        }
    }
    return count;
}
//5.Tim so chan cuoi cung trong mang
document.getElementById("finalEvenNumber").onclick = function(){
    var count=finalEvenNumber(listNumber);
    
document.getElementById('showCalc').innerHTML ="Số chẵn cuối cùng trong mãng là: " +count;
}
function finalEvenNumber(num){
var even ='';
for(var i=0;i<num.length;i++){
    if(num[i]%2===0){
        even=num[i];
    }else{
        even=-1;
    }
}
return even;
}
//6.Doi vi tri 2 so trong mang
document.getElementById("swapNumber").onclick = function(){
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
var temp=listNumber[number2];
listNumber[number2]=listNumber[number3];
listNumber[number3]=temp;
var content="";

for(var i=0;i<listNumber.length;i++){
    content+=" "+listNumber[i]+" ";
    
}
    
document.getElementById('showEqual').innerHTML = content;
}

//7.Xap xep thu tu tang dan
document.getElementById("sort").onclick = function(){
    var listNumber1=listNumber;
   listNumber1.sort((a, b) => a - b);
    var content="";

for(var i=0;i<listNumber1.length;i++){
    content+=" "+listNumber1[i]+" ";
    
}
document.getElementById('showEqual').innerHTML = content;
}
//8.Tim so nguyen to dau tien
document.getElementById('element').onclick = function(){
    var elementN='';
for(i=0;i<listNumber.length;i++){
    if(element(listNumber[i])>0){
    elementN=listNumber[i];
        break;
    }else{
        elementN=-1;
    }
}



document.getElementById('showEqual').innerHTML = "Số nguyên tố đầu tiên là: "+elementN;
}

function element(num){
    var elementNum="";
    var count="";
    if(num<2){
      elementNum= "";
    }
    else{
    for(var i=2;i<=Math.sqrt(num);i++){
      if(num%i==0){
        count++;
      }
    };
    if (count==0){
      elementNum=num;
    }else {
      elementNum= "";
    }
  }
    return elementNum;
  }

//9. Dem so nguyen
document.getElementById('integer').onclick = function(){
var integerN =0;
for(var i=0;i<listNumber.length;i++){
   if (integer(listNumber[i])>0){
    integerN++;
   }
}

document.getElementById('showEqual').innerHTML = "Có: "+integerN+" số nguyên";
}

function integer(num){
    var integerM ='';
    if(num<0){
        num*=-1;
    }
   if( Number.isInteger(num)){
    integerM=num;
   }else {
    integerM=0;
   }
return integerM;
}

//10. So sanh so luong so duong va so am
document.getElementById("compare").onclick = function(){
    var equal='';
    var Pst=countPst(listNumber);
    var Ngt=countNgt(listNumber);
    if(Pst>Ngt){
equal="Số lượng số dương nhiều hơn";
    }else if(Pst=Ngt){
        equal="Số lượng số âm dương bằng nhau";
    }
    else{
        equal="Số lượng số âm nhiều hơn";
    }


document.getElementById('showEqual').innerHTML = equal;
}
function countNgt(num){
        var count =0;
        for(var i=0;i<num.length;i++){
            if(num[i]<0){
                count+=1;
            }
        }
        return count;
    
}

};