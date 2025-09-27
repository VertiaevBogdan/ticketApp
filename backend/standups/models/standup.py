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