# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
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
        task_object = Task.objects.filter(Q(created_by=user) | Q(assigned_to = user))
        return task_object
