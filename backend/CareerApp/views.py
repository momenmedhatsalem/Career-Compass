from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from UserApp.models import Applicant, Recruiter
from .models import SavedJob
from django.contrib.auth import get_user_model

def index(request):
    return render(request, "index.html")

@login_required
def profile(request):
    user = request.user
    if user.is_applicant:
        applicant_user = Applicant.objects.get(user = request.user)

        # User is an applicant
        return render(request, "profile.html", { 'applicant_user': applicant_user })
    elif user.is_recruiter:
        # User is a recruiter
        return redirect('recruiterDashboard')




@login_required
def recruiterDashboard(request):
    if request.user.is_applicant:
        # User is an applicant
        return redirect('profile')
    return render(request, "recruiter_dashboard.html")

def search(request):
    return render(request, "search.html")

@login_required
def savedJobs(request):
    if not request.user.is_applicant:
        # User is a recruiter
        return redirect('home')
    user = Applicant.objects.get(user=request.user.id)
    saved_jobs = SavedJob.objects.filter(applicant=user)

    return render(request, "saved_jobs.html",{"jobs":saved_jobs})

def about(request):
    return render(request, "About_us.html")

from .models import Job

def jobs(request):
    jobs = Job.objects.all()
    return render(request, "list_of_jobs.html", {"jobs": jobs})


def checkCandidates(request):
    return render(request, "check_candidates.html")

def edit_Job(request):
    return render(request, "edit_Job.html")

def AppliedCandidateProfile(request):
    return render(request, "AppliedCandidateProfile.html")

def login(request):
    return render(request, "login.html")

def signup(request):
    return render(request, "signup.html")

def recruitersignup(request):
    return render(request, "recruitersignup.html")
