from django.shortcuts import render

from rest_framework import viewsets          # add this
# from .serializers import TodoSerializer  
from .serializers import BranchSerializer
from .serializers import CustomerSerializer
from .serializers import ProductSerializer    # add this
from .models import Branch, Customer, Product                     # add this

# class TodoView(viewsets.ModelViewSet):       # add this
#     serializer_class = TodoSerializer          # add this
#     queryset = Todo.objects.all()              # add this

class BranchView(viewsets.ModelViewSet):       # add this
    serializer_class = BranchSerializer          # add this
    queryset = Branch.objects.all()

class CustomerView(viewsets.ModelViewSet):       # add this
    serializer_class = CustomerSerializer          # add this
    queryset = Customer.objects.all()

class ProductView(viewsets.ModelViewSet):       # add this
    serializer_class = ProductSerializer          # add this
    queryset = Product.objects.all()


