from rest_framework import serializers
from .models import Todo
from .models import Branch
from .models import Customer
from .models import Product


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ('id', 'branch_name', 'address')

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'customer_name','account_number', 'branch')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product 
        fields = ('id','product_name', 'product_sku', 'customers')

