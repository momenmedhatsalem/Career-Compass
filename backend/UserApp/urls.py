"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from . import views

urlpatterns = [
    path("signup/<str:mode>/", view=views.signup, name="signup"),
    path("login/", view=views.login_user, name="login"),
    path('logout/', view=views.logout_user, name='logout'),
    path("candidate/<str:candidate_username>/", view=views.viewCandidate, name="viewCandidate"),
    path('uploadResume/', views.upload_resume, name='upload_resume'),
    path('profile/', views.education, name='education'),
    path('save_experience/', views.save_experience, name='save_experience'),
]

