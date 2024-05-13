from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("", view=views.index, name="home"),
    path("profile/", view=views.profile, name="profile"),
    path("recruiterDashboard/", view=views.recruiterDashboard, name="recruiterDashboard"),
    path("saved_jobs/", view=views.savedJobs, name="saved_jobs"),
    path("search/", view=views.search, name="search"),
    path("filter_search/", view=views.filter_search, name="filter_search"),
    path("about/", view=views.about, name="about"),
    path("jobs/", view=views.jobs, name="jobs"),
    # path("job_Details/<int:id>", view=views.job_details(id), name="job_details"),
    path("index/", view=views.index, name="index"),
    path("checkCandidates/", view=views.checkCandidates, name="checkCandidates"),
    path("edit_Job/", view=views.edit_Job, name="edit_Job"),
    path('save_recruiter_profile/', views.save_recruiter_profile, name='save_recruiter_profile'),
    path("receive_job_to_save_it/", view=views.receive_job_to_save_it, name="receive_job_to_save_it"),
    path("post_job/", view=views.post_job, name="post_job"),
    path("saveRecSettings/", view=views.saveRecSettings, name="saveRecSettings"),
    
    path('job/<int:job_id>/', views.viewJob, name='viewJob'),
    path('job/<int:job_id>/edit/', views.editJob, name='editJob'),
    path('job/<int:job_id>/delete/', views.deleteJob, name='deleteJob'),
]
