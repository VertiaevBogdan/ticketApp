from rest_framework.routers import DefaultRouter

from .views import StandupCardViewSet, StandupTourViewSet, MainStandupCardViewSet

router = DefaultRouter()

router.register(r'standupCards', StandupCardViewSet, basename='standupCards')
router.register(r'standupTour', StandupTourViewSet, basename='standupTour')
router.register(r'mainStandup', MainStandupCardViewSet, basename='mainStandup')

urlpatterns = router.urls

