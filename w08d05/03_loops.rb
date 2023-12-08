# block => denoted with a do..end

i = 0

# loop do
#   i += 1
#   puts "hello #{i}"
  
  if i >= 10
    break
  end

#   break if (i >= 10)
# end

names = ['alice', 'bob', 'carol']
# names.push('dean')
# names.pop()

# JS for..of => Ruby for..in

# for name in names do
#   puts "hello there #{name}"
# end

# names.forEach((name) => {})

names = ['alice', 'bob', 'carol']

names.each do |name|
  puts "hello there #{user}"
end
