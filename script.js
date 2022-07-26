let arr = [2,3,4,5,5,13,7,7,7,7,6,10];

// Поиск максимума
function getTop(arr) {
    let top = null;
    for (let i=0;i<arr.length;i++) {
         if (arr[i]>top) top = arr[i];
     }
    console.log(top);
}

// Сортировка пузырьком
const sortUp = arr => {
    let temp = null;
    let count = null;
    for (let i=0;i<arr.length;i++) {
        for (let j=arr.length-1;j>i;j--)
            if (arr[j]<arr[j-1]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j]= temp;
            }
            count += 1;
        }
    console.log(arr);
}


let str = '1asdtj,hk21dasdasdw13';
