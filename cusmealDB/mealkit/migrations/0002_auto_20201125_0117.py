# Generated by Django 3.1.1 on 2020-11-24 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mealkit', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='material',
            name='photo',
        ),
        migrations.AddField(
            model_name='material',
            name='gram',
            field=models.PositiveIntegerField(default=100, verbose_name='그램수'),
        ),
        migrations.AlterField(
            model_name='mealkit',
            name='photo',
            field=models.ImageField(upload_to='', verbose_name='사진'),
        ),
    ]
