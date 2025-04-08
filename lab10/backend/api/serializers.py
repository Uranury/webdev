from rest_framework import serializers
from .models import Company, Vacancy, Position

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=50)
    description = serializers.CharField(max_length=250)
    city = serializers.CharField(max_length=50)
    address = serializers.CharField(max_length=250)

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = '__all__'

class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    position = PositionSerializer(read_only=True)
    company_id = serializers.IntegerField(write_only=True)
    position_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Vacancy
        fields = ['id', 'salary', 'company', 'position', 'company_id', 'position_id']
    
    def create(self, validated_data):
        company_id = validated_data.pop('company_id')
        position_id = validated_data.pop('position_id')
        company = Company.objects.get(id=company_id)
        position = Position.objects.get(id=position_id)
        return Vacancy.objects.create(company=company, position=position, **validated_data)

