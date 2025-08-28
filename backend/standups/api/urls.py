from rest_framework.routers import DefaultRouter
from .views import StandupCardViewSet, StandupTourViewSet

router = DefaultRouter()

router.register(r'standupCards', StandupCardViewSet, basename='standupCards')
router.register(r'standupTour', StandupTourViewSet, basename='standupTour')

urlpatterns = router.urls

