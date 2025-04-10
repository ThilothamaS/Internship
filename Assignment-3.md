#### PROBLEMS AND OUTPUT:
#### Question:1
 void main() {
 
 var x = 10;
 
 void innerFunction() {
 
 print(x);
 
var x = 20;

 print(x);
 
 }
 
 innerFunction();
 
 print(x);
 
 } // o/p: 10,20,10.

#### Question:2.
 void main() {
 
 var x = 'outer';
 
 void firstLevel() {
 
 var y = 'middle';
 
 print('First level: x = $x, y = $y');
 
 void secondLevel() {
 
 var z = 'inner';
 
 print('Second level: x = $x, y = $y, z = $z');
 
 }
 
 var x = 'shadowed';
 
 print('After shadowing: x = $x, y = $y, z = $z');

secondLevel();

 print('Back to first level: x = $x, y = $y');
 
 }
 
 firstLevel();
 
 print('Back to main: x = $x');
 
 } // o/p:first level:x=outer,y=middle. second level:
 x=outer,y=middle,z=inner.

#### Question:3. 
 void main() {
 
 var x = 5;
 
 {
 
 }
 
 }
 
 print('Block start: x = $x');
 
 var x = 10;
 
 print('In block: x = $x');
 
 print('After block: x = $x') // o/p: block start:x=5, in block:x=10, after block:x=5.

#### Question:4.
 void main() {
 
 var numbers = [1, 2, 3, 4, 5];
 
 var functions = [];
 
 for (var i = 0; i < numbers.length; i++) {
 
 var number = numbers[i];
 
 if (number % 2 == 0){
 
 functions.add(() {
      
 var message = 'Even number: $number at index $i';
 
 return message;
 
 });
 
 } else {
 
functions.add(() {
      
var message = 'Odd number: $number at index $i';

 return message;
 
 });
 
 }
 
 }
 
 for (var function in functions) {
 
 print(function());
 
 }
 
 } // o/p: odd number:1 at index 0,
even number:2 at index 1,
odd number:3 at index 2,
even number:4 at index 3,
odd number:5 at index 4.

#### Question:5.
 void main() {
 
  final bool condition = false;
  
  final String message;
  
 if (condition) {
 
message = 'Condition is true';
    
 var detail = 'Set in true branch';
 
 print(detail);
 
 } else {
 
message = 'Condition is false';
    
 var detail = 'Set in false branch';
 
 print(detail);
 
 }
 
 }
 
 print(message) // o/p: set in false branch, condition is false.

#### Question:6. 
 void main() {
 
 var x = 'global';
 
 for (var i = 0; i < 2; i++) {
 
 var x = 'outer loop $i';
 
print('Outer loop: x = $x');

 for (var j = 0; j < 2; j++) {
 
 var x = 'inner loop $j in outer loop $i';
 
 print('Inner loop: x = $x');
 
 }
 
 print('After inner loop: x = $x');
 
 }
 
 print('After all loops: x = $x');
 
 }o/p: outerloop : outer loop 0,
inner loop : inner loop 0 in outerloop 0,
inner loop : inner loop 1 in outerloop 0,
outer loop 1,
inner loop : inner loop 0 in outerloop 1,
inner loop : inner loop 1 in outerloop 1.
afterin loop : outerloop 0
after all loop : x= global

#### Question:7
void main() {

 for (var i  0; i  5; i++) {
 
 print('Start of iteration $i');
 
 if (i  2 
 
i++; 
      
}

 print('End of iteration $i');
 
 }
 
 } // o/p: start iteration 0.

#### Question:8. 
 void main() {

 var items = [1, 2, 3];
 
 var result = [];
 
 var x = 'outer';
 
 for (var i = 0; i < items.length; i++) {
 
 var y = 'loop $i';
 
 void processItem(item) {
 
var z = 'item $item';

 print('Processing: x = $x, y = $y, z = $z, i = $i');
 
 if (item % 2 == 0){
 
 var x = 'even item'; 
 
print('Even item: x = $x, y = $y, z = $z');

 result.add(() {
        
 var capturedI = i;
 
 return 'Result for $item at position $capturedI: x = $x, y = $y, z =$z';
 });
 
 } else {
 
 var y = 'odd item'; 
 
print('Odd item: x = $x, y = $y, z = $z');

  result.add(() {
  
 return 'Result for $item at position $i: x = $x, y = $y, z = $z';
 
 });
 
 }
 
 }
 
 processItem(items[i]);
 
 }
 
  x = 'modified outer';
  
 for (var i = 0; i < result.length; i++) {
 
 print('Result $i: ${result[i]()}');
 
 }
 
 } // o/p: processing x= outer,y=loop 0 , z=item 1, i=0.
odd item x=outer, y=odd item, z= item1,
processing x= outer,y=loop 1 , z=item 2, i=1.
even item x=even item, y=even item, z= item2,
processing x= outer,y=loop 2 , z=item 3, i=2.
odd item x=outer, y=odd item, z= item1.

#### Question:9. 
 void main() {

 var condition = true;
 
 var x = 5;
 
if (condition) {

 var y = 10;
 
 print('If block: x = $x, y = $y');
 
 if (y > x) {
 
 var z = 15;
 
 print('Nested if: x = $x, y = $y, z = $z');
 
x = 25;

 }
 
 print('After nested if: x = $x, y = $y');
 
 } else {
 
 var y = 20;
 
 print('Else block: x = $x, y = $y');
 
 }
 
 print('After if-else: x = $x');
 
 } // o/p: if block:x=5, y=10.
 nested if : x=5, y=10, z=15
after nested if: x=25, y=10.
after if-else: x=25.

#### Question:10. 
 void main() {

 var sum = 0;
 
 for (var i = 0; i < 3; i++) {
 
 var sum = i * 2;
 
 print('Inside loop $i: sum = $sum');
 
 }
 
 }
 
 print('Final sum = $sum') // o/p: inside loop 0: sum =0,  inside loop 1: sum =2, inside loop 2: sum =4, final sum= 0.

#### Question:11. 
void main() {

 var flag = true;
 
 var value = 'outside';
 
if (flag) {

 print('Before declaration: $value');
 
 var value = 'inside';
 
 print('After declaration: $value');
 
 }
 
 print('Outside condition: $value');
 
 } // o/p: before declaration : outside, after declaration: inside, outside condition: outside.

#### Question:12. 
 void main() {

 var x = 10;
 
 void updateValue(x) {
 
x = 20;

 print('Inside function: x = $x');
 
 }
 
 }
 
 updateValue(x);
 
 print('After function call: x = $x') // o/p: inside function:x=20, after function call:x=10.

#### Question:13. 
 void main() {

 var counter = 0;
 
 while (counter = 3){
 
 print('Before shadowing: counter = $counter');
 
 var counter = 10; 
 
print('After shadowing: counter = $counter');

counter++; 

}

 }
 
 print('After loop: counter = $counter') // o/p: before shadowing: counter=0, after shadowing:counter= 10, after loop : counter=11.
 
#### Question:14.
void main() {

 var options = {'title': 'Original Title', 'size'= 100);
 
 void configure({title, size}) {
 
 var title = title ?? 'Default Title';
 
 var size = size ?? 50;
 
 print('Configured with: title = $title, size = $size');
 
 }
 
 configure(title: options['title'], size: options['size']);
 
 } // o/p: configured with: title=original title, size= 100.

#### Question:16. 
 void main() {

 for (var i = 0; i < 3; i++) {
 
 print('Start of iteration $i');
 
 {
 
 var j = i * 2;
 
 print('Inner block: i = $i, j = $j');
 
}

 print('End of iteration $i');
 
 }
 
 } // o/p: start of iteration 0, inner block : i=0, j=0, end of iteration 0 , start of iteration 1, inner block : i=1, j=2, end of iteration 1 , start of iteration 2, inner block : i=2, j=4, end of iteration 2.

#### Question:17. 
 class Counter {

  int count = 0;
  
 void increment(count) {
 
count += 1;

 print('Inside increment: count = $count');
 
 }
 
 void display() {
 
 print('Counter value: $count');
 
 }
 
 }
 void main() {
 
 var counter = Counter();
 
  counter.increment(5);
  
  counter.display();
  
 } // o/p: inside increment : count= 6, counter value: 0.

#### Question:18. 
void main() {

 var value = 'outer';
 
 var items = [1, 2, 3];
 
 for (var i = 0; i < items.length; i++) {
 
 print('Loop $i - Before condition: value = $value');
 
 if (items[i] % 2 == 0){
 
 var value = 'inner even';
 
print('Loop $i - Even condition: value = $value');

 } else {
 
 var value = 'inner odd';
 
 print('Loop $i - Odd condition: value = $value');
 
 }
 
 print('Loop $i - After condition: value = $value');
 
 }
 
 print('After loop: value = $value');
 
 } // o/p: loop 0 - before condition : value = outer, loop 0 - odd condition :value : inner odd, loop 1 - before condition : value = outer, loop 1 - odd condition :value : inner even, loop 2 - before condition : value = outer, loop 2 - odd condition :value : inner odd.

#### Question:19. 
 void main() {
 
 var value = 42;
 
 var functions = [];
 
 void addFunction() {
 
 var multiplier = value;
 
functions.add((x) {

 var result = x * multiplier;
 
 return (y) {
 
 var sum = result + y;
 
 return (z) {
 
 var total = sum + z + value;
 
 return () ⇒ 'x: $x, y: $y, z: $z, multiplier: $multiplier, value: $value, total: $t
 
 };
 
 };
 
 });
 
 }
 
 addFunction();
 
  value = 100;
 
addFunction();

 var chain1 = functions[0](2)(3)(4);
 
 var chain2 = functions[1](2)(3)(4);
 
  value = 200;
  
 print(chain1());
 
 print(chain2());
 
 } // o/p: x = 2, y= 3, z=4, multiplier: 42, value = 200, total: 291, x=2, y=3, z=4, multiplier= 100, value= 200, total :407.

#### Question:20. 
 void main() {
     
for (var i = 0; i < 3; i++) {
 
 print('Loop iteration $i');
 
 if (i % 2 == 0){
 
 void evenFunction() {
 
 print('This is an even iteration: $i');
 
 }
 
 evenFunction();
 
 } else {
 
 void oddFunction() {
 
 print('This is an odd iteration: $i');
 
 }
 
 oddFunction();
 
 }
 
 }
 
 } // o/p: this is an even iteration :0, this is an odd iteration : 1, this is an iteration:2.

#### Question:21. 
void main() {

 var multiplier = 2;
 
 var numbers = [1, 2, 3, 4];
 
 var result = numbers.map((multiplier) ⇒ multiplier * multiplier).toList();

print('Original multiplier: $multiplier');

 print('Result: $result');
 
 } // o/p: original multiplier:2, result:[2, 4, 6, 8].

#### Question:22. 
 void main() {
 
 var x = 10;
 
 var y = 20;
 
 void outer(x) {
 
 print('Outer start: x = $x, y = $y');
 
 void inner(y) {
 
 var x = 30;
 
 print('Inner: x = $x, y = $y');
 
 }
 
 inner(x * 2);
 
 print('Outer end: x = $x, y = $y');
 
 }
 
 }
 
 outer(y);
 
 print('Main end: x = $x, y = $y') // o/p: outer start: x= 10, y=20, inner: x=30, y= 20, outer end : x= 20 , y= 20 , main end : x= 10 , y= 20.

#### Question:23. 
void main() {

 var items = ['apple', 'banana', 'cherry'];
 
 var count = 0;
 
 for (var item in items) {
 
count++;

 var message = 'Item $count: $item';
 
 print(message);
 
 }
 
print('Total items: $count');

 } // o/p: item 0: apple, item 1 : banana, item 2: cherry, total items: 3.

#### Question:24. 
 void main() {
 
 var counter = 0;
 
 void incrementCounter() {
 
counter++;

 print('Counter incremented to: $counter');
 
 }
 
 void resetCounter() {
 
counter = 0;

 print('Counter reset to: $counter');
 
 }
 
 void performOperations() {
 
 var operationCount = 0;
 
 void logOperation(String operation) {
 
operationCount++;

 print('Operation $operationCount: $operation');
 
 }
 
 incrementCounter();
 
 logOperation('increment');
 
 incrementCounter();
 
 logOperation('increment');
 
 resetCounter();
 
 logOperation('reset');
 
 }
 
 performOperations();
 
print('Final counter value: $counter');

 } // o/p: counter incremented to : 1, operation 1 : increment,counter incremented to : 2, operation 2 : increment, counter incremented to : 3, operation 3 : increment.

#### Question:25. 
 void main() {
 
 var flag = true;
 
 if (flag) {
 
 var message = 'Flag is true';
 
 print(message);
 
 } else {
 
 var message = 'Flag is false';
 
 print(message);
 
 }
 
 }
 
 var message = 'This is a different message';
 
 print(message) // o/p: flag is true, this is a different message. 

#### Question:26. 
 void main() {
 
  Function makeAdder(int amount) {
  
 return (int n) {
 
 return n + amount;
 
 };
 
 }
 
 var add2 = makeAdder(2);
 
 var add5 = makeAdder(5);
 
 print(add2(10));
 
 print(add5(10));
 
  amount = 10;
  
 print(add2(10));

print(add5(10));

 } // o/p: 12, 15, 12, 15.

#### Question:28. 
void main() {

 var values = [1, 2, 3];
 
 for (var value in values) {
 
 print('Processing value $value');
 
 void processValue() {
 
 var processed = value * 10;
 
 print('Processed value: $processed');
 
 }
 
 processValue();
 
 }
 
 } // o/p: processing values 1, processed value : 10, processing values 2, processed value : 30, processing values 3, processed value : 30. 
 
#### Question:29. 
 void main() {
 
 var items = ['apple', 'banana', 'cherry'];
 
 var results = [];
 
 for (var i = 0; i < items.length; i++) {
 
 var item = items[i];
 
results.add(() ⇒ 'Processing $item at index $i');

 }
 
 }
 
 for (var i = 0; i < results.length; i++) {
 
 var result = results[i];
 
 print('Result $i: ${result()}');
 
 } // o/p: result 0 : processing apple at index 0, result 1 : processing banana at index 1, result 2 : processing cherry at index 2.

#### Question:30. 
 void main() {
 
 var status = 'success';
 
 switch (status) {
 
case 'success':

 var message = 'Operation completed successfully';
 
 print(message);
 
 break;
 
 case 'error':
 
 var message = 'An error occurred';
 
 print(message);
 
 break;
 
 default:
 
 
 var message = 'Unknown status';
 
 print(message);
 
 }
 
 } // o/p: operation completed successfully. 

#### Question 31:
void main() {

 var count = 0;
 
  Function createCounter(int start) {
  
 var localCount = start;
 
 return () {
 
count++;

localCount += count;

 return () {
 
 var snapshot = localCount;
 
localCount = localCount * 2;

 return () {
 
 return 'Global count: $count, Local count: $localCount, Snapshot: $snapshot
 
 };
 
 };
 
 };
 
 }
 
var counter1 = createCounter(5);

 var counter2 = createCounter(10);
 
 var result1 = counter1();
 
 var result2 = counter2();
 
  count = 100;
  
 var finalResult1 = result1()();
 
 var finalResult2 = result2()();
 
 print(finalResult1);
 
 print(finalResult2);
 
 } // o/p:global count:100, local count:12, snapshot:6, global count:100, local couont:24, snapshot:12.

#### Question:32. 
 void main() {
 
 var a = 1;
 
 var b = 2;
 
 var c = 3;
 
 if (a < b) {
 
 var d = a + b;
 
 print('First if: a = $a, b = $b, c = $c, d = $d');
 
 if (b < c) {
 
 var e = b + c;
 
 var a = 10; 
 
print('Second if: a = $a, b = $b, c = $c, d = $d, e = $e');

 if (a > c) {
 
 var f = a + e;
 
 var d = 20; 
 
print('Third if: a = $a, b = $b, c = $c, d = $d, e = $e, f = $f');

a = 30;

d = 40;

}

 print('After third if: a = $a, b = $b, c = $c, d = $d, e = $e');
 
 }
 
 print('After second if: a = $a, b = $b, c = $c, d = $d');
 
 }
 
 print('After all ifs: a = $a, b = $b, c = $c');
 
 } // o/p:first if :a =1, b= 2, c=3, d=3, second if : a=10, b=2, c=3, d=3 , e=5, third if:a=10, b=2, c=3, d=20 , e=5,f=15  after third if : a=20, b=2, c=3, d=40, e=5, after second if : a= 1, b=2, c=3, d=3, after all ifs: a=1, b= 2, c=3.

#### Question:33. 
 void main() {
 
 for (var i = 0; i < 3; i++) {
 
 print('Outer loop $i start');
 
 for (var i = 0; i < 2; i++) {
 
 print('  Inner loop $i');
 
 }
 
 print('Outer loop $i end');
 
 }
 
 } // o/p:outerloop 0 start , inner loop 0, inner loop 1, outer loop 0 end. outerloop 1 start , inner loop 0, inner loop 1, outer loop 1 end. outerloop 2 start , inner loop 0, inner loop 1, outer loop 2 end.

#### Question:34. 
 void main() {
 
 var functions = [];
 
 for (var i = 0; i< 3; i++) {
 
 void createFunction() {
 
 var multiplier = i + 1;
 
functions.add(() ⇒ 'Function $i with multiplier $multiplier');

 }
    
createFunction();

  }
  
  for (var function in functions) {
  
print(function());

  }
  
 } // o/p: function 0 with multiplier 1, function 1 with multiplier 2, function 2 with multiplier 4.

#### Question:35. 
void main() {
 
var functions = [];
  
for (var i = 0; i < 3; i++) {
  
void addFunction(i) {
    
functions.add(() ⇒ 'Outer i: $i');
      
for (var i = 0; i < 2; i++) {

void captureI(){

var captured = i;

functions.add(() ⇒ 'Inner i: $i, Captured: $captured, Outer i: ${i + captured

}

 captureI();
 
 }
 
}
    
addFunction(i);

}
  
for (var f in functions) {

print(f());

}

 } // o/p: outer i=0, inner i=0, captured:0, outer i=1, inner i=0, captured:0,inner i=1, captured:1, outer i=2, inner i=0, captured:0,inner i=1, captured:1 , outer i=2.

#### Question:36. 
void main() {

 var i = 0;
 
 do {
 
 print('Iteration $i starts');
 
 if (i > 0){
 
 var previousValue = i - 1;
 
 print('Previous value was $previousValue');
 
 }
 
i++;

 print('Iteration $i ends');
 
 } while (i < 3);
 
 } // o/p:iteration 0 starts, iteration 1 starts, previous value was 0, iteration 1 ends , iteration 2 starts , previous value was 1 , iteration 2 ends.
 
#### Question:37. 
 void main() {
 
 var value = 'global';
 
 void level1(){
 
 print('Level 1: value = $value');
 
 var level1Var = 'level1';
 
 void level2(){ 
 
 print('Level 2: value = $value, level1Var = $level1Var');
 
 var value = 'level2'; 
 
var level2Var = 'level2';

 void level3(){
 
 print('Level 3: value = $value, level1Var = $level1Var, level2Var = $level2Var'
 
level1Var = 'modified by level3';
 
void level4(){

 var level1Var = 'level4'; 
 
print('Level 4: value = $value, level1Var = $level1Var, level2Var = $level2Var

value = 'modified by level4';

 }
 
 level4();
 
 print('After level4: value = $value, level1Var = $level1Var');
 
 }
 
 level3();
 
 print('After level3: value = $value, level1Var = $level1Var, level2Var = $level2Var
 
 }
 
 level2();
 
 print('After level2: value = $value, level1Var = $level1Var');
 
 }
 
 level1();
 
 print('After level1: value = $value');
 
 } // o/p: level 1: value =global, level2: value= global, level1var = level1, level3: value= level2, level1var= level1, level 4 :value= level2, level1var= level4, level2var = level2, afterlevel4: value=level2, level1var=level1, level2var=level2, after level2: value= global, level1var=level1, after level1: value= global.

#### Question:38. 
 void main() {
 
 var list = [1, 2, 3];
 
 var sum = 0;
 
  list.forEach((item) {
  
 var doubled = item * 2;
 
sum += doubled;

 print('Processing item $item, doubled: $doubled, running sum: $sum');
 
 });
 
 print('Final sum: $sum');
 
} // o/p: processing item 1 , doubled:2 , running sum :2,processing item 2 , doubled:4 , running sum :6,processing item 3 , doubled:6 , running sum :12, final sum: 12.

#### Question:39. 
void main() {

 outerLoop: for (var i = 0; i < 3; i++) {
 
 print('Outer loop $i');
 
 for (var j = 0; j < 3; j++) {
 
 print('  Inner loop: i = $i, j = $j');
 
 if (i == 1 && j == 1){
 
 var breakMessage = 'Breaking outer loop';
 
 print('$breakMessage');
 
 break outerLoop;
 
 }
 
 }
 
 print('End of outer loop $i');
 
 }
 
 }
 
 print('After all loops') // o/p: outerloop 0 , innerloop : i=0,j=0, i=0, j=1, i=0, j=2, end of outerloop 0, outerloop 1 , innerloop : i=1, j=0, i=1, j=1, breaking outerloop, after all loop.

#### Question:40. 
 void main() {
 
 var numbers = [1, 2, 3];
 
 var factor = 10;
 
 var multiplied = numbers.map((number) {
 
 var result = number * factor;
 
 return result;
 
 }).toList();
 
 print('Original numbers: $numbers');
 
 print('Multiplied by $factor: $multiplied');
 
  factor = 20;
  
 print('After changing factor to $factor, multiplied is still: $multiplied');
 
 } // o/p: original numbers = [1,2,3], multiplied by factor :[10,20,30], after changing factor to 20, multiplied :[10,20,30].

#### Question:41. 
 void main() {
 
 var outer = 'outer value';
 
 if (true) {
 
 print('Outer if: $outer');
 
 var middle = 'middle value';
 
 if (true) {
 
 print('Inner if: outer = $outer, middle = $middle');
 
 var inner = 'inner value';
 
outer = 'modified outer';

 print('Modified values: outer = $outer, inner = $inner');
 
 }
 
 }
 
 }
 
 print('After inner if: outer = $outer, middle = $middle');
 
 print('After outer if: outer = $outer') // o/p: outerif: outer value, innerif: outer= outer value, middle= middle value, modified values: outer= modified outer, inner = inner value, after inner if : outer = outer value, middle = middle value, after outer if : outer = outer value.

#### Question:42.
 void main() {
 
 var choice = 2;
 
 switch (choice) {
 
 case 1:
 
 var result = 'Option 1 selected';
 
 print(result);
 
 break;
 
 case 2:
 
var result = 'Option 2 selected';

 print(result);
 
 break;
 
 default:
 
 var result = 'Unknown option';
 
 print(result);
 
 }
 
 } // o/p: option 2 selected. 

#### Question:43.
 void main() {
 
 var items = [5, 10, 15, 20, 25];
 
 var threshold = 18;
 
 var sum = 0;
 
 for (var item in items) {
 
 if (item > threshold) {
 
 var message = 'Found value $item exceeding threshold $threshold';
 
 print(message);
 
 break;
 
 }
 
 }
 
 }
 
 sum += item;
 
 print('Added $item, sum is now $sum');
 
 print('Final sum: $sum') // o/p: Found value 20 exceeding threshold 18, Error.

#### Question:44. 
 void main() {
 
  late var x = getValue();
  
 for (var i = 0; i < 3; i++) {
 
 print('Iteration $i start');

if (i == 1){

 print('x value: $x');
 
 }
 
 print('Iteration $i end');
 
 }
 
 print('After loop');
 
  int getValue() {
  
 print('getValue called');
 
 return 42;
 
 }
 
 } // o/p: iteration 0 start, iteration 0 end, iteration 1 start, x value: 42, iteration 1 end.

#### Question:45. 
 void main() {
 
 for (var i = 0; i < 5; i++) {
 
 print('Iteration $i starts');
 
 if (i % 2 == 0){
 
 var skipMessage = 'Skipping even number $i';
 
 print(skipMessage);
 
 continue;
 
 }
 
 print('Processing odd number $i');
 
 }
 
 } // o/p: Iteration 0 starts,Skipping even number 0,Iteration 1 starts,Processing odd number 1,Iteration 2 starts,Skipping even number 2,Iteration 3 starts,Processing odd number 3,Iteration 4 starts,Skipping even number 4.

#### Question:46. 
 void main() {
 
 var value = 5;

void outerFunction() {

 print('Outer function: value = $value');
 
 if (value > 3){
 
 void innerFunction() {
 
 print('Inner function: value = $value');
 
value = 10;

 }
 
 innerFunction();
 
 print('After inner function: value = $value');
 
 }
 
 void anotherFunction() {
 
 var value = 20;
 
 print('Another function: value = $value');
 
 if (value > 15){
 
 void innerFunction() {
 
 print('Another inner: value = $value');
 
value = 30;

 }
 
 innerFunction();
 
 print('After another inner: value = $value');
 
 }
 
 }
 
 anotherFunction();
 
 print('After another function: value = $value');
 
 }
 
 outerFunction();
 
print('After outer function: value = $value');

 } // o/p: Outer function: value = 5,Inner function: value = 5,After inner function: value = 10,Another function: value = 20,Another inner: value = 20,After another inner: value = 30,After another function: value = 10,After outer function: value = 10.

#### Question:47.
 void main() {
 
 var list = [1, 2, 3];
 
 for (var i = 0; i < list.length; i++) {
 
 print('Processing item ${list[i]} at index $i');
 
 if (i == 1){
 
 list.add(4);
 
 print('Added item 4, list is now: $list');
 
 }
 
 }
 
 }
 
 print('Final list: $list') // o/p: Processing item 1 at index 0,Processing item 2 at index 1,Added item 4, list is now: [1, 2, 3, 4],Processing item 3 at index 2,Processing item 4 at index 3,Final list: [1, 2, 3, 4].

#### Question:48.
 void main() {
 
 var x = [1, 2, 3];
 
 var y = 10;
 
 void mutateValues(List<int> a, int b) {
 
 print('Inside function - before mutation: a = $a, b = $b');
 
a.add(4);

b = 20;

 print('Inside function - after mutation: a = $a, b = $b');
 
 void innerFunction() {
 
a.add(5);

b = 30; 

}
 
 print('Inside inner function: a = $a, b = $b') // o/p:  Before function call: x = [1, 2, 3], y = 10,Inside function - before mutation: a = [1, 2, 3], b = 10,Inside function - after mutation: a = [1, 2, 3, 4], b = 20,Inside inner function: a = [1, 2, 3, 4, 5], b = 30,After inner function: a = [1, 2, 3, 4, 5], b = 30,After function call: x = [1, 2, 3, 4, 5], y = 10.



