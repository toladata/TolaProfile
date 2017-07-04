from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from task.views import *

router = routers.DefaultRouter()

router.register(r'tasks', TaskViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/auth/', include('userprofile.urls')),

    #rest framework
    url(r'^api/', include(router.urls)),

]
