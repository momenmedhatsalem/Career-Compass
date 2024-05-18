# Generated by Django 5.0.4 on 2024-05-18 07:37

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("CareerApp", "0006_savedcandidate"),
    ]

    operations = [
        migrations.AddField(
            model_name="job",
            name="id",
            field=models.BigAutoField(
                auto_created=True,
                default=1,
                primary_key=True,
                serialize=False,
                verbose_name="ID",
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="job",
            name="job_id",
            field=models.IntegerField(default=None),
        ),
    ]
