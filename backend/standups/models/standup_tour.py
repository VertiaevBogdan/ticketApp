from django.db import models

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