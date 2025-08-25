from django.contrib import admin
from .models import Standup

@admin.register(Standup)
class StandupAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'city', 'created_at')
