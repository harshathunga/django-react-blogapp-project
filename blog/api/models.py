from unicodedata import category
from django.db import models
from matplotlib import image

# Create your models here.

class Blog(models.Model):
    image= models.ImageField(null=False, blank=False)
    name= models.CharField(max_length=100)
    description = models.TextField(max_length=2500)
    category= models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name