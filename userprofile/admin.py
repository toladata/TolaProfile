# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from models import *

class CoutryAdmin(admin.ModelAdmin):

	list_display = ('country', 'code', 'create_date')
	display = 'Country'


class OrganizationAdmin(admin.ModelAdmin):

    list_display = ('name', 'create_date', 'edit_date')
    display = 'Organization'
    

class TolaUserAdmin(admin.ModelAdmin):
	list_display = ('name', 'user', 'organization', 'country')
	display = 'TolaUser'

# Register your models here.
admin.Register(Organization, OrganizationAdmin)
admin.Register(Country, CoutryAdmin)
admin.Register(TolaUser, TolaUserAdmin)