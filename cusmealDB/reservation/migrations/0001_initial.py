# Generated by Django 3.1.1 on 2020-11-24 15:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('mealkit', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.PositiveIntegerField(verbose_name='가격')),
                ('quantity', models.PositiveIntegerField(verbose_name='수량')),
                ('mealkit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mealkit.mealkit')),
            ],
        ),
    ]
