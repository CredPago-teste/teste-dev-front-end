# Django Customers API - OOWLISH

The API was developed using Django and Django-Rest-Framework. There two endpoints one for listing all the clients and other to filter the clients using the ID. There is a endpoint for consuming using GraphQL queries.

---

## Installation

- Clone this repo to your local machine using `https://github.com/meiraDaniel/oowlishChallenge` or download the repo and unzip the files.
- You are gonna need a Google API KEY, you can get one in `https://developers.google.com/maps/documentation/geolocation/get-api-key`. If you don't want to create one i will send my API KEY via email.

---

### Setup

- Replace the Google API KEY inside .env file with a real Google API KEY.
- Inside the main dir run the commands bellow.

> install the dependencies

```shell
$ pip install -r requirements.txt
```
> Create the migrations for the database

```shell
$ python manage.py makemigrations
$ python manage.py migrate
```

> Populate the database with the customers.csv file

```shell
$ python manage.py insert_customers_data customers.csv
```
> Launch the api

```shell
$ python manage.py runserver
```

## Usage

You could acess the API in the browser using localhost:8000 to have acess the swagger view, or you can use localhost:8000/graphql to acess the GraphQL endpoint.

> Examples GraphQL queries

```shell

# Get all customers
query {
  customers {
    id
    firstName
    lastName
    email
    city
  } 
}


# Get customer by ID
query {
  customer (id:1) {
    id
    firstName
    lastName
    email
    city
  } 
}
```
