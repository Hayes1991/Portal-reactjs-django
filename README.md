## Summary
Portal website for patients
    
    Backend: Django
    
    Frontend: Reactjs
    
    url : 13.210.255.105:8000

## Instructions
For running django backend

    pip3 install django
    pip3 install djangorestframework
    pip3 install django-rest-knox
    
    python3 manage.py migrate
    python3 manage.py runserver (or python3 manage.py runserver 0.0.0.0:80 on AWS)

For building frontend:

    npm install
    npm run build or npm run dev

Browse http://127.0.0.1:8000.

The API functions are in:

    authentication/api.py
    authentication/urls.py

