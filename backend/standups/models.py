from django.db import models
from django.utils.text import slugify

class Standup(models.Model):
    id = models.AutoField(primary_key=True) #id for backend
    duration = models.DurationField()
    created_at = models.CharField(max_length=30) #example -  1 april 2022
    city = models.CharField(max_length=50)
    subtitles = models.TextField(max_length=5) # ENG, CZ, RUS...
    description = models.TextField(max_length=1000)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    preview = models.ImageField(upload_to='images/standupsPreview', null=True, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    title = models.CharField(max_length=50)
    standup_url = models.URLField(null=True, blank=True)
    director = models.TextField(max_length=30, blank=True, null=True, default='')
    is_featured = models.BooleanField(default=False)
    date_of_shooting =models.TextField(max_length=30, blank=True, null=True, default='')

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Standup'
        verbose_name_plural = 'Standups'


    def __str__(self):
        return self.title # отображение в БД по названию

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slag = slugify(self.title)
        super().save(*args, **kwargs)


class StandupTour(models.Model):
    id = models.AutoField(primary_key=True) ## упорядычевание будет формально по id
    month = models.CharField(max_length=5)
    month_num_day = models.CharField(max_length=2)
    city = models.CharField(max_length=20)
    additional_day_and_time = models.TextField(max_length=30, default='')
    additional_place_info = models.CharField(max_length=30)
    sold_out = models.BooleanField(default=False)

    class Meta:
        ordering = ['id']
        verbose_name = 'Standup Tour'
        verbose_name_plural = 'Standup Tours'

    def __str__(self):
        return self.city


class Faq(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    body = models.TextField(null=False, blank=False)