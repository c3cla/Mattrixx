# Generated by Django 5.1.3 on 2024-11-23 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_admin', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cursos',
            name='nivel',
            field=models.CharField(choices=[('7° Básico', '7° Básico'), ('8° Básico', '8° Básico'), ('1° Medio', '1° Medio'), ('2° Medio', '2° Medio'), ('3° Medio', '3° Medio'), ('4° Medio', '4° Medio')], max_length=50),
        ),
    ]