This is a little demonstration project showing how a simple method can be covered with unit
tests to check its functionality. This uses Javascript to make it simple to run.

To run the rather simple site to be tested, open custardCreamsOrdering.html to get a feel
for what the page does. It uses knockout.js and has an ammount of custard creams to order, 
an info message to relay messages to the user and an onlick method for the order button to update
the info message and 'place' an order to a fake ajax api address.

To run the unit tests for the knockout behind the page, open Tests\TestOrderFormViewModel-Tests.html
file. This page will run the tests automatically and to rerun just refresh the page. There are
6 tests and 5 pass with 1 (intentional) failure caused by an (unintentional) typo when writing
the view model. I left that in to show how a unit test can pick up an error in something you
were sure was correct ;). 

Hopefully the code is fairly simple to follow, placeOrder() in OrderFormViewModel is the only
part tested because it is the only part of the view model that acutally does something. There is
a test going into every branch in the code to check that the expected outcome happens in each 
branch.