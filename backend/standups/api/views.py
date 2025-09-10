from rest_framework import viewsets
from .serializers import StandupCardSerializer, StandupSerializer, StandupTourSerializer, MainStandupSerializer, \
    FaqSerializer
from ..models import Standup, StandupTour, Faq


class MainStandupCardViewSet(viewsets.ModelViewSet):
    serializer_class = MainStandupSerializer
    queryset = Standup.objects.filter(is_featured=True) #берём только актуальный стендап

class StandupCardViewSet(viewsets.ModelViewSet):
    serializer_class = StandupCardSerializer

    def get_queryset(self):
        last_standup = Standup.objects.order_by('-id').first() # первый с конца
        qs = Standup.objects.all().order_by('-id') # сортируем

        if last_standup:
            qs = qs.exclude(id=last_standup.id) # исключаем последний

        return qs

class StandupTourViewSet(viewsets.ModelViewSet):
    queryset = StandupTour.objects.all().order_by('id')
    serializer_class = StandupTourSerializer

class FaqViewSet(viewsets.ModelViewSet):
    serializer_class = FaqSerializer
    queryset = Faq.objects.all()