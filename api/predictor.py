import tensorflow as tf
import keras
from keras.models import load_model
from keras.preprocessing import image
import numpy as np

# constants
img_width, img_height = 64,64
H5_PATH = "./model.h5"

# config
model = tf.keras.models.load_model('model.h5')

def predict(path):
    return model.predict(path)
