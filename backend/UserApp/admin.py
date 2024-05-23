from django.contrib import admin
from .models import Applicant, Recruiter,CustomUser

class ApplicantAdmin(admin.ModelAdmin):
    list_display = ('user', 'bio', 'resume') 

class RecruiterAdmin(admin.ModelAdmin):
    list_display = ('user', 'company_name', 'about_company', 'website')  

admin.site.register(Applicant, ApplicantAdmin)
admin.site.register(Recruiter, RecruiterAdmin)
admin.site.register(CustomUser)
