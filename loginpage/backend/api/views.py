from django.shortcuts import render
from django.contrib.auth.hashers import make_password
from .models import User

def register(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]

        hashed_password = make_password(password)

        user = User(email=email, password=hashed_password)
        user.save()

# Create your views here.
