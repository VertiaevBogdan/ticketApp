from django.urls import path
from rest_framework.routers import DefaultRouter
from .views.user_profile import UserProfileViewSet
from .views.user_register import UserRegisterView


router = DefaultRouter()

router.register(r'profile', UserProfileViewSet, basename='profile')
urlpatterns = [
    path("register/", UserRegisterView.as_view(), name="register"),
    ] + router.urls
