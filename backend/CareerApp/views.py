from django.shortcuts import render

def index(request):
    return render(request, "index.html")


def profile(request):
    return render(request, "profile.html")

def recruiterDashboard(request):
    return render(request, "recruiter_dashboard.html")

def search(request):
    return render(request, "search.html")

def savedJobs(request):
    return render(request, "saved_jobs.html")

def savedJobs(request):
    return render(request, "saved_jobs.html")

def about(request):
    return render(request, "About_us.html")

def jobs(request):
    return render(request, "list_of_jobs.html")

def signup(request):
    return render(request, "signup.html")

def login(request):
    return render(request, "login.html")

def recruiterSignup(request):
    return render(request, "recruitersignup.html")

def checkCandidates(request):
    return render(request, "check_candidates.html")

def edit_Job(request):
    return render(request, "edit_Job.html")
