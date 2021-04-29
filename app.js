//----chap1
//alert("Welcome to Our website ");

//alert("Error! Please Enter a valid address")

//alert("Welcome to JS land.. \nHappy Coding" )

//alert("Welcome to JS land.." )
//alert("Happy Coding" )

//----chap2-----
/*
var username;

var myName = "Abdul Haseeb"

var message = "Hello World"
alert(message);

var name , age , course ;
name ="Abdul Haseeb";
age = 20 ;
course = "WEB DEDVELOPMENT"
alert(name);
alert(age);
alert(course);


var title = "pizza";
alert (title + "\n"  + title.slice(0,4)+ "\n"  + title.slice(0,3)+ "\n"  + title.slice(0,2)+ "\n"  + title.slice(0,1));

var email = "haseeb.daar2001@gmail.com";
alert("My email address is "+ email);

var book = "A smarter Way to learn JavaScript"
alert("I am trying to learn from the Book "+ book);

document.write("Yah! I can write HTML content through JavaScript");

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
x

//====chap 3 -------

var age = 20;
alert('I am ' + age + ' years old')

var visit = 14;
alert('You have visited ' + visit + ' times')

var birthYear = 1998;
// document.write('My birth year is ' + birthYear + ' <br> Data type of my declared variable is ' + typeof birthYear);

var visitorName = prompt('Enter Your Name: ');
var productTitle = prompt("Product Title");
var productQuantity = +prompt('Product Quantity');
document.write(visitorName +' ordered '+ productQuantity +' ' +productTitle +' on XYZ Clothing store');

//======chap4=====----

var vr1 , vr2 , vr3 ;

var legal , legal1 , $legal , legle_e , lvl ;
//var ?lefal , 2legal , =leafe , #legle , *lefal;

document.write('<h2>Rules for naming JS variables </h2><br>');
document.write("Variable names can only contain number , $ and _ . For example $my_1stVariable <br>");
document.write("Variable names are case Sensitive <br>");
document.write("Variable names should not be JS Keyword <br>");



//chap 5

num1 = +prompt('Enter 1st Number:')
num2 = +prompt('Enter 2st Number:')
sum = num1 + num2;
document.write("Sum of "+ num1 + ' and ' + num2 + ' is ' + sum);


num1 = +prompt('Enter 1st Number:')
num2 = +prompt('Enter 2st Number:')
sub = num1 - num2;
document.write("Sum of "+ num1 + ' and ' + num2 + ' is ' + sub);


num1 = +prompt('Enter 1st Number:')
num2 = +prompt('Enter 2st Number:')
mul = num1 * num2;
document.write("Sum of "+ num1 + ' and ' + num2 + ' is ' + mul);

num1 = +prompt('Enter 1st Number:')
num2 = +prompt('Enter 2st Number:')
devide = num1 / num2;
document.write("Sum of "+ num1 + ' and ' + num2 + ' is ' + devide);


var variable;

document.write("Value after variable decleration is: " + variable +"<br>")
variable = 34;
document.write("initial Value: " + variable +"<br>");
variable++;
document.write("Value after increment is: " + variable +"<br>");
variable = variable + 7;
document.write("value after addition is : " + variable +"<br>")
variable--;
document.write("Value after decrement is: " + variable +"<br>"); 
variable = variable / 3;
document.write("The reminder is: " + variable +"<br>");


var price = 600;
document.write('Total cost to buy 5 tickets to a movie is ' + price*5 + "PKR")

num = +prompt("enter number to generate table");
document.write("Table of " + num + "<br>")

for (i=1; i<=10; i++){
    document.write(4 + " x " + i + " = " + num*i + "<br>")
}


var cTemp = 25;
var formula = cTemp * (9/5)+32
document.write(cTemp + "*C is " + formula + "*F <br>" );

var fTemp = 70;
var formula1 = (fTemp - 32) * (5/9)

document.write(fTemp + "*F is " + formula1 + "*C" );


var  priceItem1 = +prompt("Enter price of item 1");
var  order1 = +prompt("ordered quantity of item 1")
var  priceItem2 = +prompt("Enter price of item 2");
var  order2 = +prompt("ordered quantity of item 2")
const charges = 100;
var total = priceItem1 * order1 + priceItem2 * order2 + charges;

document.write("price of item 1 is " + priceItem1);
document.write("<br>ordered quantity of item 1 is " + order1);
document.write("<br>price of item 2 is " + priceItem2);
document.write("<br>ordered quantity of item 2 is " + order2);
document.write("<br>Shipment Charges" + charges );
document.write("<br> <br> Total cost of your Order is " + total);


var totalMarks = +prompt("Rnter your Total Marks: ");
var obMarks = +prompt("Rnter your obtained Marks: ");
var percentage = (obMarks / totalMarks) * 100;
document.write("Total marks: " + totalMarks);
document.write("<br>Obtaianed marks: " + obMarks);
document.write("<br>Percentage: " + percentage + "%");


var usDollar  = 10;
var saudiRiyal = 25
var totalPKR = usDollar * 104.80 + saudiRiyal * 28 ;
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR);

var num = +prompt("Enter Number");
num = ((num + 5) *10 ) / 2;
document.write("Result is " + num)


var currentYear = 2020 ;
var birthYear1 = +prompt("Enter Your 1st Posible Date of Birth");
var birthYear2 = +prompt("Enter Your 2nd Posible Date of Birth");
document.write("Current Year: " + currentYear);
document.write("<br>Birth Year: " + birthYear1 + " or "+ birthYear2);
document.write("<br>Your Age: " + (currentYear-birthYear1) +' or '+ (currentYear-birthYear2));


var radius = +prompt("Enter Radius");
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("Radius of a circle: " + radius );
document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);


var cAge = 22;
var maxAge = 75;
var num = 4;

var total = (maxAge - cAge) * 360 * 4;
document.write("You will need " + total + " to last you until the ripe old age of " + maxAge);


// ====== Chap 6-9 ========

var num = +prompt("Enter a number");
document.write("Result: <br> The value of a is: " + num);
document.write("<br>----------------------------------------");

document.write("<br>The value of ++a is:" + (++num));
document.write("<br>Now the value of a is: " + num);
document.write("<br><br>The value of a++ is:" + (num++));
document.write("<br>Now the value of a is: " + num);
document.write("<br><br>The value of --a is:" + (--num));
document.write("<br>Now the value of a is: " + num);
document.write("<br><br>The value of a-- is: " + (num--));
document.write("<br>Now the value of a is: " + num);

var a=2, b=1;
var result = --a - --b + ++b + b--;
1 - 0 + 1 + 1
document.write("a is" + a + "<br> b is "+ b + "<br> result is " + result);

var name = prompt("Enter Your name")
alert("Welcome " + name)

var num = +prompt("Enter number","5");
for( var i = 1; i<=10; i++){

document.write(num +" x " + i + " = " + num*i + "<br>")
}

var sub1 = prompt("Enter name of Subject one");
var sub2 = prompt("Enter name of Subject two");
var sub3 = prompt("Enter name of Subject three");
const totalMarks = 100;
 var obMarks1 = +prompt("Enter Obtained marks in " + sub1);
 var obMarks2 = +prompt("Enter Obtained marks in " + sub2);
 var obMarks3 = +prompt("Enter Obtained marks in " + sub3);
document.write("<table> <tr> td </tr> <tr> </tr><tr> </tr><tr> </tr><tr> </tr> </table>");


var city = prompt("Enter Your city");
city = city.toLowerCase();
if (city === "karachi"){
    alert("Welcome to city of light");
}


var gender = prompt('Enter Your Gender:');
if (gender === "male" || "Male" || "MALE" || "M" || "m"){
    alert("Good Morning Sir");
}
else if (gender === "Female" || "female" || "FEMALE" || "F" || "f" ){
    alert("Good Moening Ma'am");
}
else {
    alert("Enter your correct gender");
}

var signal = prompt("Enter Signal Color");
if (signal === "red"){
    alert("Must Stop");
}
else if (signal === "yellow"){
    alert("Ready to move");
}
else if (signal === "green" ){
    alert("MOve Now");
}
else {
    alert("You enter Wrong color");
}

var fuel = +prompt("Enter Remaining fuel in litter ");
if (fuel < 0.25){
    alert("Please refill the fuel in your car");
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
}

if("car" < "cat"){
        alert("car is smaller than cat");
        }


var obMarks1 = +prompt("Enter Obtained marks in subject 1 ");
var obMarks2 = +prompt("Enter Obtained marks in subject 2");
var obMarks3 = +prompt("Enter Obtained marks in subject 3");
var totalMarks = +prompt("Enter Total marks of subject ") * 3;
var grade, remarks;
var perc = (obMarks1 + obMarks2 + obMarks3) / totalMarks *100; 
if (perc >= 80 ){
 grade = "A-one";
 remarks = " Excellent";
}

else if (perc >= 70 ){
    grade = "A";
    remarks = " good";
}
else if (perc >= 60 ){
    grade = "B";
    remarks = " You need to improve";
}

else if (perc < 60 ){
    grade = "Fail";
    remarks = " Sorry";
}
else {
    alert("You Entered Wrong Information");
}

document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total Marks: " + totalMarks);
document.write("<br>Marks Obtained: " + (obMarks3 + obMarks2 + obMarks1));
document.write("<br>Percentage: " + perc + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);


var num = +prompt("Guess the number");
var snum = 7;
if (num === snum){
 alert("Bingo! Correct answer");
}
else if (num === 8 || num ===6){
    alert("Close enough to the correct answer");
}
else{
    alert("sorry");
}

var num = +prompt("Enter number");
if (num % 3 === 0){
    alert("Number is devisible by 3");
}
else
{
    alert("not Devisible by 3");
}


var num = +prompt("Enter number");
if (num % 2 === 0){
    alert("Number is even");
}
else
{
    alert("number is odd");
}

//chap 12-13
var ch = prompt("Enter Character");
var num = ch.charCodeAt(0);
if (num >=48  && num <= 57 ){
alert("The Given Character is number");
} 
else if (num > 64 && num < 91 ){
    alert("The Given Character is UpperCase Letter");
} 

else if (num > 96 && num < 123 ){
        alert("The Given Character is Lower Case Letter");
} 
else{
    alert("You Enter Wrong Charecter");
}

var num1 = +prompt("Enter number");
var num2 = +prompt("Enter number");

var num = +prompt("Enter number");
if (num > 0 ){
    alert("greater");
    } 
    else if (num < 0){
        alert("less");
    } 
    
    else if (num === 0 ){
            alert("equal");
    }
   
var psw ="123123";
var num = prompt("Enter psw");

 if (psw === num){
    alert("Corect");
} 
else if (num = " " ){
    alert("PLEASE ENTER PSW");
    } 

else {
        alert("wrong");
    }


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
greeting = "Good evening";


//chap 14-16
var myArray1 = []; // 1
var myArray2 = new Array(); //2
var strArray = ['car','bike','bus'];//3
var numArray = [1, 3, 44 , 55, 64]; //4
var bolArray = [true, false, false, false, true];//5
var mixedArray = [1, "two", "three", 4];//6

var education = ['SSC','HSC','BSC','BS']; //7
document.write('Qualification<br> <br>');
for( var i=0; i < education.length; i++){
    document.write(i+1 +') '+ education[i] + '<br>')
}

//8

var student = ['haseeb','ali','basit'];
var score = [320,230,480];
const total = 500;
for( var i=0; i < score.length; i++){
    document.write('Score of ' + student[i] +' is ' + score[i] + '. Percentage: ' + (score[i]/total *100) +'%<br>');
}
 
//9
    
var colorNameArray = ['yellow', 'blue', 'brown','purple','pink','red'];
var addColorBeg = prompt('Enter Color to add in begining');
colorNameArray.unshift(addColorBeg);
document.write('COLORS IN ARRAY <br>');
colorNameArray[0];
for( var i= 0; i < colorNameArray.length; i++){
  document.write(colorNameArray[i] + ' <br>');
}

var addColorEnd = prompt('Enter Color to add in Ending');
colorNameArray.push(addColorEnd);

for( var i= 0; i < colorNameArray.length; i++){
    document.write(colorNameArray[i] + ' <br>');
}
colorNameArray.unshift("orange","mango");
for( var i= 0; i < colorNameArray.length; i++){
    document.write(colorNameArray[i] + ' <br>');
}


var colorNameArray = ['yellow', 'blue', 'brown','purple','pink','red'];
colorNameArray.shift();
for( var i= 0; i < colorNameArray.length; i++){
    document.write(colorNameArray[i] + ' <br>');
}

var colorNameArray = ['yellow', 'blue', 'brown','purple','pink','red'];
colorNameArray.pop();
for( var i= 0; i < colorNameArray.length; i++){
    document.write(colorNameArray[i] + ' <br>');
}

var index = +prompt('Enter Index to add color');
var colorName = prompt('Enter Color Name');
var colorNameArray = ['yellow', 'blue', 'brown','purple','pink','red'];
colorNameArray.splice(index,0,colorName);
for( var i= 0; i < colorNameArray.length; i++){
    document.write(colorNameArray[i] + ' <br>');
}


var index = +prompt('Enter Index to delete color');
var numToDelete = +prompt('How many color to delete');
var colorNameArray = ['yellow', 'blue', 'brown','purple','pink','red'];
colorNameArray.splice(index,numToDelete,);
for( var i= 0; i < colorNameArray.length; i++){
    document.write(colorNameArray[i] + ' <br>');
}

//10
var numArray = [12,41,42,3,6,87,66];
var a = numArray.sort(function(a, b){return a - b});
alert(a);


//11
var cityArray = ['karachi', 'islamabad', 'lahore', 'Faisalabad','qwetta','hydrabad','jhlem'];
var selectedCities = cityArray.slice(2,5)
for( var i= 0; i < cityArray.length; i++){
    document.write(cityArray[i] + ' <br>');
}
document.write('<br><br>');
for( var i= 0; i < selectedCities.length; i++){
    document.write(selectedCities[i] + ' <br>');
}


//12
var arr = ['i','am','haseeb']

alert(arr.join(" "));
//13
var array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
for (i=0;i<array.length;i++){
    document.write( array[i] +', ');
}

array.shift();
array.shift();
array.shift();
for (i=0;i<array.length;i++){
    document.write( array[i] +', ');
}
//

var array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
for (i=0;i<array.length;i++){
    document.write( array[i] +', ');
}

array.pop();
array.pop();
array.pop();

for (i=0;i<array.length;i++){
    document.write( array[i] +', ');
}

//15

//=====chap 17-20....
//6
document.write('<b>Counting</b>: <br>');

for(var i = 1; i<=15; i++){
    document.write(i + ", ");
}

document.write('<br><br><b>Reverse Counting</b>: <br>');

for(var i = 15; i>=1; i--){
    document.write(i + ", ");
}

document.write('<br><br><b>Even</b>: <br>');

for(var i = 0; i<=20; i=i+2){
    document.write(i + ", ");
}

document.write('<br><br><b>Odd</b>: <br>');

for(var i = 1; i<=20; i=i+2){
    document.write(i + ", ");
}
document.write('<br><br><b>Series</b>: <br>');

for(var i = 2; i<=20;i= i+2){
    document.write(i + "k, ");
}


//7 
var arrry = ['cake','apple', 'pie', 'cookie', 'chips', 'patties'];
var search = prompt('Search');

var index = arrry.indexOf(search);


    if (arrry[index] === search){
        document.write(search + 'is available at index' + index + 'in our bakery');
    }
    else
    {
    document.write(search + ' is not available in our bakery');
    }

//8,9 
var numArray = [12,41,42,3,6,87,66];
alert("Max " + Math.max(...numArray));

alert("Min " + Math.min(...numArray));


//--------------------------------------------------------------------------------------------
//===== chap 21 to 25 =======================
//task # 1

var firstName = prompt('First name: ');
var lastName = prompt('last name: ');
var fullName = firstName +" " + lastName;
alert('Welcome '+ fullName);

//task # 2

 var favPhone = prompt('Enter our Favourite Phone');
 var lenght = favPhone.length;
 document.write('My fav phone is '+ favPhone +'<br/>lenght of strinf is '+ lenght);

//task # 3
var word = "Pakistani";
index = word.indexOf('n');
document.write('str is'+ word +'<br/>index '+ index);

//task # 4
var word = "Hello world";
index = word.lastIndexOf('l');
document.write('str is'+ word +'<br/>index '+ index);

//task # 5
var word = "Pakistani";
index = word.charAt(3);
document.write('str is'+ word +'<br/>index 3 : ' +index);

//task # 6
var firstName = prompt('First name: ');
var lastName = prompt('last name: ');
var fullName = firstName.concat(' ',lastName);
alert('Welcome '+ fullName);

//task # 7

var city = 'Hyderabad';
document.write('city: ' + city);
city = city.replace('Hyder','Islam');
document.write('<br/>After REplace: ' + city);

//task # 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/and/g,'&');
document.write('<br/>After REplace: ' + message);

//task # 9
var str = "472"
var num = parseInt(str);
document.write('Value: '+ str + '<br/>Type: '+ typeof(str));
document.write('<br/>Value: '+ num + '<br/>Type: '+ typeof(num));

//task # 10

var text = prompt('INput Text');
document.write('<br/>input ' + text);

text= text.toUpperCase();
document.write('<br/>Upper Case ' + text);

//task 11
var text = prompt('INput Text');
document.write('<br/>input ' + text);
var firstLetter = text.slice(0,1);
var remainLetter = text.slice(1);


firstLetter = firstLetter.toUpperCase();
remainLetter = remainLetter.toLowerCase();
alert(firstLetter);
alert(remainLetter);
text = firstLetter.concat(remainLetter);
document.write('<br/>Title Case ' + firstLetter + remainLetter);

//task # 12
var num = 33.56;
var str = num.toString();
str = str.replace('.','');
document.write('RESULT' +str);

// 13
var input = prompt('enter');
for(var i=0 ; i < input.length; i++){
if (input.charCodeAt(i)=== 33 || input.charCodeAt(i) === 44 || input.charCodeAt(i)=== 46 || input.charCodeAt(i) === 64 ){
    alert('innavalid');
    break;
}
}
 
// task 14
var arrry = ['cake','apple', 'pie', 'cookie', 'chips', 'patties'];
var search = prompt('Search');
search = search.toLowerCase();

var index = arrry.indexOf(search);

    if (arrry[index] === search){
        document.write(search + 'is available at index' + index + 'in our bakery');
    }
    else
    {
    document.write(search + ' is not available in our bakery');
    }

var text = "The quick brown fox jumps over the lazy dog"
var n = text.indexOf('the');
var count;
{
if (n !== -1 ){
    count = count + 1;
    n = text.indexOf('the',n);
}
alert(count);
}

//16

var str =  "University of Karachi";
var arr = str.split('');
alert(arr);
arr = Array.isArray(arr);
alert(arr);
for (var i = 1; i < arr.length; i++) {
   console.log(arr[i] +" <br/>");
}
// = = = = = = = = = = = = = = CHap 26 - 30 = = = = = = = = = = = = = = = = = =

// --- 1
var input = +prompt('Enter Positive Number');
if (input < 0 ){
    alert('NUMBER IS negitive...please enter positiive number');
    input = prompt('Enter Positive Number');
}
var round = Math.round(input);
var floor = Math.floor(input);
var ciel = Math.ceil(input);

document.write('number : '+ input);
document.write('<br/>round : '+ round);
document.write('<br/>floor : '+ floor);
document.write('<br/>CIEL : '+ ciel);


///====2
var input = +prompt('Enter Negative Number');
if (input > 0 ){
    alert('NUMBER IS Positive...please enter negative number');
    input = prompt('Enter Negative Number');
}
var round = Math.round(input);
var floor = Math.floor(input);
var ciel = Math.ceil(input);

document.write('number : '+ input);
document.write('<br/>round : '+ round);
document.write('<br/>floor : '+ floor);
document.write('<br/>CIEL : '+ ciel);

// 3
var input = +prompt('Enter Negative Number');
var absolutte = Math.abs(input);
alert(absolutte);

//4
var num = Math.random() * 6;
num = Math.floor(num) + 1;
alert (num);

//5
var num = Math.random() * 2 ;
num = Math.floor(num) + 1;
if (num === 1){
    alert('Head wins '+ num);
}
else{
    alert("Tail wins " + num);
}

//6 
var num = Math.random() * 100;
num = Math.floor(num) + 1;
alert (num);

// 7

var weight = prompt('Enter weight');
var x = parseFloat(weight,10);
alert('your weight: ' + x);

// 8
var secretNumber = Math.random() * 2 + 1;
secretNumber = Math.floor(secretNumber);
var input = +prompt('ENter number')

if (input === secretNumber){
    alert ('Congrats')
}
else{
    alert('try again' + );
}

// = = = = = = = = = = = Chap 31- 35 = = = = = = = = = = = 
// task 1 and 2
var time = new Date();
var month = time.getMonth();
var monthArry = ['jan','feb','march','april', 'may' , 'june', 'july', 'aug', 'sep', 'oct','nov', 'dec']
alert(monthArry[month]);

//3
var day = time.getDay();
var dayArray = ['sun','mon', 'tue','wed', 'thur', 'fri', 'sat'];
alert(dayArray[day]);

//4
var time = new Date();
var day = time.getDay(1);

if ( day === 1 || day === 6){
    alert('today is funday ')
}
else
(
    alert('today is bor ')
)

//5
var time = new Date();
var date = time.getDate();

if ( date < 16){
    alert('FIRST FIFTEEN DAYS ');
}
else{
    alert('lAST');
}


//= = = = = = = = = = = = = = = = = chap 35 - 38

// 1
function display() {
    var date = new Date();    
    alert(date)
}
display();

// 2
function name ( a , b) {
    alert('Hello ' + a + b);
}
name('haseeb', 'Dar');

// 3 
function add(a , b){
alert( a + b);
}
var num1 = +prompt('');
var num2 = +prompt('');
add(num1,num2);

// 4 
function add(num1, num2, opr){
    if (opr === '-'){
    return num1 - num2;
    }
    else if (opr === '+'){
        return num1 + num2;
    }
    else if (opr === '/'){
        return num1 / num2;
    } else if (opr === '*'){
        return num1 * num2;
    }
    else {
        alert('wrong')
    }

}
    var num1 = +prompt('n1');
    var opr = prompt('op');
    var num2 = +prompt('n2');

    a = add(num1, num2, opr);
    alert (a);
    
//5

function square(a){
   return alert( a*a);
}
var num = prompt('emter');
square (num);

//6

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num = num * i;
    }
    return num;
  }
  var num = prompt('enter number');
  alert((factorialize(num))) ;

//7

function counting(start, end){
    for(i=start; i<= end; i++){

    document.write(i + '<br/>');
        console.log(i)
    }
}
counting(1,459);

//8

function calculateHypotenuse(base, perp){
    var base = base;
    var perp = perp;

    var result = calculateSquare(base) + calculateSquare(perp);
    return result;
}
function calculateSquare(num){
     var result = num * num;
     return result;
}
var num1 = +prompt('num1');
var num2 = +prompt('num2');

alert( calculateHypotenuse(num1, num2));



















//=============chap 49-52=======
//task # 1

function testVariable(){
    var fname = document.getElementById('firstName').value;
    document.getElementById("para").innerHTML = fname;

    var lName = document.getElementById('lName').value;
    document.getElementById("para").innerHTML += lName;

    var phone = document.getElementById('phoneNo').value;
    document.getElementById("para").innerHTML += phone;
    console.log(phone)

}

*/