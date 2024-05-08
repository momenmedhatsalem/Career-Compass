from django.contrib import admin
from .models import Applicant, Recruiter,CustomUser

# Define custom admin classes for Applicant and Recruiter models
class ApplicantAdmin(admin.ModelAdmin):
    list_display = ('user', 'bio', 'resume')  # Specify fields to display in the list view

class RecruiterAdmin(admin.ModelAdmin):
    list_display = ('user', 'company_name', 'company_description', 'company_website')  # Specify fields to display in the list view

# Register the models and their corresponding admin classes
admin.site.register(Applicant, ApplicantAdmin)
admin.site.register(Recruiter, RecruiterAdmin)
admin.site.register(CustomUser)
