from django.contrib import admin
from .models import CustomUser, Applicant, Recruiter
# Register your models here.
admin.site.register(CustomUser)
class ApplicantAdmin(admin.ModelAdmin):
    # Define fields to display in the admin interface
    list_display = ['username', 'email', 'bio']
class RecruiterAdmin(admin.ModelAdmin):
    # Define fields to display in the admin interface
    list_display = ['username', 'email', 'company_name']

admin.site.register(Applicant, ApplicantAdmin)
admin.site.register(Recruiter, RecruiterAdmin)