# Generated by Django 3.1.1 on 2020-11-24 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=20, verbose_name='닉네임')),
                ('date', models.CharField(max_length=20, verbose_name='날짜')),
                ('time', models.CharField(max_length=20, verbose_name='시간')),
                ('context', models.CharField(max_length=100, verbose_name='글내용')),
                ('photo', models.CharField(max_length=50, verbose_name='사진')),
            ],
        ),
    ]
