# Create your models here.
from django.db import models
from UserApp.models import Applicant, Recruiter

class JobCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Job(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    category = models.ForeignKey(JobCategory, on_delete=models.CASCADE)
    recruiter = models.ForeignKey(Recruiter, on_delete=models.CASCADE, related_name="jobs")

    posted_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class SavedJob(models.Model):
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE, related_name="saved_jobs")
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    saved_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('applicant', 'job')

    def __str__(self):
        return f"{self.applicant.username} saved {self.job.title}"


class Application(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    apply_date = models.DateTimeField(auto_now_add=True)
    cover_letter = models.TextField()
    accepted = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.applicant.user.username} - {self.job.title}"
