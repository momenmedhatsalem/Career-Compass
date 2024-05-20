from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("", view=views.index, name="home"),
    path("profile/", view=views.profile, name="profile"),
    path("edit_profile/", view=views.edit_profile, name="edit_profile"),
    path("save_profile/", view=views.save_profile, name="save_profile"),
    path("delete-profile-photo/", view=views.delete_profile_photo, name="delete_profile_photo"),
    path("recruiterDashboard/", view=views.recruiterDashboard, name="recruiterDashboard"),
    path("saved_jobs/", view=views.savedJobs, name="saved_jobs"),
    path("applied_jobs/", view=views.appliedjobs, name="applied_jobs"),
    path("search/", view=views.search, name="search"),
    path("filter_search/", view=views.filter_search, name="filter_search"),
    #path('job/<int:job_id>/<str:recruiter_username>/', views.load_Job_details, name='load_Job_details'),
    path("about/", view=views.about, name="about"),
    path("jobs/", view=views.jobs, name="jobs"),
    path("index/", view=views.index, name="index"),
    path("checkCandidates/", view=views.checkCandidates, name="checkCandidates"),
    path("edit_Job/", view=views.edit_Job, name="edit_Job"),
    path('save_recruiter_profile/', views.save_recruiter_profile, name='save_recruiter_profile'),
    path("receive_job_to_save_it/", view=views.receive_job_to_save_it, name="receive_job_to_save_it"), 
    path("post_job/", view=views.post_job, name="post_job"),
    path("saveRecSettings/", view=views.saveRecSettings, name="saveRecSettings"),
    path("apply_to_job/", view=views.apply_to_job, name="apply_to_job"),
    path("Confirmation/", view=views.Confirmation, name="Confirmation"),
    path("saved_candidate/", view=views.saved_candidate, name="save_candidate"),



    
    path('job/<int:job_id>/<str:recruiter_username>/', views.viewJob, name='viewJob'),
    path('job/<int:job_id>/<str:recruiter_username>/edit/', views.editJob, name='editJob'),
    path('job/<int:job_id>/<str:recruiter_username>/delete/', views.deleteJob, name='deleteJob'),
]
