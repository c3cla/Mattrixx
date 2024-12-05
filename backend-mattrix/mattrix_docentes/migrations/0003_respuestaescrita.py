# Generated by Django 5.1.3 on 2024-12-03 01:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_docentes', '0002_docenteestudiante_fecha_creacion'),
    ]

    operations = [
        migrations.CreateModel(
            name='RespuestaEscrita',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('respuesta1', models.TextField()),
                ('respuesta2', models.TextField(blank=True, null=True)),
                ('respuesta3', models.TextField(blank=True, null=True)),
                ('id_avance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='respuestas_escritas', to='mattrix_docentes.avanceestudiantes')),
            ],
        ),
    ]
