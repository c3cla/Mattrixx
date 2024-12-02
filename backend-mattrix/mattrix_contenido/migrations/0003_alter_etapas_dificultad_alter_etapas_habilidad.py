# Generated by Django 5.1.3 on 2024-12-02 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_contenido', '0002_rename_id_oa_indicadoresevaluacion_oa_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='etapas',
            name='dificultad',
            field=models.TextField(choices=[('Baja', 'Baja'), ('Intermedia', 'Intermedia'), ('Alta', 'Alta')], max_length=50),
        ),
        migrations.AlterField(
            model_name='etapas',
            name='habilidad',
            field=models.TextField(choices=[('Argumentar', 'Argumentar'), ('Modelar', 'Modelar'), ('Representrar', 'Representrar'), ('Resolución de problemas', 'Resolución de problemas')], max_length=50),
        ),
    ]
