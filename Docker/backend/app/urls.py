from django.contrib import admin
from django.urls import include, path
from .views import read, write

urlpatterns = [
    path('read/', read, name='read'),
    path('write/', write, name='write'),
]
