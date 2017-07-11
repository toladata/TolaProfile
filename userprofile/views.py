# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from serializers import *
from models import *
from django.db.models import Count
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
import django_filters
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated

class CountryViewSet(viewsets.ModelViewSet):

	queryset = Country.objects.all()
	serializer_class = CountrySerializer


class OrganizationViewset(viewsets.ModelViewSet):
	queryset = Organization.objects.all()
	serializer_class = OrganizationSerializer


class TolaUserViewset(viewsets.ModelViewSet):
    permision_classes = (IsAuthenticated,)    
    queryset = TolaUser.objects.all()
    serializer_class = TolaUserSerializer
    

class UserRegister(APIView):
    """
    Register a TolaUser user.
    """
    serializer_class = TolaUserSerializer
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


	
