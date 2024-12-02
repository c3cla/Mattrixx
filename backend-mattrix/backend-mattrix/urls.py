from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('mattrix_admin/', include('mattrix_admin.urls')),
    path('mattrix_usuarios/', include('mattrix_usuarios.urls')),
    path('mattrix_contenido/', include('mattrix_contenido.urls')),
]