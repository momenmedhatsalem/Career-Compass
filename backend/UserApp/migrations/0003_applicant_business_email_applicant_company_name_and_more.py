# Generated by Django 4.2.11 on 2024-05-08 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0002_applicant_address_applicant_business_email_and_more'),
    ]

    operations = [
        
        migrations.AddField(
            model_name='applicant',
            name='zip',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]