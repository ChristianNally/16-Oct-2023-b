# hash => collection of key/value pairs, objects, dictionaries, associative arrays

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

# symbols are lightweight strings (as close to a primitive as you can get)

user = {
  :username => 'jstamos',
  :password => '1234' 
}

# puts user
# p user[:username]

user = {
  username: 'jstamos',
  password: '1234'
}

puts user
puts user[:password]
