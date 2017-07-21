require 'pry'

class Coffee

  def initialize type, sugar, size, name
  attr_accessor :type :sugar :size :name

    @type = type
    @sugar = sugar
    @size = size
    @name = name + 'o'
  
  end

  def to_s
    order
  end

  def order
    @name + "'s " + @type + ', ' + @size + ', ' + @sugar
  end

  def type
    @type
  end

  def sugar
    @sugar
  end

  def name
    @name
  end

  def size
    @size
  end

end

c1 = Coffee.new 'latte', '1 sugar', 'small', 'Matt'

# puts "#{c1.name}'s #{c1.size} #{c1.type}, #{c1.sugar}."

puts c1

binding.pry