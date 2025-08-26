from rest_framework import viewsets
from .serializers import StandupCardSerializer, StandupSerializer
from ..models import Standup

class StandupCardViewSet(viewsets.ModelViewSet):
    queryset = Standup.objects.all()
    serializer_class = StandupCardSerializer