from rest_framework.routers import DefaultRouter
from .views import StandupCardViewSet

router = DefaultRouter()
router.register(r'standupCards', StandupCardViewSet, basename='standupCards')

urlpatterns = router.urls

