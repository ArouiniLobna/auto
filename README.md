As start and to save time for this test, i have used code bootstrapping tool called react-boilerplate which help save building the project base time. This tool set up by default a Redux store and attach the reducer/saga/selectors to it.

visit https://www.reactboilerplate.com/ to know more on how run more commands on the App

To fetch the Apis, axios or fetch will do same effecient work as i am building a small app. However, when building bigger apps, it is better to use axios and will be using it within the test as well.

ASSEMPTIONS:
1. display countries dropdown from the api response
2. on application load, the text box will display a place holder - Select -
3. when text box is selected/focused, the list of countries will be listed
4. from here, they are two scenarios:
4.1. user select dom the drop down, as result, the flag and country name will be displyaed in the field and the drop down will be closed
4.2. user enter some value in the text box, then select a country from new filtered dropd down. Then, the flag and country name will be displyaed in the field and the drop down will be closed
5. in the scenario where a country is selected, then the user select the textbox and start editing the country name, the flag attached to the textbox will be hidden until valid value get selected from the drop down
6. as wasnt able to open sketch file in reall app such as photoshop, tried my best provide as much similar visual it can be without debbugging actual design file.

CHALLENGES:
1. dispalying the flag when selecting a country
1. dispalying the flag when editing an existing selection

THINGS TO CONSIDER IN REAL TIME APP
1. store the countries in global storage such as localstorage/sessionstorage/... after thr first load of the api, as this api returns will not change, it will be great addition the app performance and will save us time of loading the countries list each time we render the drop down.
2. the flag image next to the text field, you can notice the image changing when switchin between countries selection.
3. Consider displaying clear message to the user in case he entered a country name but did not actually selected from the drop down. This scenario can be not very clear to the users, so the UI should be able to help/quide the user in case did not do the right selection.
4. when loading first time the countries from the api, there is error state stored, that can be used to display message and disable the textbox in case the api call returns an error and no countries get displayed.


DEVELOPMENT PROCESS (spent 1h45min):
1. build connected/container component that will hanlde the  countries api call and returns response and loading/errors status
2. build basic skeleton for the dropdown to display loading status of the api when retreiving the countries list
3. build a component that will hold later the text field and the drop down menu. This component will hold the shared state between the child components and handle common functions
3. build dropdown that display countries and handle the item selection where stored the current country name and flag within common state as will be used to display in the input field
3. build text input that will be used to search a country and also will hold the drop down selection (name + flag)
4. AVOID conditional rendring in the process when possible, as per new standards, countinous mounting/unmounting elements from the DOM has huge performance side cost ( implemented on the flag image next to the text field in this example)


RUNNING THE PROJECT LOCALLY
1. clone the project into your local machine
2. npm install
3. npm start
4. run the application on your localhost port 3000

RUNNING THE TESTS
1. npm run test --> will run full test and generate coverage report
2. npm run test:watch  ---> help keep test runing when changes are made
