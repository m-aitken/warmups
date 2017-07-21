require 'minitest/autorun'
require 'minitest/reporters'

require_relative 'blocks'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)


class BlocksTest < MiniTest::Unit::TestCase

  def can_make_word
  end
  


end
