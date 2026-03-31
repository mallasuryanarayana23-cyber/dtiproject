from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

# ✅ Serve frontend assets (FIX for MIME error)
urlpatterns += static(
    '/assets/',
    document_root=os.path.join(
        settings.BASE_DIR.parent,
        'frontend',
        'dist',
        'assets'
    )
)
