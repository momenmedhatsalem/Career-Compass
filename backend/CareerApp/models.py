# Create your models here.
from django.db import models
from UserApp.models import Applicant, Recruiter
from django.utils import timezone

class JobCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Job(models.Model):
    job_id = models.AutoField(primary_key=True, default=None)
    recruiter = models.ForeignKey(Recruiter, on_delete=models.CASCADE, default=None)
    title = models.CharField(max_length=100, default=None)
    company_name = models.CharField(max_length=100, default=None)
    status = models.CharField(max_length=100, default=None)
    years_of_experience = models.IntegerField(default=None)
    description = models.TextField(default=None)
    category = models.CharField(max_length=100, default=None)
    type = models.CharField(max_length=100, default=None)
    salary = models.DecimalField(max_digits=10, decimal_places=2, default=None)
    MinSalary = models.DecimalField(max_digits=10, decimal_places=2, default=None)
    MaxSalary = models.DecimalField(max_digits=10, decimal_places=2, default=None)
    creation_date = models.DateTimeField(default=timezone.now)
    english_fluency = models.CharField(max_length=100, default=None)
    experience = models.CharField(max_length=100, default=None)
    address = models.CharField(max_length=200, default=None)
    country = models.CharField(max_length=100, default=None)
    city = models.CharField(max_length=100, default=None)
    zip_code = models.CharField(max_length=10, default=None)
    state = models.CharField(max_length=100, default=None)

    def get_next_id(self):
        last_job = Job.objects.filter(recruiter=self.recruiter).order_by('-job_id').first()
        if last_job:
            return last_job.job_id + 1
        else:
            return 1

    def save(self, *args, **kwargs):
        if not self.pk:
            self.job_id = self.get_next_id()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    class Meta:
        unique_together = ('job_id', 'recruiter',)




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
