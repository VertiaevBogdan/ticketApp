from rest_framework import serializers
from ..models import Standup, StandupTour, Faq


class MainStandupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ['duration', 'created_at', 'director', 'date_of_shooting', 'subtitles']

class StandupCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ['id', 'image', 'slug']

class StandupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ['duration', 'created_at', 'city', 'subtitles',
                  'description', 'image', 'title', 'standup_url',
                  'slug', 'is_featured']

class StandupTourSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandupTour
        fields = '__all__'

class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = '__all__'