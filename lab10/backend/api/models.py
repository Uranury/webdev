from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=250)
    city = models.CharField(max_length=50)
    address = models.TextField(max_length=250)

    def __str__(self):
        return self.name

class Position(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=400)

    def __str__(self):
        return self.name
    
class Vacancy(models.Model):
    # name = models.CharField(max_length=50)
    # description = models.TextField(max_length=400)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    position = models.ForeignKey(Position, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.company.name} - {self.salary}"


    