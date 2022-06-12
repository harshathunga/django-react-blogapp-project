from pyexpat import model
from attr import fields
from matplotlib.pyplot import cla
from rest_framework import serializers
from .models import Blog

class Blogserializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields= "__all__"