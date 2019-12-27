
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from todo import views                               # add this
# from branch import views
# from customer import views
# from product import views


        
router = routers.DefaultRouter()                      # add this
# router.register(r'todos', views.TodoView, 'todo')     # add this
router.register(r'branch', views.BranchView, 'branch')
router.register(r'customer', views.CustomerView, 'customer')
router.register(r'product', views.ProductView, 'product')

        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))                # add this
]

# the 3 lines below change the behavior of the admin screen labels
admin.site.site_header = "Banking Admin"
admin.site.site_title = "Banking Admin Portal"
admin.site.index_title = "Welcome to the Banking Portal"
