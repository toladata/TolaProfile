from django.conf.urls import include, url
from views import *
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [

	url(r'^task/send_assignment_mail/$', SendTaskAssignedMail.as_view()),
]