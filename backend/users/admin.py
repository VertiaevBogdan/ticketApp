from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

from .models import User

@admin.register(User)
class CustomUser(UserAdmin):
    model = User
    list_display = ('id','name', 'email', 'password', 'is_paid', 'created_at', 'updated_at')
    search_fields = ('name', 'email','is_paid')
    ordering = ('created_at', 'id',)