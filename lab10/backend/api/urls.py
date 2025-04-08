from django.urls import path
from .views import (
    company_list, company_detail, company_vacancies,  # function-based views
    VacancyListView, VacancyDetailView, TopTenVacanciesView,
    PositionListView, PositionDetailView, VacancyDeleteView
)

urlpatterns = [
    path('api/companies/', company_list, name='company-list'),  # FBV
    path('api/companies/<int:pk>/', company_detail, name='company-detail'),  # FBV
    path('api/companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),  # FBV

    # The rest are still CBVs
    path('api/vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
    path('api/vacancies/<int:pk>/delete/', VacancyDeleteView.as_view(), name='detele-vacancy'),
    path('api/positions/', PositionListView.as_view(), name='position-list'),
    path('api/positions/<int:pk>', PositionDetailView.as_view(), name='position-detail'),
]
