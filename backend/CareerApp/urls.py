from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("", view=views.index, name="home"),
    path("profile/", view=views.profile, name="profile"),
    path("edit_profile/", view=views.edit_profile, name="edit_profile"),
    path("save/", view=views.save_profile, name="save_profile"),
    path(
        "recruiterDashboard/", view=views.recruiterDashboard, name="recruiterDashboard"
    ),
    path("saved_jobs/", view=views.savedJobs, name="saved_jobs"),
    path("search/", view=views.search, name="search"),
    path("about/", view=views.about, name="about"),
    path("jobs/", view=views.jobs, name="jobs"),
    path("index/", view=views.index, name="index"),
    path("checkCandidates/", view=views.checkCandidates, name="checkCandidates"),
    path("edit_Job/", view=views.edit_Job, name="edit_Job"),
    path("viewCandidate/", view=views.viewCandidate, name="viewCandidate"),
]
