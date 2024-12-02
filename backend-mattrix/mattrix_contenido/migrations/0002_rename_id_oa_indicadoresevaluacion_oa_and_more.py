# Generated by Django 5.1.3 on 2024-11-25 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_contenido', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='indicadoresevaluacion',
            old_name='id_OA',
            new_name='OA',
        ),
        migrations.AddField(
            model_name='oa',
            name='nivel_asociado',
            field=models.CharField(choices=[('7° Básico', '7° Básico'), ('8° Básico', '8° Básico'), ('1° Medio', '1° Medio'), ('2° Medio', '2° Medio'), ('3° Medio', '3° Medio'), ('4° Medio', '4° Medio')], default='OA1', max_length=50),
            preserve_default=False,
        ),
    ]
