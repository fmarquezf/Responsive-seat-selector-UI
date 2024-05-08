# Responsive-seat-selector-UI

This solution was developed using the web framework Astro and the library React to build the interactive components of the project. 

The seat distribution was made with a file run by Node.js, which create a json file with the information of each seats, the row they belong, the seat number, the Id composed of the seat number and the row they belong, the section they belong (this will be used for mobile UI), and the state if the seats are available or unavailable.

Then that information is taken to organize each seat and show their state, their state change to "selected" when they are clicked, they can be deselected, if they are clicked again.

There is a button called "reserve seat", which shows a modal with the number of seats selected and the total price to reserve those seats, there are two buttons in that modal, one to close the modal, and the other one called "Pay" to simulate the action of reserving those seats, once it is clicked it shows that the purchase was successful, and the state of the seats selected change to unavailable, because they were reserved.

When seen on smaller devices like mobile phones, the UI changes, and now there are 3 sections shown (A, B and C), those sections can be clicked to zoom them in where the seats can now be selected, a back button is shown when the sections are zoomed in to go back to the 3 sections again.

The project can be seen at https://fmarquezf.github.io/Responsive-seat-selector-UI/
