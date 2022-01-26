# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contain_letter (array, letter)
  array.select {|value| value.include? letter}
end
p contain_letter beverages_array, letter_o
p contain_letter beverages_array, letter_t


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_of_numbers array
  array.sum
end
p sum_of_numbers nums_array1
p sum_of_numbers nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike
  attr_accessor :model
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and it's current speed is #{@current_speed} mph"
  end
  def pedal_faster value
    @current_speed = @current_speed += value
  end
  def brake value
    @current_speed = @current_speed -= value
    @current_speed <= -1 ? 0 : @current_speed
  end
end

Trek = Bike.new 'Trek'
p Trek.pedal_faster(10)
p Trek.pedal_faster(18)
p Trek.brake(5)
p Trek.brake(25)
p Trek.bike_info

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
