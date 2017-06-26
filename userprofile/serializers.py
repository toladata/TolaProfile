from rest_framework import serializers
from models import *

class OrganizationSerialer(serializers.HyperlinkedModelSerializer):

	class meta:
		model = Organization
		fields = '__all__'


class CountrySerializer(serializers.HyperlinkedModelSerializer):

	class meta:
		model = Country
		fields = '__all__'
		

class TolaUserSerialer(serializers.HyperlinkedModelSerializer):

	class  meta:
		model = TolaUser
		fields = '__all__'

