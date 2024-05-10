from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from .models import CustomUser, Applicant, Recruiter
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import get_user_model

from django.shortcuts import render, redirect, reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login
from .models import Applicant, Recruiter

def signup(request, mode):
    if mode not in ["applicant", "recruiter"]:
        # Redirect to the applicant signup page by default
        return HttpResponseRedirect(reverse('signup', args=['applicant']))

    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password1 = request.POST.get('password')

        if mode == "applicant":
            user = get_user_model().objects.create_user(username=username,
                                                  email=email, phone=phone, password=password1,
                                                  first_name=first_name, last_name=last_name, 
                                                  is_applicant=True)
            Applicant.objects.create(user=user)
        elif mode == "recruiter":
            user = get_user_model().objects.create_user(username=username,
                                                    email=email, phone=phone, password=password1,
                                                    first_name=first_name, last_name=last_name, 
                                                    is_recruiter=True)
            company_name = request.POST.get('company_name')
            user = Recruiter.objects.create(user=user, company_name=company_name)
        
        # Log in the user after signup
        user = authenticate(username=email, password=password1)
        if user is not None:
            login(request, user, backend='UserApp.authentication.EmailAuthenticationBackend')
            return redirect('profile') if mode == "applicant" else redirect('recruiterDashboard')
        else:
            # Handle authentication failure
            return HttpResponse("Authentication failed")

    else:
        if mode == "applicant":
            return render(request, 'signup.html')
        elif mode == "recruiter":
            return render(request, 'recruitersignup.html')



from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .models import CustomUser, Applicant, Recruiter

def login_user(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print("logg")
        # Authenticate user
        user = authenticate(username=email, password=password)
        print("user" ,user)
        if user is not None:
            login(request, user, backend='UserApp.authentication.EmailAuthenticationBackend')
            return redirect('profile')  
                
        else:
            # Invalid credentials, show an error message
            error_message = "Invalid email or password. Please try again."
            return render(request, 'login.html', {'error_message': error_message})
    else:
        # If request method is not POST, render the login form
        return render(request, 'login.html')

from django.contrib.auth import logout
from django.shortcuts import redirect

def logout_user(request):
    logout(request)  # Log out the user
    return redirect('home')  # Redirect to the home page after logout

def viewCandidate(request, candidate_username):
    get_user  = CustomUser.objects.filter(username=candidate_username).first()
    viewedCandidate = Applicant.objects.filter(user = get_user).first()
    context={'viewedCandidate':viewedCandidate}
    return render(request,'viewCandidate.html',context)

