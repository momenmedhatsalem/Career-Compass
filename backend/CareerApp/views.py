from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def signup(request):
    return render(request, "signup.html")

def profile(request):
    return render(request, "recruiter_dashboard.html")