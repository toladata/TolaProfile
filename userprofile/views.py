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
from rest_framework.pagination import PageNumberPagination
import django_filters
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from social_django.utils import load_strategy, load_backend, psa, setting, BackendWrapper

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


@psa()
def auth_by_token(request, backend):

    """
    This decorator that creates a new user orauthenticates a user with an access_token

    """

    access_token = request.DATA.get('access_token')
    get_user = request.user
    user = request.backend.do_auth(access_token=access_token)

    if get_user:
        return get_user
    else:
        return None

class FacebookView(APIView):

    """
    View to authenticate users through Facebook.

    """

    permission_classes = (AllowAny,)

    def post(self, request, format=None):

        token = request.DATA.get('access_token', None)
        backend = request.DATA.get('backend', None)

        if token and backend:
            try:
                # Try to authenticate the user using python-social-auth
                get_user = auth_by_token(request, backend)

            except Exception,e:
                return Response({
                        'status': 'Bad request',
                        'message': 'Could not authenticate with the provided token.'
                    }, status=status.HTTP_400_BAD_REQUEST)

            if get_user:

                if not get_user.is_active:

                    return Response({
                        'status': 'Unauthorized',
                        'message': 'The user account is disabled.'
                    }, status=status.HTTP_401_UNAUTHORIZED)

                # Return the JWT instead.

                # Get the JWT payload for the get_user object.
                w
                payload = jwt_payload_handler(get_user)

                # Include original issued at time for a brand new token to allow token refresh

                if settings.JWT_ALLOW_REFRESH:
                    payload['orig_iat'] = timegm(
                        datetime.utcnow().utctimetuple()
                    )

                # Create the response object with the JWT payload.
                response_data = {
                    'token': jwt_encode_handler(payload)
                }

                return Response(response_data)
        else:
            return Response({
                    'status': 'Bad request',
                    'message': 'Authentication could not be performed with received data.'
            }, status=status.HTTP_400_BAD_REQUEST)
	
