from django.contrib import admin
from .models import CustomUser, Applicant
# Register your models here.
admin.site.register(CustomUser)
class ApplicantAdmin(admin.ModelAdmin):
    # Define fields to display in the admin interface
    list_display = ['username', 'email', 'bio']

admin.site.register(Applicant, ApplicantAdmin)