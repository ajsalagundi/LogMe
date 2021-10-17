import pymongo
from django.conf import settings

my_client = pymongo.MongoClient('localhost', 27017)
db = my_client['logme']
fitness = db['logme']
'''
    Attributes:
        1. Type: Dropdown (array)
            a. HIIT
            b. Circuit Training
            c. Stretching
            d. Running
        2. Time: Number
        3. Depending on answer, activity description changes
            a. HIIT: text field
            b. Circuit Training:
                i. Workout area: text field
                ii. Workout: checkboxes (array)
                    - Bicep Curls
                    - Tricep curls
                    - Chest press
                    - Shoulder/back press
                    - Squats
                    - Crunches
                    - Chest pulls
                    - Leg
                iii. Sets: number
                iv. Circuits: number
            c. Stretching: type: text field
            d. Running:
                i. Distance: number
                ii. Pace: auto-calculated given distance and time
    '''


def insert_fitness_object(fitness):
    obj = {
        "Type": "HIIT",
        "Time": "0.5",
        "Description": {
            "Run": {
                "Distance": "1.5 mi",
                "Pace": "20 min/mi"
            }
        }
    }
    fitness.insert_one(obj)


insert_fitness_object(fitness)
print(fitness.count_documents({}))
