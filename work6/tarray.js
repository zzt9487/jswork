//提取数组中不等于2的数字
//创建数组
var arr = [1,2,3,4,2,5,6,2,7,2];
//显示数组
document.getElementById('array').innerHTML = arr.toString()
// index表示新数组newarr的下标，默认为0
var index = 0,nweArr = [];
// 遍历数组
for(var i in arr){
   // 数组元素不等于2，则将其保存道nwearr中
   if(arr[i] != 2){
   nweArr[index] = arr[i];
   ++index;
   }
}
//显示提取后的数组
document.getElementById('transArray').innerHTML = nweArr.toString()