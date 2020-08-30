This project was created with React[Create React App](https://github.com/facebook/create-react-app).

# News Application


## Table of Contents
- [Features](#features)
- [Tools Used](#tools-used)
- [Frontend React App](#frontend-react-app)
- [Backend Django Server](#backend-django-server)
- [Note](#note)
- [Dependecies Used In Client](dependecies-used-in-client)


## Features
- Headings, business and technology news are displayed on home page.
- Search using any query string like news about apple.
- Coose the news sources through navbar.
- Navbar links contain business and technology news.


## :wrench: Tools Used
- [React](http://reactjs.org/)
- [Django](https://docs.djangoproject.com/en/3.1/)
- [Css](https://getbootstrap.com/)


## Frontend React App

### Step 1: Clone The Repo

Fork the repository. then clone the repo locally by doing -

```bash
git clone https://github.com/Gunjan6788/tripping-clone.git
```

### Step 2: Install Dependencies

```bash
cd client
```

install all the dependencies
```bash
npm install
```

### Step 3: Start Development Server

Then start the development Server
```
npm start
```
After running the development server the site should be running on https://localhost:3000



## Backend Django Server

### Step 1: Install virtual env

```bash
cd server
```
```
python3 -m venv venv
```
activate the virtual env
```
. venv/bin/activate
```

### Step 2: Install Requirements

install all dependancies
```
pip install -r requirements.txt
```
 
### Step 3: Run the django server in development

```
python3 manage.py runserver
```

## Note
- In the Django server data is scraping from [NewsApi](https://newsapi.org/)
- After running django server, if needed change the localhost api in the client redux/action.


## Dependecies Used In Client

1. react-elastic-carousel
2. axios
3. react-router-dom
4. moment
5. react-redux
6. uuidv4
7. redux
8. redux-thunk