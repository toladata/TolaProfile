# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from models import *

class TaskAdmin(admin.ModelAdmin):

	list_display = ('task', 'created_date', 'submitter_email')
	display = 'Task'


# Register your models here.
admin.site.register(Task, TaskAdmin)