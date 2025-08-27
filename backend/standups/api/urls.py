from rest_framework.routers import DefaultRouter
from .views import StandupCardViewSet, StandupTourViewSet

router = DefaultRouter()

router.register(r'standupCards', StandupCardViewSet, basename='standupCards')
router.register(r'standuptour', StandupTourViewSet, basename='standuptour')

urlpatterns = router.urls

