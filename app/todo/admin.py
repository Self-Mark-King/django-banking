from django.contrib import admin

# Register your models here.
from .models import Todo # add this
from .models import Branch
from .models import Customer
from .models import Product

class TodoAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'description', 'completed') # add this

class BranchAdmin(admin.ModelAdmin):
    list_display = ('branch_name','address')

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'account_number', 'branch')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'product_sku')

# Register your models here.
admin.site.register(Todo, TodoAdmin) # add this
admin.site.register(Branch, BranchAdmin)
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Product, ProductAdmin)
