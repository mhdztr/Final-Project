# CASE & PROSECUTOR PROGRAM

This project provides an API for managing data for Kejaksaan Negeri (Prosecutor's Office), specifically for managing cases and prosecutors (Jaksa). The program allows CRUD operations for both `kasus` (cases) and `jaksa` (prosecutors), with features to manage cases, retrieve statistics, and upload documents.

# FEATURES
- **CRUD Operations**: Create, read, update, and delete operations for both cases (`kasus`) and prosecutors (`jaksa`).
- **Retrieve Case Statistics**: Get statistics about the cases.
- **Upload Documents**: Upload documents related to the cases.

# INSTALLATION

Before cloning this GitHub repository, make sure to install the required dependencies:

```bash
npm install
npm i express
npm i multer
npm i mongoose
```

Then clone this github repository into your system
```bash
git clone https://github.com/your-repo/kejaksaan-api.git
```

Make sure you have an *active connection with MongoDB*, I have the file ready for you to jumpstart it so you dont have to.

# API

## JAKSA

### GET /Jaksa
Retrieve all prosecutors (jaksa) in the database

### GET /Jaksa/:id
Retrieve a prosecutor by their ID.

### POST /jaksa
Add a new prosecutor.
To test this just copy the format below:
```JSON
{
    "nama": "Marsudi Sunda Kelapa",
    "email": "marsudi.upnjkt@gmail.com",
    "biodata": {
        "noTelp": "0846283431330",
        "alamat": "Limo"
    }
}
```

### PUT /Jaksa/:id
Update a prosecutor's information by their ID.
To test this, copy the format down below:
```JSON
{
    "nama": "Rizal Jaya Ancol",
    "email": "Rizal@gmail.com",
    "biodata": {
        "noTelp": "0846283431330",
        "alamat": "Limo"
    }
}
```

### DELETE /Jaksa/:id
Remove a prosecutor from the database by their ID

## KASUS

### GET /kasus
Retrieve all cases (kasus) in the database

### GET /kasus:id
Retrieve a specific case by its ID

### GET /kasus/statis
Retrieve statistics about the cases in the system 
(e.g., total number cases, solved cases, and queued cases)

### POST /kasus
Add a new case

This one's a bit tricky to test because you do need to upload a pdf file as a document.
But here's a step by step to post\n
1. In Postman, go to body, and change type to "form data"\n
2. Make sure you're in "key value edit"\n
3. Inside the key column, there will be a drop down menu\n
4. Choose a pdf document and now you can upload it\n

Your file should be uploaded in a folder called "uploads".
It's stored in this directory, again i did it so you dont have to.

### DELETE /kasus/:id
Remove a case from the database by its ID

### PUT /kasus/:id
Update a case based on its ID
Do the same steps as adding a new one, you know how it goes

# RUN

Run the Application by Typing this in your desired terminal:
```bash
node server.js
```
Or you can just run it using your prefered IDE.

Once you ran the program, you can test the API using Postman, Bruno, anything that gets the job done.

Then, on your API Tester, test the connection using

URL : http://localhost:3000/kejaksaan/jaksa/ to access prosecutor database, or

URL : http://localhost:3000/kejaksaan/kasus to access case database.
# 

Special Thanks to KSM Android that help me get this far in ~life~ backend programming :D
