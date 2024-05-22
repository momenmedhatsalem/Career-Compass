from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from .models import CustomUser, Applicant, Recruiter
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import get_user_model


from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib.auth import get_user_model, authenticate, login
from django.contrib import messages
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
        password2 = request.POST.get('confirmpass')

        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return render(request, 'signup.html' if mode == "applicant" else 'recruitersignup.html')

        try:
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
                Recruiter.objects.create(user=user, company_name=company_name)
        except Exception as e:
            if 'unique' in str(e).lower():
                messages.error(request, "Username or email already taken.")
            else:
                messages.error(request, "An error occurred: " + str(e))
            return render(request, 'signup.html' if mode == "applicant" else 'recruitersignup.html')

        # Log in the user after signup
        user = authenticate(username=email, password=password1)
        if user is not None:
            login(request, user, backend='UserApp.authentication.EmailAuthenticationBackend')
            return redirect('profile') if mode == "applicant" else redirect('recruiterDashboard')
        else:
            messages.error(request, "Authentication failed.")
            return render(request, 'signup.html' if mode == "applicant" else 'recruitersignup.html')
    else:
        return render(request, 'signup.html' if mode == "applicant" else 'recruitersignup.html')


from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .models import CustomUser, Applicant, Recruiter

def login_user(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        # Authenticate user
        user = authenticate(username=email, password=password)
        
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




# from django.shortcuts import render, redirect
# from django.http import HttpResponseBadRequest, JsonResponse
from django.contrib.auth.decorators import login_required
# from .models import Resume

# views.py
from django.shortcuts import render
@login_required
def upload_resume(request):
    if request.method == 'POST' and request.FILES['resumeFile'] is not None:
        resume_file = request.FILES['resumeFile']
        # Save the resume file or process it further
        applicant = Applicant.objects.get(user=request.user.id)
        applicant.resume = resume_file
        applicant.save()
        return redirect('profile') 

from .models import Education,Experience
@login_required
def education(request):
    if request.method == 'POST':
        applicant_id = request.user.id
        title = request.POST.get('title')
        academy = request.POST.get('Academy')
        start_date = request.POST.get('startDate')
        end_date = request.POST.get('endDate')
        description = request.POST.get('description')

        if description == "del":
            Education.objects.filter(applicant=applicant_id, title=title).delete()
            return redirect('profile')  

        try:
            # Attempt to get a single education object for update
            education = Education.objects.get(applicant=applicant_id, title=title)
        except Education.DoesNotExist:
            # Education not found, create a new one
            education = Education(
                applicant=get_object_or_404(Applicant, user_id=applicant_id),
                title=title,
                Academy=academy,
                startDate=start_date,
                endDate=end_date,
                description=description
            )

        education.title = title
        education.Academy = academy
        education.startDate = start_date
        education.endDate = end_date
        education.description = description
        education.save()

        return redirect('profile')



from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Applicant, Experience

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Applicant, Experience

@login_required
def save_experience(request):
    if request.method == 'POST':
        applicant_id = request.user.id
        title = request.POST.get('title')
        company = request.POST.get('Company')
        start_date = request.POST.get('startDate')
        end_date = request.POST.get('endDate')
        description = request.POST.get('description')
        
        if description == "del":
            Experience.objects.filter(applicant=applicant_id, title=title).delete()
            return redirect('profile')  
                
        try:
            experience = Experience.objects.get(applicant=applicant_id, title=title)
        except Experience.DoesNotExist:
            experience = Experience(
                applicant=get_object_or_404(Applicant, user_id=applicant_id),
                title=title,
                Company=company,
                startDate=start_date,
                endDate=end_date,
                description=description
            )
        experience.title = title
        experience.Company = company
        experience.startDate = start_date
        experience.endDate = end_date
        experience.description = description
        experience.save()
        
    return redirect('profile')
