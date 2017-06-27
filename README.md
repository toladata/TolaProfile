Tola-Profile [![Build Status](https://travis-ci.org/toladata/TolaProfile.svg?branch=master)](https://travis-ci.org/toladata/TolaProfile)
===
Profile and user management

Install
===
This project is a 2-in-1 project, with a complete Django REST Backend and a stand-alone Angular2 frontend. Ensure the server you are running on has all the required pip packages for the backend. And all installations for Angular2.

Virtual Environemnt
===
Create a virtual environment on each server your app will run on and install
app specific libraries in the venv

## Configuration
Copy the source/settings/local-sample.py to local.py and modify 

Instructions (Django REST Backend)
====
Create Virtualenv
virtualenv venv  (USES SERVER INSTALLED PACKAGES)

virtualenv —no-site-packages venv
*use no site packages to prevent virtualenv from seeing your global packages

. venv/bin/activate
*allows us to just use pip from command line by adding to the path rather then full path


Activate Virtualenv
source venv/bin/activate
workon venv
OR (if using wrapper)
mkvirtualenv venv1
workon venv

Create App Specifc Library List
===
pip freeze > app_requirements.txt
* creates a app_requirements.txt file for future installs

Updating or installing on a new server
pip install -r requirements.txt

Instructions (Angular 2 FrontEnd)
====
Refer to (https://angular.io/guide/quickstart) for step by step guide on how to set up angular2 environment

cd into "FrontEnd" app
* install packages and other app dependancies -
"npm install"
* start the server -
"ng serve"
