from rest_framework.routers import DefaultRouter

from .api.views import StandupCardViewSet, StandupTourViewSet, MainStandupCardViewSet, FaqViewSet, StandupViewSet

router = DefaultRouter()

router.register(r'standupCards', StandupCardViewSet, basename='standupCards')
router.register(r'standupTour', StandupTourViewSet, basename='standupTour')
router.register(r'mainStandup', MainStandupCardViewSet, basename='mainStandup')
router.register(r'standup', StandupViewSet, basename='standup')
router.register(r'faq', FaqViewSet, basename='faq')
urlpatterns = router.urls

