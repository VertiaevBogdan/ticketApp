from rest_framework import serializers
from ..models import Standup, StandupTour


class StandupCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ['id', 'image', 'slag']


class StandupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ['duration', 'created_at', 'city', 'subtitles', 'description', 'image', 'title', 'standup_url']

class StandupTourSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandupTour
        fields = '__all__'