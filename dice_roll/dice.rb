require 'pry'

class Dice
  @@arr = []
  
  def Dice.roll n
    @@arr = n.times.map{rand(1..6)}
    Dice
  end

  def Dice.total
    @@arr.sum
  end

  # array << sum
end 

binding.pry