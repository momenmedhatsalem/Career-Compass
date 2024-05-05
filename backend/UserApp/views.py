from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from .models import CustomUser, Applicant, Recruiter

def signup(request, mode):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        phone = request.POST.get('InputPhone')
        password1 = request.POST.get('password1')

        if mode == "applicant":
            user = Applicant.objects.create_user(username=username, email=email, phone=phone, password=password1)
            user.save()
        elif mode == "recruiter":
            company_name = request.POST.get('company_name')
            user = Recruiter.objects.create_user(username=username, email=email, phone=phone, password=password1, company_name=company_name)
        
        # Log in the user after signup
        user = authenticate(username=email, password=password1)
        login(request, user)
        
        return redirect('profile')  
    else:
        if mode == "applicant":
            return render(request, 'signup.html')
        elif mode == "recruiter":
            return render(request, 'recruiter_dashboard.html')
