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

    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    bio = models.TextField(blank=True, null=True)

    company_name = models.CharField(max_length=200, blank=True, null=True)
    business_email = models.CharField(max_length=200, blank=True, null=True)
    skills = models.CharField(max_length=200, blank=True, null=True)

    network1 = models.CharField(max_length=200, blank=True, null=True)
    network2 = models.CharField(max_length=200, blank=True, null=True)

    address = models.CharField(max_length=200, blank=True, null=True)

    zip = models.CharField(max_length=200, blank=True, null=True)

    country = models.CharField(max_length=200, blank=True, null=True)
    city = models.CharField(max_length=200, blank=True, null=True)
    state = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = 'Applicant'
        verbose_name_plural = 'Applicants'

    def __str__(self):
        return self.user.email  # Accessing the email address of the associated user


class Education (models.Model):
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    title =  models.CharField(max_length=200,default="none")
    Academy =  models.CharField(max_length=200,default="none") 
    startDate = models.IntegerField()
    endDate = models.IntegerField()
    description = models.CharField(max_length=200,default="none")

    class Meta:
        unique_together = ('applicant', 'title')


class Experience (models.Model):
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    title =  models.CharField(max_length=200,default="none")
    Company =  models.CharField(max_length=200,default="none")
    startDate = models.IntegerField()
    endDate = models.IntegerField()
    description = models.CharField(max_length=200,default="none")

    class Meta:
        unique_together = ('applicant', 'title')








class Recruiter(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    recruiter_name = models.CharField(max_length=100, null=True)

    company_name = models.CharField(max_length=200, null=True)
    about_company = models.TextField(blank=True, null=True)
    company_size = models.CharField(max_length=100, null=True)
    founded_date = models.DateField(null=True)
    website = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=100, null=True)

    social_media = models.JSONField(default=list)

    address = models.CharField(max_length=200, null=True)
    country = models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100, null=True)
    zip_code = models.CharField(max_length=10, null=True)
    state = models.CharField(max_length=100, null=True)

    class Meta:
        verbose_name = 'Recruiter'
        verbose_name_plural = 'Recruiters'

    def __str__(self):
        return self.user.email  # Accessing the email address of the associated user

