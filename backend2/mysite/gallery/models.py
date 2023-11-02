import time

from django.db import models
import datetime
from django.contrib.auth.models import AbstractUser
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.validators import UnicodeUsernameValidator




class User(AbstractUser):
    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        validators=[UnicodeUsernameValidator],
        error_messages={
            "unique": _("A user with that username already exists."),
        },
    )
    email = models.EmailField(_("email address"), unique=False)
    USERNAME_FIELD = "username"
    photo = models.ImageField(
        upload_to='media/photo/users',
        default='media/default_photos/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'
    )


class Gallery(models.Model):
    user_id = models.OneToOneField(User, on_delete= models.CASCADE,primary_key=True)


class Files(models.Model):
    path = models.ImageField(upload_to='media/photo/files',null=False)

class Albums(models.Model):
    name = models.CharField(max_length=15)
    gallery_id = models.ForeignKey(Gallery,on_delete=models.CASCADE)
    files = models.ManyToManyField(Files)
    colobarators = models.ManyToManyField(User)
    is_private = models.BooleanField(default=False)






