# Generated by Django 5.1.7 on 2025-04-02 14:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Position',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(max_length=400)),
            ],
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='description',
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='name',
        ),
        migrations.AddField(
            model_name='vacancy',
            name='position',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.position'),
        ),
    ]
