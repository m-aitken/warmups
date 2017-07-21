require 'pry'

# if final character = ? print "sure"
# if lowercase = print "whatever"
# if uppercase = print "woah chillout"
# if input is "" = print "fine be that way"



loop do
  puts "Talk to Dan until the end of time:"

  talk = gets.chomp
binding.pry  
  
  if talk == talk.upcase and talk != ""
    puts "Woah chillout!"

  elsif talk[talk.length - 1] == "?"
    puts "Sure"
  # elsif talk[-1] == "?"
  #   puts "Sure"

  elsif talk == ""
    puts "Fine, be that way" 
    
  else  
    puts "...whatever." 
  end  
end

# gsub!(/([aeiou])/, 'a' => 4, 'e' => 3, 'i' => 1, 'o' => 0)
# elsif talk.split.first == "Bro"
