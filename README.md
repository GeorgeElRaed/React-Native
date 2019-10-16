# React-Native
A computer store inventory mobile application.

I used mongoDB as my graphQL database which work perfectly with the nature of javascript.
So to test the app import the database from the Database folder and change the IP address

```
const IP = "199.199.199.125";
const PORT = 4000;
```

in `/components/API/API.js` to your machine's IP Address.

You can now run the server using nodemon. Just type (npm run watch) in a terminal and nodemon will watch for file changes and errors.

To test the app on an android device/emulator run `react-native run-android`.

The app was not tested on iOS.

To Add devices use `/localhost:4000/Items/AddItem`

To Add a review simply tap Review Item in the Item's page.
Click see more to view more in the review list (6 minimum for it to work)

Scroll down in the main screen to test pagination.

Click the search icon in the header bar to search for a specific Item.

In case of Errors try going:
```sh
cd android
./gradlew clean
cd ..
react-native run-android
```