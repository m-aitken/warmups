require 'pry'

# puts "Name for order: "
# gets 'name'

# puts "#{name} wants to order: " & gets 'order'

# store name/order data, so additions can be made

# orders = {
  # "Matt" = {
  #   :order => ["toastie", "burger"]
  # }

# orders[] = {:order => ""}

orders_list = {}

# function to build order
# feed order into loop



take_order = "y"

while take_order == "y"
  puts "Name for order: "
    order_name = gets.chomp 
  puts "#{order_name} wants to order: "
    order_item = gets.chomp

  orders_list[order_name] = {:order => order_item}

  puts "Add another item to the order? (y/n)"
  take_order = gets.chomp
  
  if take_order == "n"
  puts "No more orders"
  puts orders_list # improve to display clean string
  end  
end

binding.pry