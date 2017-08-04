"""
Django settings for source project.

Generated by 'django-admin startproject' using Django 1.11.2.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os
from base import *
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '+36^nxuwm4d9p6nu_ciy*e9*4u6x6d-=on0j3v$9thb++9)j$!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


ROOT_URLCONF = 'source.urls'

WSGI_APPLICATION = 'source.wsgi.application'

#Tell django to use TolaUser model instead of default User
AUTH_USER_MODEL = 'userprofile.TolaUser'

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        #'ENGINE': 'django.db.backends.postgresql_psycopg2', 
        # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.

        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'tolaprofile',  # Or path to database file if using sqlite3.
        # The following settings are not used with sqlite3:
        'USER': '',
        'PASSWORD': '',
        'HOST': 'localhost',    # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
        'PORT': '',  # Set to empty string for default.
    }
}


#Facebook Social-auth login/register settings
SOCIAL_AUTH_FACEBOOK_KEY = '329345964157851' # App ID
SOCIAL_AUTH_FACEBOOK_SECRET = 'b865961b92e6984bea3bb02f0f288a64' # App Secret

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'