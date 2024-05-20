from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from UserApp.models import Applicant, Recruiter, Experience,Education
from .models import SavedJob , Job, Application ,SavedCandidate
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods


countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla" "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados" "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana" "Brazil", "Brunei Darussalam", "Bulgaria" "Burkina Faso" "Burundi", "Cambodia" "Cameroon" "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad" "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia" "Comoros", "Congo", "Cook Islands" "Costa Rica", "Croatia", "Cuba" "Cyprus", "Czech Republic", "Denmark", "Djibouti" "Dominica" "Dominican Republic" "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia" "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji" "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam" "Guatemala", "Guernsey" "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Holy See (Vatican City State)" "Honduras" "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of" "Iraq" "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati" "Korea, Republic of" "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia" "Maldives" "Mali" "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia" "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue" "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman" "Pakistan" "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay" "Peru" "Philippines", "Pitcairn" "Poland", "Portugal" "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation" "Rwanda", "Saint Helena" "Saint Kitts and Nevis" "Saint Lucia", "Saint Pierre and Miquelon" "Saint Vincent and The Grenadines" "Samoa", "San Marino", "Sao Tome and Principe" "Saudi Arabia" "Senegal", "Serbia", "Seychelles", "Sierra Leone" "Singapore", "Slovakia" "Slovenia" "Solomon Islands" "Somalia", "South Africa" "Spain", "Sri Lanka", "Sudan", "Suriname" "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand" "Timor-leste", "Togo" "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan" "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam" "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
states = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]



def index(request):
    return render(request, "index.html")

@login_required
def profile(request):
    user = request.user
    if user.is_applicant:
        applicant_user = Applicant.objects.get(user=user.id)

        experiences = Experience.objects.filter(applicant=applicant_user)
        educations = Education.objects.filter(applicant=applicant_user)


        # User is an applicant
        print(experiences)
        return render(request, "profile.html", {"applicant_user": applicant_user,"educations": educations,"experiences": experiences})
    elif user.is_recruiter:
        # User is a recruiter
        return redirect("recruiterDashboard")


@login_required
def recruiterDashboard(request):
    if request.user.is_applicant:
        # User is an applicant
        return redirect("profile")
    elif request.user.is_recruiter:
        rec = Recruiter.objects.get(user=request.user)
    # rec_jobs = Job.objects.all().order_by('-creation_date')
    rec_jobs = Job.objects.all().filter(recruiter=rec).order_by('creation_date')
    candidates = SavedCandidate.objects.filter(recruiter = request.user.id)
    applications = Application.objects.all()
    jobs = dict()
    for can in candidates:
        jobs[can]= set()
        for app in applications:
            if can.applicant == app.applicant :
                jobs[can].add(app.job)

    return render(request, "recruiter_dashboard.html", {"rec": rec,"countries":countries ,'cities': cities, "states": states,"rec_jobs": rec_jobs,'candidates': candidates,"jobs":jobs})


def search(request):
    return render(request, "search.html")


@login_required
def savedJobs(request):
    if not request.user.is_applicant:
        # User is a recruiter
        return redirect("home")
    user = Applicant.objects.get(user=request.user.id)
    saved_jobs = SavedJob.objects.filter(applicant=user)

    return render(request, "saved_jobs.html", {"jobs": saved_jobs})

@login_required
def appliedjobs(request):
    if not request.user.is_applicant:
        # User is a recruiter
        return redirect("home")
    user = Applicant.objects.get(user=request.user.id)
    applied_jobs = Application.objects.filter(applicant=user)
    print(applied_jobs)

    return render(request, "applied_jobs.html", {"jobs": applied_jobs})

@csrf_exempt  
@require_http_methods(["PUT"])
def receive_job_to_save_it(request):
    try:
        data = json.loads(request.body)
        id_for_job =data['id_for_job_will_save']
        action = data['action']
        jobs = SavedJob.objects.all()
        retrieve_job = Job.objects.get(job_id = id_for_job)
        applicant_user = Applicant.objects.get(user=request.user.id)
        if action == "save":
            newSavedJob = SavedJob.objects.create(applicant = applicant_user , job = retrieve_job )
        else:
            savedJob =SavedJob.objects.get(applicant = applicant_user ,job=retrieve_job)
            savedJob.delete()
        return JsonResponse({"status": "success", "data_received": data}, status=200)
    except json.JSONDecodeError:
        return JsonResponse({"status": "error", "message": "Invalid JSON"}, status=400)
    # if request.method == "POST" and request.is_ajax():
    #     data_received = request.POST
    #     job_id = data_received.get("id")
    #     selected_job = Job.objects.filter(job_id=job_id)
    #     SavedJob.objects.create(
    #         Applicant=Applicant.objects.get(user=request.user), job=selected_job
    #     )

    #     # Return a JSON response
    #     response_data = {"message": "Data received successfully"}
    #     return JsonResponse(response_data)
    # else:
    #     return JsonResponse({"error": "Invalid request"})


def about(request):
    return render(request, "About_us.html")


from .models import Job


def jobs(request):
    jobs = Job.objects.all()
    if request.user.is_authenticated :
        if request.user.is_applicant:
            user = Applicant.objects.get(user=request.user.id)
            saved_jobs = SavedJob.objects.filter(applicant=user)
            other_jobs = []
            for j in jobs :
                exist = False
                for sj in saved_jobs :
                    if j.job_id == sj.job.job_id :
                        exist = True
                        break
                if not exist:
                    other_jobs.append(j)
            return render(request, "list_of_jobs.html", {"other_jobs": other_jobs , "saved_jobs":saved_jobs})
    return render(request, "list_of_jobs.html", {"jobs": jobs })
    # # if request.user is Applicant :
    #     sjobs = SavedJob.objects.all().filter(applicant = request.user)
    #     print(sjobs)
    #     # jobs = Job.objects.all()
    #     # print(jobs)
    #     return render(request, "list_of_jobs.html", {"jobs": jobs,"saved_jobs":sjobs})
    # # else:
    #     jobs = Job.objects.all()
    #     return render(request, "list_of_jobs.html", {"jobs": jobs})


def checkCandidates(request):
    all_candidates =Applicant.objects.all()
    all_applications = Application.objects.all()
    all_saved_candidates = SavedCandidate.objects.filter(recruiter = request.user.id)
    is_saved = dict()
    for candidate in all_candidates:
        saved = False
        for saved_cand in all_saved_candidates:
            if candidate.user.id == saved_cand.applicant.user.id:
                saved = True
                break
        if saved :
            is_saved[candidate]= "saved"
        else:
            is_saved[candidate]= "unsave"
    return render(request, "check_candidates.html",{"candidates":all_candidates,"applications":all_applications,"saved":is_saved })

@csrf_exempt  
@require_http_methods(["PUT"])
def apply_to_job(request):
    data = json.loads(request.body)
    job_id = data["job"]
    applicant_id = data["applicant"]
    job = Job.objects.get(id = id)
    applicant = Applicant.objects.get(user =applicant_id ) 
    new_application = Application.objects.create(job = job,applicant = applicant )
    new_application.save()
    return JsonResponse({'success': True, 'redirect_url': '/Confirmation/'})


def Confirmation(request):
    return render(request, "Confirmation.html")


def edit_Job(request):
    return render(request, "edit_Job.html")


def edit_profile(request):
    user = request.user
    if user.is_applicant:
        applicant_user = Applicant.objects.get(user=request.user)

        # User is an applicant
        return render(request, "edit_profile.html", {"applicant_user": applicant_user})

    elif user.is_recruiter:
        # User is a recruiter
        return redirect("recruiterDashboard")


def save_profile(request):
    current_user = get_user_model().objects.get(id=request.user.id)
    
    user = request.user
    applicant_user = Applicant.objects.get(user=user.id)
    print("here")
    if request.method == "POST":
        # Get data from the form
        
        profile_photo = request.FILES.get("profile_photo")

        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        pemail = request.POST.get("pemail")
        bio = request.POST.get("bio")

        cname = request.POST.get("cname")
        bemail = request.POST.get("bemail")
        #skills = request.POST.get("skills")

        net1 = request.POST.get("net1")
        net2 = request.POST.get("net2")

        address = request.POST.get("address")
        country = request.POST.get("country")
        city = request.POST.get("city")
        zip = request.POST.get("zip")
        state = request.POST.get("state")
        
        print(profile_photo)
        # Create a new instance of MyModel and set the values
        if profile_photo:
            current_user.photo = profile_photo
            print("heere")

        current_user.first_name = fname
        current_user.last_name = lname
        current_user.email = pemail
        applicant_user.bio = bio

        applicant_user.company_name = cname
        applicant_user.business_email = bemail
        #applicant_user.skills = skills

        applicant_user.network1 = net1
        applicant_user.network2 = net2

        applicant_user.address = address
        applicant_user.country = country
        applicant_user.city = city
        applicant_user.country = country
        applicant_user.zip = zip
        applicant_user.state = state
        current_user.save()
        applicant_user.save()

    return redirect("profile")



@csrf_exempt
def delete_profile_photo(request):
    if request.method == "POST":
        current_user = get_user_model().objects.get(id=request.user.id)

        current_user.photo.delete()
        current_user.photo = None  
        current_user.save()
        return redirect("profile")
    





# def viewCandidate(request):
#     return render(request, "viewCandidate.html")

@csrf_exempt
def filter_search(request):

    # tests
    print("connected")

    # we make sure the method is correct first
    if request.method == 'POST':

        # we retrieve the dictionary from the request to use it to filter jobs
        data = json.loads(request.body)

        # test mode is correct
        print(data['mode'])
        
        # we query the database according to the sent searching mode using the 
        # sent searching text from the search bar
        if data['mode'] == 'title':
            jobs = Job.objects.all().filter(title__contains = data['text'])
        elif data['mode'] == 'years':
            jobs = Job.objects.all().filter(years_of_experience = data['text'])
        elif data['mode'] == 'country':
            jobs = Job.objects.all().filter(country__contains = data['text'])

        # we prepare our response as an array of dictionaries carrying desired data
        # as key-value pairs to be easy in manipulations on the frontend
        result = []
        for job in jobs:
            # check that this job is open and is accepting applicants
            if job.status == 'open':
                # if yes, we append its dictionary to the array
                result.append({
                    'title': job.title,
                    'salary': job.MaxSalary,
                    'exp': job.years_of_experience,
                    'country': job.country,
                    'job_id': job.job_id,
                    'rec_username': job.recruiter.user.username
                })
                # else we move on to the next one
    
        # return the resulting array as a JSON response to to the frontend
        return JsonResponse({'result': result})

    #if the method is not 'POST' we just render the same page
    return render(request, "search.html")

                        #     Thank You very much ^^

def login(request):
    return render(request, "login.html")


def signup(request):
    return render(request, "signup.html")


def recruitersignup(request):
    return render(request, "recruitersignup.html")


def save_recruiter_profile(request):
    current_user = get_user_model().objects.get(id=request.user.id)
    user = request.user
    rec = Recruiter.objects.get(user = user.id)
    if request.method == "POST":
        # Get data from the form

        profile_photo = request.FILES.get("profile_photo") 
        print(profile_photo)
        # Create a new instance of MyModel and set the values
        if profile_photo:
            current_user.photo = profile_photo
            print("heere")
        rec.website = request.POST.get("rec_website")
        rec.founded_date = request.POST.get("founded_date")
        rec.company_size = request.POST.get("company_size")
        rec.category = request.POST.get("category")
        rec.about_company = request.POST.get("about_company")
        rec.social_media = request.POST.getlist("social_media_link")
        rec.address = request.POST.get("address")
        rec.country = request.POST.get("country")
        rec.city = request.POST.get("city")
        rec.zip_code = request.POST.get("zip_code")
        rec.state = request.POST.get("state")
        # rec.user.save()
        current_user.save()
        rec.save()
    return redirect("recruiterDashboard")

@csrf_exempt
def post_job(request):
    if request.method == 'POST':
        job_id = request.POST.get('job_id')
        rec = Recruiter.objects.get(user = request.user)
        if Job.objects.filter(job_id=job_id, recruiter=rec).exists():
            return JsonResponse({'exists': True}, status=200)

        newJob = Job.objects.create(
            job_id = job_id,
            recruiter=rec,
            title=request.POST.get("job_title"),
            company_name=request.POST.get("company_name"),
            status=request.POST.get("job_status"),
            years_of_experience=request.POST.get("years_of_experience"),
            description=request.POST.get("job_desc"),
            category=request.POST.get("job_category"),
            type=request.POST.get("job_type"),
            salary=request.POST.get("salary"),
            MinSalary=request.POST.get("min_salary"),
            MaxSalary=request.POST.get("max_salary"),
            english_fluency=request.POST.get("english_fluency"),
            experience=request.POST.get("experience"),
            address=request.POST.get("address"),
            country=request.POST.get("country"),
            city=request.POST.get("city"),
            zip_code=request.POST.get("zip_code"),
            state=request.POST.get("state"),
        )
        newJob.save()
        return JsonResponse({'exists': False}, status=200)
    return redirect("recruiterDashboard")

from django.contrib.auth import authenticate
def saveRecSettings(request):
    rec = Recruiter.objects.get(user = request.user.id)

    email = request.user.email
    password = request.POST.get("password")

    user = authenticate(email=email, password=password)
    if user is not None:
        rec.user.first_name = request.POST.get("first_name")
        rec.user.last_name = request.POST.get("last_name")
        rec.user.email = request.POST.get("email")
        rec.user.phone = request.POST.get("phone")
        rec.user.save()
        rec.save()
    return redirect("recruiterDashboard")

def viewJob(request, job_id, recruiter_username):
    job = get_object_or_404(Job, job_id=job_id, recruiter__user__username=recruiter_username)
    saved = False
    if request.user.is_authenticated :
        if request.user.is_applicant: 
            all_saved_jobs = SavedJob.objects.all()
            for j in all_saved_jobs:
                if j.job.job_id == job_id and j.applicant.user.username == request.user.username :
                    saved = True
                    break
    if saved :
        return render(request, 'Job_Details.html', {'job': job,'saved':1})
    else:
        return render(request, 'Job_Details.html', {'job': job,'saved':0})

def editJob(request, job_id, recruiter_username):
    job = get_object_or_404(Job, job_id=job_id, recruiter__user__username=recruiter_username)
    if request.method == 'POST':
        # Handle the job editing form submission
        job.job_id = request.POST.get("job-id")
        job.title = request.POST.get("job-title")
        job.company_name = request.POST.get("company-name")
        job.years_of_experience = request.POST.get("years-of-experience")
        job.category = request.POST.get("job-category")
        job.type = request.POST.get("job_type")
        job.salary = request.POST.get("salary")
        job.MinSalary = request.POST.get("min-salary")
        job.MaxSalary = request.POST.get("max-salary")
        job.status = request.POST.get("job-status")
        job.description = request.POST.get("description")
        job.english_fluency = request.POST.get("english_fluency")
        job.experience = request.POST.get("experience")
        job.address = request.POST.get("address")
        job.country = request.POST.get("country")
        job.city = request.POST.get("city")
        job.zip_code = request.POST.get("zip_code")
        job.state = request.POST.get("state")
        job.save()
        return redirect('viewJob', job_id=job_id, recruiter_username=recruiter_username)
    else:
        # Render the job editing form
        return render(request, 'edit_Job.html', {'job': job,"countries":countries, "cities":cities, "states":states})

def deleteJob(request, job_id, recruiter_username):
    job = get_object_or_404(Job, job_id=job_id, recruiter__user__username=recruiter_username)
    job.delete()
    return redirect("recruiterDashboard")


@csrf_exempt  
@require_http_methods(["PUT"])
def saved_candidate(request):
    data = json.loads(request.body)
    id_for_applicant =data['id_for_applicant']
    action = data['action']
    recruiter_user = Recruiter.objects.get(user=request.user.id)
    applicant_user = Applicant.objects.get(user=id_for_applicant)
    if action == "save":
        newSavedCandidate = SavedCandidate.objects.create(applicant = applicant_user , recruiter = recruiter_user )
        return JsonResponse({"status": "success", "save": 1}, status=200)
    else:
        savedCa =SavedCandidate.objects.get(applicant = applicant_user ,recruiter = recruiter_user)
        savedCa.delete()
        return JsonResponse({"status": "success", "unsaved": 1}, status=200)
    
