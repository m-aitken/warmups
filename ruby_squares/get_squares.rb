require 'pry'

def get_squares array 
  array.select{|num| Math.sqrt(num) % 1 ==0}.sort.uniq

end

binding.pry

# loop through each element in array, multiply by itself
