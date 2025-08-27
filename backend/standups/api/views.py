from rest_framework import viewsets
from .serializers import StandupCardSerializer, StandupSerializer, StandupTourSerializer
from ..models import Standup, StandupTour

class StandupCardViewSet(viewsets.ModelViewSet):
    queryset = Standup.objects.all().order_by('-id')
    serializer_class = StandupCardSerializer

class StandupTourViewSet(viewsets.ModelViewSet):
    queryset = StandupTour.objects.all().order_by('id')
    serializer_class = StandupTourSerializer