from rest_framework import viewsets


from ..serializers.user import UserSerializer
from ...models import User


class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.only('name', 'email')