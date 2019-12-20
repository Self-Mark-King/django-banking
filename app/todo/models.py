from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Branch(models.Model):
    branch_name = models.CharField(max_length=30)
    address = models.CharField(max_length=30)

    def __str__(self):
        return self.branch_name

class Customer(models.Model):
    customer_name = models.CharField(max_length=30)
    account_number = models.IntegerField()
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE)

    def __str__(self):
        return self.customer_name

class Product(models.Model):
    product_name = models.CharField(max_length=30)
    product_sku = models.IntegerField()
    customers = models.ManyToManyField(Customer)

    def __str__(self):
        return self.product_name
