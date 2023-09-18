import os

from django.core.wsgi import get_wsgi_application

# Set the default Django settings module for the 'wsgi' application.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')

# Create the WSGI application object.
application = get_wsgi_application()
