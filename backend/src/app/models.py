from django.db import models
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')

class User(models.Model):
    name = models.CharField()
    username = models.CharField()
    industry_pref = models.CharField()
    location = models.CharField()

class Job(models.Model):
    location = models.CharField()
    position = models.CharField()
    min_salary = models.IntegerField()
    max_salary = models.IntegerField()
    industry = models.CharField()
    level = models.CharField()
    description = models.TextField()
