# Generated by Django 5.1.3 on 2024-11-25 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mattrix_admin', '0002_alter_cursos_nivel'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cursos',
            options={'verbose_name': 'Curso', 'verbose_name_plural': 'Cursos'},
        ),
        migrations.AddConstraint(
            model_name='cursos',
            constraint=models.UniqueConstraint(fields=('nivel', 'letra', 'colegio'), name='unique_curso'),
        ),
    ]