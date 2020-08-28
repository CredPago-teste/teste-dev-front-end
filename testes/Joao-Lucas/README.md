# Test Developer Front-end

Hi, this is a job opportunity project where I developed (copied the idea) a front end with React JS, Redux, styled-components, proptypes and tried to do my tests...
Then, in it you will find some screens, such as: Login, Registration, Password recovery, Listing of visitors and Profile.
Each user has their visitors which is determined by the user ID that created it.

OK, let's go.

## Installation

First you need to install [Node.js](https://nodejs.org/). The version used was `12.18.2`
After that, you need to clone this repository, and in the application folder, you will have to install the dependencies and initialize the frontend:

```
npm install
npm start
```

OK, we will use a fake backend, to be able to list, create, edit and delete the data on the front end. You need to clone this repository. Install the dependencies and exchange the db.json file for the db.json that is in the root folder of the Test Developer Front-end repository.
To initialize the backend, it is necessary to run the following command in the root folder:

```
sudo npm install -g json-server
json-server --watch db.json
```

Ready, everything functional!

## Technologies

- ReactJS
- Redux
- Styled-components
- Prop-types
- Mini tests
- Responsive web and mobile