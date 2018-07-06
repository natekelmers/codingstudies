
nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~
$ pwd
/c/Users/Nathan.y.kelmers

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~
$ cd Desktop/ds-dc-25/

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ ls
1_lessons/  2_dataset/  3_homework/  4_homework_submission/  5_final-projects/  6_resources/  README.md

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ head -n20 2_dataset/chipotle.tsv
order_id        quantity        item_name       choice_description      item_price
1       1       Chips and Fresh Tomato Salsa    NULL    $2.39
1       1       Izze    [Clementine]    $3.39
1       1       Nantucket Nectar        [Apple] $3.39
1       1       Chips and Tomatillo-Green Chili Salsa   NULL    $2.39
2       2       Chicken Bowl    [Tomatillo-Red Chili Salsa (Hot), [Black Beans, Rice, Cheese, Sour Cream]]      $16.98
3       1       Chicken Bowl    [Fresh Tomato Salsa (Mild), [Rice, Cheese, Sour Cream, Guacamole, Lettuce]]     $10.98
3       1       Side of Chips   NULL    $1.69
4       1       Steak Burrito   [Tomatillo Red Chili Salsa, [Fajita Vegetables, Black Beans, Pinto Beans, Cheese, Sour Cream, Guacamole, Lettuce]]      $11.75
4       1       Steak Soft Tacos        [Tomatillo Green Chili Salsa, [Pinto Beans, Cheese, Sour Cream, Lettuce]]       $9.25
5       1       Steak Burrito   [Fresh Tomato Salsa, [Rice, Black Beans, Pinto Beans, Cheese, Sour Cream, Lettuce]]     $9.25
5       1       Chips and Guacamole     NULL    $4.45
6       1       Chicken Crispy Tacos    [Roasted Chili Corn Salsa, [Fajita Vegetables, Rice, Black Beans, Cheese, Sour Cream]]  $8.75
6       1       Chicken Soft Tacos      [Roasted Chili Corn Salsa, [Rice, Black Beans, Cheese, Sour Cream]]     $8.75
7       1       Chicken Bowl    [Fresh Tomato Salsa, [Fajita Vegetables, Rice, Cheese, Sour Cream, Guacamole]]  $11.25
7       1       Chips and Guacamole     NULL    $4.45
8       1       Chips and Tomatillo-Green Chili Salsa   NULL    $2.39
8       1       Chicken Burrito [Tomatillo-Green Chili Salsa (Medium), [Pinto Beans, Cheese, Sour Cream]]       $8.49
9       1       Chicken Burrito [Fresh Tomato Salsa (Mild), [Black Beans, Rice, Cheese, Sour Cream, Lettuce]]   $8.49
9       2       Canned Soda     [Sprite]        $2.18

---

1. Each column appears to contain data on items in Chipotle orders (order ID, quantity of each item in an order, item chosen on the menu, options selected for each item, and price of that item). Each row appears to contain data for items in the order.

---

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ head -n9000 2_dataset/chipotle.tsv

---

2. There appear to be 1834 orders in "chipotle.tsv" based on the output (not shown) of the code above.

---

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ wc -l 2_dataset/chipotle.tsv
4623 2_dataset/chipotle.tsv

---

3. There are 4623 lines in this file.

---

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ grep Chicken Burrito 2_dataset/chipotle.tsv | wc -l
grep: Burrito: No such file or directory
1565

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ grep Steak Burrito 2_dataset/chipotle.tsv | wc -l
grep: Burrito: No such file or directory
706

---

4. Chicken burritos appear to be more popular than steak burritos.

---

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ grep Chicken Burrito 2_dataset/chipotle.tsv | grep Pinto | wc -l
grep: Burrito: No such file or directory
265

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ grep Chicken Burrito 2_dataset/chipotle.tsv | grep Black | wc -l
grep: Burrito: No such file or directory
759

---

5. Chicken burritos appear to have black beans more often than pinto beans.

---

6. Here is a list of all the .csv and .tsv files in our repo:

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~
$ cd Desktop/ds-dc-25/

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ find -name *sv
./2_dataset/311-service-requests.csv
./2_dataset/airlines.csv
./2_dataset/bank-additional.csv
./2_dataset/bikeshare.csv
./2_dataset/chipotle.tsv
./2_dataset/citibike_feb2014.csv
./2_dataset/collegeadmissions.csv
./2_dataset/drinks.csv
./2_dataset/drones.csv
./2_dataset/features.csv
./2_dataset/flight_delays.csv
./2_dataset/haystack.csv
./2_dataset/hitters.csv
./2_dataset/imdb_1000.csv
./2_dataset/msleep.csv
./2_dataset/mtcars.csv
./2_dataset/NBA_players_2015.csv
./2_dataset/old-faithful.csv
./2_dataset/oracle_10k.csv
./2_dataset/ozone.csv
./2_dataset/rossmann-stores.csv
./2_dataset/rossmann.csv
./2_dataset/sms.tsv
./2_dataset/stores.csv
./2_dataset/student_comments.csv
./2_dataset/stumbleupon.tsv
./2_dataset/syria.csv
./2_dataset/test.csv
./2_dataset/titanic.csv
./2_dataset/train.csv
./2_dataset/ufo.csv
./2_dataset/vehicles_test.csv
./2_dataset/vehicles_train.csv
./2_dataset/vti.csv
./2_dataset/walmart-sales.csv
./2_dataset/wine.csv
./2_dataset/yelp.csv

---

7. There appears to be 2357 instances of the word "dictionary" (case insensitive) in our repo, based on the following code:

nathan.y.kelmers@AFSWWDAVAHWP65 MINGW64 ~/Desktop/ds-dc-25 (master)
$ find . name "?ictionary*" | wc -l
find: ‘name’: No such file or directory
find: ‘?ictionary*’: No such file or directory
340