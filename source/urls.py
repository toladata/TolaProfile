from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from task.views import *
from userprofile.views import *

router = routers.DefaultRouter()

router.register(r'tasks', TaskListViewSet)
router.register(r'tolausers', TolaUserViewset)
router.register(r'countries', CountryViewSet)
router.register(r'organizations', OrganizationViewset)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^api/auth/', include('userprofile.urls')),
    #url(r'^api/', include('task.urls')),

    #rest framework
    url(r'^api/', include(router.urls)),

]
