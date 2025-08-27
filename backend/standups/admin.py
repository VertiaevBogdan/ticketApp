from django.contrib import admin
from .models import Standup, StandupTour


@admin.register(Standup)
class StandupAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'city', 'created_at')

@admin.register(StandupTour)
class StandupTourAdmin(admin.ModelAdmin):
    list_display = ('id', 'city', 'sold_out')