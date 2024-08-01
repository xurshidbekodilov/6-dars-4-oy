//n1 1 dan foydalanuvchi bergan songacha raqamlardan iborat array hosil qiling
/*
let n = +prompt('ixtiyoriy musbat son kiriting');
let arr = [];
for (i = 1; i <= n; i++){
    arr.push(i);
}
console.log(arr);
*/

//n2 Raqamlardan iborat array qabul qilib shu array ni ichidagi raqamlarni toq va juft arraylar ga ajratib shu 
//arraylarni qiymatini array xolda qaytaring, misol uchun: [10, 30] bu yerda 10 toq sonlarning yig’indisi 30 esa juft sonlarni.
/*
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let a = 0;
let b = 0;
let res =[];
for (const iterator of arr) {
    if(iterator%2==1){
        a+=iterator;
    }
    else{
        b+=iterator;
    }
}
res.push(a);
res.push(b);
console.log(res);
*/

//n3 Ikki array berilgan ushbu ikki arrayni ichidagi raqamlarini yig’indisini qaytarsin
/*
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let sum1 = 0;
let i = 0;
while (i < arr1.length) {
    sum1 += arr1[i];
    i++;
}
let sum2 = 0;
i = 0;
while (i < arr2.length) {
    sum2 += arr2[i];
    i++;
}
let result = [sum1, sum2];
console.log(result);
*/

//n4 Berilgan massivni elementlarini teskarisiga aylantirib bering. Reverse ishlatish mumkin emas
/*
let arr = [1, 2, 3, 4, 5];
let res = [];
for (let i = 0; i < arr.length; i++) {
    res.unshift(arr[i]);
}
console.log(res);
*/

//n5 Berilgan massivdagi eng kichik elementning 4-darajasini ekranga chiqauvchi algoritm yozing
/*
let arr = [10, 2, 5, 8, 3, 7, 1];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
let res = Math.pow(min, 4);
console.log(res);
*/

//N1 Massivdagi ikkinchi eng katta elementni toping
/*
let arr = [10, 2, 5, 8, 3, 7, 1];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
let arr2 = arr.filter(num => num !== max);
let Max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > Max) {
        Max = arr2[i];
    }
}
console.log(Max);
*/

//N2 Massivdagi barcha satr (string) elementlarni uzunligini ko’rsating
/*
let arr = ['salom', 5, 'xayr', true, null];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(`Element: "${arr[i]}", Uzunlik: ${arr[i].length}`);
    }
}
*/

//N3 Massivdagi har bir juft sonni o'zidan keyingi son bilan almashtiring. Masalan [3, 7, 4, 5, 6] => [3, 7, 5, 5, 7]
/*
let arr = [3, 7, 4, 5, 6];
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
        arr[i] = arr[i + 1];
    }
}
console.log(arr);
*/

//N4 Berilgan massivni teskarisiga aylantiring va undagi barcha toq sonlarni 0 ga o'zgartiring
/*
let arr = [3, 7, 4, 5, 6];
let new_arr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 1) {
        new_arr.push(0);
    } else {
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);
*/

//N5 Massivdagi har bir elementning indeksiga teng qiymat bilan almashtiring (misol uchun: arr[i] = i)
/*
let arr = [3, 7, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    arr[i] = i;
}
console.log(arr);
*/

//N6 Berilgan massivdagi 3 ga karrali elementlarni olib tashlab, natijani yangi massivga saqlang
/*
let arr = [3, 7, 4, 5, 6];
let new_arr = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i]%3!=0){
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);
*/

/*N7 Massivdagi elementlarning yig'indisini hisoblang va massivdagi har 
bir yigindini shu elementga bo'lingan elementlardan iborat yangi massiv hosil qiling*/
/*
let arr = [3, 7, 4, 5, 6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let new_arr = [];
for (let i = 0; i < arr.length; i++) {
    new_arr.push(sum / arr[i]);
}
console.log(`Yig'indi: ${sum}`);
console.log(`Yangi massiv: ${new_arr}`);
*/

//N8 Massivdagi har bir elementni o'zidan oldingi indeksdagi element bilan almashtiring (birinchi elementni o'z holida qoldiring)
/*
let arr = [3, 7, 4, 5, 6];
for (let i = 1; i < arr.length; i++){
    arr[i]=arr[i-1];
}
console.log(arr);
*/

//N9 Berilgan massivdan manfiy sonlarni olib tashlang va natijada hosil bo'lgan massivning uzunligini qaytaring
/*
let arr = [3, -7, 4, 5, -6];
let new_arr = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i]>=0){
        new_arr.push(arr[i]);
    }
}
console.log(new_arr.length);
*/

//N10 Berilgan massivdagi elementlarning yig'indisini toping, lekin faqat manfiy sonlarni hisobga oling
/*
let arr = [3, 7, 4, 5, 6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]<0){
        sum += arr[i];
    }
}
console.log(`Yig'indi: ${sum}`);
*/

//N11 Massivdagi barcha satr elementlarni bosh harflaridan iborat yangi massiv hosil qiling
/*
let arr = ['salom', 8, 'dunyo', true, 'hayr', 42];
let new_arr = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        new_arr.push(arr[i][0]);
    }
}
console.log(new_arr);
*/

//N12 Massivdagi barcha musbat sonlarning ko'paytmasini hisoblang.
/*
let arr = [3, -7, 4, -5, 6];
let res = 1;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        res *= arr[i];
    }
}
console.log(`Ko'paytmasi: ${res}`);
*/

//N13 Berilgan massivdan eng uzun va eng qisqa satr elementlarni toping
/*
let arr = ['salom', 'dunyo', 'hayr', 'a', 'assalom'];
let longest = arr[0];
let shortest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }
}
console.log(`Eng uzun satr: ${longest}`);
console.log(`Eng qisqa satr: ${shortest}`);
*/