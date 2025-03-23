##### Problem 1: 
void main1() { 

if (true) { 

int number = 42; 

} 

print(number); 

} 

main1(); 

Output :

undefined. 

##### Problem 2: 

void main2() { 

int value; 

if (false) { 

value = 100; 

} 

print(value); 

} 

main2(); 

Output:  

Undefined. 

##### Problem 3: 

int count = 5; 

void main3() { 

int count = 10; 

print(count); 

} 

main3(); 

Output: 

10. 

##### Problem 4: 

void main4() { 

for (int i = 0; i < 3; i++) { 

String message = "Loop $i"; 

print(message); 

} 

print(message); 

} 

main4(); 

Output: 

Loop $i 

Loop $i 

Loop $i 

undefined. 

##### Problem 5: 

void processNumber(int num) { 

num = num + 1; 

} 

void main5() { 

print(num); 

int x = 5; 

processNumber(x); 

print(x); 

} 

main5(); 

Output: 

Undefined, 

5. 

##### Problem 6: 

void main6() { 

bool isActive = false; 

if (true) { 

bool isActive = true; 

print(isActive); 

} 

print(isActive); 

} 

main6(); 

Output:  

True, 

False.

##### Problem 7
void main7() {

int result = 0;

{

int result = 50;

print(result);

}

print(result);

}

main7();

Output: 

50,

0.

##### Problem 8
void main8() {

if (true) {

String name = "Alice";

} else {

String name = "Bob";

}

print(name);

}

main8();

Output: 

Undefined.

##### Problem 9
double price = 9.99;

void applyDiscount() {

price = price * 0.9;

}

void main9() {

double price = 20.00;

applyDiscount();

print(price);

}

main9();

Output : 

20.

##### Problem 10
void main10() {

while (true) {

int counter = 0;

counter++;

print(counter);

break;

}

print(counter);

}

main10();

Output:

1,

undefined.

##### Problem 11
void updateValue(int val) {

val = 50;

}

void main11() {

int x = 10;

if (x > 0) {

updateValue(x);

int y = x + 5;

}

print(y);

}

main11();

Output:

15.

##### Problem 12
String status = "Idle";

void toggleStatus() {

String status = "Active";

}

void main12() {

toggleStatus();

print(status);

}

main12();

Output:

idle.

##### Problem 13
void main13() {

bool flag = false;

void innerFunc() {

flag = true;

int count = 10;

}

innerFunc();

print(count);

}

main13();

Output:

10.

##### Problem 14
void compute(int num) {

if (num > 0) {

String message = "Positive";

}

}

void main14() {

compute(5);

print(message);

}

main14()

Output: 

positive.

##### Problem 15
int score = 100;

void resetScore() {

score = 0;

}

void adjustScore() {

int score = 50;

resetScore();

}

void main15() {

adjustScore();

print(score);

}

main15();

Output:

100.

##### Problem 16
void main16() {

double average = 0.0;

{

int count = 3;

{

double total = 15.0;

average = total / count;

}

print(total);

}

print(average);

}

Output:

Function call does not take place.

##### Problem 17
void increment(int value) {

value += 1;

}

void main17() {

int sum = 0;

for (int i = 0; i < 3; i++) {

increment(i);

if (i == 2) {

bool done = true;

sum += i;

}

}

print(done);

}

main17();

Output:

undefined.

 