[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Description
This second project was a full stack application that allowed a user to create
an account, sign in, change password and sign out. Once signed in, the user
can then add new 'to do' items giving description, due date and priority. The
user could also update, delete existing items as well as see  all items in their list.

## Wireframe:
http://imgur.com/8IiVqyz


## Github and Heroku Repos:
FRONTEND REPO:
https://github.com/conorjennings/chores

FRONTEND DEPLOYED
https://conorjennings.github.io/chores/

Gihub BACKEND REPO:
https://github.com/conorjennings/chores-api

Heroku BACKEND DEPLOYED:
https://dry-hollows-40181.herokuapp.com/


## List of Technologies Used
HTML,
CSS,
JavaScript
jQuery,
SASS
Bootstrap
Handlebars
AJAX
Ruby
Rails

## Software Design/Problem Solving :
How did you break up the functionality of your application?
I tackled this design differently than project 1 in that I planned out ahead what
the major steps were starting with the user storeies and wireframe idea. I was
able to then compartmentalize issues as they were in their own sections (front
end logic versus back end logic, then user autherntication versus chore list items).

From a database perspective, I was quite comfortable in working with a one to
many relationship between USER and CHORES. Getting this correct from the outset
made the database migratons in rails quite easy which I was very glad about!

How did you solve the problems that you encountered along the way?
I also found it helpful to work in small sections and then debug it a lot and then
add/commit to GIT and move onto the next step. By focusing on the problem at
hand and by working in small chunks, I was able to stay more in control and found
it faster to triage issues.

 Did you added a personal spin or creative element into your project submission?
 Well I like the fact that all the nine navigation buttons work seamlessly
 and that they clear out when needed and give the user a clean interface. I also
 tried to use a bit of creativity in the serializer in Ruby to convert the
 front enf drop down numeric values for Priority Level into a string value
 (1 = Urgent etc) that was then displayed via Handlebars.

 ## User Stories:
 1) As a user, I want to sign up, so that I can create To Do list items.
 2) As a user, I want to sign in, so that I can add To Do list items.
 3) As a user, I want to change a password so that I can protect my identity.
 4) As a user, I want to sign out, so that I can safely log out and no one can see my data.
 5) As a user, I want to add new To Do items so that I can keep track of them
 6) As a user, I want to update existing To Do items so that I can modify them
 7) As a user, I want to add delete To Do items so that I can loose track of them
 8) As a user, I want to be able to see all my To Do items


## Challenges.
1. Time! Definately could have used another day or 2 to be  more satisfied with the
outcome and to allow for more testing and debugging.

2. Not understanding how to implement the secure login requirements in Rails was
difficult to follow. I felt doing it the morning of the project was a tad rushed.

3. Not having sufficient knowledge of Rails to wade into deeper terretory to be
able to run different types of queries rather than just a SELECT * or a SELECT *
for one user ID. Opened an issue on this but ran out of time to try to
implement it.
https://github.com/ga-wdi-boston/full-stack-project/issues/773

4. Got stuck in a few nasty bugs with using show/hide methods with a variety of
buttons on the app and with clearing out text boxes if user hit a cancel button.
