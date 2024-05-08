from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    photo = models.ImageField(upload_to='profile_photos/', null=True, blank=True)
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    phone = models.CharField(max_length=15) 
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    is_applicant = models.BooleanField(default=False)
    is_recruiter = models.BooleanField(default=False)
    def __str__(self):
        return self.email

class Applicant(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    bio = models.TextField(blank=True, null=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)

    company_name = models.CharField(max_length=200, blank=True, null=True)
    business_email = models.CharField(max_length=200, blank=True, null=True)
    skills = models.CharField(max_length=200, blank=True, null=True)

    network1 = models.CharField(max_length=200, blank=True, null=True)
    network2 = models.CharField(max_length=200, blank=True, null=True)

    address = models.CharField(max_length=200, blank=True, null=True)

    zip = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = 'Applicant'
        verbose_name_plural = 'Applicants'

    def __str__(self):
        return self.user.email  # Accessing the email address of the associated user


class Recruiter(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    company_name = models.CharField(max_length=200)
    company_description = models.TextField(blank=True, null=True)
    company_website = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name = 'Recruiter'
        verbose_name_plural = 'Recruiters'

    def __str__(self):
        return self.user.email  # Accessing the email address of the associated user

