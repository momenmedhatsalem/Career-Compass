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