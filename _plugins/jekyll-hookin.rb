module Jekyll
  # Creates a Liquid pull tag
  #
  #   {% hookin 1 %}
  #
  class Hookin < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end
    def render(context)
      "<span class=\"hookin\">#{@text}</span>"
    end
  end
end

Liquid::Template.register_tag('hookin', Jekyll::Hookin)
