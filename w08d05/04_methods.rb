# functions are not first-class (they are not stand-alone values)

# x => x * 2

def say_hello name, age
  puts "hello there #{name}"

  message = 'does this work????'

  message
end

return_val = say_hello 'alice', 42

puts return_val
