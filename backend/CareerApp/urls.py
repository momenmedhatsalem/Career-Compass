from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("", view=views.index, name="home"),
    path("profile/", view=views.profile, name="profile"),
    path("recruiterDashboard/", view=views.recruiterDashboard, name="recruiterDashboard"),
    path("saved_jobs/", view=views.savedJobs, name="saved_jobs"),
    path("search/", view=views.search, name="search"),
    path("about/", view=views.about, name="about"),
    path("jobs/", view=views.jobs, name="jobs"),
    # path("job_Details/<int:id>", view=views.job_details(id), name="job_details"),
    path("index/", view=views.index, name="index"),
    path("checkCandidates/", view=views.checkCandidates, name="checkCandidates"),
    path("edit_Job/", view=views.edit_Job, name="edit_Job"),
    #path("AppliedCandidateProfile/", view=views.AppliedCandidateProfile, name="AppliedCandidateProfile"),
    path("receive_job_to_save_it/", view=views.receive_job_to_save_it, name="receive_job_to_save_it"),

]
