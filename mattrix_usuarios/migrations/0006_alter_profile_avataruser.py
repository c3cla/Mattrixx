# Generated by Django 5.1.3 on 2024-12-06 14:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_usuarios', '0005_alter_profile_colegio_alter_profile_curso_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatarUser',
            field=models.ForeignKey(default='17', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='profiles', to='mattrix_usuarios.imagenes'),
        ),
    ]
