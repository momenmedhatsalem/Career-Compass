# Generated by Django 5.0.4 on 2024-05-08 21:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("UserApp", "0008_applicant_profile_image"),
    ]

    operations = [
        migrations.RenameField(
            model_name="recruiter",
            old_name="company_description",
            new_name="about_company",
        ),
        migrations.RenameField(
            model_name="recruiter",
            old_name="company_website",
            new_name="website",
        ),
        migrations.RemoveField(
            model_name="applicant",
            name="profile_image",
        ),
        migrations.AddField(
            model_name="recruiter",
            name="address",
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="category",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="city",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="company_size",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="country",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="founded_date",
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="recruiter_name",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="social_media",
            field=models.JSONField(default=list),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="state",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="recruiter",
            name="zip_code",
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name="recruiter",
            name="company_name",
            field=models.CharField(max_length=200, null=True),
        ),
    ]
