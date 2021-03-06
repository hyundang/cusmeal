from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('mealkit', views.MealkitViewSet)
router.register('material', views.MaterialViewSet)
urlpatterns = [
    path('', include(router.urls)),
]