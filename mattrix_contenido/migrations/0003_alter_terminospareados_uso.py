# Generated by Django 5.1.3 on 2024-12-03 01:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_contenido', '0002_niveles_fondo_tarjeta'),
    ]

    operations = [
        migrations.AlterField(
            model_name='terminospareados',
            name='uso',
            field=models.CharField(choices=[('conceptos', 'conceptos'), ('experimentos', 'experimentos'), ('agrupar_experimentos', 'agrupar_experimentos')], max_length=255),
        ),
    ]
