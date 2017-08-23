# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.mail import send_mail, BadHeaderError
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated
from models import *
from serializers import *

# Create your views here.
class TaskListViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def get_queryset(self):
        """
        This view should return a list of all the tasks
        for the currently logged user.
        """
        user = self.request.user

        task_object = Task.objects.all()

        if not user.is_admin:
            task_object = task_object.filter(Q(created_by=user) | Q(assigned_to = user))

        return task_object

#Send Mail when tasks is assigned to a user
class SendTaskAssignedMail(APIView):
    permision_classes = (IsAuthenticated,)    

    def post(self, request, format='application/json'):

        mail_subject = request.data.get('subject', '')
        mail_body = request.data.get('message', '')
        mail_from = request.data.get('mail_from', '')
        mail_to = request.data.get('mail_to', '')

        if mail_to == None:
            return Response({"Failed": "Invalid email encountered!!!"})

        if mail_subject and mail_body and mail_from and mail_to:
            try:
                send_mail(mail_subject, mail_body, mail_from, [mail_to])

            except BadHeaderError:
                return Response({"email_sending_error": "Something went wrong when sending email to the assignee."})
            
            return Response({"success": mail_to + " has been succesfully notified of the task assignment."})

    def get(self, request, format=None):
        return Response({"Invalid": "GET requests are not allowed for this endpoint!!!"})







