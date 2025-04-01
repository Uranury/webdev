from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# a) List all companies
class CompanyListView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

# b) Get a single company
class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

# c) List vacancies by company
class CompanyVacanciesView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

# d) List all vacancies
class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

# e) Get a single vacancy
class VacancyDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

# f) List top 10 vacancies sorted by salary
class TopTenVacanciesView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]
