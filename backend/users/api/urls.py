from rest_framework.routers import DefaultRouter
from .views.user_profile import UserProfileViewSet


router = DefaultRouter()

router.register(r'userProfile', UserProfileViewSet, basename='userProfile')
urlpatterns = router.urls
