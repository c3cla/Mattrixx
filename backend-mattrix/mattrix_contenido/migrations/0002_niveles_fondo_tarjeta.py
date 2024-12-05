# Generated by Django 5.1.3 on 2024-12-02 05:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_contenido', '0001_initial'),
        ('mattrix_usuarios', '0003_alter_profile_avataruser'),
    ]

    operations = [
        migrations.AddField(
            model_name='niveles',
            name='fondo_tarjeta',
            field=models.ForeignKey(blank=True, limit_choices_to={'uso': 'fondo-nivel'}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tarjetas_niveles', to='mattrix_usuarios.imagenes'),
        ),
    ]
