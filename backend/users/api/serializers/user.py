from rest_framework import serializers

from ...models.user import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email']


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'password']

    def create_user(self, validated_data):
        user = User.objects.create_user(
            name=validated_data['name'],
            email = validated_data['email'],
            password = validated_data['password'],
        )

        return user
