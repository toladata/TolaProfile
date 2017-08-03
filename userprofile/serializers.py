from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers
from models import *

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = Organization
		fields = '__all__'


class CountrySerializer(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = Country
		fields = '__all__'
		

class TolaUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, required=True)
    confirm_password = serializers.CharField(write_only=True, required=True)

    class  Meta:
        model = TolaUser
        fields = ('id', 'email', 'username', 'date_created', 'date_modified','firstname', 'lastname', 'password', 'organization', 'country', 'confirm_password')
        read_only_fields = ('date_created', 'date_modified')

    def create(self, validated_data):
        return TolaUser.objects.create_user(**validated_data)

    def validate(self, data):
        '''
        Compare the passwords to ensure that they are same
        '''
        
        if data['password']:
            if data['password'] != data['confirm_password']:
                raise serializers.ValidationError(
                    "The passwords must be the same"
                )
        return data

class TolaUserUpdateSerializer(serializers.ModelSerializer):

    class  Meta:
        model = TolaUser
        fields = ('id', 'email', 'username', 'date_created', 'date_modified','firstname', 'lastname', 'organization', 'country')
        read_only_fields = ('date_created', 'date_modified')

    def put(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username',instance.username)
        instance.firstname = validated_data.get('firstname',instance.firstname)
        instance.lastname = validated_data.get('lastname',instance.lastname)

        password = validated_data.get('password', None)
        confirm_password = validated_data.get('confirm_password', None)

        if password and password == confirm_password:
            instance.set_password(password)

        instance.save()
        
        return instance

  

