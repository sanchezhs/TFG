from rest_framework import serializers
from .validation import form_parser, file_reader


class FormData(object):
    def __init__(self, objetive, constraints, radioValue):
        self.objetive = objetive
        self.constraints = constraints
        self.radioValue = radioValue

formdata = FormData(objetive='x', constraints=['x < 1'], radioValue='z')

class FormDataSerializer(serializers.Serializer):
    objetive = serializers.CharField(validators=[form_parser.validate_objetive])
    constraints = serializers.ListField(validators=[form_parser.validate_constraints])
    radioValue = serializers.CharField()
    
    def create(self, validated_data):
        return FormData(**validated_data)
    
    def update(self, instance, validated_data):
        instance.objetive = validated_data.get('objetive', instance.objetive)
        instance.constraints = validated_data.get('constraints', instance.constraints)
        instance.radioValue = validated_data.get('radioValue', instance.radioValue)
        
        return instance

class SettingsData(object):
    def __init__(self, upperbound, lowerbund, depth, seed):
        self.upperbound = upperbound
        self.lowerbund = lowerbund
        self.depth = depth
        self.seed = seed
        
class SettingsDataSerializer(serializers.Serializer):
    upperBound = serializers.CharField()
    lowerBound = serializers.CharField()
    seed = serializers.CharField()
    depth = serializers.CharField()
    
    def create(self, validated_data):
        return SettingsData(**validated_data)
    
    def update(self, instance, validated_data):
        instance.upperBound = validated_data.get('upperBound', instance.upperBound)
        instance.lowerBound = validated_data.get('lowerBound', instance.lowerBound)
        instance.seed = validated_data.get('seed', instance.seed)
        instance.depth = validated_data.get('depth', instance.depth)
        
        return instance
    
    
class Token:
    def __init__(self, apiToken):
        self.apiToken = apiToken
    
class TokenSerializer(serializers.Serializer):
    apiToken = serializers.CharField()
    
    def create(self, validated_data):
        return Token(**validated_data)
    
    def update(self, instance, validated_data):
        instance.apiToken = validated_data.get('apiToken', instance.apiToken)
        return instance