from django.db import models

# Create your models here.

# class FitnessLog(models.Model):
#     workout_types = [
#         ('HIIT', 'High_Intensity_Interval_Training'),
#         ('CT', 'Circuit_Training'),
#         ('ST', 'Stretching'),
#         ('RN', 'Running')
#     ]
#     type = models.CharField(choices=workout_types)
#     time = models.TimeField
#
#     def set_description(self, activity):
#         description = None
#         if activity == 'HIIT':
#             description = models.CharField(max_length=50)
#         elif activity == 'CT':
#             area = models.CharField(max_length=100)
#             workout = models.CharField(
#                 choices=[
#                     ('BC', 'Bicep Curls'),
#                     ('TC', 'Tricep curls'),
#                     ('PU', 'Pushups'),
#                     ('CP', 'Chest press'),
#                     ('SBP', 'Shoulder/back press'),
#                     ('SQ', 'Squats'),
#                     ('CR', 'Crunches'),
#                     ('CPU', 'Chest pulls'),
#                     ('CR', 'Calf raises')
#                 ]
#             )
#             sets = models.IntegerField
#             circuits = models.IntegerField
#             description = models
#         return description