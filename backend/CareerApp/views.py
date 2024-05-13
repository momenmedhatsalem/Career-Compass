from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from UserApp.models import Applicant, Recruiter
from .models import SavedJob , Job
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods


def index(request):
    return render(request, "index.html")


@login_required
def profile(request):
    user = request.user
    if user.is_applicant:
        applicant_user = Applicant.objects.get(user=request.user)

        # User is an applicant
        return render(request, "profile.html", {"applicant_user": applicant_user})
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
    countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla" "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados" "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana" "Brazil", "Brunei Darussalam", "Bulgaria" "Burkina Faso" "Burundi", "Cambodia" "Cameroon" "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad" "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia" "Comoros", "Congo", "Cook Islands" "Costa Rica", "Croatia", "Cuba" "Cyprus", "Czech Republic", "Denmark", "Djibouti" "Dominica" "Dominican Republic" "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia" "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji" "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam" "Guatemala", "Guernsey" "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Holy See (Vatican City State)" "Honduras" "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of" "Iraq" "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati" "Korea, Republic of" "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia" "Maldives" "Mali" "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia" "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue" "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman" "Pakistan" "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay" "Peru" "Philippines", "Pitcairn" "Poland", "Portugal" "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation" "Rwanda", "Saint Helena" "Saint Kitts and Nevis" "Saint Lucia", "Saint Pierre and Miquelon" "Saint Vincent and The Grenadines" "Samoa", "San Marino", "Sao Tome and Principe" "Saudi Arabia" "Senegal", "Serbia", "Seychelles", "Sierra Leone" "Singapore", "Slovakia" "Slovenia" "Solomon Islands" "Somalia", "South Africa" "Spain", "Sri Lanka", "Sudan", "Suriname" "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand" "Timor-leste", "Togo" "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan" "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam" "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
    cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    states = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    # rec_jobs = Job.objects.all().order_by('-creation_date')
    rec_jobs = Job.objects.all().filter(recruiter=rec).order_by('creation_date')
    return render(request, "recruiter_dashboard.html", {"rec": rec,"countries":countries ,'cities': cities, "states": states,"rec_jobs": rec_jobs})


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
    return render(request, "check_candidates.html")


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
    user = request.user
    applicant_user = Applicant.objects.get(user=user)

    if request.method == "POST":
        # Get data from the form

        profile_photo = request.FILES.get("profile_photo")

        fname = request.POST.get("fname")
        pemail = request.POST.get("pemail")
        bio = request.POST.get("bio")

        cname = request.POST.get("cname")
        bemail = request.POST.get("bemail")
        skills = request.POST.get("skills")

        net1 = request.POST.get("net1")
        net2 = request.POST.get("net2")

        address = request.POST.get("address")
        country = request.POST.get("country")
        city = request.POST.get("city")
        zip = request.POST.get("zip")
        state = request.POST.get("state")

        # Create a new instance of MyModel and set the values
        user.photo = profile_photo

        user.first_name = fname
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

    return render(request, "profile.html", {"applicant_user": applicant_user})


# def viewCandidate(request):
#     return render(request, "viewCandidate.html")

@csrf_exempt
def filter_search(request):
    print("connected")

    if request.method == 'POST':
        # Retrieve the data from the request's body
        data = json.loads(request.body)

        print(data['mode'])
        
        if data['mode'] == 'title':
            jobs = Job.objects.all().filter(title__contains = data['text'])
        elif data['mode'] == 'years':
            jobs = Job.objects.all().filter(years_of_experience = data['text'])
        elif data['mode'] == 'country':
            jobs = Job.objects.all().filter(country__contains = data['text'])

        result = []
        for job in jobs:
            if job.status == 'open':
                result.append({
                    'title': job.title,
                    'salary': job.MaxSalary,
                    'exp': job.years_of_experience,
                    'country': job.country,
                })
    
        # Return the result as a JSON response
        return JsonResponse({'result': result})

    return render(request, "search.html")

def login(request):
    return render(request, "login.html")


def signup(request):
    return render(request, "signup.html")


def recruitersignup(request):
    return render(request, "recruitersignup.html")


def save_recruiter_profile(request):
    rec = Recruiter.objects.get(user = request.user.id)

    if request.method == "POST":
        # Get data from the form

        rec.user.photo = request.FILES.get("profile_photo")
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
        rec.save()

    countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla" "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados" "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana" "Brazil", "Brunei Darussalam", "Bulgaria" "Burkina Faso" "Burundi", "Cambodia" "Cameroon" "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad" "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia" "Comoros", "Congo", "Cook Islands" "Costa Rica", "Croatia", "Cuba" "Cyprus", "Czech Republic", "Denmark", "Djibouti" "Dominica" "Dominican Republic" "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia" "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji" "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam" "Guatemala", "Guernsey" "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Holy See (Vatican City State)" "Honduras" "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of" "Iraq" "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati" "Korea, Republic of" "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia" "Maldives" "Mali" "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia" "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue" "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman" "Pakistan" "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay" "Peru" "Philippines", "Pitcairn" "Poland", "Portugal" "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation" "Rwanda", "Saint Helena" "Saint Kitts and Nevis" "Saint Lucia", "Saint Pierre and Miquelon" "Saint Vincent and The Grenadines" "Samoa", "San Marino", "Sao Tome and Principe" "Saudi Arabia" "Senegal", "Serbia", "Seychelles", "Sierra Leone" "Singapore", "Slovakia" "Slovenia" "Solomon Islands" "Somalia", "South Africa" "Spain", "Sri Lanka", "Sudan", "Suriname" "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand" "Timor-leste", "Togo" "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan" "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam" "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
    cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    states = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    # rec_jobs = Job.objects.all().order_by('-creation_date')
    rec_jobs = Job.objects.all().filter(recruiter=rec).order_by('-creation_date')
    return render(request, "recruiter_dashboard.html", {"rec": rec,"countries":countries ,'cities': cities, "states": states,"rec_jobs": rec_jobs})


def post_job(request):
    rec = Recruiter.objects.get(user = request.user)
    newJob = Job.objects.create(
        job_id=request.POST.get("job_id"),
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
    countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla" "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados" "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana" "Brazil", "Brunei Darussalam", "Bulgaria" "Burkina Faso" "Burundi", "Cambodia" "Cameroon" "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad" "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia" "Comoros", "Congo", "Cook Islands" "Costa Rica", "Croatia", "Cuba" "Cyprus", "Czech Republic", "Denmark", "Djibouti" "Dominica" "Dominican Republic" "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia" "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji" "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam" "Guatemala", "Guernsey" "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Holy See (Vatican City State)" "Honduras" "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of" "Iraq" "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati" "Korea, Republic of" "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia" "Maldives" "Mali" "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia" "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue" "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman" "Pakistan" "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay" "Peru" "Philippines", "Pitcairn" "Poland", "Portugal" "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation" "Rwanda", "Saint Helena" "Saint Kitts and Nevis" "Saint Lucia", "Saint Pierre and Miquelon" "Saint Vincent and The Grenadines" "Samoa", "San Marino", "Sao Tome and Principe" "Saudi Arabia" "Senegal", "Serbia", "Seychelles", "Sierra Leone" "Singapore", "Slovakia" "Slovenia" "Solomon Islands" "Somalia", "South Africa" "Spain", "Sri Lanka", "Sudan", "Suriname" "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand" "Timor-leste", "Togo" "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan" "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam" "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
    cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    states = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    # rec_jobs = Job.objects.all().order_by('-creation_date')
    rec_jobs = Job.objects.all().filter(recruiter=rec).order_by('-creation_date')
    return render(request, "recruiter_dashboard.html", {"rec": rec,"countries":countries ,'cities': cities, "states": states,"rec_jobs": rec_jobs})

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
    countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla" "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados" "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana" "Brazil", "Brunei Darussalam", "Bulgaria" "Burkina Faso" "Burundi", "Cambodia" "Cameroon" "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad" "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia" "Comoros", "Congo", "Cook Islands" "Costa Rica", "Croatia", "Cuba" "Cyprus", "Czech Republic", "Denmark", "Djibouti" "Dominica" "Dominican Republic" "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia" "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji" "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam" "Guatemala", "Guernsey" "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Holy See (Vatican City State)" "Honduras" "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of" "Iraq" "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati" "Korea, Republic of" "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia" "Maldives" "Mali" "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia" "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue" "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman" "Pakistan" "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay" "Peru" "Philippines", "Pitcairn" "Poland", "Portugal" "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation" "Rwanda", "Saint Helena" "Saint Kitts and Nevis" "Saint Lucia", "Saint Pierre and Miquelon" "Saint Vincent and The Grenadines" "Samoa", "San Marino", "Sao Tome and Principe" "Saudi Arabia" "Senegal", "Serbia", "Seychelles", "Sierra Leone" "Singapore", "Slovakia" "Slovenia" "Solomon Islands" "Somalia", "South Africa" "Spain", "Sri Lanka", "Sudan", "Suriname" "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand" "Timor-leste", "Togo" "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan" "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam" "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
    cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    states = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada", "Port Said", "Suez", "Ismailia", "Tanta", "Mansoura", "Fayoum", "Beni Suef", "Sohag", "Zagazig", "Qena", "Damanhur", "Minya", "Luxor", "Port Said", "Kafr El Sheikh", "Damietta", "Asyut", "Sohag", "Assiut", "El-Mahalla El-Kubra", "El-Mansoura", "El-Minya", "Shubra El-Kheima", "Luxor", "El-Faiyum", "Tahta"]
    # rec_jobs = Job.objects.all().order_by('-creation_date')
    rec_jobs = Job.objects.all().filter(recruiter=rec).order_by('-creation_date')
    return render(request, "recruiter_dashboard.html", {"rec": rec,"countries":countries ,'cities': cities, "states": states,"rec_jobs": rec_jobs})

def viewJob(request, job_id, recruiter_username):
    job = get_object_or_404(Job, pk=job_id, recruiter__user__username=recruiter_username)
    return render(request, 'Job_Details.html', {'job': job})

def editJob(request, job_id):
    pass
    job = get_object_or_404(Job, pk=job_id)
    if request.method == 'POST':
        # Handle the job editing form submission
        pass
    else:
        # Render the job editing form
        return render(request, 'edit_Job.html', {'job': job})

def deleteJob(request, job_id):
    pass
    job = get_object_or_404(Job, pk=job_id)
    if request.method == 'POST':
        # Handle the job deletion
        pass
    else:
        # Render the job deletion confirmation page
        return render(request, 'delete_job_confirmation.html', {'job': job})
