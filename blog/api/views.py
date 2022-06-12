from django.shortcuts import render
from api.models import Blog
from .serializers import Blogserializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
# Create your views here.


class Blogview(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = Blogserializer
