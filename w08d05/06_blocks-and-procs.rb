# block => denoted with a do..end
# Proc(edure) => is a block stored in memory

# names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

# puts

my_block = Proc.new do |name|
  puts "hello there #{name}"
end

# names.each &my_block

# puts

# [1,2,3].each &my_block

# functions/methods can accept blocks
# but they can accept them "invisibly"

my_block = Proc.new do |name|
  puts "hello there #{name}"
end

# def accepting_block &block
#   block.call('dean')
# end

# accepting_block &my_block

# accepting_block do |name|
#   puts "#{name} is not a great name"
# end

my_block = Proc.new do |name|
  puts "hello there #{name}"
end

def accepting_invis_block
  yield('elise') # callback()
end

accepting_invis_block &my_block
