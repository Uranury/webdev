from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    email = models.CharField(unique=True)
    password = models.CharField(max_length=128)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def __str__(self):
        return self.email
