require 'pry'

class RobotCollection
end

class Robot
  def initialize
    # @name = ((('A'..'Z').to_a + (0..9).to_a)*3).shuffle[0,5].join
    # @name = ('A'..'Z').to_a.sample + (000..999).to_a.sample
    # @name = prefix + suffix
    @name = "#{prefix}#{suffix}"
  end

  def name
    @name
  end

  def prefix
    ('AA'..'ZZ').to_a.sample
  end

  def suffix
    ('000'..'999').to_a.sample
  end        

  def reset
    @name = "#{prefix}#{suffix}" 
  end

end

# robot name must be unique
# function to reset/wipe name

print "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name

print "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name

print "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name


binding.pry