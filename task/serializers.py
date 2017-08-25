from rest_framework import serializers
from models import *

class TaskSerializer(serializers.ModelSerializer):
     class  Meta:
         model = Task
         fields = '__all__'
        #  fields = ('id', 'task', 'created_date', 'due_date','status', 'created_by', 'submitter_mail', 'assigned_to', 'note', 'priority')
class TaskCommentSerializer(serializers.ModelSerializer):
	class Meta:
		
		model = TaskComment
		fields = '__all__'
			