# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from serializers import *
from models import *
from django.db.models import Count
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from social_django.utils import load_strategy, load_backend, psa, setting, BackendWrapper
from django.contrib.auth import update_session_auth_hash
from django.ocnf import settings
import requests
import json


class GetUserTickets(APIView):

    """
    View to get tickets assigned or created by current user

    """

    def get(self, request):

        tickets = {}
        user_email = self.request.user.email 
        repo = settings.GITHUB_REPO + "/issues/"
        token = settings.GITHUB_AUTH_TOKEN
        header = {'Authorization': 'token %s' % token}

        req = requests.get(repo, headers=header)

        if int(req.status_code) == 200:
            tickets = json.loads(req.content)
            

