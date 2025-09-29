from django.urls import path
from rest_framework.routers import DefaultRouter
from .views.user_profile import UserProfileViewSet
from .views.user_register import UserRegisterView
from .views.user_auth import csrf,

router = DefaultRouter()

router.register(r'profile', UserProfileViewSet, basename='profile')
urlpatterns = [
    path("register/", UserRegisterView.as_view(), name="register"),
    path("login/", UserLoginView.as_view(), name="login"),
    path("logout/", UserLogoutView.as_view(), name="logout"),
    path("csrf/", csrf, name="csrf"),
    ] + router.urls

