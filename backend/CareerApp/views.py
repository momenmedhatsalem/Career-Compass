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
    elif request.user.is_recruiter:
        rec = Recruiter.objects.get(user = request.user)
    return render(request, "recruiter_dashboard.html", {'rec' : rec})

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

def edit_profile(request):
    user = request.user
    if user.is_applicant:
        applicant_user = Applicant.objects.get(user = request.user)

        # User is an applicant
        return render(request, "edit_profile.html", { 'applicant_user': applicant_user })
    
    elif user.is_recruiter:
        # User is a recruiter
        return redirect('recruiterDashboard')

def save_profile(request):
    user = request.user
    applicant_user = Applicant.objects.get(user = user)

    if request.method == 'POST':
        # Get data from the form
        fname = request.POST.get('fname')
        pemail = request.POST.get('pemail')
        bio = request.POST.get('bio')

        cname = request.POST.get('cname')
        bemail = request.POST.get('bemail')
        skills = request.POST.get('skills')

        net1 = request.POST.get('net1')
        net2 = request.POST.get('net2')

        address = request.POST.get('address')
        country = request.POST.get('country')
        city = request.POST.get('city')
        zip = request.POST.get('zip')
        state = request.POST.get('state')

        # Create a new instance of MyModel and set the values
        user.first_name = bio
        user.email = pemail
        applicant_user.bio = bio

        applicant_user.company_name = cname
        applicant_user.business_email = bemail
        applicant_user.skills = skills

        applicant_user.network1 = net1
        applicant_user.network2 = net2

        applicant_user.address = address
        applicant_user.country = country
        applicant_user.city = city
        applicant_user.country = country
        applicant_user.zip = zip
        applicant_user.state = state

        user.save()
        applicant_user.save()
        
    return render(request, "profile.html", { 'applicant_user': applicant_user })

def AppliedCandidateProfile(request):
    return render(request, "AppliedCandidateProfile.html")

def login(request):
    return render(request, "login.html")

def signup(request):
    return render(request, "signup.html")

def recruitersignup(request):
    return render(request, "recruitersignup.html")
