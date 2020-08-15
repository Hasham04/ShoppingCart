Project By: Mahmoud Akid, Hasham Rasheed, Benjamin Calcote.


To run the app go to restfulwebservices folder and under the com.ShoppingApp.rest.webservices.restfulwebservices run RestfulWebServicesApplication.java. try using eclipse for best results. Then run the ng serve — open in terminal.

IMPORTANT: when trying to save a new item if nothing happens repeatedly press the save button to send request to the server and it should work on the second or third try.

IMPORTANT: The password is dummy for user Hasham



The purpose of this assignment was to design a shopping list application a with full front and back end. In this application you can add the item, the quantity, price, and any discount u may have for the item.The price is calculated depending on the quantity. The discount is calculated depending on the price and is then subtracted from total price. You can update existing items and also create new ones. You can also delete items form the list. The application features JWT token based authentication system.

front end
So our final app features a login and logout functionality and the ability to save items for the user. We made the app from scratch in our back end in java using spring boot. We also implemented the functionality to update any existing items the user has saved. Our app has a login component, logout component, a menu component which is what we are redirected to after out credentials have been matched with the backend. We are using two data services on is called the Shopping-data service, which retrieves the items from the api and here we run get, put, delete, post commands. we also have a item component this is where we save the itemss after they have been updated. 

backend

our back-end is done in java. we use spring web services to create our backend. We create all the attributes for our shopping list app in the Item.java file. We utilize JWT token based authentication to authenticate the user. We compare the username and password from the forms with users and passwords we have saved in session. We save our items in data.sql file from which they are read to the front end. The reason we chose spring boot was because we had access to videos from which we could learn how spring works. Spring is useful because it prioritizes convention over configuration which means we don't have to write a lot of boiler plate code.

I think the future we would want to use a much simpler authentication system. We would also want to create a new user from the main page, which is then saved to the database and accessible instantly. One issue that is present in the app is that all the items are being saved across all users. In the future we would want it so that each user has its own items which are saved to the database.

Benjamin

Since Benjamin did not work with us Springboot backend he was tasked with watching all the videos and understanding how everything is working. Because of time constraints we could not wait for him to get the required knowledge to help us work on the redesign of the project. We guided him along thats the best we could do.

Mahmoud

Mahmoud was tasked to recreate the login page and recreate all html of the project. He also getting the authentication login/logout working. Mahmoud also helped with attributes

Hasham

Hasham worked on creating all the attributes for each item. He created functions for the price, and discount functions aswell as connecting the front end to the back end item api. Hasham worked on creating the back end api as well. He also set up the h2-database

We have demonstrated demonstrated independent learning. Up to 5 points? Hahahahaha