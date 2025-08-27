from rest_framework import serializers
from ..models import Standup

class StandupCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ['id', 'image', 'slag']


class StandupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ['duration', 'created_at', 'city', 'subtitles', 'description', 'image', 'title', 'standup_url']