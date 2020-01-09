####heroku:
  Configuration:
    - collect_static - disable
		
####Git:
  commands:
    to delete a local branch - $ git branch -d <branch-name>
    to delete a remote branch - $ git push origin --delete <branch-name>

####Virtual Environments - Python:
	pip install pipenv

####Django:
	pip install django
	django-admin startproject <project_name>
	(cd into folder and run):
	python manage.py startapp <app_name>
	pip install djangorestframework (for the API)

	Django Overview:
	models.py - creates db tables and passes onto serializers
		(can use other filenames like api.py )
	serializers.py - takes in models and turns it into JSON
	urls.py - publishes JSON data as an api endpoint 

	Applications - created by running startapp, contains (models [serializers],
		urls).py
		- Defines db table relationships
		- Can use views.py for display, or export straight to API 
		(using serializers without views)

	
	Auth:
	- with django and react- teraversy:
	models.py - inport user from 
	api.py

	Code:
	from django.contrib.auth import get_user_model
	(in models.py)	

	pip install django-rest-knox
	python manage.py startapp <app_name>
	cd into <app_name>
	touch api.py serializers.py urls.
		make changes 
	pip install django-rest-knox (for JWT)
	install postman application on windows
	
	Errors:
	- invalid host headers
	need to delete proxy settings in package.json

####React Overview:	[React Overview](https://reactjs.org/docs/components-and-props.html)
	- Uses JSX to render elements intot the React.DOM which is then rendered
	into the browser's DOM
	- Uses routers to get data from backend
	- Components are written in JSX and can be created with JS classes or 	
	functions (using props)
	- props (like to properties) are similar to .self, or .this in JS or Python 
	called with props.<property_name> 
	
	
####Misc Tools:
	- postman.com (and application) for api testing
