module Jekyll
  # Creates a Liquid pull tag
  #
  #   {% pull %}
  #   Your pull quote here
  #   {% endpull %}
  #
  class PullTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end
    def render(context)
      "<div class=\"pullquote\">"
    end
  end
  class EndPullTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end
    def render(context)
      "</div>"
    end
  end
end

Liquid::Template.register_tag('pullquote', Jekyll::PullTag)
Liquid::Template.register_tag('endpullquote', Jekyll::EndPullTag)
