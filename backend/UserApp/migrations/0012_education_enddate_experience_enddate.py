# Generated by Django 4.2 on 2024-05-13 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0011_remove_education_enddate_remove_experience_enddate_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='education',
            name='endDate',
            field=models.IntegerField(default=2022),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='endDate',
            field=models.IntegerField(default=2026),
            preserve_default=False,
        ),
    ]
