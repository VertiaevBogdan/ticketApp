from rest_framework import generics
from ...models import User
from ..serializers.user import UserRegisterSerializer

class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    queryset = User.objects.all()