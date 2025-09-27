# from rest_framework_simplejwt.serializers import TokenObtainSerializer, TokenObtainPairSerializer, AuthUser
# from rest_framework_simplejwt.tokens import Token
#
#
# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#         token['name'] = user.username
#         token['is_paid'] = user.