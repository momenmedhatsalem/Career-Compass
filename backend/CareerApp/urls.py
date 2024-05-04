from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("", view=views.index, name="home"),
    path("profile/", view=views.profile, name="profile"),
    path("recruiterDashboard/", view=views.recruiterDashboard, name="recruiterDashboard"),
    path("saved_jobs/", view=views.savedJobs, name="savedJobs"),
    path("search/", view=views.search, name="search"),
    path("about/", view=views.about, name="about"),
    path("jobs/", view=views.jobs, name="jobs"),
    
]
