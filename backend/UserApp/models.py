from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    photo = models.ImageField(upload_to='profile_photos/', null=True, blank=True)
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    def __str__(self):
        return self.username

class Applicant(CustomUser):
    bio = models.TextField()
    resume = models.FileField(upload_to='resumes/')

    def __str__(self):
        return self.username

class Recruiter(CustomUser):
    company_name = models.CharField(max_length=200)
    company_description = models.TextField()
    company_website = models.URLField()

    def __str__(self):
        return self.username
