from django.urls import path
from .views import (
    CompanyListView, CompanyDetailView, CompanyVacanciesView,
    VacancyListView, VacancyDetailView, TopTenVacanciesView
)

urlpatterns = [
    path('api/companies/', CompanyListView.as_view(), name='company-list'),
    path('api/companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('api/companies/<int:id>/vacancies/', CompanyVacanciesView.as_view(), name='company-vacancies'),
    path('api/vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]
