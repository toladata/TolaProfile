# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from serializers import *
from django.db.models import Count
from django.contrib.auth.models import User
from tola.util import getCountry
from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
import django_filters

from workflow.mixins import APIDefaultsMixin

class CountryViewSet(viewsets.ModelViewSet):

	queryset = Country.objects.all()
	serializer_class = CountrySerializer


class OrganizationViewset(viewsets.ModelViewSet):

	queryset = Organization.objects.all()
	serializer_class = OrganizationSerializer


class TolaUserViewset(viewsets.ModelViewSet):

	queryset = TolaUser.objects.all()
	serializer_class = TolaUserSerializer

	
