from django.conf.urls import include, url
from views import *
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [
    url(r'^login/', obtain_jwt_token),
    url(r'^token-refresh/', refresh_jwt_token),
    url(r'^token-verify/', verify_jwt_token),
    url(r'^register/$', UserRegister.as_view()),
    url(r'^facebook/$', FacebookView.as_view()),
    url(r'^update-password/$', UpdatePasswordView.as_view()),
]