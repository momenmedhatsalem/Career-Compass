from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from .models import Applicant, Recruiter

class EmailAuthenticationBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        print(username)
        
        try:
            applicant = Applicant.objects.get(email=username)
            print(applicant, password)
            if applicant.check_password(password):
                return applicant
        except Applicant.DoesNotExist:
            return None
        
        try:
            recruiter = Recruiter.objects.get(email=username)
            if recruiter.check_password(password):
                return recruiter
        except Recruiter.DoesNotExist:
            return None
