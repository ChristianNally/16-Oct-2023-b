class Car
  def initialize (make, model, year)
    @make = make
    @model = model
    @year = year
  end

  # attr_reader :model
  # attr_writer :model
  attr_accessor(:year, :model, :make)

  # getter
  # def make
  #   return @make
  # end

  # setter
  # def make= (new_make)
  #   @make = new_make
  # end
end

# const myCar = new Car();
my_car = Car.new('Toyota', 'Tercel', 1986)

# car_one
# car_two
# dog_one
# dog_two

p my_car.class

puts my_car.make()
my_car.make = 'Ferrari'
# my_car.make=('Ferrari')
p my_car

puts my_car.model
my_car.model = 'La Ferrari'

p my_car

puts my_car.year
my_car.year = 2011

p my_car
