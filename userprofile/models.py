from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.signals import user_logged_in, user_logged_out 
from urllib2 import urlopen
import json
from django.contrib import admin
from datetime import datetime

try:
    from django.utils import timezone
except ImportError:
    from datetime import datetime as timezone

class Country(models.Model):
    country = models.CharField("Country Name", max_length=255, blank=True)
    code = models.CharField("2 Letter Country Code", max_length=4, blank=True)
    description = models.TextField("Description/Notes", max_length=765,blank=True)
    latitude = models.CharField("Latitude", max_length=255, null=True, blank=True)
    longitude = models.CharField("Longitude", max_length=255, null=True, blank=True)
    zoom = models.IntegerField("Zoom", default=5)
    create_date = models.DateTimeField(null=True, blank=True)
    edit_date = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ('country',)
        verbose_name_plural = "Countries"

    # on save add create date or update edit date
    def save(self, *args, **kwargs):
        if self.create_date == None:
            self.create_date = datetime.now()
        self.edit_date = datetime.now()
        super(Country, self).save()

    # displayed in admin templates
    def __unicode__(self):
        return self.country

class Organization(models.Model):
    name = models.CharField("Organization Name", max_length=255, blank=True, default="TolaData")
    description = models.TextField("Description/Notes", max_length=765, null=True, blank=True)
    country = models.ForeignKey(Country, blank=True, null=True)
    organization_url = models.CharField(blank=True, null=True, max_length=255)
    level_1_label = models.CharField("Project/Program Organization Level 1 label", default="Program", max_length=255, blank=True)
    level_2_label = models.CharField("Project/Program Organization Level 2 label", default="Project", max_length=255, blank=True)
    level_3_label = models.CharField("Project/Program Organization Level 3 label", default="Component", max_length=255, blank=True)
    level_4_label = models.CharField("Project/Program Organization Level 4 label", default="Activity", max_length=255, blank=True)
    create_date = models.DateTimeField(null=True, blank=True)
    edit_date = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ('name',)
        verbose_name_plural = "Organizations"

    # on save add create date or update edit date
    def save(self, *args, **kwargs):
        if self.create_date == None:
            self.create_date = datetime.now()
        self.edit_date = datetime.now()
        super(Organization, self).save()

    # displayed in admin templates
    def __unicode__(self):
        return self.name

class TolaUserManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        
        # Ensure that an email is set
        if not email:
            raise ValueError('You must have a valid e-mail address')

        # Ensure that a username is set
        if not kwargs.get('username'):
            raise ValueError('You must have a valid username')

        tolauser = self.model(
            email=self.normalize_email(email),
            username=kwargs.get('username'),
            firstname=kwargs.get('firstname', None),
            lastname=kwargs.get('lastname', None),
        )

        tolauser.set_password(password)
        tolauser.save()

        return tolauser

    def create_superuser(self, email, password=None, **kwargs):
        tolauser = self.create_user(email, password, **kwargs)

        tolauser.is_admin = True
        tolauser.is_staff = True        
        tolauser.save()

        return tolauser

    def get_full_name(self):
        return self.fullname

    def get_short_name(self):
        return self.shortname

    @property
    def is_superuser(self):
        return self.is_superuser

    @property
    def is_staff(self):
        return self.is_superuser

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

class TolaUser(AbstractBaseUser):
    
    username = models.CharField("Username", unique=True, null=False, max_length=50)
    email = models.EmailField(unique=True)
    firstname = models.CharField("First Name", blank=True, null=True, max_length=50)
    lastname = models.CharField("Last Name", blank=True, null=True, max_length=50)
    
    organization = models.ForeignKey('Organization', default=1, blank=True, null=True, )
    country = models.ForeignKey(Country, blank=True,default=1, null=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    activity_api_token = models.CharField(blank=True, null=True, max_length=255)
    tables_api_token = models.CharField(blank=True, null=True, max_length=255)
    activity_url = models.CharField(blank=True, null=True, max_length=255)
    table_url = models.CharField(blank=True, null=True, max_length=255)

    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    

    objects = TolaUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        verbose_name_plural = 'Tola Users'
        ordering = ('username',)

    def __unicode__(self):
        return self.username
    
    def get_full_name(self):
        return self.fullname

    def get_short_name(self):
        return self.username

    @property
    def is_superuser(self):
        return self.is_admin

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin



